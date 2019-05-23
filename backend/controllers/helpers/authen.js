// module.exports = (req, res, next, permission, failPath) => {
//   console.log(req.session)
//   return next()
// }

module.exports = () => {
  return (req, res, next) => {
      console.log('authen')
    next()
  }
}

