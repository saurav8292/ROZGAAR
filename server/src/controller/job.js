// {"_id":{"$oid":"60a7fb718e8adf320ce42b9a"},"jobTitle":"Driver","__v":{"$numberInt":"0"}}

const JobPost = require('../models/job/jobPost');
const JobType = require('../models/job/jobType');
const Application = require('../models/application/application');
const Location = require('../models/location');
const SkillSet = require('../models/skillSet'); 
const User = require('../models/user');

const defaultRoute = async (req, res) => {
  const jobs = await JobPost
    .find()
    .populate('jobTypeId')
    .populate('locationId')
    .populate('skillsReq')
  res.status(200).json(jobs);
}

const createJob = async (req, res) => {
  const body = req?.body;
  console.log(body);
  try {
    const {locality,whoCanApply,vacancyCnt,salary,postedBy,jobDescription,languages,city,district,state,pincode,title,skillsReq,highestQual} = body; 
    
    //storing the locationId returned by returnId function 
    const locationId = await Location.returnId({locality,city,district,state,pincode});
    
    const jobTypeId = await JobType.returnId(title);
    
    const skillSetIds = await SkillSet.returnIds(skillsReq); 
  
    
    const findUser = await User.findById(postedBy); 
    console.log(findUser);
    const job = await JobPost.saveJob({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillSetIds,jobDescription,highestQual});
    console.log(job);

    const jobId = job._id; 
    console.log(jobId);

    const user = await findUser.extDetailsEMP(jobId, null);
    user.save(); 
    console.log(user);
    const result = await user.whatToReturn();
    console.log(result);
    return res.status(200).json(result);

  } catch (error) {
     console.log(error);
     res.status(500).json({ message: "Database error", error: error?.message }); 
  } 
}

const applyJob = async (req, res) => {
  const body = req?.body;
  console.log(body);
  try {
    const { name, jobSeekerId, jobPostId, contact, dob, locality, city, district, state, pincode, qualification, experience, skills, currentStatus, photo, languages } = body;

    const location = await Location.returnId({locality, city, district, state, pincode});
    const skills_ = await SkillSet.returnIds(skills);
    const applicationInfo = await Application.saveApplication({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills: skills_, currentStatus, photo, languages});
    
    const findUser = await User.findById(jobSeekerId);
    
    const appnId = applicationInfo._id;
    console.log("dob:"+dob);
    const user = await findUser.extDetailsJS({appnId,contact,skills,languages,dob,photo});
    user.save();

    const job = await JobPost.findById(jobPostId); 
    console.log('job = ' , job); 

    const findEMP = await User.findById(job.postedBy);
    console.log('findEMP = ' , findEMP); 
    
    // pushing application id to emp 
    const employer = await findEMP.extDetailsEMP(null , appnId);
    console.log('employer = ' , employer);
    
    employer.save();

    const result = await user.whatToReturn(); 
     
    res.status(201).json({result});

  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "Something went wrong.", error: error?.message});
  }
}

const findJob = async (req,res) => {
  const body = req?.body;
  console.log(body);
  try{
    const {jobType,city,state} = body; 
    const job = await JobType.findOne({jobTitle:jobType});
    console.log(job);
    if(!job)
      return res.status(400).json({message:"Something went wrong.", error:"job not exist"});
    const loc = await Location.find({city,state});
    console.log(loc);
    if(!loc.length)
      return res.status(400).json({message:"Something is not right.", error:"location does not exist"});
    const requiredJobs = []; 
    for(const ele in loc) {
      const getjob = await JobPost.findByCredentials(job._id,loc[ele]._id);
      console.log(getjob);
      for(const ele1 in getjob){
        requiredJobs.push(getjob[ele1]);
      }
    } 
    console.log(requiredJobs);
    if(requiredJobs.length > 0)
      return res.status(200).json({result:requiredJobs});
    return res.status(401).json({message:"Something is not right." , error:"No job found on that Location"}); 
  } catch (error){
    console.log(err); 
    res.status(401).json({ message: "Something went wrong.", error: error?.message });
  }
}


module.exports = {
  createJob,
  applyJob,
  findJob,
  defaultRoute
}