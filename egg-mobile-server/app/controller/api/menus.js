const Controller = require("egg").Controller;

class MenuController extends Controller {
  async list() {
    const { response, service } = this.ctx;
    response.body = await service.api.menus.list();
  }
}

module.exports = MenuController;
