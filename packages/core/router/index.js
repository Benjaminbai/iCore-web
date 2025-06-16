import { createWebHistory, createRouter } from "vue-router";

import { Provider } from "@/libs";
import { sysPageQueryApi } from "@/modules/theme/api";
import theme from "@/modules/theme/state";
import { Login } from "@/modules";
import { syntheticRoutes } from "./dynamic";

export const routes = [
  {
    path: "/",
    component: Provider,
    meta: {
      layout: "blank",
    },
    redirect: "/login",
    children: [{ path: "login", component: Login }],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
export { syntheticRoutes };

const whiteList = ["/login"];

const sysPageQuery = async () => {
  if (sessionStorage.getItem("theme")) {
    theme.value = JSON.parse(sessionStorage.getItem("theme"));
    return;
  }
  const { result } = await sysPageQueryApi();
  if (result) {
    theme.value = JSON.parse(result.properties);
    sessionStorage.setItem("theme", JSON.stringify(theme.value));
  }
};

router.beforeEach(async (to, from, next) => {
  sysPageQuery();
  if (whiteList.includes(from.path)) {
    await syntheticRoutes();
  }
  next();
});
