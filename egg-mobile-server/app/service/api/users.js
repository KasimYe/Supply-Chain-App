const Service = require("egg").Service;
const bcrypt = require("bcrypt");

class UserService extends Service {
  async list() {
    const { model } = this.ctx;
    return await model.User.findAll();
  }
  async update(user) {
    const { model } = this.ctx;
    return await model.User.update(user);
  }
  async create(user) {
    const { model } = this.ctx;
    return await model.User.create(user);
  }
  async login(body) {
    const { model } = this.ctx;
    const user = await model.User.findOne({
      where: { login_id: body.username }
    });
    if (user) {
      const isPasswordValidate =bcrypt.compareSync(body.password, user.password);
      if (isPasswordValidate) {
        return user;
      }
    }
    return { message: "false" };
  }
}

module.exports = UserService;
