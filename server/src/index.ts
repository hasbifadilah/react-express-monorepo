import "reflect-metadata";
import express from "express";
import cors from "cors";
import { join } from "path";

const main = async (): Promise<void> => {
  const APP_NAME = "My App.";
  const port = 8080;
  const app = express();
  const clientPath = "../../client/build";

  app.use(cors());

  //#region API ROUTES

  app.get("/api", (req, res) => {
    res.send(`Hello ${APP_NAME}, From server`);
  });

  //#endregion

  //#region CLIENT

  app.use(express.static(join(__dirname, clientPath)));

  // Serve the HTML page
  app.get("*", (req: any, res: any) => {
    res.sendFile(join(__dirname, clientPath, "index.html"));
  });

  //#endregion

  // Start the Express server
  app.listen(port, () => {
    console.log(`app '${APP_NAME}' started at http://localhost:${port}`);
  });
};

main();
