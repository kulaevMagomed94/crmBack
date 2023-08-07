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
    image:[{
        type:String,
        default: 'https://www.google.com/search?q=user&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjEsJ7vhcqAAxVeQPEDHdH8DRwQ0pQJegQIDBAB&biw=1536&bih=739&dpr=1.25#imgrc=NsbJtj8KS-qKkM'}
    ],
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