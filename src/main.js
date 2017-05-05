'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import store from './store/'
import App from './App.vue';
import List from './component/List.vue';
import Add from './component/Add.vue';
import Detail from './component/Detail.vue';

Vue.config.debug = true;

import './js/resizeRoot.js';
import './css/main.scss';

const router = new VueRouter({
	routes:[
		{
			path:'/list',
			name:'List',
			component : List
		},
		{
			path:'/add',
			name:'Add',
			component : Add
		},
		{
			path:'/detail/:itemId',
			name:'Detail',
			component : Detail
		},
		{
			path: '*',
			redirect: '/list'
		}
	],
	scrollBehavior (to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	}
});

new Vue({
	el:'#app',
	router,
	store,
	template: '<App/>',
	components: { App }
});

