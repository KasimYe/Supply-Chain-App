/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1585707221695_6673";

  // add your middleware config here
  config.middleware = ["errorHandler", "auth", "responseHandler"];
  // 为中间件过滤请求
  config.auth = {
    enable: true,
    match: [/\/api\//],
    secret: config.keys,
  };
  config.errorHandler = {
    enable: true,
    match: [/\/api\//],
  };
  config.responseHandler = {
    enable: true,
    match: [/\/api\//],
  };

  //plugin set
  exports.validate = {
    convert: true,
    // validateRoot: false,
  };
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };
  config.bcrypt = {
    saltRounds: 10 // default 10
  }
  config.sequelize = {
    dialect: "mssql",
    host: "192.168.0.2",
    port: 1400,
    database: "egg-supply-chain-chunyu",
    username: "sa",
    password: "abc123",
    dialectOptions: {
      options: {
        trustServerCertificate: true
      }
    }
  };
  // config.sequelize = {
  //   username: "chunyukeji",
  //   password: "chunyukeji",
  //   database: "egg-supply-chain-chunyu",
  //   host: "127.0.0.1",
  //   dialect: "mysql",
  // };

  config.swaggerdoc = {
    dirScanner: "./app/controller",
    apiInfo: {
      title: "egg-swagger",
      description: "swagger-ui for egg",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    securityDefinitions: {
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false,
    // enableValidate: true,
    routerMap: false,
    enable: true,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
