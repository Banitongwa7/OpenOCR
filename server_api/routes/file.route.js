const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        message: 'Server is running hello bro !'
    })
})

module.exports = router