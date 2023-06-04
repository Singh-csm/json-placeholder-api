const express = require("express");
const app = express();

const axios = require("axios");
const PORT = 3000;
app.use(express.json());


app.get("/", (req, res)=>{
   res.status(200).send({status:true, data: "data"}) 
    console.log("Welcome")
});

app.get("/api",(req, res)=>{
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{
    
        
            res.json(response.data)
       
        
    })
    .catch((err)=>console.log(err))
})

app.listen(PORT,()=>console.log("Listen on port:3000"))