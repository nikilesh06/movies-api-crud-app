const readData =  (req,res)=>{
    res.send('Reads a data')

};

const insertData = (req,res)=>{
    res.send('creates a data')
};

const updateData = (req,res)=>{
    res.send('Update the data');

};

const deleteData = (req,res)=>{
    res.send('Deletes the data');
};

module.exports = {
    readData,
    insertData,
    updateData,
    deleteData
}