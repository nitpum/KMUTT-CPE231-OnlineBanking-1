module.exports = app => {
  app.use('*', (req, res) => {
    res.send('online banking system')
  })
}
