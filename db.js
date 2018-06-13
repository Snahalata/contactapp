const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactdb',(err)=>{
    if (!err) console.log("Connected to mongodb");
    else console.log(" error connecting to mongodb");
});

module.exports = mongoose;