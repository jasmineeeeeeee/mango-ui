<template>
    <div class="page">
      <h2>Login Page</h2>
      <el-button type="primary" @click="login()">登录</el-button>
    </div>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
    import mock from '../mock/mock'
    import Cookies from 'js-cookie'
    import router from '../router'
    export default {
      components: {ElButton},
      name: "Login",
      methods:{
        login(){
          this.$api.login.login().then(function (res) {
            alert(res.token);
            Cookies.set('token',res.token);
            router.push('/')
          }).catch(function (res) {
            alert(res)
          })
        }
      }
    }
</script>
<style>
</style>
