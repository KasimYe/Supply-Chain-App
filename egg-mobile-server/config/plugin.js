"use strict";

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  validate: {
    enable: true,
    package: "egg-validate",
  },
  cors: {
    enable: true,
    package: "egg-cors",
  },
  sequelize: {
    enable: true,
    package: "egg-sequelize",
  },
  swaggerdoc: {
    enable: true,
    package: "egg-swagger-doc-feat",
  },
};
