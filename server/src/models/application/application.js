const mongoose = require('mongoose'); 
const JobPost = require('../job/jobPost');

const applicationSchema = mongoose.Schema({
  // applicant personal details
  name: {
    type: String,
    required: true
  },
  jobSeekerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  jobPostId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'JobPost',
  },
  contact: {
    type: String, 
    required: true,
    validate(value) {
      if(value.length !== 10)
        return new Error("Invalid Contact Number");
    }
  }, 
  dob : {
    type: String,
    required: "DD-MM-YYYY"
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Location'
  }, 
  // educational details
  qualification: [{
    type: {
      type: String,
    },
    school: {
      type: String,
    },
    percent: {
      type: Number,
    },
    board: {
      type: String,
    }
  }],
  experience: {
    job: {
      type: String,
    },
    year: {
      type: String,
    }
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Skill',
  }],
  photo: {
    type: String,
  },
  currentStatus: {
    type: String
  },
  languages: [{
    type: String,
  }],
  status: {
    type: String, 
    default: 'pending'   // pending, approved, rejected
  }
},  {
  timestamps:true
})

applicationSchema.statics.saveApplication = async ({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills, currentStatus, photo, languages}) => {
  try {
    let applicationInfo = await Application.findOne({ jobSeekerId, jobPostId });
    if(applicationInfo)
      throw new Error("You already applied for this job.");

    applicationInfo = await Application.create({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills, currentStatus, photo, languages});
    applicationInfo.save();
    const result = await Application
      .findById(applicationInfo._id)
      .populate('location')
      .populate('skills')
      .populate('jobSeekerId')
      .populate('jobPostId')
    return result;
  } catch (error) {
    return error;
  }
};


applicationSchema.statics.returnSeekerdetails = async (jobId) => {
  try {
    const details = await Application
      .find({jobPostId:jobId})
      .populate('location')
      .populate('skills')

      const findJobPost = await JobPost.findById(jobId).populate('jobTypeId')
      
      const jobType = findJobPost.jobTypeId.jobTitle; 
      const salary = findJobPost.salary;
      
      const result = [];
    for(const ele in details) {
      const { jobPostId,  jobSeekerId, name,  contact,  dob, experience, currentStatus,  photo,  languages, status,createdAt } = details[ele];
      const location = {
        locality: details[ele].location.locality,
        city: details[ele].location.city,
        district: details[ele].location.district,
        state: details[ele].location.state,
        pincode: details[ele].location.pincode
      }
      const skills = details[ele].skills.map(skill => skill.skillName);
      result.push({ jobSeekerId, jobPostId, jobType,salary, name, contact, dob,location, experience, currentStatus, skills, photo, languages, status,createdAt });
    }
    return result;
  } catch (error) {
    return error;
  }
}

const Application = mongoose.model('Application', applicationSchema)
  
module.exports = Application;
  
