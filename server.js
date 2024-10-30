require('dotenv').config();
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const { Server } = require("socket.io");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();

    const httpServer = createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    });

    const io = new Server(httpServer, {
      cors: {
        origin: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://deploy-preview-13--loquacious-pastelito-9eaca0.netlify.app/",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });
    

    io.on("connection", (socket) => {
      console.log("New client connected");


      socket.on("newComment", (data) => {
        io.emit("newComment", data);
      });

      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });

    httpServer.listen(port, () => {
      console.log(
        `> Server listening at http://localhost:${port} as ${
          dev ? "development" : process.env.NODE_ENV
        }`
      );
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
})();
