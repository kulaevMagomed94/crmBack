const mongoose = require('mongoose');


const firmSchema = mongoose.Schema({
 name:{
    type:String,
    default:''
 }
});

const Firm = mongoose.model('Firm',firmSchema)

module.exports = Firm