const express = require('express');
const router = express.Router();


//Handles view
router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('registration');
})

router.get('/it', (req, res) => {
    res.render('boracay');
})



module.exports = router;