const mongoose=require('mongoose');

async function connectMongo(){
    try{
mongoose.connect("mongodb+srv://sweta:TiBbvrJKbpIJBjCc@cluster0.rfoyt1a.mongodb.net/gramora?appName=Cluster0"),{
    useNewUrlParser:true,
    useUnifiedTopology:true

}git 
     console.log(" connected to mongodb");


    }catch(error){
        console.log(error);
        process.exit(1);
    }


    }
module.exports=connectMongo;
