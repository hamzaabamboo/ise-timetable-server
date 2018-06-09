import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import router from './routes'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
// Creates and configures an ExpressJS web server.
export class App {
    public app: express.Application

    public static bootstrap(): App {
        return new App()
    }
    /**
     * Configure Express middleware.
     */
    constructor() {
        this.app = express()
        this.middleware()
        this.routes()
        mongoose.connect(process.env.DB_URL as string)
    }
    private middleware(): void {
        this.app.use(logger('dev'))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(cookieParser())
    }
    private routes(): void {
        this.app.use('/', router)
        // catch 404 and forward to error handler
        this.app.use((req, res, next) => {
            const err = new Error('Not Found')
            res.status(404)
            next(err)
        })

        // error handler
        this.app.use((err, req, res, next) => {
            // set locals, only providing error in development
            res.locals.message = err.message
            res.locals.error = req.app.get('env') === 'development' ? err : {}

            // render the error page
            res.status(err.status || 500)
            res.send(`Error: ${err.message}`)
        })
    }

    /**
     * Load all API endpoints
     *      -- create route endpoints here
     *      -- check the sample
     */
}
