//MVC PATTERN
const express = require('express');
const router = express.Router();
const regController = require('../controllers/authAccount');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, path.join(__dirname, '../public/images'))
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)) //get file extension
    }
});
// comment
const upload = multer({ storage: storage });

const imageUpload = upload.fields([{ name: 'image' }])

router.post('/register', imageUpload, regController.register);



module.exports = router;

