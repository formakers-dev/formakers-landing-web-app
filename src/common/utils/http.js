import axios from "axios";
import config from "../../../config";
import VueApp from "@/main";

const instance = axios.create({
  baseURL: config.serverBaseUrl
  // withCredentials: true,
});

// instance.interceptors.request.use(config => {
// });

instance.interceptors.response.use(response => {
  // accesstoken을 프론트단 전역변수st 저장소에 셋팅한다 (로그인, 로그아웃 처리)

  if (response.request.responseURL.indexOf("/auth/login") > -1) {
    // 1. Authorization header 에서 aceessToken을 꺼내서 프론트에 셋팅한다
    VueApp.$store.commit("LOGIN", response.data.token);

    // 2. Axios Request Default Header의 x-access-token 에 accessToken을 셋팅한다
    instance.defaults.headers.common["x-access-token"] = response.data.token;
  } else if (response.request.responseURL.indexOf("/auth/logout") > -1) {
    // 1. 프론트에 셋팅한 accessToken을 지운다
    VueApp.$store.commit("LOGOUT");

    // 2. Axios Request Default Header의 x-access-tokenn에 셋팅되어있는 accessToken을 지운다
    delete instance.defaults.headers.common["x-access-token"];
  }

  return response;
});

export default instance;
