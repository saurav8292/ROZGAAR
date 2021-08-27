const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  locality: {
    type: String,
    required: true,
    lowercase: true
  },
  city: {
    type: String,
    required: true,
    lowercase: true
  },
  district: {
    type: String,
    required: true,
    lowercase: true
  },
  state: {
    type: String,
    required: true,
    lowercase: true
  },
  pincode: {
    type: Number,
    required: true,
    validate(value) {
      console.log(value)
      if (value.toString().length !== 6) {
        throw new Error("Pincode is Invalid");
      }
    },
  }
})

locationSchema.statics.returnId = async ({locality,city,district,state,pincode}) => {
  try {
    const isLocationExist = await Location.findOne({locality,city,district,state,pincode});
    if(isLocationExist)
      return isLocationExist._id; 
    const newLoc = await Location.create({locality,city,district,state,pincode}); 
    newLoc.save();
    return newLoc._id;
  } catch (error) {
    return error
  }
};
const Location = mongoose.model("Location", locationSchema);
module.exports = Location;