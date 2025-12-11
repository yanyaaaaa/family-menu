// js/category-page.js
// 通用分类页面逻辑：搜索 + 随机推荐 + 难度星星 + 显示食材

document.addEventListener("DOMContentLoaded", () => {
  // ===== 0. 安全检查：foodsData 必须存在 =====
  if (typeof foodsData === "undefined") {
    console.error("foodsData 未定义，请先在页面中引入 js/foods.js");
    return;
  }
  if (typeof CATEGORY_KEY === "undefined") {
    console.error("CATEGORY_KEY 未定义，请在页面中设置 const CATEGORY_KEY = 'xxx';");
    return;
  }

  // 获取页面上的元素
  const titleEl = document.getElementById("category-title");
  const subtitleEl = document.getElementById("category-subtitle");
  const listEl = document.getElementById("food-list");
  const noResultEl = document.getElementById("no-result");
  const searchInput = document.getElementById("search-input");
  const randomBtn = document.getElementById("random-btn");
  const randomResultEl = document.getElementById("random-result");

  // ===== 1. 设置标题和副标题 =====
  if (titleEl && typeof CATEGORY_TITLE === "string") {
    titleEl.textContent = CATEGORY_TITLE;
  }
  if (subtitleEl) {
    if (typeof CATEGORY_SUBTITLE === "string") {
      subtitleEl.textContent = CATEGORY_SUBTITLE;
    } else {
      subtitleEl.textContent = "可以通过名称搜索，或让系统帮你随机推荐一道菜。";
    }
  }

  // ===== 2. 根据 CATEGORY_KEY 取出基础菜品列表 =====
  let baseList;
  if (CATEGORY_KEY === "all") {
    baseList = foodsData.all || [];
  } else {
    baseList = foodsData[CATEGORY_KEY] || [];
  }

  // 当前显示的列表（受搜索影响）
  let currentList = [...baseList];

  // ===== 3. 生成难度星星字符串（1–3 星） =====
  function renderStars(item) {
    let starCount = 1;
    if (typeof item.difficulty === "number") {
      starCount = Math.max(1, Math.min(3, Math.round(item.difficulty)));
    }
    return "⭐".repeat(starCount);
  }

  // ===== 4. 渲染整个列表 =====
  function renderList(list) {
    listEl.innerHTML = "";

    if (!list || list.length === 0) {
      if (noResultEl) noResultEl.classList.remove("d-none");
      return;
    }

    if (noResultEl) noResultEl.classList.add("d-none");

    list.forEach((item) => {
      const li = document.createElement("li");
      li.className = "list-group-item";

      // 第一行：菜名 + 星星
      const row = document.createElement("div");
      row.className = "d-flex justify-content-between align-items-center";

      const nameEl = document.createElement("div");
      nameEl.textContent = item.name || "";
      nameEl.style.fontWeight = "600";

      const starsEl = document.createElement("div");
      starsEl.style.color = "#ff9a3c";
      starsEl.style.fontSize = "1rem";
      starsEl.textContent = renderStars(item);

      row.appendChild(nameEl);
      row.appendChild(starsEl);
      li.appendChild(row);

      // 第二行：食材（像之前的 note 一样显示在下面一行）
      if (item.ingredients) {
        const ingEl = document.createElement("div");
        ingEl.className = "mt-1";
        ingEl.style.fontSize = "0.9rem";
        ingEl.innerHTML = `<strong>食材：</strong>${item.ingredients}`;
        li.appendChild(ingEl);
      }

      // 如果以后你想恢复 note，在这里再加一行就行
      // if (item.note) { ... }

      listEl.appendChild(li);
    });
  }

  // ===== 5. 根据搜索框过滤（按名字 + 食材一起搜） =====
  function applyFilter() {
    const keyword = (searchInput.value || "").trim().toLowerCase();

    currentList = baseList.filter((item) => {
      if (!keyword) return true;
      const haystack =
        ((item.name || "") + (item.ingredients || "")).toLowerCase();
      return haystack.includes(keyword);
    });

    renderList(currentList);
  }

  // ===== 6. 随机推荐一道菜 =====
  function randomPick() {
    if (!currentList || currentList.length === 0) {
      if (randomResultEl) {
        randomResultEl.className = "d-block alert alert-warning mb-3";
        randomResultEl.textContent = "当前条件下没有菜品，请尝试清空搜索。";
      }
      return;
    }

    const idx = Math.floor(Math.random() * currentList.length);
    const picked = currentList[idx];

    if (randomResultEl) {
      const stars = renderStars(picked);
      randomResultEl.className = "d-block alert alert-warning mb-3";
      randomResultEl.innerHTML =
        `随机推荐：<strong>${picked.name}</strong>` +
        ` &nbsp; 难度：<span style="color:#ff9a3c;">${stars}</span>`;
    }
  }

  // ===== 7. 事件绑定 =====
  if (searchInput) {
    searchInput.addEventListener("input", applyFilter);
  }
  if (randomBtn) {
    randomBtn.addEventListener("click", randomPick);
  }

  // ===== 8. 初始渲染 =====
  renderList(currentList);
});
