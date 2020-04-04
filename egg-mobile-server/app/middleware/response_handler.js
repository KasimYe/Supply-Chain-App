module.exports = () => {
  return async function responseHandler(ctx, next) {
    try {
      await next();
      const body = ctx.body;
      const response = ctx.response;
      //console.log("responseHandler:", ctx);
      if (response.status === 200 && body) {
        if (body.status && body.message && body.code && body.name) {
          ctx.status = body.status;
          ctx.body = {
            status: body.status || 500,
            message: body.message || "服务器异常",
            data: null,
          };
        } else {
          ctx.body = {
            status: 200,
            message: "success",
            data: body,
          };
        }
      } else {
        ctx.body = {
          status: response.status,
          message: response.message,
          data: null,
        };
        ctx.status = response.status;
      }
    } catch (error) {
      if (error) {
        ctx.body = {
          status: error.status || 500,
          message: error.message || "服务器异常",
          data: null,
        };
      } else {
        ctx.body = { status: 500, message: "未知错误", data: null };
      }
    }
  };
};
