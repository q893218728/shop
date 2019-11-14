import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

import Home from '../modules/home/Home';

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        }
    ],
    mode: 'history'
})
