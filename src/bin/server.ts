import App from "../app";

/**
 * Import middleware
 */
import * as bodyParser from "body-parser";
import loggerMiddleware from "../middleware/logger";
import cookieParser from "cookie-parser";

const arrMiddlewares: any = [bodyParser.json(), bodyParser.urlencoded({ extended: true }), cookieParser(), loggerMiddleware];

/**
 * Import routes
 */
import HomeRouter from "../routes/home.route"

const arrRoutes: any = [HomeRouter];

/**
 * Init Web-site
 */
const app = new App({
	port: Number(process.env.PORT) || 3000,
	routes: arrRoutes,
	middleWares: arrMiddlewares,
});

/**
 * Start web-site
 */
app.listen();