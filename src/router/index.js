import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import home from '../components/home'
import train_no from '../components/train_no'
import train_list from '../components/train_list'
import spinner from '../components/spinner/spinner'
import train_info from '../components/train_info'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: home
        },

        {
            path: '/train_no',
            name: 'train_no',
            component: train_no
        },

        {
            path: '/spinner',
            name: 'spinner',
            component: spinner
        },

        {
            path: '/train_list',
            name: 'train_list',
            component: train_list
        },

        {
            path: '/train_info',
            name: 'train_info',
            component: train_info
        }
    ]
})
