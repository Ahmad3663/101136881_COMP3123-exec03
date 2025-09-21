const http = require("http");
const employeeModule = require("./Employee");

const hostname = "127.0.0.1";
const port = 8081;

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Employee API</h1>");
    }
    else if (req.url === "/employee") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(employeeModule.getAllEmployees()));
    }
    else if (req.url === "/employee/names") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(employeeModule.getEmployeeNames()));
    }
    else if (req.url === "/employee/totalsalary") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ totalSalary: employeeModule.getTotalSalary() }));
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});