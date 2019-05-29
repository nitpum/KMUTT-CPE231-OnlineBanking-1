const express = require('express')
const router = express.Router()

// models
const FavoriteModel = require('../../models/favorite')

router.get('/favorite', (req, res) => {
  /* list favorite */
})

router.post('/favorite', (req, res) => {
  /* list favorite */
  const { ref1, ref2, name } = req.body
  FavoriteModel
    .create({
      customerId: req.session.passport.user._id,
      ref1,
      ref2,
      name
    })
    .then(doc => res.json(doc))
    .catch(e => res.status(400).send(String(e)))
})

module.exports = router
