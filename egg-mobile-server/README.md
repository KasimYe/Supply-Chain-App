# mobile-server

供应链app服务端接口api

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### sequelize-cli
- `npx sequelize migration:generate --name=init-users`    
```javascript
    module.exports = {
        // 在执行数据库升级时调用的函数，创建 users 表
        up: async (queryInterface, Sequelize) => {
            const { INTEGER, DATE, STRING } = Sequelize;
            await queryInterface.createTable('users', {
            id: { type: INTEGER, primaryKey: true, autoIncrement: true },
            name: STRING(30),
            age: INTEGER,
            created_at: DATE,
            updated_at: DATE,
            });
        },
        // 在执行数据库降级时调用的函数，删除 users 表
        down: async queryInterface => {
            await queryInterface.dropTable('users');
        },
    };
```
- `npx sequelize db:migrate`
```javascript
    module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        age: INTEGER,
        created_at: DATE,
        updated_at: DATE,
    });

    return User;
    };
```