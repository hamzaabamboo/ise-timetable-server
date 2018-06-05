"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = __importDefault(require("./routes"));
// Creates and configures an ExpressJS web server.
class App {
    static bootstrap() {
        return new App();
    }
    /**
     * Configure Express middleware.
     */
    constructor() {
        // todo: prepare your db credentials, promise modifiers etc here
        // -->Init: routes
        this.app = express_1.default();
        this.app.use("/", routes_1.default);
        this.middleware();
        console.log("Yeyyy.... Express in online");
        console.log("Now configure your routes and everything should work");
        // todo: prepare your db here
    }
    middleware() {
        this.app.use(morgan_1.default("dev"));
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(cookie_parser_1.default());
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
}
exports.App = App;
