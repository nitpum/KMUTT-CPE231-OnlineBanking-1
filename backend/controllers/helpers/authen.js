// module.exports = (req, res, next, permission, failPath) => {
//   console.log(req.session)
//   return next()
// }

/**
 * @param  {Object} options - setting for authen middleware
 * @param  {String} options.permission - permission
 * @param  {String} options.unauthorizedPath - redirect after fail login
 * @param  {String} options.authorizedPath - redirect after success login
 */
module.exports = function (options) {
  return (req, res, next) => {
    if (!req.session) return res.redirect(options.unauthorizedPath)
    const user = req.session.passport.user
    if (user.permission === options.permission) return next()
    else return res.redirect(options.unauthorizedPath)
  }
}
