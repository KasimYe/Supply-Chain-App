// 设置用户登录信息
export const SET_USER_LOGIN_INFO = (state, payload) => {
  state.user = payload;
};
// 设置侧边导航菜单是否可见
export const CHANGE_SIDEBAR_DISPLAY = state => {
  state.sideBarShow = !state.sideBarShow;
};
// 设置侧边导航菜单为隐藏
export const HIDE_SIDEBAR_DISPLAY = state => {
  state.sideBarShow = false;
};
