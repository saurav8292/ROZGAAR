const mongoose  = require('mongoose');

// async await method
const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log("Database connected!");
    }
    catch(err){
        console.log(err);
    }
}

// promise method
// const DBconnection  = ()=>{

//     mongoose.connect(process.env.MONGODB_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,                    
//         useFindAndModify: false
//     }).then(()=>{
//         console.log("Db connected!")
//     }).catch((err)=>{
//         console.log("Not connected")
//     })

// }

module.exports = {dbConnection};
