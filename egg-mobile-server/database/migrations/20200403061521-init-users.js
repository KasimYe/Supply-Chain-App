"use strict";

module.exports = {
  // 在执行数据库升级时调用的函数，创建 users 表
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING, BOOLEAN } = Sequelize;
    await queryInterface.createTable("users", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      login_id: { type: STRING(30), unique: true },
      password: STRING(30),
      name: STRING(30),
      age: INTEGER,
      mobile: { type: STRING(11), unique: true },
      status: BOOLEAN,
      created_at: DATE,
      updated_at: DATE
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async queryInterface => {
    await queryInterface.dropTable("users");
  }
};
