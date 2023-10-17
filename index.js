const http = require('http');
const url = require('url');
const querystring = require('querystring');
const port = 5000;

function requestHandler(req, res) {

    let reqUrl = url.parse(req.url);
    let params = querystring.parse(reqUrl.query);
    console.log(params);
    console.log(reqUrl.pathname);



    switch (reqUrl.pathname) {
        case '/cats':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.write('Hello kittens');
            break;
        case '/dogs':
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(`
                <h1>Hello Dogs</h1>
            `);
            break;
        default:
            res.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            break;
    }

    res.end();
}

const app = http.createServer(requestHandler)

app.listen(port, () => console.log(`Server is listening on port ${port}...`));