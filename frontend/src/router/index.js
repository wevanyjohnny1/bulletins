import { createRouter, createWebHistory } from "vue-router";
import NewHomeView from "../views/NewHomeView.vue";
import BulletinView from "../views/BulletinView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: SignInView,
      meta: {
        title: "Signin",
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
      meta: {
        title: "SignUp",
      },
    },
    {
      path: "/home",
      name: "home",
      component: NewHomeView,
      meta: {
        title: "Home",
        requiresAuth: true,
      },
    },
    {
      path: "/bulletins/:employeeId",
      name: "bulletinView",
      component: BulletinView,
      meta: {
        title: "Bulletin",
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    const user = localStorage.getItem("user");
    if (user) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
