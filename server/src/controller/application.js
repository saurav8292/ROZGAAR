const JobPost = require("../models/job/jobPost");
const Application = require("../models/application/application");

const seekerAppn = async (req, res) => {
  const body = req?.body;
  console.log(body);
  try {
    const { userId } = body;
      const totalAppn = await Application.find({ jobSeekerId: userId }).populate({
        path: "jobPostId",
        populate: {
          path: "jobTypeId",
        },
      });
    const result = [];
    for (const ele in totalAppn) {
      const vv = totalAppn[ele];
      const appnId = vv._id;
      const jobType = vv.jobPostId.jobTypeId.jobTitle;
      const jobAppliedAt = vv.createdAt;
      const jobStatus = vv.status;
      const jobSalary = vv.jobPostId.salary;
      const contact = vv.contact;

      result.push({
        appnId,
        jobType,
        jobAppliedAt,
        jobStatus,
        jobSalary,
        contact,
      });
    }

    if (!result.length)
      res
        .status(401)
        .json({
          message: "Something is not right",
          error: "No applications found.",
        });

    result.sort((a, b) => {
      return b.jobAppliedAt - a.jobAppliedAt;
    });

    res.status(200).json({ result });
  } catch (err) {
    console.log(typeof err);
    res
      .status(402)
      .json({ message: "Something Went Wrong", error: err?.message });
  }
};

//extract all the posted jobs by employer
const extractEmpPosts = async (req, res) => {
  const body = req?.body; 
  // console.log(body);
  const jobPostId = req?.query?.jobPostId;
  try {
    const { userId } = body;

    const totalJobPost = await JobPost.find({ postedBy: userId })
      .populate("jobTypeId")
      .populate("locationId")
      .populate("skillsReq")

    const result = [];

    for (const ele in totalJobPost) {
      const temp = totalJobPost[ele];
      const id = temp._id;
      const title = temp.jobTypeId.jobTitle;
      const dateOfPost = temp.createdAt;
      const vacancy = temp.vacancyCnt;
      const skills = temp.skillsReq.skillName;
      const salary = temp.salary;
      const whoCanApply = temp.whoCanApply;
      const languages = temp.languages;
      const highestQual = temp.highestQual;
      const jobDescription = temp.jobDescription;
      const loc = temp.locationId;
      const skillName = temp.skillsReq[0].skillName;
      const jobTitle = temp.jobTypeId.jobTitle
      console.log(skillName);
      const location = {
        locality: loc.locality,
        state: loc.state,
        district: loc.district,
        city: loc.city,
        pincode: loc.pincode,
      };

      result.push({
        id,
        title,
        dateOfPost,
        vacancy,
        skills,
        location,
        salary,
        whoCanApply,
        languages,
        highestQual,
        jobDescription,
        skillName,
        jobTitle
      });
    }

    if (!result.length)
      return res
        .status(402)
        .json({
          message: "Something is not right",
          error: "No Jobs Created by you!",
        });

    return res.status(200).json({ result });
  } catch (err) {
    console.log(err);
    res.status(402).json({ message: "Something went wrong", error: err });
  }
};

//url : http://localhost:7866/api/empAppn/jobPostId
const empAppn = async (req, res) => {
  const body = req?.body; 
  const jobPostId = req?.params?.jobPostId;
 
  let result = [];
  try {
     // for knowing seeker details for a particular job post
    if(jobPostId) {
      result = await Application.returnSeekerdetails(jobPostId);
    } else {
      const { empId } = body;
      const totalJobPost = await JobPost.find({ postedBy: empId });
      for (const ele in totalJobPost) {
         const res = await Application.returnSeekerdetails(totalJobPost[ele]._id);
         for (const t in res) result.push(res[t]);
      }
   }
    if (!result.length)
      return res
        .status(400)
        .json({
          message: "Something is not right",
          error: "No Job Seeker Applied for this job",
        });
    res.status(200).json({result});
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ message: "Something went wrong", error: err?.message });
  }
};

module.exports = {
  seekerAppn,
  empAppn,
  extractEmpPosts,
};
