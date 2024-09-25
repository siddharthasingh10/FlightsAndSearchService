const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverconfig.js')

const startAndSetupServer=async()=>{
    const app=express();
const PORT=3000;
    app.listen(PORT,()=>{
        console.log(`server is running at ${PORT}`);
    })
} 
startAndSetupServer();