const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  skillName: {
    type: String,
    lowercase: true
  }
})
skillSchema.statics.saveSkill = async(skill) =>{ 
  try {
    const isSkillExist = await Skill.findOne({skillName: skill});
    if(isSkillExist)
      return isSkillExist;  
    const newSkill = await Skill.create({skillName: skill}); 
    console.log(newSkill);
    newSkill.save(); 
    return newSkill;
  } catch (error) {
    return error
  }
  
};

skillSchema.statics.returnIds = async(skillsReq) =>{
  try {
    const Ids = [];  
    for(const ele in skillsReq) {
      const  skill = await Skill.saveSkill(skillsReq[ele]);
      Ids.push(skill._id); 
    }
    return Ids;
  } catch (error) {
    return error
  }
};

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;