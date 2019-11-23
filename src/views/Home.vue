<template>
    <div class="page">
      <h2>Home Page</h2>
      <el-button type="primary" @click="testAxios()">测试axois调用</el-button>
      <el-button type="primary" @click="getUser()">获取用户信息</el-button>
      <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
    </div>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";
    import mock from '../mock/mock.js'
    import axios from 'axios'
    export default{
      components: {ElButton},
      name: "Home",
      methods: {
        testAxios(){
          axios.get('http://localhost:8080').then(res => {alert(res.data)})
        },
        getUser(){
          axios.get('http://localhost:8080/user').then(res => {alert(JSON.stringify(res.data))})
        },
        getMenu(){
          axios.get('http://localhost:8080/menu').then(res => {alert(JSON.stringify(res.data))})
        }
      }
    }
</script>
<style>
</style>
