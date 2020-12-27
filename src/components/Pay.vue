<template>
    <div>
        <div class="pay-container">
            <div class="pay-box">
                <div class="pay-qr-scan">
                    <div class="pay-tips">
                        <router-link to="/payDone">
                            <p>正在进行支付，支付示意图</p>
                            <p>点击我, 完成支付</p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Pay'
    };
</script>

<style scoped>
    .pay-container {
        margin: 0px auto;
        width: 80%;
        min-width: 800px;
        border: dashed 1px black;
    }

    .pay-box {
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pay-demo {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pay-demo img {
        height: 80%;
    }

    .pay-qr-scan {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
    }

    .pay-tips {
        width: 80%;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        
    }

    .pay-tips a {
        color: #999999;
        font-size: 30px;
    }
</style>
