import express from "express";
import Homecontroller from "../controllers/Homecontroller";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/home', Homecontroller.getHomePage );
    router.get('/crud', Homecontroller.getCRUD);
    router.post('/post-crud', Homecontroller.postCRUD);
    router.get('/get-crud', Homecontroller.displayGetCRUD);
    router.get('/edit-crud', Homecontroller.editCRUD);
    router.post('/put-crud', Homecontroller.putCRUD);
    router.get('/delete-crud', Homecontroller.deleteCRUD);
    return app.use("/", router);
}

module.exports = initWebRoutes;
