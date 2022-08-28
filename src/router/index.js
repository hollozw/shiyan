import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

//防止重复点击出现错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta:{
      bool:true,
    },
    children:[
      {
        path:'/home/searching',
        name:'searching',
        component:() => import(/* webpackChunkName: "searching" */ '../views/search/Searching.vue'),
        meta:{
          bool:false,
        }
      }
    ],
  },
  {
    path:'/topic',
    name:'topic',
    component:() => import(/* webpackChunkName: "searching" */ '../views/othersview/topic.vue'),
    meta:{
      bool:true,
    }
  },
  {
    path:'/category',
    name:'category',
    component:() => import(/* webpackChunkName: "searching" */ '../views/othersview/category.vue'),
    meta:{
      bool:true,
    },
  },
  {
    path:'/gouwu',
    name:'gouwu',
    component:() => import(/* webpackChunkName: "searching" */ '../views/othersview/gouwu.vue'),
    meta:{
      bool:true,
    }
  },
  {
    path:'/my',
    name:'my',
    component:() => import(/* webpackChunkName: "searching" */ '../views/othersview/my.vue'),
    meta:{
      bool:true,
    }
  },
  {
    path:'/channel',
    name:'channel',
    component:()=>import(/* webpackChunkName: "searching" */ '../views/classification.vue')
  },
  {
    path:'/details/:id',
    name:'details',
    component:()=>import(/* webpackChunkName: "details" */ '../views/othersview/details.vue')
  },
  {
    path:'/brand/:id',
    name:'brand',
    component:()=>import(/* webpackChunkName: "brand" */'../views/search/brand.vue')
  },
  

  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router



import { Toast } from 'vant';
router.beforeEach((to,from,next)=>{
  
  if(to.path=='/gouwu'){
    let token=sessionStorage.getItem('token');
    
    if(token){
      next();
    }else{
      Toast.loading({
        message: '请先登入...',
        forbidClick: true,
        duration:2000,
      });
      next('/my');
    }
    return;
  }else{
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration:1000,
    });
    next();

  }
})
