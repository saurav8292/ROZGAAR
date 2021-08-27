const mongoose  = require('mongoose');

// async await method
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        console.log("Atlas Database connected!");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;
