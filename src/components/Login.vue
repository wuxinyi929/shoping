<template>
    <!-- 登录页面 -->
    <div>
        <Row class="container">
            <i-col span="6" offset="2" class="login-img-box">
                <img src="static\img\login.png" art="">
            </i-col>

            <i-col span="8" class="login-box">
                <div class="login-container">
                    <div class="login-header">
                        <p>欢迎登录</p>
                    </div>
                    <div class="form-box">
                        <Form ref="formInline" :model="formDate" :rules="ruleInline">
                            <FormItem prop="username">
                                <i-input type="text" v-model="formDate.username" clearable size="large"
                                         placeholder="用户名">
                                    <Icon type="person" slot="prepend"></Icon>
                                </i-input>
                            </FormItem>
                            <FormItem prop="password">
                                <i-input type="password" v-model="formDate.password" clearable size="large"
                                         placeholder="密码">
                                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                                </i-input>
                            </FormItem>
                            <FormItem>
                                
                                <Button type="error" class="login-button" size="large"
                                        @click="handleSubmit('formInline')" long>登录
                                </Button>
                                
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </i-col>
            <i-col span="6">
                    <div></div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapMutations, mapActions} from 'vuex';

    export default {
        name: 'Login',
        data() {
            return {
                formDate: {
                    username: '',
                    password: ''
                },
                ruleInline: {
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '请输入密码', trigger: 'blur'},
                        {type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            ...mapMutations(['SET_USER_LOGIN_INFO']),
            ...mapActions(['login']),
            handleSubmit(name) {
                const father = this;
                console.log(this.formDate.username);
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.login(father.formDate).then(result => {
                            if (result) {
                                this.$Message.success('登录成功');
                                father.$router.push('/');
                            } else {
                                this.$Message.error('用户名或密码错误');
                            }
                        });
                    } else {
                        this.$Message.error('请填写正确的用户名或密码');
                    }
                });
            }
        },
        store
    };
</script>

<style scoped>
    .container {
        margin-top: 0px;
        height:200px;
        background-color: #fff;
    }

    .login-img-box {
        height: 600px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
/*图片*/
    .login-img-box > img {
        width: 160%;
    }

/*登录框*/
    .login-box {
        height: 550px;
        display: flex;
        align-items: center;
        justify-content: center;
        left:5%;
    }

    .login-container {
        width: 120%;
        height: 200px;
        border: #ffffff solid 1px;
    }

    .login-header {
        height: 50px;
        font-size: 20px;
        text-align: center;
        line-height: 50px;
        letter-spacing: 5px;
        color: #fff;
        background-color: #d65b5b;
    }
  /*按钮*/
    .login-button {
        background-color: #d65b5b;
        border: #d65b5b solid 1px;
    }

    .form-box {
        width: 80%;
        margin: 30px auto;
    }
</style>
