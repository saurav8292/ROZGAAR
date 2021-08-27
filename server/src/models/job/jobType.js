const mongoose = require('mongoose');

const jobTypeSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
    lowercase: true
  }
})


jobTypeSchema.statics.returnId = async (jobTitle) => {
  try {
    const isJobType = await JobType.findOne({jobTitle});
    if(isJobType)
      return isJobType._id; 
    const newJobType = await JobType.create({jobTitle}); 
    newJobType.save(); 
    return newJobType._id;
  } catch (error) {
    return error
  }
};

const JobType = mongoose.model("JobType", jobTypeSchema);

module.exports = JobType;