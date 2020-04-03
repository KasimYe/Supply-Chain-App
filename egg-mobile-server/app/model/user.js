module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    login_id: { type: STRING(30), unique: true },
    password: {
      type: STRING(30),
      set(val) {
        return require("bcrypt").hashSync(val, 10);
      }
    },
    name: STRING(30),
    age: INTEGER,
    mobile: { type: STRING(11), unique: true },
    status: BOOLEAN,
    created_at: DATE,
    updated_at: DATE
  });

  return User;
};
