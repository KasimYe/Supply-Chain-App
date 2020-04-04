import http from "../http";
// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {
    http
      .post("user/login", {
        username: data.username,
        password: data.password,
      })
      .then((response) => {
        if (response.status === 200) {          
            commit("SET_USER_LOGIN_INFO", response.data);
            resolve(response.data);          
        } else {
          reject("api error");
        }
      })
      .catch(function (error) {
        reject(error.response.data.message || error.response.data);
      });
  });
};
// 显示侧边导航菜单栏
export const showSideBar = (context) => {
  context.commit("CHANGE_SIDEBAR_DISPLAY");
};

// 关闭侧边导航菜单栏
export const closeSideBar = (context) => {
  context.commit("HIDE_SIDEBAR_DISPLAY");
};
