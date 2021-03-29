const express = require('express');
const path = require('path');




const app = express();



app.get('/',(req,res)=>{
	res.send('Hello')
});

app.get('/api/employees',(req,res)=>{
   
    res.send('[{"id":"1","name":"Erick Oyugi","department":"ICT Department"},{"id":"2","name":"Jane Doe","department":"Procurement Department"},{"id":"3","name":"John Doe","department":"Procurement Department"}]')

});
app.listen(3000,()=>console.log("lIstening on port 3000"));

