<template>
    <div class="search">
        <div class="logo-wrapper">
            <el-image  src="../static\imgs\lehuo-logo.png" >
            </el-image>
        </div>
        <div class="search-wrapper">
            <el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="餐厅名" value="1"></el-option>
                    <el-option label="订单号" value="2"></el-option>
                    <el-option label="用户电话" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Search",
        data() {
            return {
                select: '',
                searchValue: ''
            }
        }
    }
</script>

<style scoped lang="stylus">
    .search
        display flex
        .logo-wrapper
            width 160px
            height 50px
            .el-image
                width 100%
                height 100%
</style>
