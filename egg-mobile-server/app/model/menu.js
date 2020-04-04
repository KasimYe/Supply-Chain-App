module.exports = (app) => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const Menu = app.model.define("menu", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(30), allowNull: false, unique: true },
    src: STRING(500),
    ico: STRING(30),
    is_hide: { type: BOOLEAN, allowNull: false, defaultValue: false },
  });

  return Menu;
};
