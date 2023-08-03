const mongoose = require("mongoose")

const projectSchema = mongoose.Schema({
    name:String,
    idCustomer:String,
    emailCustomer:String,
    addressCustomer:String,
    
})

const Project = mongoose.model('Category', projectSchema)
module.exports = Project;
