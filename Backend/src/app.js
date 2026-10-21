const express = require('express');
const {adminauth, userauth}=require("./Middlewares/auth.js");
const app = express();
const port = 5000;

// app.get("/",(req,res)=>{
//    res.send("d")
// });
app.use('/admin',adminauth);

app.use('/user/login',(req, res, next) => {`  `
  
    res.send("logied in as user");
});
app.use('/admin/getalldata',(req, res, next) => {
  
    res.send("got all data");
});
app.use('/admin/deleteuser',(req, res, next) => {
  
    res.send("logied in as user");
});

app.use('/user', userauth ,(req, res, next) => {
   
    next();
});


app.use("/user",(req,res,next)=>{
    next();
}
,(req,res,next)=>{
    next();
}
,(req,res)=>{
    res.send("got user data");
}
);



// app.get("/user/:username/:password", (req, res,next) => {
  
  
//   console.log("r1")
//   console.log(req.params);
//   res.send("done");
  
// },

// (req,res)=>{
//   console.log("wtf");
//   res.send("done2");
// });
// app.post(/^\/.*c$/, (req, res) => {
//   console.log(req.parems);
//   res.send("data posted");
// });
// // app.use('/', (req, res) => {
// //   res.send('main page');
// // });

// // app.use( "/hello", (req,res)=>{
// //     res.send("hello");
// // })

app.listen(port, () => {
  console.log(`server is lisning on port: ${port}`);
});



