const express=require('express')
const connectDB=require('./DB')
const proSchema=require('./productSchema')
const cors=require('cors')

connectDB();



const app=express();
app.use (cors)
app.use(express.json())

app.get('/cropdata',(req,res)=>{
    proSchema.find({})
    .then(cat=>{
        res.json(cat);
        console.log(cat);

    })
})

app.get('/sweta',(req,res)=>{
    res.send('Hello');
})
app.get('/movie',(req,res)=>{
   res.json({
      "movie_name":"Baghi",
      "thumail":"https://m.media-amazon.com/images/M/MV5BZTU5MDVmZDAtNjNlZS00NjU0LWE3MzAtMWYzZmI5MDE1Y2E3XkEyXkFqcGc@._V1_QL75_UX142.5_.jpg",
      "trailer_video":"https://youtu.be/BKOVzHcjEIo?si=jhK4GmsZynvYgxro"


   })
})

tree=()=>{
    console.log("port is running")
    
}



const port=5000;
app.listen(port,tree);