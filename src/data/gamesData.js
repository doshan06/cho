export const gamesList = [
  {
    id: 1,
    name: '黑神话：悟空',
    nameEn: 'Black Myth: Wukong',
    cover: '/images/wukong.jpg',
    rating: 9.2,
    platform: ['PC', 'PS5'],
    genre: '动作角色扮演',
    developer: '游戏科学',
    releaseDate: '2024-08-20',
    description: '以中国古典名著《西游记》为背景的动作角色扮演游戏，玩家将扮演天命人踏上西行之路。',
    details: {
      summary: `《黑神话：悟空》是由游戏科学开发的一款动作角色扮演游戏，基于中国古典小说《西游记》改编。

游戏采用虚幻引擎5开发，拥有顶级的画面表现和流畅的战斗系统。玩家将扮演一位寻找真相的行者，在充满危险与奇遇的旅途中逐渐揭开自己的身世之谜。

游戏特色：
- 电影级画面表现，还原东方神话世界
- 深度动作战斗系统，多种棍法与法术组合
- 丰富的装备与变身系统
- 大量隐藏Boss与收集要素`,
      tags: ['动作', 'RPG', '神话', '单人'],
      systemRequirements: {
        minimum: 'Windows 10, Intel Core i5-8400, 16GB RAM, GTX 1060 6GB',
        recommended: 'Windows 11, Intel Core i7-9700, 32GB RAM, RTX 2060',
      },
    },
  },
  {
    id: 2,
    name: '艾尔登法环',
    nameEn: 'Elden Ring',
    cover: '/images/elden.jpg',
    rating: 9.6,
    platform: ['PC', 'PS5', 'Xbox'],
    genre: '动作角色扮演',
    developer: 'FromSoftware',
    releaseDate: '2022-02-25',
    description: '宫崎英高与乔治·R·R·马丁联手打造的开放世界魂系动作RPG，探索交界地的秘密。',
    details: {
      summary: `《艾尔登法环》是FromSoftware开发的开放世界动作角色扮演游戏，由宫崎英高与《冰与火之歌》作者乔治·R·R·马丁共同创作世界观。

游戏延续了魂系列的高难度战斗风格，同时加入了广阔的开放世界探索。玩家将追寻艾尔登法环的碎片，成为艾尔登之王。

游戏特色：
- 广阔的开放世界，自由探索
- 丰富的武器、法术与战灰系统
- 多人联机合作与入侵
- 深度的角色build自定义`,
      tags: ['魂系', '开放世界', '高难度', '多人'],
      systemRequirements: {
        minimum: 'Windows 10, Intel Core i5-8400, 12GB RAM, GTX 1060 3GB',
        recommended: 'Windows 11, Intel Core i7-8700K, 16GB RAM, RTX 2070',
      },
    },
  },
  {
    id: 3,
    name: '原神',
    nameEn: 'Genshin Impact',
    cover: '/images/genshin.webp',
    rating: 8.5,
    platform: ['PC', 'PS5', 'Mobile'],
    genre: '开放世界冒险',
    developer: 'miHoYo',
    releaseDate: '2020-09-28',
    description: '米哈游开发的开放世界冒险游戏，探索提瓦特大陆，寻找失散的亲人。',
    details: {
      summary: `《原神》是由米哈游开发的一款开放世界冒险游戏，玩家将扮演旅行者，在名为提瓦特的幻想世界中展开冒险。

游戏采用免费游玩+抽卡付费模式，定期更新新区域、角色和活动内容。目前已开放蒙德、璃月、稻妻、须弥、枫丹等多个国家。

游戏特色：
- 精美的二次元美术风格
- 元素反应战斗系统
- 丰富的角色收集与养成
- 持续更新的剧情与活动`,
      tags: ['开放世界', '二次元', '抽卡', '多人'],
      systemRequirements: {
        minimum: 'Windows 7, Intel Core i5, 8GB RAM, GT 1030',
        recommended: 'Windows 10, Intel Core i7, 16GB RAM, GTX 1060',
      },
    },
  },
  {
    id: 4,
    name: '博德之门3',
    nameEn: "Baldur's Gate 3",
    cover: '/images/baldur.jpg',
    rating: 9.8,
    platform: ['PC', 'PS5', 'Xbox'],
    genre: '角色扮演',
    developer: 'Larian Studios',
    releaseDate: '2023-08-03',
    description: '拉瑞安工作室打造的D&D 5e规则CRPG，拥有极高的自由度与叙事深度。',
    details: {
      summary: `《博德之门3》是拉瑞安工作室开发的基于龙与地下城第五版规则的角色扮演游戏，是博德之门系列的正统续作。

游戏以被夺心魔寄生为开端，玩家需要在被完全转化前找到治愈方法。游戏拥有极高的叙事自由度和角色扮演深度。

游戏特色：
- 基于D&D 5e规则的深度RPG系统
- 极高的剧情分支与选择自由度
- 回合制战术战斗
- 支持4人联机合作`,
      tags: ['CRPG', '回合制', '剧情丰富', '合作'],
      systemRequirements: {
        minimum: 'Windows 10, Intel Core i5-4690, 8GB RAM, GTX 970',
        recommended: 'Windows 10, Intel Core i7-8700K, 16GB RAM, RTX 2060 Super',
      },
    },
  },
  {
    id: 5,
    name: '塞尔达传说：王国之泪',
    nameEn: 'The Legend of Zelda: Tears of the Kingdom',
    cover: '/images/zelda.jpg',
    rating: 9.7,
    platform: ['Nintendo Switch'],
    genre: '动作冒险',
    developer: '任天堂',
    releaseDate: '2023-05-12',
    description: '任天堂Switch独占大作，林克在海拉鲁大陆与天空岛屿展开全新冒险。',
    details: {
      summary: `《塞尔达传说：王国之泪》是任天堂开发的开放世界动作冒险游戏，是《旷野之息》的续作。

游戏在前作基础上新增了天空岛屿和地下世界，林克获得了究极手、余料建造、倒转乾坤和通天术四大新能力，极大地拓展了玩法可能性。

游戏特色：
- 究极手与余料建造的无限创意
- 广阔的海拉鲁大陆、天空与地下三层世界
- 丰富的神庙解谜与支线任务
- 深度的物理与化学引擎互动`,
      tags: ['开放世界', '解谜', '动作', '单人'],
      systemRequirements: {
        minimum: 'Nintendo Switch',
        recommended: 'Nintendo Switch OLED',
      },
    },
  },
  {
    id: 6,
    name: '赛博朋克2077',
    nameEn: 'Cyberpunk 2077',
    cover: '/images/cyberpunk.jpg',
    rating: 8.8,
    platform: ['PC', 'PS5', 'Xbox'],
    genre: '开放世界RPG',
    developer: 'CD Projekt Red',
    releaseDate: '2020-12-10',
    description: 'CD Projekt Red打造的开放世界科幻RPG，探索夜之城的黑暗未来。',
    details: {
      summary: `《赛博朋克2077》是CD Projekt Red开发的开放世界动作角色扮演游戏，设定在反乌托邦的未来都市夜之城。

玩家扮演雇佣兵V，在充满义体改造、企业阴谋和街头暴力的世界中求生。2023年推出的资料片「往日之影」进一步丰富了游戏内容。

游戏特色：
- 沉浸式的赛博朋克世界观
- 丰富的角色自定义与义体系统
- 多线剧情与多重结局
- 第一人称射击与黑客玩法结合`,
      tags: ['科幻', '开放世界', '剧情', 'FPS'],
      systemRequirements: {
        minimum: 'Windows 10, Intel Core i5-3570K, 8GB RAM, GTX 970',
        recommended: 'Windows 10, Intel Core i7-4790, 12GB RAM, RTX 2060',
      },
    },
  },
]

export const platformFilters = ['全部', 'PC', 'PS5', 'Xbox', 'Nintendo Switch', 'Mobile']
export const genreFilters = ['全部', '动作角色扮演', '开放世界冒险', '角色扮演', '动作冒险', '开放世界RPG']
