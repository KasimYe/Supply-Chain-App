import _ from "lodash";

export const currentPage = state => {
  return state.currentPage;
};

export const quickMenus = status => {
  return _.take(status.menus, 6);
};
