const Controller = require("egg").Controller;

class UserController extends Controller {
  async index() {  
    const { request, response, service } = this.ctx;
    try {
      this.ctx.validate(
        {
          username: { type: "string", required: true },
          password: { type: "password", required: true }
        },
        request.body
      );
      const body = request.body;
      response.body = await service.api.users.login(body);
    } catch (error) {
      response.body = error;
    }
  }

  async find() {
    const { response, service } = this.ctx;    
    response.body = await service.api.users.list();
  }

  async list() {
    const { response, service } = this.ctx;
    response.body = await service.api.users.list();
  }

  async update() {
    const { request, response, service } = this.ctx;
    this.ctx.validate(
      {
        username: { type: "string", required: true },
        password: { type: "password", required: true }
      },
      request.body
    );
    const body = request.body;
    response.body = await service.api.users.update(body);
  }

  async create() {
    const { request, response, service } = this.ctx;
    this.ctx.validate(
      {
        login_id: { type: "string", required: true },
        password: { type: "password", required: true },
        name: { type: "string", required: true },
        age: { type: "number", required: true },
        mobile: { type: "string", required: true },
        status: { type: "boolean", required: true }
      },
      request.body
    );
    const body = request.body;
    response.body = await service.api.users.create(body);
  }
}
module.exports = UserController;
