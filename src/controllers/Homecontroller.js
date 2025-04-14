import db from "../models/index";
import CRUDservice from "../services/CRUDservice";
let getHomePage = async (req, res) => {
    try{
    let data = await db.User.findAll();
    
    return res.render('homepage.ejs', {
        data : JSON.stringify(data)
    });
   }catch(e){
     console.log(e);
   }
};
let getCRUD = async (req, res) => {
    return res.render('crud.ejs');
};
let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    console.log('--------------------');
    console.log(data);
    console.log('--------------------');
    res.render('displayCRUD.ejs', {
        dataTable: data
    });
};
let postCRUD = async (req, res) => {
    
    let message = await CRUDservice.CreateNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
    
};
let editCRUD = async (req, res) => {
    let user = await CRUDservice.getUserInfoById(req.query.id);
    console.log('user', user);
    return res.render('editCRUD.ejs', {
        user: user
    });
};
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await CRUDservice.updateUserData(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
};
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    let allUser = await CRUDservice.deleteCRUD(id);
    return res.render('displayCRUD.ejs', {
        dataTable: allUser
    });
};
module.exports = {
    getHomePage : getHomePage,
    getCRUD : getCRUD,
    postCRUD : postCRUD,
    displayGetCRUD : displayGetCRUD,
    editCRUD : editCRUD,
    putCRUD : putCRUD,
    deleteCRUD : deleteCRUD,
};