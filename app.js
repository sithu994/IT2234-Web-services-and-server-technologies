const express = require('express')
const app = express();
const port = 3001;

app.get('/stu',(req,res)=>{
    res.send(students);
});

app.get('/stu:id',(req,res)=>{
    const id = req.params.id
    const result = students.map((student)=>student.id==id);
    res.send(result);
})
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})