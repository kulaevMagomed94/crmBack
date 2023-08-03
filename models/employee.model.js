const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    email:{
        type:String,
        default:''
    },
    firstName:{
        type:String,
        default:''
    },
    secondName:{
        type:String,
        default:''
    },
    login:{
        type:String,
        default:''
    },
    password:{
        type:String,
        default:''
    },
    image:{
        type:String,
        default:''
    },
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Category"
    },
    task:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Task"
    },
    team:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"Team"
    },
    role:{
        type:String,
        default:'employee'
    }

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;