import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next(`/login?redirect=${to.fullPath}`);
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import(/* */ "./views/Auth/Login.vue"),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import(/* */ "./views/Auth/Signup.vue"),
      beforeEnter: ifNotAuthenticated
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import(/* */ "./views/Profile.vue"),
      redirect: "/profile/courses",
      children: [
        {
          path: "/profile/courses",
          name: "profile.courses",
          component: () => import(/* */ "./views/Profile/Courses.vue")
        },
        {
          path: "/profile/courses/:id",
          name: "profile.courses_page",
          component: () => import(/* */ "./views/Profile/CoursePage.vue")
        },
        {
          path: "/profile/courses/:id/page/:page",
          name: "profile.courses_page_number",
          component: () => import(/* */ "./views/Profile/CourseView.vue")
        }
      ],
      beforeEnter: ifAuthenticated
    }
  ]
});
