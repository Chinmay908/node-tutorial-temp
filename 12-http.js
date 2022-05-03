const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to my home page");
    res.end();
  } else if (req.url === "/about") {
    res.write("This is about page");
    res.end();
  } else {
    res.write(`
    <h1>404 Error Not Found</h1>
    <a href="/">Go to home page</a>`);
    res.end();
  }
});

server.listen(5000);
