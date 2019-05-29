const mongoose = require('mongoose')

const CardSchema = mongoose.Schema9({
    CardId: {type: String,require:true},
    AccountId: {type: String,require:true},
    Holder: String,
    Expired: Date,
    CVV: String,
    PIN: String,
    PaymentDate: Date,
    IsOnline: Boolean

})

module.exports = mongoose.model('card', cardSchema)