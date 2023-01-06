const Experience = require("../models/Experience.js");
const City  = require("../models/City.js");

const getExperienceByCityName = async(req, res) =>{
    let experiences;
    let city
    try{
        city = await City.find({displayName: req.params.cityName})
    }catch(err){
        console.log(err)
    }
    if(!city){
        return res.status(404).json({message:"no such City exist"})
    }
    return res.status(200).json({city});
}
const getAllExperience = async(req,res) =>{
    let experiences;
    try{
        experiences = await Experience.find();
    }catch(err){
        console.log(err);
    }
    if(!experiences){
        return res.status(404).json({message:"no records Found"});
    }
    return res.status(200).json({experiences});
}

const addNewExperience = async(req, res) =>{
    let newExp;
    console.log("entered controller")

    try{
         newExp = new Experience({
            displayName: req.body.displayName,
            cityId:req.body.cityId,
            startingPrice:req.body.startingPrice,
            highlights:[req.body.highlights],
            nextAvailable:req.body.nextAvailable,
            duration:req.body.duration,
            thumbnailSrc: "null", 
        });
        await newExp.save();
        console.log("yes")
    }catch(err){
        console.log(err)
    }
    if(!newExp){
        return res.status(404).json({message: "no New Experience added"});
    }
    return res.status(200).json({newExp})
}

const updateExperience = async (req, res) =>{
    const id = req.body.id;
    console.log("entered controller update")
    try{
        Experience.findByIdAndUpdate(id, {
           displayName: req.body.displayName,
            cityId:req.body.cityId,
            startingPrice:parseInt(req.body.startingPrice),
            highlights:[req.body.highlights],
            nextAvailable:req.body.nextAvailable,
            duration:req.body.duration,
            thumbnailSrc: "null",  
       });
       
   }catch(err){
       console.log(err)
   }
   /* if(!updateExp){
       return res.status(404).json({message: "no New Exp added"});
   } */
   return 
}

const getExperienceById = async(req,res) => {
    const id = req.params.id;
    console.log("in")
    let experience;
    try{
        console.log("in2")
        experience =await Experience.findById(id);
        console.log(experience)
    }catch(err){
        console.log(err);
    }
    if(!experience){
        return res.status(404).json({message: "Experience not found"});
    }
    return res.status(200).json({experience});
}

const getExperienceByName = async(req, res) =>{
    const experienceName = req.params.experienceName;
    let experience;
    try{
        experience = await Experience.findOne({displayName: experienceName});
    }catch(err){
        console.log(err);
    }
    if(!experience){
        return res.status(404).json({message: "no expereince Found"});
    }
    return res.status(200).json({experience});
}

const deleteExperience = async (req,res) =>{
    const id = req.params.id;
    let experience;
    try{
        experience = await Experience.findByIdAndDelete(id)
    }catch(err){
        console.log(err)
    }
    if(!experience){
        return res.status(404).json({message:"no experience found"});
    }
    return res.status(200).json("experience");
}

exports.getAllExperience = getAllExperience;
exports.getExperienceById = getExperienceById;
exports.getExperienceByName = getExperienceByName;
exports.deleteExperience = deleteExperience;
exports.getExperienceByCityName = getExperienceByCityName;
exports.addNewExperience = addNewExperience;
exports.updateExperience = updateExperience;