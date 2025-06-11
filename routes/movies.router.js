const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Reads a data')

})
router.post('/',(req,res)=>{
    res.send('creates a data')
});

router.put('/',(req,res)=>{
    res.send('Update the data');

})
router.delete('/',(req,res)=>{
    res.send
})
