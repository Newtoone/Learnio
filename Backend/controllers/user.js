const User = require("../model/User");

exports.getAllUsers = async(req,res)=>{
    try{
        const users = await User.find();
        res.status(200).send({ message : "User fetched" , users });
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

exports.createUser = async (req,res)=>{
    // res.send("Create User Controller");
    console.log(req.body);
    const reqData = req.body;
    try{
        const user = new User({ 
            name: reqData.name ,
            email: reqData.email , 
            password: reqData.password , 
            phoneNumber: reqData.phoneNumber 
        });
        await user.save();
        res.status(200).send({message: "User created",
            data: reqData
        });
    }
    catch(error){
        res.status(500).send({ error : error });
    }
}

exports.updateUser = async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findByIdAndUpdate(id,req.body,{new : true});
        console.log(user);
        res.status(200).send({message: "User Update" , data : user});
    }
    catch(error){
        console.log(error);
        res.status(500).send({ error : error });
    }
};

exports.deleteUser = async (req,res)=>{
    const id = req.params.id;
    try{
        const user = await User.findByIdAndDelete(id);
        res.status(200).send({message: "User Deleted" , data : user});
    }
    catch(error){
        console.log(error);
        res.status(500).send({ error : error });
    }
};

exports.login = async (req,res) =>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(user == null){
            console.log("Not found");
            res.status(401).send({message: "User not found "});
        }
        else{
            console.log("User found");
            const isMatch = await User.compare(password,user.password);
            // if(password == user.password ){
            if(isMatch){
                console.log("Password matched");
                res.status(200).send({message: "User matched "});
            }
            else{
                console.log("Password not matched");
                res.status(401).send({message:"Password incorrect"});
            }
        }
    }
    catch(error){
        res.status(500).send({error:error});
    }
}