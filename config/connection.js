const mongoose=require('mongoose')

const connection_string= process.env.CONNECTIONSTRING
console.log(connection_string);

mongoose.connect(connection_string).then((res)=>{
    console.log("MONGOOS ATLAS CONNECTED SUCCESSFULLY WITH PFSERVER");

}).catch(err=>{
    console.log("MONGOOSE ATLAS CONNECTION FAILED");
    console.log(err);
     
})



