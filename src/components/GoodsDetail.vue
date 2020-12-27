<template>
    <div>
        <ShopHeader></ShopHeader>
        <div class="shop-item-path">
            <div class="shop-nav-container">
                <Breadcrumb>
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/goodsList">水手服</BreadcrumbItem>
                    <BreadcrumbItem>毛衣</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <!-- 商品信息展示 -->
        <ShowGoods></ShowGoods>
        <!-- 商品详细展示 -->
        <ShowGoodsDetail></ShowGoodsDetail>
        <Spin size="large" fix v-if="isLoading"></Spin>
    </div>
</template>

<script>

    import ShopHeader from '@/components/header/ShopHeader';
    import ShowGoods from '@/components/goodsDetail/ShowGoods';
    import ShowGoodsDetail from '@/components/goodsDetail/ShowGoodsDetail';
    import store from '@/vuex/store';
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'GoodsDetail',
        beforeRouteEnter(to, from, next) {
            window.scrollTo(0, 0);
            next();
        },
        created() {
            let goodId= this.$route.query.goodId;
            this.loadGoodsInfo(goodId);
        },
        data() {
            return {
                tagsColor: ['blue', 'green', 'red', 'yellow']
            };
        },
        methods: {
            ...mapActions(['loadGoodsInfo'])
        },
        computed: {
            ...mapState(['goodsInfo', 'isLoading'])
        },
        components: {

            ShopHeader,
            ShowGoods,
            ShowGoodsDetail
        },
        store
    };
</script>

<style scoped>
    .shop-item-path {
        height: 38px;
        background-color: rgb(236, 235, 235);
        line-height: 38px;
        color: #d65b5b;
    }

    .shop-nav-container {
        margin: 0px auto;
        width: 80%;
    }
</style>
