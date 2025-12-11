// js/foods.js
// 干净简化版：每道菜只有 name、ingredients、difficulty
// note 留空或不写（自动不显示）

const foodsData = {
  // 1. 早餐 / 简餐
  breakfast: [
    { name: "粥类", ingredients: "大米, 小米, 南瓜, 紫米", difficulty: 1 },
    { name: "配粥小菜", ingredients: "鸡蛋, 火腿肠, 榨菜, 雪菜, 皮蛋, 虾皮", difficulty: 1 },
    { name: "三豆饮", ingredients: "黄豆, 黑豆, 赤小豆", difficulty: 1 },
    { name: "莲子桂圆红枣汤", ingredients: "莲子, 桂圆, 红枣, 冰糖", difficulty: 2 },
    { name: "百合莲子银耳羹", ingredients: "银耳, 百合, 莲子, 红枣, 冰糖", difficulty: 2 },
    { name: "雪燕窝", ingredients: "雪燕, 冰糖", difficulty: 2 },
    { name: "红薯 / 玉米 / 芋头", ingredients: "红薯, 玉米, 芋头", difficulty: 1 },
    { name: "煎蛋饼", ingredients: "鸡蛋, 面粉, 牛奶, 盐", difficulty: 3 },
    { name: "手抓饼", ingredients: "手抓饼皮, 鸡蛋, 火腿, 生菜", difficulty: 1 },
    { name: "吐司", ingredients: "吐司, 鸡蛋, 火腿, 芝士, Nutella", difficulty: 1 },
    { name: "豆腐脑", ingredients: "内脂豆腐 / 黄豆", difficulty: 2 },
    { name: "包子 / 馒头 / 春卷 / 烧卖", ingredients: "面粉, 酵母, 肉馅或蔬菜", difficulty: 2 },
    { name: "咖啡 / 牛奶 / 豆浆", ingredients: "咖啡豆, 牛奶, 黄豆", difficulty: 1 }
  ],

  // 2. 凉拌 / 熟食类
  cold: [
    { name: "凉拌黄瓜", ingredients: "黄瓜, 大蒜", difficulty: 1 },
    { name: "凉拌海带丝", ingredients: "海带丝, 大蒜, 香菜", difficulty: 1 },
    { name: "凉拌木耳", ingredients: "木耳, 大蒜, 香菜", difficulty: 2 },
    { name: "凉拌豆芽", ingredients: "豆芽, 大蒜", difficulty: 1 },
    { name: "皮蛋豆腐", ingredients: "皮蛋, 嫩豆腐", difficulty: 1 },
    { name: "卤牛肉", ingredients: "牛腱, 香料", difficulty: 3 },
    { name: "白切鸡", ingredients: "鸡, 姜, 葱", difficulty: 3 }
  ],

  // 3. 主食（饭 / 面 / 粉）
  staple: [
    { name: "蛋炒饭", ingredients: "米饭, 鸡蛋, 葱花", difficulty: 1 },
    { name: "泡菜炒饭", ingredients: "米饭, 泡菜, 鸡蛋", difficulty: 2 },
    { name: "紫菜包饭", ingredients: "米饭, 紫菜, 火腿, 黄瓜, 胡萝卜", difficulty: 2 },
    { name: "番茄鸡蛋面", ingredients: "番茄, 鸡蛋, 面条", difficulty: 1 },
    { name: "清汤面", ingredients: "面条, 生抽, 香油", difficulty: 1 },
    { name: "炒粉干", ingredients: "粉干, 蔬菜, 鸡蛋", difficulty: 2 },
    { name: "汤粉干", ingredients: "粉干, 高汤", difficulty: 1 },
    { name: "意面（番茄）", ingredients: "意面, 番茄, 洋葱", difficulty: 2 },
    { name: "意面（海鲜）", ingredients: "意面, 虾, 鱼肉", difficulty: 2 }
  ],

  // 4. 素菜与豆类
  veggieBeans: [
    { name: "清炒西兰花", ingredients: "西兰花, 大蒜", difficulty: 1 },
    { name: "蒜蓉上海青", ingredients: "上海青, 大蒜", difficulty: 1 },
    { name: "清炒芹菜", ingredients: "芹菜", difficulty: 1 },
    { name: "包菜炒粉丝", ingredients: "包菜, 粉丝", difficulty: 1 },
    { name: "红烧豆腐", ingredients: "豆腐, 生抽, 老抽", difficulty: 2 },
    { name: "麻婆豆腐", ingredients: "豆腐, 肉末, 豆瓣酱", difficulty: 2 },
    { name: "烤南瓜", ingredients: "南瓜", difficulty: 1 }
  ],

  // 5. 猪肉类
  pork: [
    { name: "红烧肉", ingredients: "五花肉, 冰糖", difficulty: 3 },
    { name: "糖醋排骨", ingredients: "排骨, 糖, 醋", difficulty: 3 },
    { name: "叉烧肉", ingredients: "猪肉, 叉烧酱", difficulty: 2 },
    { name: "梅干菜扣肉", ingredients: "五花肉, 梅干菜", difficulty: 3 },
    { name: "椒盐排骨", ingredients: "排骨, 花椒粉", difficulty: 2 }
  ],

  // 6. 牛肉类
  beef: [
    { name: "红烧牛肉", ingredients: "牛肉, 生抽, 老抽", difficulty: 3 },
    { name: "咖喱牛肉", ingredients: "牛肉, 咖喱块, 土豆, 胡萝卜", difficulty: 2 },
    { name: "青椒牛肉丝", ingredients: "牛肉, 青椒", difficulty: 2 },
    { name: "煎牛排", ingredients: "牛排, 黄油", difficulty: 2 }
  ],

  // 7. 鸡肉类
  chicken: [
    { name: "奥尔良烤鸡翅", ingredients: "鸡翅, 奥尔良腌料", difficulty: 2 },
    { name: "蒜香烤鸡腿", ingredients: "鸡腿, 大蒜", difficulty: 2 },
    { name: "可乐鸡翅", ingredients: "鸡翅, 可乐", difficulty: 1 },
    { name: "炸鸡", ingredients: "鸡肉, 面粉", difficulty: 2 }
  ],

  // 8. 海鲜类
  seafood: [
    { name: "清蒸鱼", ingredients: "鱼, 姜, 葱", difficulty: 2 },
    { name: "椒盐大虾", ingredients: "大虾, 花椒粉", difficulty: 2 },
    { name: "蒜蓉粉丝扇贝", ingredients: "扇贝, 粉丝, 大蒜", difficulty: 3 },
    { name: "番茄虾", ingredients: "虾, 番茄", difficulty: 2 }
  ],

  // 9. 饮品
  drinks: [
    { name: "柠檬百香果蜂蜜水", ingredients: "柠檬, 百香果, 蜂蜜", difficulty: 1 },
    { name: "家庭版 Spritz", ingredients: "橙味汽水, 冰块", difficulty: 1 },
    { name: "果茶", ingredients: "水果, 茶叶", difficulty: 1 }
  ],

  // 10. 小食 / 零嘴
  snacks: [
    { name: "烤土豆角", ingredients: "土豆, 盐", difficulty: 1 },
    { name: "蜂蜜黄油吐司块", ingredients: "吐司, 蜂蜜, 黄油", difficulty: 1 }
  ],

  // 11. 节日特色
  festival: [
    { name: "南瓜饼", ingredients: "南瓜, 糯米粉", difficulty: 2 },
    { name: "粽子", ingredients: "糯米, 粽叶", difficulty: 3 }
  ]
};

// 自动生成“所有菜品”
foodsData.all = Object.keys(foodsData)
  .filter((key) => key !== "all")
  .flatMap((key) =>
    foodsData[key].map((item) => ({
      ...item,
      _category: key
    }))
  );
