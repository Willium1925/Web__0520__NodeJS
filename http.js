import http from 'http';
// import http from 'http'; 是因為在package有添加  "type": "module" 才能用

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!");

    console.log("http://localhost:8080" + req.url);

    res.end();
}).listen(8080);

console.log("本機端的網址: http://localhost:8080");