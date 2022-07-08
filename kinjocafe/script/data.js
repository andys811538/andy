var cart = [{
    number:0,
    dish:"",
    option:"",
    price:0
}]


var choice = {
    "肉類": {
        name:"肉類",
        option:{
            "豬肉":{price:0},
            "牛肉":{price:0},
            "雞肉":{price:0}
        }
    },
    "主食":{
        name:"主食",
        option:{
            "義大利麵":{price: 0},
            "燉飯":{price: 0},
            "焗烤飯":{price: 20},
            "焗烤斜管麵":{price: 20},
        }
    },
    "溫度":{
        name:"溫度",
        option:{
            "正常冰":{price: 0 },
            "少冰":{price: 0 },
            "微冰":{price: 0 },
            "去冰":{price: 0 },
            "溫":{price: 0 },
            "熱":{price: 0 },
        }
    },
    "甜度":{
        name:"甜度",
        option:{
            "正常糖":{price: 0},
            "少糖":{price: 0},
            "半糖":{price: 0},
            "微糖":{price: 0},
            "無糖":{price: 0},
        }
    },
}



var menu2 = {
    title: "鄰里",
    subtitle: "kinjo café",
    address: "台南市郡安路四段52號",
    phone: "06-2520155",
    kind: [{
        name: "APPETIZER 開胃點心",
        dish: {
            "炸薯條": { price: 50 },
            "古早味甜不辣": { price: 40 },
            "炸豆腐": { price: 55 },
            "日式炸雞": { price: 85 },
            "椒鹽花枝": { price: 95 },
            "水牛城辣雞翅": { price: 105, tag: ["辣"] }
        },
        note: []
    }, {
        name: "HOT POT 小火鍋",
        dish: {
            "港式沙茶鍋": {
                price: 240,
                select: [choice["肉類"]]
            },
            "日式味噌鍋": {
                price: 240,
                select: [choice["肉類"]]
            },
            "養一頭牛奶鍋": {
                price: 250,
                select: [choice["肉類"]]
            },
            "剝皮辣椒鍋": {
                price: 250,
                select: [choice["肉類"]],
                tag: ["辣"]
            },
            "麻油香鍋": {
                price: 250,
                select: [choice["肉類"]]
            },
            "和風咖哩鍋": {
                price: 260,
                select: [choice["肉類"]],
                tag: ["辣"]
            },
            "橘黃南瓜鍋": {
                price: 260,
                select: [choice["肉類"]],
            },
            "西西里番茄鍋": {
                price: 260,
                select: [choice["肉類"]],
            },
            "韓式泡菜部隊鍋": {
                price: 270,
                select: [choice["肉類"]],
                tag: ["辣"]
            },
            "時蔬牛奶鍋": {
                price: 260,
                select: [choice["肉類"]],
                tag: ["可素食"]
            },
            "食蔬葷菇鍋": {
                price: 260,
                select: [choice["肉類"]],
                tag: ["可素食"]
            }
        },
        note: ["餐點皆附有50元飲品 差價可補差額"]
    }, {
        name: "PASTA RISOTTO\r\n義大利麵 燉飯 焗烤",
        dish: {
            "清炒蒜辣培根": {
                price: 160,
                select: [choice["主食"]],
            },
            "蒜味鮮蝦": {
                price: 170,
                select: [choice["主食"]],
            },
            "白酒蛤蜊": {
                price: 170,
                select: [choice["主食"]],
            },
            "羅勒青醬鮮蝦": {
                price: 180,
                select: [choice["主食"]],
            },
            "羅勒青醬雞肉": {
                price: 180,
                select: [choice["主食"]],
            },
            "羅勒青醬蛤蠣": {
                price: 180,
                select: [choice["主食"]],
            },
            "白醬時蔬野菇": {
                price: 170,
                select: [choice["主食"]],
                tag: ["可素食"]
            },
            "南瓜海鮮": {
                price: 180,
                select: [choice["主食"]],
            },
            "南瓜雞肉": {
                price: 180,
                select: [choice["主食"]],
            },
            "南瓜時蔬野菇": {
                price: 180,
                select: [choice["主食"]],
                tag: ["可素食"]
            },
            "白醬奶油培根": {
                price: 170,
                select: [choice["主食"]],
            },
            "白醬奶油雞肉": {
                price: 180,
                select: [choice["主食"]],
            },
            "西西里番茄燻腸": {
                price: 170,
                select: [choice["主食"]],
            },
            "西西里番茄雞肉": {
                price: 180,
                select: [choice["主食"]],
            },
            "西西里番茄海鮮": {
                price: 180,
                select: [choice["主食"]],
            },
            "和風咖哩海鮮": {
                price: 180,
                select: [choice["主食"]],
                tag: ["辣"]
            },
            "和風咖哩牛五花": {
                price: 190,
                select: [choice["主食"]],
                tag: ["辣"]
            },
            "啵啵泡菜雞肉": {
                price: 190,
                select: [choice["主食"]],
                tag: ["辣"]
            },
            "啵啵泡菜鮮蝦": {
                price: 190,
                select: [choice["主食"]],
                tag: ["辣"]
            },
            "迷迭香奶油鮭魚": {
                price: 190,
                select: [choice["主食"]],
            }
        },
        note: ["餐點皆附有50元飲品 差價可補差額"]
    }, {
        name: "BURRITOS 塔可烤餅",
        dish: {
            "田園鮮蔬": {
                price: 95,
                tag: ["可素食"]
            },
            "番茄瑪格麗特": {
                price: 95,
            },
            "打拋雞肉": {
                price: 110,
            },
            "羅勒青醬鮪魚": {
                price: 110,
            }
        },
        note: []
    }, {
        name: "SALAD 沙拉",
        dish: {
            "堅果鮮蔬沙拉": {
                price: 85,
            },
            "嫩煎鮮蔬沙拉": {
                price: 95,
            },
            "香燻雞肉沙拉": {
                price: 95,
            },
            "南洋鮪魚沙拉": {
                price: 95,
            }
        }
        ,
        note: [""]
    }, {
        name: "DUTCH BABY PANCAKES\r\n荷蘭寶貝鬆餅",
        dish: {
            "香蕉巧可力": {
                price: 150,
            },
            "焦糖脆糖": {
                price: 150,
            },
            "肉桂蜂蜜蘋果": {
                price: 150,
            },
            "綜合莓果": {
                price: 170,
            }
        },
        note: ["製作時間需25分鐘"]
    }, {
        name: "COFFEE 咖啡",
        dish: {
            "純黑咖啡": {
                price: 50,
                select: [choice["溫度"], choice["甜度"]]
            },
            "原味拿鐵": {
                price: 70,
                select: [choice["溫度"], choice["甜度"]]
            },
            "卡布奇諾": {
                price: 70,
                select: [choice["溫度"], choice["甜度"]]
            },
            "咖啡冰淇淋": {
                price: 80,
                select: [choice["溫度"], choice["甜度"]]
            },
            "鄰里咖啡": {
                price: 75,
                select: [choice["溫度"], choice["甜度"]]
            },
            "黑糖瑪奇朵": {
                price: 80,
                select: [choice["溫度"], choice["甜度"]]
            },
            "摩卡脆片": {
                price: 80,
                select: [choice["溫度"], choice["甜度"]]
            },
            "焦糖瑪奇朵": {
                price: 80,
                select: [choice["溫度"], choice["甜度"]]
            }
        },
        note: []
    }, {
        name: "TEA 茶",
        dish: {
            "日式玄米茶": {
                price: 50,
                select: [choice["溫度"], choice["甜度"]]
            },
            "產地紅茶": {
                price: 50,
                select: [choice["溫度"], choice["甜度"]]
            },
            "雷蒙紅茶": {
                price: 60,
                select: [choice["溫度"], choice["甜度"]]
            },
            "雷蒙玄米茶": {
                price: 60,
                select: [choice["溫度"], choice["甜度"]]
            },
            "柚香冰茶": {
                price: 70,
                select: [choice["溫度"], choice["甜度"]]
            },
            "雷蒙龍眼蜜茶": {
                price: 70,
                select: [choice["溫度"], choice["甜度"]]
            },
            "冰淇淋紅茶": {
                price: 70,
                select: [choice["溫度"], choice["甜度"]]
            },
            "蜂蜜蘋果茶": {
                price: 70,
                select: [choice["溫度"], choice["甜度"]]
            },
            "繽紛水果茶": {
                price: 80,
                select: [choice["溫度"], choice["甜度"]]
            }
        },
        note: []
    }]
}    



