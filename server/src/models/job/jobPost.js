const mongoose = require('mongoose');
const JobType = require('./jobType'); 
const Location = require('../location');
const Skill = require('../skillSet');
const User = require('../user');  

const jobPostSchema = mongoose.Schema({
  jobTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'JobType'
  },
  whoCanApply:{
    type: String,
    required: true,
  }, 
  languages: [{
     type : String,
     required: true
  }],
  vacancyCnt: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Location'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  skillsReq: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Skill'
  }], 
  jobDescription:{
    type: String, 
  },
  highestQual:{
    type: String, 
  }
}, {
    timestamps:true
})

jobPostSchema.statics.saveJob = async ({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillSetIds,jobDescription,highestQual}) => {
     try {
      const newJob = await JobPost.create({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillsReq:skillSetIds,jobDescription,highestQual});      
      newJob.save(); 
      return newJob;
    } catch (error) {
      return error
    }
};

jobPostSchema.statics.findByCredentials = async (jobTypeId, locationId) => {
  console.log(jobTypeId, locationId)
  try {
    const findExactJob = await JobPost.find({jobTypeId,locationId})
      .populate('locationId')
      .populate('skillsReq')
      .populate('jobTypeId')
    return findExactJob;
  } catch (error) {
    return error
  }
};

const JobPost = mongoose.model("JobPost", jobPostSchema);
module.exports = JobPost;