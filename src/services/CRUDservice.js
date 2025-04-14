import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);


let CreateNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            await db.User.create({
                userName: data.userName,
                firstName: data.firstName,
                lastName: data.lastName,
                phoneNumber: data.phoneNumber,
                
                
                email: data.email,
                passWord: await hashUserPassword(data.passWord),
                
            })
            resolve('ok create a new user succeed!')
        }catch(e){
            reject(e);
        }
    })
    
}
let hashUserPassword = (password) => {
    return new Promise( async (resolve, reject) => {
        try{
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        }catch(e){
            reject(e);
        }
        
        
    })
}       

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try{
            let users = await db.User.findAll({
                raw: true,
                nest: true,
            }); 
            resolve(users);
        }catch(e){
            reject(e);
        }
    })
}
let editCRUD = async (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            if(user){
                user.userName = data.userName;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.phoneNumber = data.phoneNumber;
                user.email = data.email;
                await user.save();
                resolve();
            }else{
                resolve();
            }
        }catch(e){
            reject(e);
        }
    })
}
let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true,
            });
            if(user){
                resolve(user);
            }else{
                resolve({});
            }
        }catch(e){
            reject(e);
        }
    })
}
let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            if(user){
                user.userName = data.userName;
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.phoneNumber = data.phoneNumber;
                user.email = data.email;
                await user.save();
                let allUser = await db.User.findAll();
                resolve(allUser);
                resolve();
            }else{
                resolve();
            }
        }catch(e){
            reject(e);
        }
    })
}
let deleteCRUD = (userId) => {
    return new Promise(async (resolve, reject) => {
        try{
            await db.User.destroy({
                where: { id: userId }
            });
            let allUser = await db.User.findAll();
            resolve(allUser);
            
        }catch(e){
            reject(e);
        }
    })
}
module.exports = {
    CreateNewUser: CreateNewUser,
    getAllUser: getAllUser,
    editCRUD: editCRUD,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteCRUD: deleteCRUD,
    
}