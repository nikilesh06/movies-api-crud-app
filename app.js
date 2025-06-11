const express = require('express');
const app = express();
const PORT = 6969;

app.get('/',(req,res)=>{
    res.send('Welcome to the home page')
});

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})