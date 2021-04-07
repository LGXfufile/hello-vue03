import Vue from 'vue'
import router from 'vue-router'
import Main from "../views/Main";
import Login from "../views/Login";
import List from "../views/user/List";
import profile from "../views/user/profile";

Vue.use(router)

export default new router({
  mode:'history',
  routes:[
    {
      path:'/main',
      component:Main,
      children:[
        {
          path:'/user/profile/:id',//前端传了id,这里用：绑定id
          component:profile
        },
        {
          path: '/user/List',
          component: List
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
