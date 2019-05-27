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
    if (!req.session) return res.sendStatus(401)
    if (!req.session.passport) return res.sendStatus(401)
    const user = req.session.passport.user
    const compare = options.permission.some(e => e === user.permission)
    if (compare) return next()
    else return res.sendStatus(401)
  }
}
