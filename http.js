import http from 'http';
// import http from 'http'; 是因為在package有添加  "type": "module" 才能用

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Hello World!");

    console.log("http://localhost:8080" + req.url);

    res.end();
}).listen(8080);

console.log("本機端的網址: http://localhost:8080");


import Parser from 'rss-parser';
let parser = new Parser();
// 定義一個非同步函數
async function fetchData() {
    let feed = await parser.parseURL('https://www.cwa.gov.tw/rss/Data/cwa_warning.xml');
    console.log(feed.title);
    feed.items.forEach(item => {

        console.log(item.title + ':' + item.link+':'+item.content);
    });

}
// 調用非同步函式
fetchData();
console.log("立刻執行");