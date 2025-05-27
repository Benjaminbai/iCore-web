export {
  Editor,
  FullModal,
  BlankLayout,
  HscfLayout,
  Logo,
  Menu,
  Table,
  UserInfo,
} from "./libs";

import { Axios } from "./axios";
import router, { syntheticRoutes } from "./router";

import DictMgt from "./modules/dictMgt/index.vue";
import Home from "./modules/home/index.vue";
import MenuMgt from "./modules/menuMgt/index.vue";
import MsgTempMgt from "./modules/msgTempMgt/index.vue";
import MyMsgMgt from "./modules/myMsgMgt/index.vue";
import CgFormMgt from "./modules/online/cgFormMgt/index.vue";
import CgReportMgt from "./modules/online/cgReportMgt/index.vue";
import RoleMgt from "./modules/roleMgt/index.vue";
import UserMgt from "./modules/userMgt/index.vue";

export {
  DictMgt,
  Home,
  MenuMgt,
  MsgTempMgt,
  MyMsgMgt,
  CgFormMgt,
  CgReportMgt,
  RoleMgt,
  UserMgt,
  router,
  syntheticRoutes,
  Axios,
};
