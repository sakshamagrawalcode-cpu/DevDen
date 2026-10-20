const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use( "/test", (req,res)=>{
    res.send("hellow");
})
app.listen(3000, () => {
  console.log(`server is lisning on port: ${port}`);
});