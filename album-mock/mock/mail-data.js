const Mock = require('mockjs');

let mockAddress = function () {

    let template = {};
    template[`data|2`] =
        [{
            addressId: '@id()',
            name: '@cword(3)',
            "province|+1": [
                "江苏省",
                "浙江省",
                "安徽省"
            ],
            "city|+1": ['苏州市', '常熟市', '南通市', '无锡市'],
            "area|+1": ['下关区', '西峡区', '市北区'],
            address: '湖山路99号',
            phone: '180****8192',
            postalcode: "@integer(100000,500000)"
        }

        ];
    let data = Mock.mock(template).data;
    return data;
};


let mockData = {
    //限时特购
    secKillsInfo: [
        {
            intro: '【三圆Mimaru】黑穗醋栗全款预约(不退不换) 原创JK制服裙',
            img: 'static/img/index/seckill/1.jpg',
            price: 159.0,
            realPrice: 180.0
        },
        {
            intro: '【PinoPocket】晒海 原创格子正统jk制服裙 高校学生百褶裙学院风',
            img: 'static/img/index/seckill/2.jpg',
            price: 159.0,
            realPrice: 180.0
        },
        {
            intro: '【深夜幻境】#月黑风高# 蓝格 JK制服裙 高校学生百褶裙班服学院',
            img: 'static/img/index/seckill/3.jpg',
            price: 139.0,
            realPrice: 159.0
        },
        {
            intro: '【深夜幻境】#锦鲤#红格裙 JK制服裙 日系学生百褶裙 校园班服',
            img: 'static/img/index/seckill/4.jpg',
            price: 149.0,
            realPrice: 169.0
        },
        {
            intro: '【春日部】别澜中 现货原创蓝色格裙 jk制服正统少女百褶',
            img: 'static/img/index/seckill/5.jpg',
            price: 149.0,
            realPrice: 179.0
        }
       
    ],
    
 
    //轮播图
    carouselItems: {
        carouselItems: [
            'static/img/nav/1.webp',
            'static/img/nav/2.webp',
            'static/img/nav/3.webp',
            'static/img/nav/4.webp',
            'static/img/nav/5.webp'
        ],
    },
    //十张两行
    computer: {
        title: '推荐好物',
        link: ['裙子', '毛衣', '领带'],
        detail: [
            {
                itemFour: [
                    {
                        title: '衬衫白',
                        intro: '星系浪漫',
                        img: 'static/img/index/computer/item-show-12.jpg'
                    },
                    {
                        title: '衬衫黑',
                        intro: '不良鬼面',
                        img: 'static/img/index/computer/item-show-13.jpg'
                    },
                    {
                        title: '短袖',
                        intro: '奶油咩咩',
                        img: 'static/img/index/computer/item-show-14.jpg'
                    },
                    {
                        title: '温柔一刀',
                        intro: '水蓝色衬衫',
                        img: 'static/img/index/computer/item-show-15.jpg'
                    },
                    {
                        title: '盘特维拉',
                        intro: '深红领带',
                        img: 'static/img/index/computer/23.jpg'
                    }
                ],
                
            },

            {
                itemFour: [
                    {
                        title: 'OMONT',
                        intro: '杏色裤子',
                        img: 'static/img/index/computer/item-show-22.jpg'
                    },
                    {
                        title: 'HUCHUJING',
                        intro: '格子裤',
                        img: 'static/img/index/computer/item-show-23.jpg'
                    },
                    {
                        title: 'lulu',
                        intro: '灯芯绒裤',
                        img: 'static/img/index/computer/item-show-24.jpg'
                    },
                    {
                        title: 'Blue',
                        intro: '国潮裤',
                        img: 'static/img/index/computer/item-show-25.jpg'
                    },
                    {
                        title: '水手服',
                        intro: '黑粉',
                        img: 'static/img/index/computer/24.jpg'
                    }
                ],
            }
        ]
    },
    //领结小物
    eat: {
        title: '领结小物',
        link: ['好物分享'],
        detail: [
            {
                itemContent: [
                    'static/img/index/eat/item-eat-7.jpg',
                    'static/img/index/eat/item-eat-8.jpg',
                    'static/img/index/eat/item-eat-9.jpg'
                ]
            },
            {  
                itemContent: [
                    'static/img/index/eat/item-eat-10.jpg',
                    'static/img/index/eat/item-eat-11.jpg',
                    'static/img/index/eat/item-eat-12.jpg'
                ]
            }
        ]
    },
   
    goodsList: {
        
        //goodlist
        goodsList: [
            {
                img: 'static/img/goodsList/item-show-1.jpg',
                goodId:'1',
                price: 138.0,
                intro: '【春日部】别澜中 现货原创蓝色格裙 jk制服正统少女百褶',
                remarks: 6160,
                shopName: '【春日部】',
                sale: 10000
            },
            {
                img: 'static/img/goodsList/item-show-2.jpg',
                goodId:'2',
                price: 128.0,
                intro: '【神仙club】原创JK格裙 红黑色血腥玛丽格裙【现货15天内发】',
                remarks: 3000,
                shopName: '【神仙club】',
                sale: 9600
            },
            {
                img: 'static/img/goodsList/item-show-3.jpg',
                goodId:'3',
                price: 158.00,
                intro: '【Swallowjk燕子家】原创（麓安）JK制服裙 女生格子校服裙',
                remarks: 2800,
                shopName: '【Swallowjk燕子家】',
                sale: 8900
            },
            {
                img: 'static/img/goodsList/item-show-4.jpg',
                goodId:'4',
                price: 79.90,
                intro: '加绒帆布鞋女ulzzang休闲秋2020新款学生板鞋ins潮豹纹鞋子冬百搭',
                remarks: 9000,
                shopName: '御札JK',
                sale: 8600
            },
            {
                img: 'static/img/goodsList/item-show-5.jpg',
                goodId:'5',
                price: 75.00,
                intro: '黄洛林 豹纹小黑鞋女2020秋冬新款街拍网红厚底帆布鞋子ins板鞋潮',
                remarks: 6160,
                shopName: '黄洛林',
                sale: 8560
            },
            {
                img: 'static/img/goodsList/item-show-6.jpg',
                goodId:'6',
                price: 238.0,
                intro: 'TYAKASHA塔卡沙宠物系列连帽卫衣冬装扎染卫衣2020秋冬',
                remarks: 9006,
                shopName: 'TYAKASHA塔卡沙',
                sale: 8530
            },
            {
                img: 'static/img/goodsList/item-show-7.jpg',
                goodId:'7',
                price: 256.0,
                intro: '长大开飞船卫衣2020秋冬款毛巾绣百搭ins潮情侣装毛圈盐系少年感',
                remarks: 8666,
                shopName: '长大开飞船',
                sale: 8360
            },
            {
                img: 'static/img/goodsList/item-show-8.jpg',
                goodId:'8',
                price: 78.0,
                intro: '林先参 斑马纹大头鞋女圆头厚底冬季加绒黑色运动鞋秋冬款ins 潮',
                remarks: 6080,
                shopName: '林先参',
                sale: 7560
            },
            {
                img: 'static/img/goodsList/item-show-9.jpg',
                goodId:'9',
                price: 268.00,
                intro: '小黄桃马丁靴女2020新款日系奶牛可爱百搭靴子加绒厚底女鞋秋冬',
                remarks: 6160,
                shopName: '小黄桃',
                sale: 7360
            },
            {
                img: 'static/img/goodsList/item-show-10.jpg',
                goodId:'10',
                price: 38.00,
                intro: '【shindek】原创jk领结 K长柄斜角 纯色领花女斜纹百搭制服衬衫配饰',
                remarks: 3000,
                shopName: '【shindek】',
                sale: 6960
            },
            {
                img: 'static/img/goodsList/item-show-11.jpg',
                goodId:'11',
                price: 105.00,
                intro: '【梗豆kyouko】原创JK制服风琴褶森林小鹿3色圆领/丸襟短袖衬衫',
                remarks: 2800,
                shopName: '【梗豆kyouko】',
                sale: 6560
            },
            {
                img: 'static/img/goodsList/item-show-12.jpg',
                goodId:'12',
                price: 66.0,
                intro: '【御札JK】星系浪漫·原创正版长袖jk夏季衬衫',
                remarks: 9000,
                shopName: '【御札JK】',
                sale: 6360
            },
            {
                img: 'static/img/goodsList/item-show-13.jpg',
                goodId:'13',
                price: 45.00,
                intro: '【御札jk】奶油咩咩长袖微泡泡袖jk衬衫软妹',
                remarks: 6160,
                shopName: '【御札jk】',
                sale: 5530
            },
            {
                img: 'static/img/goodsList/item-show-14.jpg',
                goodId:'14',
                price: 66.00,
                intro: '【御札jk】不良鬼面jk黑色衬衫女夏季长袖全款原创',
                remarks: 9006,
                shopName: '【御札jk】',
                sale: 5560
            },
            {
                img: 'static/img/goodsList/item-show-15.jpg',
                goodId:'15',
                price: 148.00,
                intro: '【兔缝缝】温柔一刀配套衬衫纯白衬衫淡蓝色衬衫 JK/DK衬衫',
                remarks: 8666,
                shopName: '【兔缝缝】',
                sale: 5260
            },
            {
                img: 'static/img/goodsList/item-show-16.jpg',
                goodId:'16',
                price: 146.0,
                intro: '【三圆Mimaru】黑穗醋栗全款预约(不退不换) 原创JK制服裙',
                remarks: 6080,
                shopName: '【三圆Mimaru】',
                sale: 3560
            },
        ]
    },
           
 //otherbuy
    recommend: [
        [
            {
                img: 'static/img/otherBuy/1.jpg',
                intro: '【梗豆kyouko】原创JK制服风琴褶森林小鹿3色圆领/丸襟短袖衬衫',
                price: 89.00
            },
            {
                img: 'static/img/otherBuy/2.jpg',
                intro: '【御札JK】星系浪漫·原创正版长袖jk夏季衬衫',
                price: 66.00
            },
            {
                img: 'static/img/otherBuy/3.jpg',
                intro: 'CALMMIND姜饼人怪兽针织衫宽松休闲情侣装秋冬上衣圆领毛衣男潮牌',
                price: 184.00
            },
            {
                img: 'static/img/otherBuy/4.jpg',
                intro: '【彩虹研究所】苋红 正统jk制服裙 格子裙 日系学生深红色 酒红短裙百褶裙',
                price: 138.00
            }
        ],
        [
            {
                img: 'static/img/otherBuy/5.jpg',
                intro: '【Blue Lotuss】20SS 国潮男女同款秋冬刺绣串标丝绒直筒休闲裤',
                price: 256.00
            },
            {
                img: 'static/img/otherBuy/6.jpg',
                intro: '【神仙club】原创JK格裙 红黑色血腥玛丽格裙【现货15天内发】',
                price: 158.00
            },
            {
                img: 'static/img/otherBuy/7.jpg',
                intro: '【卤卤lulu】 灯芯绒裤女直筒裤秋冬百搭高腰宽松哈伦学生条绒长裤',
                price: 78.00
            },
            {
                img: 'static/img/otherBuy/8.jpg',
                intro: 'WIFI延迟科技感透明小熊黑粉可爱配色秋冬黑色宽松连帽卫衣加绒 U',
                price: 168.00
            }
        ]
    ],
    address: mockAddress()
}

module.exports = mockData;