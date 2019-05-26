module.exports = (passport) => {
  require('../models/admin/passport')(passport)
  require('../models/staff/passport')(passport)
  require('../models/customer/passport')(passport)
}
