const mongoose = require('mongoose')

const machineSchema = mongoose.Schema({
    MachineId: {type: String},
    BranchId: String,
    Zipcode: String,
    Address: String,
    Status: { type: String, enum: ['UP','DOWN','ETC'], required: true },
    Type: {type:String, enum:['ATM','CDM','ETC'],required:true},
    Bank1000: Number,
    Bank5000: Number,
    Bank100: Number
})

module.exports = mongoose.model('Machine', machineSchema) 