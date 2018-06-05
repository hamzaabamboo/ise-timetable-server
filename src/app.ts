import express from "express";
import path from "path";
import logger from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import router from "./routes";

// Creates and configures an ExpressJS web server.
export class App {
  public app: express.Application;

  public static bootstrap(): App {
    return new App();
  }
  /**
   * Configure Express middleware.
   */
  constructor() {
    // todo: prepare your db credentials, promise modifiers etc here
    // -->Init: routes
    this.app = express();
    this.app.use("/", router);
    this.middleware();

    console.log("Yeyyy.... Express in online");
    console.log("Now configure your routes and everything should work");

    // todo: prepare your db here
  }
  private middleware(): void {
    this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      const err = new Error("Not Found");
      res.status(404);
      next(err);
    });

    // error handler
    this.app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get("env") === "development" ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.send(`Error: ${err.message}`);
    });
  }

  /**
   * Load all API endpoints
   *      -- create route endpoints here
   *      -- check the sample
   */
}
