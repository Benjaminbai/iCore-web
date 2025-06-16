import { Provider } from "@/libs";
import { getUserPermissionByTokenApi } from "@/modules/login/api";
import {
  DictMgt,
  Home,
  MenuMgt,
  MsgTempMgt,
  MyMsgMgt,
  CgFormMgt,
  CgReportMgt,
  RoleMgt,
  UserMgt,
  Theme,
  H5design,
} from "@/modules";
import router from "./index";

const componentLoader = (componentName) => {
  const componentMap = {
    "@core/menuMgt/index": MenuMgt,
    "@core/userMgt/index": UserMgt,
    "@core/roleMgt/index": RoleMgt,
    "@core/dictMgt/index": DictMgt,
    "@core/myMsgMgt/index": MyMsgMgt,
    "@core/msgTempMgt/index": MsgTempMgt,
    "@core/online/cgFormMgt/index": CgFormMgt,
    "@core/online/cgReportMgt/index": CgReportMgt,

    "@core/home/index": Home,
    "@core/theme/index": Theme,
    "@core/h5design/index": H5design,
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
