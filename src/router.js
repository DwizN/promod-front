import Vue from 'vue';
import Router from 'vue-router';
import HomePage from './screens/HomePage/HomePage.vue';
import Product from './screens/ProductDetail/ProductDetail.vue';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product,
            props: true
        }
    ]
})