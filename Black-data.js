/**
 * Black-data.js
 * 存储网站黑白模式的日期及对应的通知内容。
 * 每年到达指定日期，网站将自动切换为黑白主题并弹出相应通告。
 */

const BLACKOUT_EVENTS = [
    {
        month: 3, // 月份 (1-12)
        day: 21,  // 日期 (1-31)
        title: "沉痛悼念
            3·21空难遇难同胞",
        // 使用函数以支持动态年份计算
        getContent: (year) => {
            const anniversary = year - 2022;
            const anniversaryText = anniversary > 0 ? `${anniversary}周年祭` : "周年祭";
            return `今天是${year}年3月21日，东航MU5735航班空难${anniversaryText}。

我们怀着无比沉痛的心情，深切悼念在事故中逝去的132位同胞。

愿逝者安息，生者坚强。此刻，网站将切换为黑白主题，寄托哀思。

愿每一次飞行都能平安抵达，愿山河无恙，人间皆安。`;
        },
        enableGrayscale: true // 是否开启黑白滤镜
    }
    // 您可以在此处添加更多日期
];
