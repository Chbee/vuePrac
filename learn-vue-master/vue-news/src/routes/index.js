import Vue from 'vue'
import VueRouter from 'vue-router'

import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView'
import JobsView from '../views/JobsView'
import UserView from '../views/UserView'
import ItemView from '../views/ItemView'
import createListView from '../views/CreateListView'
import bus from '../utils/bus'
import { store } from '../store/index'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            // component: createListView('NewsView')
            component: NewsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')
                store.dispatch('FETCH_DATAS', to.name)
                    .then(() => next())
                    .catch(error => console.log(error))
            }
        },
        {
            path: '/ask',
            name: 'ask',
            // component: createListView('AskView')
            component: AskView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')
                store.dispatch('FETCH_DATAS', to.name)
                    .then(() => next())
                    .catch(error => console.log(error))
            }
        },
        {
            path: '/jobs',
            name: 'jobs',
            // component: createListView('JobsView')
            component: JobsView,
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner')
                store.dispatch('FETCH_DATAS', to.name)
                    .then(() => next())
                    .catch(error => console.log(error))
            }
        },
        {
            path: '/user',
            component: UserView
        },
        {
            path: '/item',
            name: 'id',
            component: ItemView
        },
        {
            path: '/user/:id',
            component: UserView
        }
    ]
});