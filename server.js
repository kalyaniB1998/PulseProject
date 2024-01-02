const mongoose=require("mongoose");
const express=require("express");
const cors=require("cors");
const app=express();
const multer=require("multer");
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null,`${Date.now()}_${file.originalname}`);
    },
  });
  
  const upload = multer({ storage: storage });

app.use('/uploads', express.static('uploads'));

let connectToDB=()=>{
    try{
        mongoose.connect("mongodb+srv://gjyothi779:gjyothi779@cluster0.yl0tdmr.mongodb.net/PulseProject?retryWrites=true&w=majority");
        console.log("Successfully connected to Database");

    }catch(err){
        console.log(err);
        console.log("Unable to connect to Database");
    }
}
let userSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:String,
    city:String,
    profilePic:String,
    email:String,
    password:String,
});
let User=new mongoose.model("user",userSchema);

app.post("/signup",upload.none(),async(req,res)=>{
    console.log("received data");
    console.log(req.body);
    console.log(req.file);
    try{
        let newUser=new User({
          firstName:req.body.firstName, 
          lastName:req.body.lastName,
          mobileNumber:req.body.mobileNumber,
          city:req.body.city,
          profilePic:req.body.profilePic,
          email:req.body.email,
          passWord:req.body.passWord,
        });
    
     let userData=await User.find().and({email:req.body.email})   
    
     if(userData.length>0){
      res.json({status:"Failure",msg:"User account already exists"});
     }else{
      await User.insertMany([newUser]);
     console.log("User created successfully");
    
     res.json({status:"Success",msg:"User created successfully"});
     }
    }catch(err){
    console.log("Unable to insert user into DB");
    
    res.json({status:"Failure",msg:"Unable to create user"});
    
    };
    
})
app.listen(5555,()=>{
    console.log("Listening port 5555");
});
connectToDB();
