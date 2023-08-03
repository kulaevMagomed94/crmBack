const mongoose = require('mongoose');
const employeeSchema = mongoose.Schema({
    email:{
        type:String,
        default:''
    },
    firsName:{
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
    }

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;