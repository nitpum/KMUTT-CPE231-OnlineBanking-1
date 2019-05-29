import { strict } from "assert";
import { stringify } from "querystring";

const mongoose = required('mongoose')

const chequeSchema = mongoose.Schema({
    chequeId: {type: String,required:true},
    byOrganizationId: {type: String,required:true},
    accountId: {type: String,required:true},
    accountNo: String,
    amount: String,
    payFor: String,
    type: {type: String,enum: ['CHASH','ORDER','ETC']},
    Status: {type: String,enum: ['ACTIVE','REJECT','ETC']},
    drawee: String,
    created: Date,
    drawDate: Date

})

module.exports = mongoose.model('cheque',chequeSchema)