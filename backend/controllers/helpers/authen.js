// module.exports = (req, res, next, permission, failPath) => {
//   console.log(req.session)
//   return next()
// }

/**
 * @param  {Object} options - setting for authen middleware
 * @param  {Array} options.permission - permission
 * @param  {String} options.unauthorizedPath - redirect after fail login
 * @param  {String} options.authorizedPath - redirect after success login
 */
module.exports = function (options) {
  return (req, res, next) => {
    if (!req.session) return res.redirect(options.unauthorizedPath)
    if (!req.session.passport) return res.redirect(options.unauthorizedPath)
    const user = req.session.passport.user
    const compare = options.permission.some(e => e === user.permission)
    console.log(compare)
    if (compare) return next()
    else return res.redirect(options.unauthorizedPath)
  }
}
