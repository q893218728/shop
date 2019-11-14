<template>
    <div id="app">
        <div class="header-wrapper">
            <v-header></v-header>
        </div>

        <router-view></router-view>
    </div>
</template>

<script>
    import Header from './components/Header';


    export default {
        name: 'App',
        components: {
            'v-header': Header,
        },
        methods: {
            test() {
                this.$axios.get('http://jsonplaceholder.typicode.com/users').then(function (res) {
                    console.log(res.data)

                })

            }
        },

    }
</script>

<style scoped lang="stylus">
    #app
        .header-wrapper
            width 1080px
            margin 0 auto

</style>
