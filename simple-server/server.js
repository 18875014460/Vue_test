var http = require('http');
const urlModule = require('url');

//创建一个http服务器
const server = http.createServer()

//监听tttp 服务器的request请求

server.on('request', function (req, res) {
    // const url = req.url;
    const { pathname: url, query } = urlModule.parse(req.url, true);

    if (url === '/getScript') {
        // var scriptStr = 'show()'


        var data = {
            name: 'xxx',
            age: 18,
            gender: 'gril'
        }

        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr);
    } else {
        res.end('404')
    }

})

// 监听端口
server.listen(3000, function () {
    console.log('server listen at http:http://127.0.0.1:3000')
});
