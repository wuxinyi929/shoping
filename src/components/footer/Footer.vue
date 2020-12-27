<template>
    <div>
        <footer class="footer">
           
        </footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {
                linkItemClass: 'link-item',
                guideArr: [],
               
            };
        }
    };
</script>

<style scoped>
    /*****************************底 部 开 始*****************************/
    .footer {
        width: 100%;
        height: 390px;
        margin-top: 30px;
        background-color: #eaeaea;
    }

    .icon-row {
        margin: 15px auto;
        padding-top: 8px;
        width: 1000px;
        height: 64px;
    }

    .footer-icon {
        margin-left: 17px;
        margin-right: 17px;
        float: left;
    }
