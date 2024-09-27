const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverconfig.js');


const startAndSetupServer=async()=>{
    const app=express();
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`);
      
    })
} 
startAndSetupServer();