const http = require("http");

const PORT = process.env.PORT || 3001;

function json(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(payload, null, 2));
}

function handler(request, response) {
  const url = new URL(request.url, `http://localhost:${PORT}`);

  if (request.method === "GET" && url.pathname === "/health") {
    json(response, 200, {
      status: "ok",
      service: "student-marketplace-api",
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/version") {
    json(response, 200, {
      service: "Student Marketplace API",
      version: process.env.APP_VERSION || "0.1.0"
    });
    return;
  }

  json(response, 200, {
    name: "Student Marketplace API",
    problem: "Students need safer, more organised ways to list, search, save, and manage second-hand campus marketplace items.",
    docs: "See README.md and docs/ for the build roadmap."
  });
}

if (require.main === module) {
  http.createServer(handler).listen(PORT, () => {
    console.log(`Student Marketplace API running on http://localhost:${PORT}`);
  });
}

module.exports = { handler };
