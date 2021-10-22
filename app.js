const express = require('express');
const app = express();
app.use(express.static('public'));
const path = require('path');
const port = process.env.port || 3000;
app.listen(port,()=>{
    console.log("server funcionando")
 });
/*const port = procserver.listen(port, ()=>{
   console.log("start server");
});ess.env.PORT || 3000;*/
 3000;
/*app.listen(3002, ()=>{
    console.log('Servidor funcionando');
});*/

 app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
 });

  app.get('/views/register.html', (req,res)=>{
     res.sendFile(path.join(__dirname, '/views/register.html'))
    
});
  
app.get('/views/login.html', (req,res)=>{
    res.sendFile(path.join(__dirname, '/views/login.html'))
 });
 