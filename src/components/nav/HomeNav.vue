<template>
    <div>
        <div class="nav-item">
            <ul>
                <li v-for="(item,index) in nav" :key="index">
                    <a href="#">{{item}}</a>
                </li>
            </ul>
        </div>
        <div class="nav-body">
            <!-- 侧边导航 -->
            <div class="nav-side" ref="navSide">
                <ul>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">jk裙</span>
                    </li>
                    <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">领带</span>/
                        <span class="nav-side-item">领结</span> 
                    </li>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">鞋子</span> 
                    </li>
                    <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">水手服</span> 
                    </li>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">毛衣</span> 
                    </li>
                    <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">卫衣</span> 
                    </li>
                    <li @mouseenter="showDetail(1)" @mouseleave="hideDetail(1)">
                        <span class="nav-side-item">裤子</span>
                    </li>
                    <li @mouseenter="showDetail(2)" @mouseleave="hideDetail(2)">
                        <span class="nav-side-item">衬衫</span> 
                    </li>
                </ul>
            </div>
            <div style="display:flex">
                <input type="text" class="input" placeholder="搜索">
                <button class="search">搜索</button>
            </div>
            <div class="nav-content">
                <!-- 轮播图-->
                <div>
                    <Carousel autoplay loop>
                        <CarouselItem v-for="(item, index) in marketing.CarouselItems" :key="index">
                            <router-link to="/goodsList">
                                <img :src="item">
                            </router-link>
                        </CarouselItem>
                    </Carousel>
                </div>
                
               


                <div class="nav-show">
<!--                    <div class="nav-show-img" v-for="(item, index) in marketing.activity" :key="index">-->
<!--                        <router-link to="/goodsList">-->
<!--                            <img :src="item">-->
<!--                        </router-link>-->
<!--                    </div>-->
                </div>
            </div>
        </div>
        <transition name="fade">
            <div class="detail-item-panel panel-1" :duration="{ enter: 100, leave: 100 }" v-show="panel1"
                 @mouseenter="showDetail(1)" ref="itemPanel1" @mouseleave="hideDetail(1)">
                <div class="nav-detail-item">
                    <span v-for="(item, index) in panelData1.navTags" :key="index">{{item}} > </span>
                </div>
                <ul>
                    <li v-for="(items, index) in panelData1.classNav" :key="index" class="detail-item-row">
            <span class="detail-item-title">{{items.title}}
              <span class="glyphicon glyphicon-menu-right"></span>
            </span>
                        <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
                            <span class="detail-item">{{item}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="fade">
            <div class="detail-item-panel panel-2" :duration="{ enter: 100, leave: 100 }" v-show="panel2"
                 @mouseenter="showDetail(2)" ref="itemPanel2" @mouseleave="hideDetail(2)">
                <div class="nav-detail-item">
                    <span v-for="(item, index) in panelData2.navTags" :key="index">{{item}} > </span>
                </div>
                <ul>
                    <li v-for="(items, index) in panelData2.classNav" :key="index" class="detail-item-row">
                        <span class="detail-item-title">{{items.title}}
                          <span class="glyphicon glyphicon-menu-right"></span>
                        </span>
                        <router-link to="/goodsList" v-for="(item, subIndex) in items.tags" :key="subIndex">
                            <span class="detail-item">{{item}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState} from 'vuex';

    export default {
        name: 'HomeNav',
        data() {
            return {
                panel1: false,
                panel2: false,
                nav: [
                    '首页',
                    'JK裙',
                    '领结',
                    '鞋子',
                    '水手服',
                    '毛衣',
                    '卫衣',
                    '裤子',
                    '衬衫'
                ],
                panelData1: {
                    navTags: ['jk裙', '领结/领带', '鞋子', '水手服', '毛衣', '卫衣','鞋子','衬衫'],
                    classNav: [
                        {
                            title: 'jk裙',
                            tags: ['42cm', '45cm', '48cm', '55cm', '66cm', '79cm']
                        },
                        {
                            title: '领结/领带',
                            tags: ['尖角', '平角', '兔耳', '领带']
                        },
                        {
                            title: '鞋子',
                            tags: ['板鞋', '猪腰子鞋', '运动鞋', '凉鞋', '雪地靴']
                        },
                        {
                            title: '水手服',
                            tags: ['茶语中', '黑粉', '金斑', '金森中']
                        },
                        {
                            title: '毛衣',
                            tags: ['神仙', '兔子', '月野']
                        },
                        {
                            title: '卫衣',
                            tags: ['加绒', '薄绒', '大红', '米白']
                        },
                        {
                            title: '裤子',
                            tags: ['阿迪', '耐克', '斐乐', 'vans']
                        },
                        {
                            title: '衬衫',
                            tags: ['御札', '梗豆', '优马', 'shink', 'panteweila', ]
                        }
                    ]
                },
                panelData2: {
                    navTags: ['jk裙', '领结/领带', '鞋子', '水手服', '毛衣', '卫衣','鞋子','衬衫'],
                    classNav: [
                       {
                            title: 'jk裙',
                            tags: ['42cm', '45cm', '48cm', '55cm', '66cm', '79cm']
                        },
                        {
                            title: '领结/领带',
                            tags: ['尖角', '平角', '兔耳', '领带']
                        },
                        {
                            title: '鞋子',
                            tags: ['板鞋', '猪腰子鞋', '运动鞋', '凉鞋', '雪地靴']
                        },
                        {
                            title: '水手服',
                            tags: ['茶语中', '黑粉', '金斑', '金森中']
                        },
                        {
                            title: '毛衣',
                            tags: ['神仙', '兔子', '月野']
                        },
                        {
                            title: '卫衣',
                            tags: ['加绒', '薄绒', '大红', '米白']
                        },
                        {
                            title: '裤子',
                            tags: ['阿迪', '耐克', '斐乐', 'vans']
                        },
                        {
                            title: '衬衫',
                            tags: ['御札', '梗豆', '优马', 'shink', 'panteweila', ]
                        }
                    ]
                }
            };
        },
        computed: {
            ...mapState(['marketing'])
        },
        methods: {
            showDetail(index) {
                index === 1 ? (this.panel1 = true) : (this.panel2 = true);
            },
            hideDetail(index) {
                index === 1 ? (this.panel1 = false) : (this.panel2 = false);
            }
        },
        mounted() {
            this.$refs.itemPanel1.style.left =
                this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel2.style.left =
                this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
            this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
        },
        updated() {
            this.$refs.itemPanel1.style.left =
                this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel2.style.left =
                this.$refs.navSide.offsetLeft + this.$refs.navSide.offsetWidth + 'px';
            this.$refs.itemPanel1.style.top = this.$refs.navSide.offsetTop + 'px';
            this.$refs.itemPanel2.style.top = this.$refs.navSide.offsetTop + 'px';
        },
        store
    };
</script>

<style scoped>
 .input{
    width:400px;
    height:40px;
    display:flex;
    margin-left:5%;
    border:3px #d65b5b solid
  }
  .search{
    width:50px;
    height:40px;
    background:#d65b5b;
    border:none;color:#fff;
    font-size:22px;
    display:flex
  }
    .nav-item {
        width: 680px;
        height: 36px;
        margin: 0px auto;
    }

    .nav-item ul {
        list-style: none;
        margin-left: 15px;
    }

    .nav-item li {
        float: left;
        font-size: 16px;
        font-weight: bold;

        margin-left: 30px;
    }

    .nav-item a {
        text-decoration: none;
        color: #555555;
    }

    .nav-item a:hover {
        color: #d9534f;
    }
    

    /*大的导航信息，包含导航，幻灯片等*/
    .nav-body {
        width: 1020px;
        height: 485px;
        margin: 0px auto;
    }
 /*大方框，里面放文字选项*/
    .nav-side {
        width: 200px;
        height: 100%;
        padding: 0px;
        color: #fff;
        float: left;
        background-color:#d65b5b;
    }

    .nav-side ul {
        width: 100%;
        padding: 0px;
        padding-top: 15px;
        list-style: none;
    }

    .nav-side li {
        padding: 7.5px;
        padding-left: 15px;
        font-size: 14px;
        line-height: 18px;
        border-radius: 2px;
        border:solid 1px gray;
        margin: 5px;
    }

    .nav-side li:hover {
        background: #999395;
    }

    .nav-side-item:hover {
        cursor: pointer;
        color: #c81623;
    }

    /*导航内容*/
    .nav-content {
        width: 792px;
        margin-left: 15px;
        overflow: hidden;
        float: left;
    }

    /*导航图片*/
    .nav-show-img {
        margin-top: 10px;
        float: left;
    }

    .nav-show-img:nth-child(2) {
        margin-left: 12px;
    }

    /*显示商品*/
    .content {
        width: 100%;
    }

    /*显示商品详细信息*/
    .detail-item-panel {
        width: 815px;
        height: 485px;
        background-color: #fff;
        position: absolute;
        top: 168px;
        left: 389px;
        z-index: 999;
    }

    .nav-detail-item {
        margin-left: 26px;
        margin-top: 15px;
        margin-bottom: 15px;
        cursor: pointer;
        color: #eee;
    }

    .nav-detail-item span {
        padding: 6px;
        padding-left: 12px;
        margin-left: 15px;
        font-size: 12px;
        background-color: #6e6568;
    }

    .nav-detail-item span:hover {
        margin-left: 15px;
        background-color: #f44336;
    }

    .detail-item-panel ul {
        list-style: none;
    }

    .detail-item-panel li {
        line-height: 38px;
        margin-left: 40px;
    }

    .detail-item-title {
        padding-right: 6px;
        font-weight: bold;
        font-size: 12px;
        cursor: pointer;
        color: #555555;
    }

    .detail-item-title:hover {
        color: #d9534f;
    }

    .detail-item-row a {
        color: #555555;
    }

    .detail-item {
        font-size: 14px;
        padding-left: 12px;
        padding-right: 8px;
        cursor: pointer;
        border-left: 1px solid #ccc;
    }

    .detail-item:hover {
        color: #d9534f;
    }
</style>
