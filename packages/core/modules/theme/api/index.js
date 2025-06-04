import Axios from "@/axios/Axios";

export const sysPageEditApi = (data) =>
  Axios({
    url: "/sys/page/edit",
    method: "put",
    data,
  });

export const sysPageQueryApi = (params) =>
  Axios({
    url: "/sys/page/query",
    method: "get",
    params,
  });
