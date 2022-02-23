const fs = require('fs');

const useRoutes = function () {
  // 读取当前目录，遍历除index.js以外的文件
  fs.readdirSync(__dirname).forEach(file => {
    if (file === 'index.js') return;
    // 拿到所有文件
    const router = require(`./${file}`);
    // 对所有中间件进行注册
    this.use(router.routes());
    this.use(router.allowedMethods());
  })
}

module.exports = useRoutes;
