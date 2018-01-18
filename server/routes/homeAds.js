const express = require('express')
const router = express.Router()
const Home = require('../controllers/homeAdsController')

router.get('/', Home)

router.post('/', Home)

router.put('/', Home)

router.delete('/', Home)

module.exports = router;
