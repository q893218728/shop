<template>

        <!--default-active 默认激活哪个，mode设置导航条是横向的还是竖向的-->
        <el-menu :default-active="activeIndex"  mode="horizontal" >
            <el-menu-item index="1" class="left">注册/登录</el-menu-item>
            <el-menu-item index="2" class="el-icon-shopping-cart-full">购物车</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
        </el-menu>

</template>

<script>
    export default {
        name: "Header",
        data() {
           return {
               activeIndex: '1'
           }
        }
    }
</script>

<style scoped lang="stylus">
   .el-menu
        border-bottom none

        .el-menu-item
            height 40px
            float right
            line-height 40px
            font-size 16px
        .left
            float left

</style>
