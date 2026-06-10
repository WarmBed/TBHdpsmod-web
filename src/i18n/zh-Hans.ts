import type { Dict } from './types';

const zhHans: Dict = {
  meta: {
    homeTitle: 'TBH DPS Meter — 塔斯克巴·英雄 / TaskBarHero DPS 伤害叠图',
    homeDesc: '免费开源的 TaskBarHero（塔斯克巴·英雄 / Task Bar Hero / TBH）游戏内叠图：实时 DPS、承受伤害、关卡逐波比较、刷图规划、宝箱记录、掉宝热力图与 Steam 市场查价。只读数据，绝不修改游戏数值。',
    installTitle: 'TaskBarHero 安装教程 — TBH DPS Meter 伤害叠图',
    installDesc: '三步骤安装 TaskBarHero（Task Bar Hero）的 TBH DPS Meter 叠图（BepInEx 插件），免编译。',
    changelogTitle: '更新日志 — TBH DPS Meter（TaskBarHero）',
    changelogDesc: 'TBH DPS Meter（TaskBarHero / 塔斯克巴·英雄 叠图）的版本更新与发布记录。',
    keywords: '塔斯克巴·英雄, 塔斯克巴英雄, TaskBarHero, Task Bar Hero, TBH, 塔斯克巴·英雄 DPS, 塔斯克巴·英雄 插件, 塔斯克巴·英雄 伤害, TaskBarHero DPS, TaskBarHero mod, DPS 计算, 伤害统计, 伤害量表, 刷图规划, 宝箱记录, 掉宝热力图, Steam 市场查价, BepInEx 插件',
  },
  nav: { features: '功能', install: '安装', faq: '常见问题', download: '下载' },
  hero: {
    eyebrow: '为 TaskBarHero 打造 · BepInEx 叠图',
    titleA: '看懂你的',
    titleHighlight: '每一次输出',
    lede: '实时 DPS、承受伤害、关卡逐波比较、个性化刷图规划 —— 全部在游戏内叠图完成。开源、只读数据，绝不改动任何游戏数值。',
    ctaDownload: '免费下载最新版',
    ctaGithub: '在 GitHub 查看源代码',
    trust: { mit: 'MIT 开源', readonly: '只读 · 不改数值', langs: '5 种语言', tested: '已测 v1.00.09' },
  },
  stats: { damageTypes: '伤害类型', panels: '分析面板', languages: '界面语言', openSource: '开源 · 只读' },
  featuresKicker: '功能',
  featuresTitle: '不只是个数字，是一套战斗仪表盘',
  featuresSub: '九个面板各司其职。按一个键就叠在游戏上，点击穿透、不挡操作。',
  features: [
    {
      tag: 'F1 · 总控',
      title: '中控台',
      body: '一个常驻的小小控制中心：实时 DPS、本场时长、开箱数一眼掌握，再用一排按钮开关其余所有面板。整套叠图的入口。',
      points: ['实时 DPS、本场时长、宝箱数常驻显示', '一排快捷钮开关每一个面板', '可从任意处拖曳，摆到顺手的位置'],
    },
    {
      tag: 'F9 · 实时',
      title: 'DPS 面板',
      body: '5 秒滑动窗口的实时 DPS，加上峰值与平均。一眼看穿你的输出结构，知道下一件装备该补什么。',
      points: ['实时 / 峰值 / 平均 DPS', '暴击率与暴伤占比', '近战／投射／范围／召唤／DoT／陷阱 六类拆解', '自动缩放 + UI 缩放，永不超出屏幕（v0.6.0）'],
    },
    {
      tag: 'F10 · 防御',
      title: '承受伤害面板',
      body: '不是只看你打多痛，也看你被打多痛。找出致命的那一击从哪来，调整你的抗性与站位。',
      points: ['DTPS、最大单击、被击中次数', '敌方对你的暴击率', '物理／火／冰／雷／混沌 属性分布'],
    },
    {
      tag: 'F11 · 比较',
      title: '关卡逐波比较',
      body: '把这次通关和你的最佳记录并排，连装备与技能的差异都标出来。配速图告诉你哪一波拖了后腿。',
      points: ['逐波时间、有效输出 vs 待机时间', '完整角色装备与技能对照', '通关时间趋势图，点任一点回看'],
    },
    {
      tag: 'F6 · 规划',
      title: '个性化刷图规划',
      body: '不是抄 wiki 的死表格 —— 用你自己的真实战绩校准。gold/秒 与 exp/秒 并排排名，直接告诉你该刷哪一关。',
      points: ['已通关用实测值，未通关用个人倍率推估', 'EXP 保留率栏位反映等级惩罚', '装备一换自动检测，提示重新校准'],
    },
    {
      tag: 'F5 · 记录',
      title: '宝箱记录',
      body: '记录你开的每一个宝箱——总数、王箱数、每小时箱数，按关卡逐条标上时间。掌握你真实的爆箱率，不用猜。',
      points: ['总数与王箱数', '每小时箱数', '按关卡的时间戳记录'],
    },
    {
      tag: 'F7 · 开箱',
      title: '开箱品质统计',
      body: '把你开出的宝箱按品质 × 来源拆成矩阵——普通到超越各占多少、普通箱与王箱各贡献多少，再附上逐条开箱明细。',
      points: ['品质 × 箱种 矩阵（数量＋百分比）', '普通／非凡／稀有／传说／超越 分布', '逐条明细：时间、箱种、品质、物品'],
    },
    {
      tag: 'F3 · 热力图',
      title: '掉宝热力图',
      body: '把你的爆箱与掉宝摊平成 日 × 24 小时 的热力图，看出哪个时段最旺；下方再叠一条通关秒数趋势，跟着 F11 选定的关卡走。',
      points: ['宝箱获取 × 掉宝率 两张 日×时 热力图', '逐格悬停，看当下开了什么', '通关秒数趋势图，跟随 F11 选定关卡'],
    },
    {
      tag: 'F4 · 查价',
      title: 'Steam 市场查价',
      body: '把鼠标移到任何物品上 —— 背包、奖励弹窗、任何有 tooltip 的地方 —— 就显示它的 Steam 社区市场价格：24h 波动、中位、在售、24h 成交量，还有一张 7 天价格曲线。右键把价格框钉选在物品上，再划过曲线就能读每一天。',
      points: ['实时 Steam 价、24h 波动、中位与 24h 成交量', '7 天价格曲线 —— 划过任一点看那一天', '右键物品钉选；F4 移动价格框位置'],
    },
  ],
  install: {
    kicker: '安装',
    title: '三步骤，三分钟',
    sub: '无需编译、无需配置。解压、放入文件夹、从 Steam 启动。',
    steps: [
      { title: '下载 zip', body: '从 Releases 获取最新的 TBH-DpsMeter.zip，免编译。' },
      { title: '解压到游戏目录', body: '全部解压到 TaskBarHero.exe 旁边，需要时选覆盖。' },
      { title: '从 Steam 启动', body: '务必通过 Steam 启动游戏，叠图会自动加载。' },
    ],
    full: '查看完整安装教程 →',
  },
  installPage: {
    lead: '安装 TaskBarHero 的 TBH DPS Meter 叠图。免编译 —— 下载、解压、从 Steam 启动即可。',
    firstTime: {
      title: '首次安装（尚未安装 BepInEx）',
      steps: [
        '从 Releases 页面下载 TBH-DpsMeter-vX.Y.Z.zip。',
        '在 Steam 对「TBH: Task Bar Hero」右键 → 管理 → 浏览本地文件（应该看到 TaskBarHero.exe）。',
        '把 zip 内所有文件解压到该文件夹，让 winhttp.dll、doorstop_config.ini、dotnet 与 BepInEx 与 TaskBarHero.exe 并排（询问时选「是」覆盖）。',
        '通过 Steam 启动 —— 直接运行 exe 不会加载插件。',
        '首次启动会黑屏 1–3 分钟（一次性设置），之后就正常了。',
      ],
    },
    update: {
      title: '更新插件（之前已安装过）',
      body: '更新只需要单个 DLL —— BepInEx 本体不用动。先完全关闭游戏（运行中 DLL 会被锁定），把新的 TBH.DpsMeter.dll 覆盖到 <游戏目录>\\BepInEx\\plugins\\，再通过 Steam 重新启动。面板内也有更新通知与一键下载。',
    },
    blackScreen: {
      title: '首次启动黑屏正常吗？',
      body: '正常。首次启动会进行一次性的 1–3 分钟设置，之后启动就正常了。',
    },
    uninstall: {
      title: '卸载',
      body: '从游戏目录删除 winhttp.dll、doorstop_config.ini、.doorstop_version、dotnet\\ 文件夹与 BepInEx\\ 文件夹，即可完全还原原版游戏。',
    },
    backHome: '← 返回首页',
  },
  faq: {
    kicker: '常见问题',
    title: '你大概想问的',
    items: [
      { q: '会被封号吗？', a: '本工具通过 BepInEx 注入，只读取伤害数据、不修改任何游戏数值，且游戏为单机。不过任何第三方 mod 或注入工具都可能违反游戏或平台（如 Steam）的服务条款，请自行评估风险。' },
      { q: '怎么更新？', a: '只需把单个 TBH.DpsMeter.dll 覆盖到 plugins 文件夹即可 —— BepInEx 本体不用动。面板内也有更新通知与一键下载。' },
      { q: '第一次启动黑屏正常吗？', a: '正常。首次启动会进行一次性的 1–3 分钟设置，之后一切正常。' },
      { q: '支持哪些游戏版本？', a: '已于 v1.00.09（Unity 6 / IL2CPP）测试。游戏大版本更新后会尽快跟进修复。' },
    ],
  },
  finalCta: { title: '准备好看清你的输出了吗？', sub: '免费、开源、三分钟安装。' },
  footer: {
    license: 'MIT 许可证',
    disclaimer: '免责声明',
    disclaimerLong: '本工具仅读取数据、不修改游戏数值。使用本软件之风险由您自行承担。© 2026 WarmBed',
  },
  changelog: {
    title: '更新日志',
    intro: '每一个 TBH DPS Meter 版本，直接取自 GitHub。',
    fallback: '目前无法加载发布信息 —— 请至 GitHub 查看。',
  },
};

export default zhHans;
