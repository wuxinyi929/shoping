<template>
    <div class="shop-box">
        <div class="shop-container">
            <div class="shop-title">
                <div class="shop-title-icon">
                    <Icon type="fireball"></Icon>
                    <i class="fa fa-fire"></i>
                </div>
                <div class="shop-title-content">
                    <p>
                        <router-link to="/merchant">{{ shopIntro.shopName }}</router-link>
                    </p>
                    <p>
                        <router-link to="/merchant">{{ shopIntro.slogen }}</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    /* 店铺介绍 顶部红色框 */
    .shop-box {
        width: 100%;
        height: 80px;
        background-color: #d65b5b;
    }
    /* 店铺介绍 顶部框中白色字 */
    .shop-container {
        width: 80%;
        height: 100%;
        margin: 0px auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #fff;
    }
    /* 店铺介绍 顶部框中白色图标位置 */
    .shop-title {
        display: flex;
        padding-top: 40px;
        flex-direction: row;
    }
    /* 店铺介绍 顶部框中白色图标大小 */
    .shop-title-icon {
        font-size: 35px;
    }
    /* 店铺介绍 顶部框中白色字位置 */ 
    .shop-title-content {
        padding-top: 3px;
        margin-left: 15px;
    }
    /* 店铺介绍 顶部框中白色字大小 */ 
    .shop-title-content p {
        line-height: 40px;
        font-size: 20px;
    }
    /* 店铺介绍 顶部框中白色字颜色 */ 
    .shop-title-content a {
        color: #fff;
    }

    .shop-another-item {
        display: flex;
        flex-direction: row;
    }

    .shop-another-item-detail {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 15px;
    }

    .shop-another-item-img {
        height: 80px;
        border-radius: 40px;
        overflow: hidden;
    }

    .shop-another-item-img img {
        width: 80px;
    }

    .shop-anoter-item-intro {
        margin-left: 15px;
    }
</style>
