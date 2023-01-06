const User = require("../models/User.js");
// const Experience = require("../models/Experience.js");
const getAllUsers = async(req, res) =>{
    let users;
    try{
        users = await User.find();
    }catch(err){
        console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "no records found"});
    }
    return res.status(200).json({users});
}

const getUserById = async(req,res) =>{
    const id = req.params.id;
    let user;
    try{
        user = User.findById(id);
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"no user found"});
    }
    return res.status(200).json({user});
}

const deleteUser = async (req,res) => {
    const id = req.params.id;
    let user;
    try{
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if(!user){
        return res.status(404).json({message:"error deleting"});
    }
    return res.status(200).json(user);
}
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.deleteUser = deleteUser;