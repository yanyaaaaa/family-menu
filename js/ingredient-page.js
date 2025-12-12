// js/ingredient-page.js
// 按食材搜索：在 foodsData.all 里找 ingredients 包含关键词的菜

document.addEventListener("DOMContentLoaded", () => {
  if (typeof foodsData === "undefined") {
    console.error("foodsData 未定义，请先引入 js/foods.js");
    return;
  }

  const input = document.getElementById("ingredient-input");
  const btn = document.getElementById("ingredient-search-btn");
  const listEl = document.getElementById("ingredient-result-list");
  const noResultEl = document.getElementById("ingredient-no-result");

  // 分类 key → 显示用中文名称（用于小标签）
  const categoryLabels = {
    breakfast: "早餐/简餐",
    cold: "凉拌/熟食",
    staple: "主食",
    veggieBeans: "素菜",
    pork: "猪肉类",
    beef: "牛肉类",
    chicken: "鸡肉类",
    seafood: "海鲜",
    drinks: "饮品",
    snacks: "汤",
    festival: "节日特色"
  };

  // 确保有 all 列表
  const allFoods = foodsData.all || [];

  function renderResults(results) {
    listEl.innerHTML = "";

    if (!results.length) {
      noResultEl.classList.remove("d-none");
      return;
    }

    noResultEl.classList.add("d-none");

    results.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-group-item";

      const topRow = document.createElement("div");
      topRow.className = "d-flex justify-content-between align-items-center";

      const nameEl = document.createElement("div");
      nameEl.textContent = item.name || "";

      const rightEl = document.createElement("div");

      // 分类标签
      if (item._category && categoryLabels[item._category]) {
        const badge = document.createElement("span");
        badge.className = "badge-category";
        badge.textContent = categoryLabels[item._category];
        rightEl.appendChild(badge);
      }

      // 难度星星
      const stars = document.createElement("span");
      stars.style.color = "#ff9a3c";
      stars.style.marginLeft = "8px";
      const diff = typeof item.difficulty === "number"
        ? Math.max(1, Math.min(3, Math.round(item.difficulty)))
        : 1;
      stars.textContent = "⭐".repeat(diff);
      rightEl.appendChild(stars);

      topRow.appendChild(nameEl);
      topRow.appendChild(rightEl);

      li.appendChild(topRow);

      // 显示食材
      if (item.ingredients) {
        const ing = document.createElement("div");
        ing.className = "mt-1";
        ing.style.fontSize = "0.9rem";
        ing.innerHTML = `<strong>食材：</strong>${item.ingredients}`;
        li.appendChild(ing);
      }

      // 备注
      if (item.note) {
        const note = document.createElement("div");
        note.className = "text-muted mt-1";
        note.style.fontSize = "0.85rem";
        note.textContent = item.note;
        li.appendChild(note);
      }

      listEl.appendChild(li);
    });
  }

  function doSearch() {
    const keyword = (input.value || "").trim().toLowerCase();

    if (!keyword) {
      listEl.innerHTML = "";
      noResultEl.classList.add("d-none");
      return;
    }

    const results = allFoods.filter((item) => {
      if (!item.ingredients) return false;
      return item.ingredients.toLowerCase().includes(keyword);
    });

    renderResults(results);
  }

  btn.addEventListener("click", doSearch);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      doSearch();
    }
  });
});
