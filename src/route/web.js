import express from "express";
import Homecontroller from "../controllers/Homecontroller";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/home', Homecontroller.getHomePage );
    router.get('/', (req, res) => {
        return res.send('Hello Giang')
    });
    return app.use("/", router);
}

module.exports = initWebRoutes;
