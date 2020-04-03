/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1585707221695_6673";

  // add your middleware config here
  config.middleware = ["auth"];

  config.security = {
    csrf: {
      enable: false
    }
  };

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
  };

  config.jwt = {
    secret: "123456"
  };

  // config.sequelize = {
  //   dialect: "mssql",
  //   host: "192.168.0.2",
  //   port: 1400,
  //   database: "egg-supply-chain-chunyu",
  //   username: "sa",
  //   password: "abc123",
  //   dialectOptions: {
  //     options: {
  //       trustServerCertificate: true
  //     }
  //   }
  // };
  config.sequelize = {
    username: "chunyukeji",
    password: "chunyukeji",
    database: "egg-supply-chain-chunyu",
    host: "127.0.0.1",
    dialect: "mysql"
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
