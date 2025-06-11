const express = require('express');
const app = express();
const PORT = 6969;
const routeHandler = require('./routes/movies.router.js');

app.use('/movies',routeHandler);


app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})