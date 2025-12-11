// js/foods.js
// 根据「家庭食谱合集」整理的菜品数据

const foodsData = {
  // 1. 早餐 / 简餐
  breakfast: [
    { name: "粥类", ingredients: "白米, 小米, 南瓜, 苹果, 紫米", difficulty: 1 },
    { name: "配粥小菜", ingredients: "煎蛋, 火腿肠, 榨菜, 雪菜, 咸蛋, 皮蛋, 虾皮", difficulty: 1 },
    { name: "三豆饮", ingredients: "黄豆, 黑豆, 赤小豆", difficulty: 1 },
    { name: "莲子桂圆红枣汤", ingredients: "莲子, 桂圆, 红枣, 冰糖", difficulty: 2 },
    { name: "百合莲子银耳羹", ingredients: "百合, 莲子, 银耳, 红枣, 冰糖", difficulty: 2 },
    { name: "雪燕窝", ingredients: "雪燕, 冰糖", difficulty: 2 },
    { name: "红薯 / 玉米 / 芋头", ingredients: "红薯, 玉米, 芋头", difficulty: 1 },
    { name: "煎蛋饼", ingredients: "鸡蛋, 面粉, 牛奶, 盐", difficulty: 2 },
    { name: "手抓饼", ingredients: "手抓饼皮, 鸡蛋, 火腿, 生菜", difficulty: 1 },
    { name: "吐司", ingredients: "吐司, Nutella, 鸡蛋, 火腿, 芝士", difficulty: 1 },
    { name: "豆腐脑", ingredients: "黄豆, 内脂豆腐", difficulty: 2 },
    { name: "包子 / 馒头 / 春卷 / 烧卖", ingredients: "面粉, 酵母, 肉馅, 蔬菜", difficulty: 2 },
    { name: "咖啡 / 牛奶 / 豆浆", ingredients: "咖啡, 牛奶, 黄豆", difficulty: 1 }
  ],

  // 2. 凉拌菜 / 熟食类
  cold: [
    { name: "凉拌拼盘", ingredients: "黄瓜, 花生, 芹菜, 红萝卜, 豆芽, 海带丝, 腐竹, 八爪鱼", difficulty: 1 },
    { name: "卤牛肉", ingredients: "牛腱, 卤汁, 香料", difficulty: 3 },
    { name: "鱼饼", ingredients: "鱼肉糜, 淀粉", difficulty: 2 },
    { name: "卤猪蹄", ingredients: "猪蹄, 卤汁, 香料", difficulty: 3 },
    { name: "无骨凤爪", ingredients: "鸡爪, 辣椒, 醋, 蒜", difficulty: 3 },
    { name: "百香果虾仁", ingredients: "虾仁, 百香果, 柠檬", difficulty: 2 },
    { name: "糖拌番茄", ingredients: "番茄, 糖", difficulty: 1 },
    { name: "凉拌香菜虾皮", ingredients: "香菜, 虾皮, 大蒜", difficulty: 1 },
    { name: "腌萝卜", ingredients: "萝卜, 盐, 糖, 醋", difficulty: 2 },
    { name: "拌沙拉菜", ingredients: "生菜, 沙拉菜, 沙拉酱", difficulty: 1 },
    { name: "白切肉", ingredients: "猪肉, 姜, 葱", difficulty: 2 },
    { name: "泰式木瓜沙拉", ingredients: "青木瓜, 花生, 番茄, 柠檬, 鱼露", difficulty: 3 }
  ],

  // 3. 主食（饭 / 面 / 粉）
  staple: [
    { name: "蛋炒饭", ingredients: "米饭, 鸡蛋, 葱花", difficulty: 1 },
    { name: "泡菜炒饭", ingredients: "米饭, 泡菜, 鸡蛋", difficulty: 2 },
    { name: "汤泡饭", ingredients: "米饭, 汤, 配菜", difficulty: 1 },
    { name: "紫菜包饭", ingredients: "米饭, 紫菜, 火腿, 黄瓜, 胡萝卜, 鸡蛋", difficulty: 2 },
    { name: "盖浇饭", ingredients: "米饭, 各类浇头", difficulty: 2 },
    { name: "排骨汤面", ingredients: "排骨, 面条, 高汤", difficulty: 2 },
    { name: "牛肉面", ingredients: "牛肉, 面条, 高汤", difficulty: 2 },
    { name: "土豆野菜面", ingredients: "面条, 土豆, 野菜", difficulty: 2 },
    { name: "三粉鸡蛋面", ingredients: "面条, 粉丝, 粉干, 鸡蛋", difficulty: 2 },
    { name: "炸酱面", ingredients: "面条, 肉酱, 黄瓜丝", difficulty: 2 },
    { name: "乌冬面", ingredients: "乌冬面, 高汤, 配菜", difficulty: 1 },
    { name: "温州拌面", ingredients: "面条, 酱油, 配菜", difficulty: 2 },
    { name: "麻酱拌面", ingredients: "面条, 芝麻酱, 黄瓜丝", difficulty: 1 },
    { name: "韩式拌面", ingredients: "面条, 韩式辣酱, 蔬菜", difficulty: 2 },
    { name: "番茄炒蛋拌面", ingredients: "面条, 番茄, 鸡蛋", difficulty: 1 },
    { name: "排骨手工拉面", ingredients: "排骨, 面粉, 手工面团", difficulty: 3 },
    { name: "牛肉手工拉面", ingredients: "牛肉, 面粉, 手工面团", difficulty: 3 },
    { name: "海鲜手工拉面", ingredients: "海鲜, 面粉, 手工面团", difficulty: 3 },
    { name: "炒粉干", ingredients: "粉干, 蔬菜, 鸡蛋", difficulty: 2 },
    { name: "汤粉干", ingredients: "粉干, 高汤", difficulty: 1 },
    { name: "汤粗粉干", ingredients: "粗粉干, 高汤", difficulty: 1 },
    { name: "番茄意面", ingredients: "意面, 番茄, 洋葱", difficulty: 2 },
    { name: "海鲜意面", ingredients: "意面, 虾, 鱼肉, 蛤蜊", difficulty: 2 },
    { name: "韩式奶油意面", ingredients: "意面, 奶油, 韩式辣酱, 培根/虾", difficulty: 3 }
  ],

  // 4. 素菜类 / 豆类
  veggieBeans: [
    { name: "清炒青菜", ingredients: "小白菜, 大白菜, 空心菜, 芹菜, 包菜, 生菜, 花菜, 莴笋, 西兰花", difficulty: 1 },
    { name: "红烧茄子", ingredients: "茄子, 生抽, 老抽, 糖", difficulty: 2 },
    { name: "肉末茄子", ingredients: "茄子, 肉末, 生抽", difficulty: 2 },
    { name: "肉末芋头", ingredients: "芋头, 肉末", difficulty: 2 },
    { name: "炒鸡蛋", ingredients: "鸡蛋", difficulty: 1 },
    { name: "番茄炒蛋", ingredients: "番茄, 鸡蛋", difficulty: 1 },
    { name: "黄瓜炒蛋", ingredients: "黄瓜, 鸡蛋", difficulty: 1 },
    { name: "洋葱炒蛋", ingredients: "洋葱, 鸡蛋", difficulty: 1 },
    { name: "韭菜鸡蛋", ingredients: "韭菜, 鸡蛋", difficulty: 1 },
    { name: "炖萝卜", ingredients: "萝卜, 排骨/肉骨", difficulty: 2 },
    { name: "酸菜炒笋", ingredients: "酸菜, 笋", difficulty: 2 },
    { name: "蒜香烤贝贝南瓜", ingredients: "贝贝南瓜, 大蒜, 橄榄油", difficulty: 2 },
    { name: "稀有蔬菜", ingredients: "南瓜叶, 蒜苔, 莲藕", difficulty: 1 },
    { name: "清炒豆类", ingredients: "四季豆, 豆芽, 长豆, 荷兰豆, 青豆", difficulty: 1 },
    { name: "炒豆芽", ingredients: "豆芽, 大蒜", difficulty: 1 },
    { name: "红烧豆腐", ingredients: "豆腐, 生抽, 老抽", difficulty: 2 },
    { name: "茄汁豆腐", ingredients: "豆腐, 番茄酱", difficulty: 2 },
    { name: "麻酱烤豆腐", ingredients: "豆腐, 芝麻酱", difficulty: 2 },
    { name: "麻婆豆腐", ingredients: "豆腐, 肉末, 豆瓣酱", difficulty: 2 },
    { name: "日本豆腐", ingredients: "日本豆腐, 配菜", difficulty: 2 },
    { name: "豆腐干", ingredients: "豆腐干", difficulty: 1 },
    { name: "豆腐丸子", ingredients: "豆腐, 肉末/蔬菜, 淀粉", difficulty: 2 }
  ],

  // 5. 猪肉类
  pork: [
    { name: "水煮肉片", ingredients: "猪肉片, 辣椒, 花椒, 豆芽/白菜", difficulty: 3 },
    { name: "煎猪排", ingredients: "猪排, 黑胡椒, 盐", difficulty: 2 },
    { name: "香肠热狗", ingredients: "香肠, 热狗肠, 面包", difficulty: 1 },
    { name: "煎香肠（Salsiccia）", ingredients: "Salsiccia 香肠", difficulty: 1 },
    { name: "红烧肉 / 排骨", ingredients: "五花肉, 排骨, 生抽, 老抽, 糖", difficulty: 3 },
    { name: "糖醋肉 / 排骨", ingredients: "猪肉, 排骨, 糖, 醋", difficulty: 3 },
    { name: "叉烧肉 / 排骨", ingredients: "猪肉, 排骨, 叉烧酱", difficulty: 2 },
    { name: "蜜汁排骨", ingredients: "排骨, 蜂蜜, 酱油", difficulty: 2 },
    { name: "椒盐排骨", ingredients: "排骨, 花椒盐", difficulty: 2 },
    { name: "蒜香排骨", ingredients: "排骨, 大蒜", difficulty: 2 },
    { name: "梅干菜扣肉", ingredients: "五花肉, 梅干菜", difficulty: 3 },
    { name: "梅干菜肉丸", ingredients: "肉末, 梅干菜", difficulty: 2 },
    { name: "纯肉丸", ingredients: "猪肉末", difficulty: 2 },
    { name: "瘦肉丸", ingredients: "瘦肉末", difficulty: 2 },
    { name: "腊肉 / 腊肠", ingredients: "腊肉, 腊肠", difficulty: 2 }
  ],

  // 6. 鸡肉类
  chicken: [
    { name: "煎鸡排", ingredients: "鸡胸肉, 黑胡椒, 盐", difficulty: 2 },
    { name: "奥尔良烤鸡翅 / 腿", ingredients: "鸡翅, 鸡腿, 奥尔良腌料", difficulty: 2 },
    { name: "蒜香烤鸡翅 / 腿", ingredients: "鸡翅, 鸡腿, 大蒜", difficulty: 2 },
    { name: "红烧鸡翅", ingredients: "鸡翅, 生抽, 老抽, 糖", difficulty: 2 },
    { name: "炸鸡", ingredients: "鸡块, 面粉/淀粉, 鸡蛋", difficulty: 2 }
  ],

  // 7. 牛肉类
  beef: [
    { name: "煎牛排", ingredients: "牛排, 黄油, 黑胡椒, 盐", difficulty: 2 },
    { name: "咖喱牛肉", ingredients: "牛肉, 咖喱块, 土豆, 胡萝卜, 洋葱", difficulty: 2 },
    { name: "红烧牛肉", ingredients: "牛肉, 生抽, 老抽, 香料", difficulty: 3 },
    { name: "番茄牛肉", ingredients: "牛肉, 番茄", difficulty: 2 },
    { name: "青椒牛肉", ingredients: "牛肉, 青椒", difficulty: 2 },
    { name: "韩式辣炒牛肉", ingredients: "牛肉, 韩式辣酱, 洋葱", difficulty: 2 }
  ],

  // 8. 海鲜类
  seafood: [
    { name: "清蒸鱼", ingredients: "整鱼, 姜, 葱, 酱油", difficulty: 2 },
    { name: "红烧鱼", ingredients: "鱼, 生抽, 老抽, 糖", difficulty: 2 },
    { name: "叉烧风味鱼", ingredients: "鱼, 叉烧酱", difficulty: 2 },
    { name: "酸菜鱼", ingredients: "鱼片, 酸菜, 辣椒, 花椒", difficulty: 3 },
    { name: "酒糟鱼", ingredients: "鱼, 酒糟", difficulty: 2 },
    { name: "芹菜鱿鱼", ingredients: "鱿鱼, 芹菜", difficulty: 2 },
    { name: "鱼丸汤", ingredients: "鱼丸, 高汤", difficulty: 1 },
    { name: "红烧虾", ingredients: "虾, 生抽, 老抽, 糖", difficulty: 2 },
    { name: "水煮虾", ingredients: "虾, 盐", difficulty: 1 },
    { name: "番茄虾", ingredients: "虾, 番茄", difficulty: 2 },
    { name: "韩式辣酱虾", ingredients: "虾, 韩式辣酱", difficulty: 2 },
    { name: "避风塘虾", ingredients: "虾, 蒜蓉, 面包糠", difficulty: 3 },
    { name: "蒜香煎虾", ingredients: "虾, 大蒜, 黄油/油", difficulty: 2 }
  ],

  // 9. 汤类 / 火锅
  snacks: [
    { name: "西红柿蛋汤", ingredients: "番茄, 鸡蛋", difficulty: 1 },
    { name: "榨菜虾皮紫菜汤", ingredients: "榨菜, 虾皮, 紫菜", difficulty: 1 },
    { name: "大酱汤", ingredients: "大酱, 豆腐, 蔬菜", difficulty: 2 },
    { name: "泡菜汤", ingredients: "泡菜, 五花肉/金针菇等", difficulty: 2 },
    { name: "排骨汤", ingredients: "排骨, 白萝卜/玉米", difficulty: 2 },
    { name: "冬阴功汤", ingredients: "虾, 柠檬草, 椰浆, 香茅", difficulty: 3 },
    { name: "火锅锅底", ingredients: "排骨, 黄鸡, 鲫鱼, 番茄, 麻辣底料, 清汤", difficulty: 3 },
    { name: "火锅食材拼盘", ingredients: "青菜, 金针菇, 肉卷, 豆腐类, 菌类, 丸子类", difficulty: 1 }
  ],

  // 10. 饮品
  drinks: [
    { name: "柠檬百香果蜂蜜水", ingredients: "柠檬, 百香果, 蜂蜜, 水", difficulty: 1 },
    { name: "家庭版 Spritz", ingredients: "橙味汽水, 冰块, 橙片", difficulty: 1 },
    { name: "果味啤 8+1", ingredients: "啤酒, 果味饮料", difficulty: 1 },
    { name: "可乐 / 雪碧 / 芬达 / 果茶 / 红牛", ingredients: "碳酸饮料, 果茶, 功能饮料", difficulty: 1 }
  ],

  // 11. 小食 / 零嘴（暂时为空，之后可以补）
  snacks: [
    // 以后可以在这里加：薯条、烤面包块、小饼干等
  ],

  // 12. 节日特色
  festival: [
    { name: "月饼", ingredients: "月饼皮, 莲蓉/豆沙/蛋黄等馅料", difficulty: 3 },
    { name: "粽子", ingredients: "糯米, 粽叶, 肉/蛋黄/红枣", difficulty: 3 },
    { name: "青团 / 清明果", ingredients: "糯米粉, 艾草/青草汁, 豆沙馅", difficulty: 3 },
    { name: "南瓜饼", ingredients: "南瓜, 糯米粉, 糖", difficulty: 2 },
    { name: "跑蹄", ingredients: "猪蹄, 调味料", difficulty: 3 }
  ]
};

// 自动生成“所有菜品”列表（给 category-all 和食材搜索用）
foodsData.all = Object.keys(foodsData)
  .filter((key) => key !== "all")
  .flatMap((key) =>
    foodsData[key].map((item) => ({
      ...item,
      _category: key
    }))
  );
