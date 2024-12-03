//创建路由
import {createRouter, createWebHistory} from "vue-router";
import { useToken } from "@/store";
import store from "@/store";

const router = createRouter({
    //路由历史模式
    history:createWebHistory(),
    //路由映射列表
    routes: [
        {
            //路径
            path:'/',
            //路由组件
            component:()=> import('../pages/index.vue'),
        },
        {
            //路径
            path:'/detail',
            //路由组件
            component:()=> import('../pages/detail.vue'),
        },
        {
            //路径
            path:'/login',
            //路由组件
            component:()=> import('../pages/login.vue'),
        },
    ]
})

/**
 * 路由守卫
 * @param to 路由目标对象
 * @param from 路由来源对象
 * @param next 跳转函数
 */
router.beforeEach((to, from, next) => {
    const token = useToken(store)
    const pathUrl:string[] = ['/detail']
    if(pathUrl.includes(to.path)){
        if(token.getToken() === '') {
            console.log(token.token)
            next('/login')
        }else {
            next();
        }
    }else{
        next();
    }
});

export default router