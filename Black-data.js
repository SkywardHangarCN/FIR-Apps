/**
 * Black-data.js
 * 存储网站黑白模式的日期及对应的通知内容。
 * 每年到达指定日期，网站将自动切换为黑白主题并弹出相应通告。
 */

const BLACKOUT_EVENTS = [
    { 
        month: 3, 
        day: 21, 
        title: "深切悼念东航MU5735航班遇难同胞", 
        subtitle: "愿逝者安息 生者坚强", 
        titleBgUrl: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=2069&auto=format&fit=crop", 
        getContent: (year) => { 
            const anniversary = year - 2022; 
            let anniversaryText = anniversary > 0 ? `${anniversary}周年` : "周年"; 
            if (anniversary === 4) anniversaryText = "四周年"; 
             
            return `今天是${year}年3月21日，东航MU5735航班空难${anniversaryText}祭。\n\n我们怀着无比沉痛的心情，深切悼念在事故中逝去的132位同胞。\n\n愿逝者安息，生者坚强。此刻，网站将切换为黑白主题，寄寄托哀思。\n\n愿每一次飞行都能平安抵达，愿山河无恙，人间皆安。`; 
        }, 
        enableGrayscale: true 
    }, 
    {  
        month: 12,  
        day: 13,    
        title: "国家公祭 永志不忘",  
        subtitle: "铭记历史 珍爱和平",  
        titleBgUrl: "", // 留空测试默认样式 
        getContent: (year) => {  
            const anniversary = year - 1937;  
            const anniversaryText = anniversary > 0 ? `${anniversary}周年` : "周年";  
            return `今天是${year}年12月13日，南京大屠杀死难者国家公祭日。\n\n我们以国家的名义，深切悼念所有在日本帝国主义侵华战争期间惨遭杀戮的死难同胞，缅怀为中国人民抗日战争胜利献出生命的革命先烈和民族英雄。\n\n铭记历史，不是为了延续仇恨，而是要唤起善良的人们对和平的向往和坚守。\n珍爱和平，维护和平，是每一个中国人的责任与使命。\n\n此刻，网站将切换为黑白主题，寄托哀思。\n愿逝者安息，和平永驻。`;  
        },  
        enableGrayscale: true  
    } 
];
