# Mock Server
 快速模拟数据服务
# 快速构建
1. git clone
2. yarn install 
3. yarn start(推荐使用VS Code 调试)
4.  open "http://localhost:3000" on browser
  

# 添加Mock 数据
1. 在app.js文件中添加引用
var users = require('./routes/users');

    app.use('/users', users);

2. 然后再routes中添加相对应的路由文件 users.js

3. 保持增量更新
# 相关网站
 MockJs：http://mockjs.com/examples.html