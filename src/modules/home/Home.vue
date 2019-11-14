<template>
    <div class="home">
        <div class="search-wrapper">
            <Search></Search>
        </div>

    </div>
</template>

<script>
    import Search from '../../components/Search';
    export default {
        name: "Home",
        components: {
            Search
        }
    }
</script>

<style scoped lang="stylus">
    .home
        .search-wrapper
            width 1080px
            margin 20px auto  0
</style>
