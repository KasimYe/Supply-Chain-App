module.exports = {
  user: {
    login_id: {
      type: "string",
      required: true,
      descption: "用户名",
      example: "test",
    },
    mobile: {
      type: "string",
      required: true,
      descption: "手机号码",
      example: "13800138000",
      format: /^1[34578]\d{9}$/,
    },
    password: {
      type: "string",
      required: true,
      descption: "密码",
      example: "123456",
    },
    realName: {
      type: "string",
      required: true,
      descption: "姓名",
      example: "djtao",
    },
    age: {
      type: "number",
      required: false,
      descption: "年龄",
      example: 25,
    },
    status: {
      type: "boolean",
      required: false,
      descption: "启用",
      example: true,
    },
  },
  menu: {
    id: { type: "string", description: "id 唯一键" },
    groupName: { type: "string", description: "组名" },
  },
};
