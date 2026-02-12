const express=require('express');
const cors=require('cors');
const router=require('./routes/departmentRoutes.js');

const app=express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/api/departments',router);
// default route
app.use('/',(req,res)=>{
    res.status(200).json({
        message:'Hello World from server',
        success:true
    });
});



const PORT=3000;
app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);  
});