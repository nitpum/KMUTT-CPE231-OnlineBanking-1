const mongoose = require('mongoose')

const NotificationSchema = mongoose.Schema({
    notificationId: {type: String,require:true},
    customerId: {type: String,require:true},
    detail: String,
    type: {type: String ,enum: ['ALERT','WARN','INFO','ETC']},
    date: Date,
    read: Boolean
})

module.exports = mongoose.model('notification', notificationSchema)
