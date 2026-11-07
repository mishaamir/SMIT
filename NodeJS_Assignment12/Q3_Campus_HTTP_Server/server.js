const http = require("http");

const PORT = 3000;

// Create HTTP server
const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {

        res.statusCode = 200;
        res.end("Welcome to Jinnah University for Women!");

    } 
    
    else if (req.url === "/about") {

        res.statusCode = 200;
        res.end("Our university provides quality education to students.");

    } 
    
    else if (req.url === "/courses") {

        res.statusCode = 200;
        res.end("Available Courses:\n1. Software Engineering\n2. Computer Science\n3. Data Science");

    } 
    
    else if (req.url === "/students") {

        res.statusCode = 200;
        res.end("Sample Students:\n1. Ali\n2. Sara\n3. Ahmed");

    } 
    
    else {

        res.statusCode = 404;
        res.end("Page Not Found");

    }

});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});