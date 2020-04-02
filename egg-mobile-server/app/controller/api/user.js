const Controller = require("egg").Controller;

class UserController extends Controller {
  async index() {
    const { request, response, service } = this.ctx;
    console.log("body:", request.body);
    try {
      this.ctx.validate(
        {
          username: { type: "string", required: true },
          password: { type: "password", required: true }
        },
        request.body
      );
      const body = request.body;
      response.body = {
        userid: 123,
        username: body.username,
        password: body.password
      };
    } catch (error) {
      response.body = error;
    }
  }
}
module.exports = UserController;
