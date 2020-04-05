const Controller = require("egg").Controller;
/**
 * @Controller user
 */
class UserController extends Controller {
  async index() {
    const { request, response, service } = this.ctx;
    try {
      this.ctx.validate(
        {
          username: { type: "string", required: true },
          password: { type: "password", required: true },
        },
        request.body
      );
      const body = request.body;
      response.body = await service.api.users.login(body);
    } catch (error) {
      response.body = error;
    }
  }

  /**
   * @summary 用户信息
   * @description 用户信息
   * @router get /api/users/{id}
   * @request path integer *id
   * @response 200 queryUserResponse successed
   */
  async find() {    
    const { params, response, service } = this.ctx;
    this.ctx.validate(
      {
        id: { type: "integer", required: true },
      },
      params
    );
    response.body = await service.api.users.find(params.id);
  }

  /**
   * @summary 用户列表
   * @description 用户列表
   * @router get /api/users
   */
  async list() {
    const { response, service } = this.ctx;
    response.body = await service.api.users.list();
  }

  async update() {
    const { request, response, service } = this.ctx;
    this.ctx.validate(
      {
        username: { type: "string", required: true },
        password: { type: "password", required: true },
      },
      request.body
    );
    const body = request.body;
    response.body = await service.api.users.update(body);
  }
  /** 注意这段描述
   * @summary 创建用户
   * @description 创建用户，记录用户账户/密码/类型
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { request, response, service } = this.ctx;
    this.ctx.validate(
      {
        login_id: { type: "string", required: true },
        password: { type: "password", required: true },
        name: { type: "string", required: true },
        age: { type: "number", required: true },
        mobile: { type: "string", required: true },
        status: { type: "boolean", required: true },
      },
      request.body
    );
    const body = request.body;
    response.body = await service.api.users.create(body);
  }
}
module.exports = UserController;
