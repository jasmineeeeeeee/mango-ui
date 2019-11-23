<template>
    <div class="site-wrapper">
      <h1>404</h1>
      <p>抱歉！您访问的页面失联啦…</p>
      <el-button id="btn1" @click="$router.go(-1)">返回上一页</el-button>
      <el-button type="primary" class="not-found-btn-go">进入首页</el-button>
    </div>
</template>
<script>
    import ElButton from "../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
      components: {ElButton},
      name: ""
    }
</script>
<style>
  .site-wrapper{
    position: absolute;
    top:60px
  }
</style>
