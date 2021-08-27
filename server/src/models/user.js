const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Location = require("./location");
const Application = require("./application/application");
require('dotenv').config();

const userSchema = mongoose.Schema({
  //attributes common 
  contact:{
    type:String,
  },
  userType : { 
    type: Boolean, 
    required: "userType is required"
  },
  resetToken: {
    type:String,
  },
  expireToken: {
    type: Date,
  }, 
  name: {
    type: String,
    required: 'name is required.',
  },
  email: {
    type: String,
    required: "email is required",
    unique: true,
    // validator to validate whether email is valid or not
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    // this will make sure that minimum length of password should be 8
    minLength: [8, "password length should be at least 8 chars"],
  },
  
  //attributes for jobseekers
  skills: [{
    type:String, 
  }], 
  dob:{
    type:String
  },
  photo:{
    type:String
  },
  totalJobApplied:{
    type:Number,
    default:0,
  },
  totalJobPending:{
    type:Number,
    default:0
  }, 
  totalJobApproved:{
    type:Number,
    default:0
  },
  languages:[{
    type:String,
    lowercase:true,
  }],
  currSalary:{
    type:Number,
    default:0
  },
  jobsApplied:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Application',
  }],  

  
  //attributes for employee
  jobsPosted:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'JobPost', 
  }], 
  newAppn:[{  //we will keep all the applications applied for the job and then frotend can extract new ones
    type:mongoose.Schema.Types.ObjectId,
    ref:'Application', 
  }], 
  totalAppn:{
    type:Number,
    default:0
  },
  appnPending:{
    type:Number,
    default:0
  },
  appnApproved:{
    type:Number,
    default:0
  },

}, {
  timestamps:true
})

// methods accessible using model object are declared as {Schema}.methods.{function-name},
// & called as {object-name}.{function-name}

// use to generate the token
userSchema.methods.genToken = async function () {
  const user = this;
  const token = jwt.sign(
    { id: user?._id.toString() },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "24hr" }
  );

  return token;
};

// methods accessible using schema are declared as {Schema}.statics.{function-name}, 
// & called as {model-name}.{function-name}

// use to find the user using email & password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  console.log('user', user);
  if (!user) {
    throw new Error("Account not exist with this email.");
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid credentials.");
  }
  return user;
};

// use to save the user
userSchema.statics.saveUser = async (body) => {
  let user = await User.findOne({ email: body?.email });
  if (user) {
    throw new Error("Account already exist with this email.");
  }   
  if(body?.password !== body?.confirmPassword) {
    throw new Error("Passwords don't match.");
  }
  user = await User.create({name: body?.name, email: body?.email, password: body?.password, userType: body?.userType});
  return user;
}

// model middleware (run just before and after an event occur)

// run before saving document
userSchema.pre("save", async function (next) {
  const user = this;
  if(user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }
  // this indicates the end of middleware, if something went wrong function runs forever
  next();
})

// used to return document as per userTypes
userSchema.methods.whatToReturn = async function () {
  const user = this;
  
  //for common
  const {contact,
    userType,
    resetToken,
    expireToken,
    name,
    createdAt,
    updatedAt,
    _id} = user; 
  
    //for employer
  if(user.userType){
      const {email,
        jobsPosted,
        newAppn,
        totalAppn,
        appnPending,
        appnApproved} = user; 

        return {
          _id,
          contact,
          userType,
          resetToken,
          expireToken,
          name,
          email,
          jobsPosted,
          newAppn,
          totalAppn,
          appnPending,
          appnApproved,
          createdAt, 
          updatedAt};
  } 
   
  //for jobSeeker 
  const {
    skills,
    totalJobApplied,
    totalJobPending,
    totalJobApproved,
    languages,
    currSalary,
    jobsApplied,
  } = user; 
  
  return {
    _id,
    contact,
    userType,
    resetToken,
    expireToken,
    name,
    skills,
    totalJobApplied,
    totalJobPending,
    totalJobApproved,
    languages,
    currSalary,
    jobsApplied,
    createdAt,
    updatedAt
  };

}; 

userSchema.methods.extDetailsEMP = async function(jobPostId,appnId) {
  const user = this; 
  // jab naya job post kiya jayega 
  if(jobPostId) {
    user?.jobsPosted.push(jobPostId);
  }
  // jab koi applicant job apply karega
  else if(appnId) {
    user?.newAppn.push(appnId);
    user.totalAppn++; 
    user.appnPending++; 
  }
  return user;
}

userSchema.methods.extDetailsJS = async  function ({appnId,contact,skills,languages,dob,photo}){
   const user = this; 
   
   user.jobsApplied.push(appnId);
   user.totalJobApplied++; 
   user.totalJobPending++; 
   user.contact = contact;

   const set = new Set(user.skills); 

   for(const ele in skills){
      if(!set.has(skills[ele].toLowerCase())){
          user.skills.push(skills[ele].toLowerCase());
      }
   }
   
   const setL = new Set(user.languages); 

   for(const ele in languages){
    if(!setL.has(languages[ele].toLowerCase())){
        user.languages.push(languages[ele].toLowerCase());
    }
   } 
  
   console.log('After editing: ' + user.languages); 

   user.dob = dob;
   user.photo = photo;
 
   return user;
}

const User = mongoose.model("User", userSchema);

module.exports = User;
