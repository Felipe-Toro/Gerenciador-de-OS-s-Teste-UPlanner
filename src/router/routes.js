const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/Index.vue') }
  //   ]
  // },

  {
    path: "/",
    component: () => import("pages/home.vue")
  },

  {
    path: "",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/library", component: () => import("pages/library.vue") },
      { path: "/order", component: () => import("pages/order.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
