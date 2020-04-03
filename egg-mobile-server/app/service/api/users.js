const Service = require("egg").Service;
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
}
module.exports = UserService;
