import http from "../http";
// 用户登录
export const login = ({ commit }, data) => {
  return new Promise((resolve, reject) => {    
    resolve(true);
    
    // http
    //   .post("user", {
    //     username: data.username,
    //     password: data.password
    //   })
    //   .then(response => {        
    //     if (response.status === 200) {
    //       if (data.password == response.data.password) {
    //         commit("SET_USER_LOGIN_INFO", response.data);
    //         resolve(true);
    //       } else {
    //         resolve(false);
    //       }
    //     } else {
    //       reject("api error");
    //     }
    //   })
    //   .catch(function(error) {
    //     reject(error);
    //     console.log(error);
    //   });
  });
};
// 显示侧边导航菜单栏
export const showSideBar=(context)=>{
  context.commit("CHANGE_SIDEBAR_DISPLAY");
}

// 关闭侧边导航菜单栏
export const closeSideBar=(context)=>{  
  context.commit("HIDE_SIDEBAR_DISPLAY");
}