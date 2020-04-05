"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/swagger-ui.html' , 302); //重定向到swagger-ui.html
  router.get("/", controller.home.index);
  router.get("/api/users/:id", controller.api.users.find);
  router.get("/api/users", controller.api.users.list);
  router.post("/api/user", controller.api.users.create);
  router.put("/api/user/:id", controller.api.users.update);
  router.post("/api/user/login", controller.api.users.index);

  router.get("/api/menus", controller.api.menus.list);
};
