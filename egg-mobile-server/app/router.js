"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/api/user/:id", controller.api.users.index);
  router.get("/api/users", controller.api.users.list);
  router.post("/api/user", controller.api.users.create);
  router.put("/api/user/:id", controller.api.users.update);
};
