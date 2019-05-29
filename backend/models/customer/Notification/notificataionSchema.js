const mongoose = require('mongoose')

const NotificationSchema = mongoose.Schema({
    NotificationId: {type: String,require:true},
    CustomerId: {type: String,require:true},
    Detail: String,
    Type: {type: String ,enum: ['ALERT','WARN','INFO','ETC']},
    Date: Date,
    Read: Boolean
})

module.exports = mongoose.model('notification', notificationSchema)
