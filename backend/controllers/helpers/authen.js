/**
 * @param  {Object} options - setting for authen middleware
 * @param  {Array} options.permission - permission
 * @param  {String} options.unauthorizedPath - redirect after fail login
 * @param  {String} options.authorizedPath - redirect after success login
 * @param  {Array} options.bypassPath - bypass authorization
 */
module.exports = (options) => {
  return (req, res, next) => {
    if ((options.bypassPath || []).some(path => path === req.originalUrl)) return next()
    if (!req.session) return res.sendStatus(401)
    if (!req.session.passport) return res.sendStatus(401)
    const user = req.session.passport.user
    const compare = options.permission.some(e => e === user.permission)
    if (compare) return next()
    else return res.sendStatus(401)
  }
}
