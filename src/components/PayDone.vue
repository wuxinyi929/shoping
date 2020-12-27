<template>
    <div style="padding: 20px">

        <Alert type="success">
            支付成功
            <template slot="desc">
                <div class="pay-done-box">
                    <span>您有一笔新的订单指出，我将尽快为您安排发货！</span>
                </div>
            </template>
        </Alert>

    </div>
</template>

<script>
    export default {
        name: 'PayDone'
    };
</script>

<style scoped>
    .pay-done-box {
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .pay-done-box span {
        font-size: 30px;
    }
</style>
