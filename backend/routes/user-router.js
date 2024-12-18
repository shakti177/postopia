const express = require('express');    
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const { isLoggedIn } = require('../middlewares/isLoggedIn');


router.get('/', (req, res) => {
    res.send('Hello from the user router!');
});

router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/logout',isLoggedIn, logoutUser);

module.exports = router;
