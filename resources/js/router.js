import vueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(vueRouter);

import Index from "./views/Index";

const routes = [
    { 
        path: "/test", 
        component: Index  
    }
];

export default new vueRouter({
    mode:"history",
    routes
 });
