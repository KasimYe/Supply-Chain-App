const Service = require("egg").Service;

class MenuService extends Service {
  async list() {
    const { model } = this.ctx;
    return await model.Menu.findAll();
  }
}
module.exports = MenuService;
