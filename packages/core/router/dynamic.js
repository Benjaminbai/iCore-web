import { Provider } from "@/libs";
import { getUserPermissionByTokenApi } from "@/modules/login/api";
import router from "./index";

const componentLoader = (componentName) => {
  const componentMap = {
    "@core/menuMgt/index": () => import("@/modules/menuMgt/index.vue"),
    "@core/userMgt/index": () => import("@/modules/userMgt/index.vue"),
    "@core/roleMgt/index": () => import("@/modules/roleMgt/index.vue"),
    "@core/dictMgt/index": () => import("@/modules/dictMgt/index.vue"),
    "@core/myMsgMgt/index": () => import("@/modules/myMsgMgt/index.vue"),
    "@core/msgTempMgt/index": () => import("@/modules/msgTempMgt/index.vue"),
    "@core/online/cgFormMgt/index": () =>
      import("@/modules/online/cgFormMgt/index.vue"),
    "@core/online/cgReportMgt/index": () =>
      import("@/modules/online/cgReportMgt/index.vue"),

    "@core/home/index": () => import("@/modules/home/index.vue"),
    "@core/theme/index": () => import("@/modules/theme/index.vue"),
    "@core/h5design/index": () => import("@/modules/h5design/index.vue"),
  };
  return componentMap[componentName];
};

const recursionRoutes = (_menus) => {
  _menus.forEach((menu) => {
    if (menu.children) {
      menu.component = Provider;
      recursionRoutes(menu.children);
    } else {
      menu.component = componentLoader(menu.component);
    }
  });
};

export const getUserPermissionByToken = async () => {
  if (JSON.parse(localStorage.getItem("LOCALINFO") || "{}")?.token) {
    const res = await getUserPermissionByTokenApi();
    if (res.success) {
      const menus = res.result.menu.filter(
        (menu) => menu.path !== "/dashboard/analysis"
      );
      // 处理layout
      menus.forEach((menu) => {
        if (!menu.children) {
          menu.children = [
            {
              ...menu,
            },
          ];
          menu.name = "_" + menu.name;
          menu.component = Provider;
        }
      });
      localStorage.setItem("MENUS", JSON.stringify(menus));
      syntheticRoutes();
    }
  }
};

export const syntheticRoutes = async () => {
  if (
    JSON.parse(localStorage.getItem("LOCALINFO") || "{}")?.token &&
    localStorage.getItem("MENUS")
  ) {
    let menus = JSON.parse(localStorage.getItem("MENUS") || "[]");
    recursionRoutes(menus);
    menus.forEach((menu) => {
      router.addRoute(menu);
    });
  }
};

const recursionMenu = (_menus) => {
  _menus.forEach((menu) => {
    if (menu.children) {
      recursionMenu(menu.children);
    }
    menu.key = menu.path;
    menu.icon = "";
    menu.label = menu.meta.title;
    menu.title = menu.meta.title;
    delete menu.component;
  });
};
