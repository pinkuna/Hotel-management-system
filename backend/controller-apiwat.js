const express = require('express')
const router = express.Router()
const multerConfig = require('./config/multer-config')

const multer = require('multer')
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)

//localhost:1150
router.get('/', function (req, res) {
    res.send('Hello World')
});

router.get('/sayhi', (req, res) => {
    res.send('iBlurBlur')
});
router.get('/sayhi/:pimName', (req, res) => {
    res.send(`iBlurBlur ${req.params.pimName}`)
});


router.get('/product', (req, res) => {
    if ((typeof req.query.name == 'undefined') || (typeof req.query.price == 'undefined')) {
        res.send('undefined name & price')
    }
    res.send(`${req.query.name} ${req.query.price}`)
});

router.post('/product/testPOSTandGET', (req, res) => {
    res.send(`post product`)
});
router.get('/product/testPOSTandGET', (req, res) => {
    res.send(`get product`)
});

//post สามารถเหน็บข้อมูลแบบ body ได้ // body?
router.post('/product/:id', upload, (req, res) => {
    console.log(req.body);
    res.send(`post product : ${req.params.id}`)
});
router.post('/product/config/:id', (req, res) => {

    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.log('error: ' + JSON.stringify(err));   // ใส่ JSON.stringify ครอบ err
        } else if (err) {
            console.log('error: ' + JSON.stringify(err));
        }

        const fileName = req.file ? req.file.fieldname : undefined
        res.send(`post product : ${req.params.id}, ${fileName}`)
    })
});

module.exports = router