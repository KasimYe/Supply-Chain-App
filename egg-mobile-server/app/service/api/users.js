const Service = require("egg").Service;
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const errors = require("egg-errors");

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
    // try {
    return await model.User.create(user);
    // } catch (error) {
    //   throw new errors.E500(error);
    // }
  }
  async find(id) {
    const { model } = this.ctx;
    return await model.User.findByPk(id);
  }
  async login(body) {
    const { model } = this.ctx;
    const user = await model.User.findOne({
      where: { login_id: body.username }
    });
    if (user) {
      const isPasswordValid = bcrypt.compareSync(body.password, user.password);
      if (isPasswordValid) {
        const token = JWT.sign(
          { id: String(user.id) },
          this.app.config.auth.secret
        );
        return { user, token };
      } else {
        throw new errors.E401("密码错误");
      }
    } else {
      throw new errors.E401("用户不存在");
    }
  }
}

module.exports = UserService;
