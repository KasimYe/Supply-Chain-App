module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    login_id: { type: STRING(30), unique: true },
    password: {
      type: STRING(30),
      set(val) {
        this.setDataValue("password", require("bcrypt").hashSync(val, 10));
      }
    },
    name: STRING(30),
    age: INTEGER,
    mobile: { type: STRING(11), unique: true },
    status: BOOLEAN
  });

  return User;
};
