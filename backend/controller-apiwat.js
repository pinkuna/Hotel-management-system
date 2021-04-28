const express = require('express')
const router = express.Router()

const multerConfig = require('./config/multer-config')  //จะเป็นตัวแปรที่ชื่อว่า photo ถูก return มาจาก multer_config
//ต้องติดตั้ง multer ก่อนใช้เพื่อการ uplode file โดยการยิง require แบบ body form data //สามารถเลือกดักจับแบบแต่ละ app ได้
const multer = require('multer')
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)  // ใส่ multerConfig.config ถ้าไม่ใส่จะรับได้แค่ text // keyUpload เอาตัวปรจาก multer_config
// upload = multer() เมื่อเป็น function เปล่า เวลาเรียกใช้ต้องใส่ upload.non() ถ้าไม่ก็แค่ upload เวลาเรียกใช้

const db = require('./models')   //การใช้ file database บนไฟล์นี้ เรียกใช้งานผ่าน file index (การติดต่อฐานข้อมูล)

// การที่ใช้ router จัดการเส้นทางต้องเปลี่ยน app เป็น router

//การใช้ order
router.get('/product', async (req, res) => {   //ถ้าไม่เติม async await จะไม่สามารถเรียกใช้ฐานข้อมูลหน้าเว็บได้ // await is run asynconuch
    const result = await db.ReportProblems.findAll({  //เอาคำว่า Products มาจากไฟล์ ที่อยู่ใน models --> Products คือการเรียกใช้ฐานข้อมูล
        order: [
            ['id', 'DESC'] //'DESC' จากมากไปน้อย
        ],
        //attributes: ['name', 'id'] //การใส่ค่าข้อมูลแค่ที่ต้องการ
    });
    res.json(result)  // result เป็นแบบ json การส่งธรรมดาไม่ได้ 
});

// การใช้ where
router.get('/product/try/:number', async (req, res) => {   // ทำเหมือนด้านบนแต่ใช้ try
    try {
        const result = await db.ReportProblems.findOne({  //ที่ findAll สามารถโยนค่า paramiter แบบ object ได้ สามารถจัดการการแสดงผลของฐานข้อมูล
            where: {  //ต้องเป็นลักษณะ object {}
                id: req.params.number  //req.params.number เอาเลขมาจาก url //แล้วเอาเลขที่ได้ไปแสดงผลเป็นเลข id ถ้ามีจะแสดงผล ถ้าไม่มีจะ Product not found
            }
        });
        if (result) {   // การใช้ where ควรจะต้องมี if else
            res.status(200).json(result)  //ใช้ send ก็ได้
        }
        else {
            res.status(404).json({ message: 'Product not found' })
        }
        //res.status(200).send(result)  //ใช้ send ก็ได้?? //ไม่น่าได้
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

router.post('/product', (req, res) => {    // upload ไปใส่ด้านล่าง
    //app.post('/product/config/:id', upload, (req, res)=>{    // ใช้ในการดักจับ require ที่ส่งมาแบบรูปภาพ ใช้ที่เก็บไฟล์เป็น file config --> multer_config.js

    upload(req, res, function (err) { //เพิ่มนี้มาจากเว็บ multer-npm -->Error handling แล้วแกไขบันทัดบนที router.post
        if (err instanceof multer.MulterError) {
            console.log('error: ' + JSON.stringify(err));   // ใส่ JSON.stringify ครอบ err
        } else if (err) {
            console.log('error: ' + JSON.stringify(err));
        }

        const fileName = req.file ? req.file.fieldname : undefined  //อยากรู้ว่าไฟล์นี้จะออกมาเป็นยังไง //การเพื่มเงื่อนไขคือใส่ ? เป็นจริง : เป็นเท็จ
        res.send(`post product : ${req.params.id}, ${fileName}`)
    })
});

router.post('/product/new', (req, res) => {
    upload(req, res, async function (err) {   //เติม aysnc เข้าไปเพื่อใช้ await
        if (err instanceof multer.MulterError) {
            console.log('error: ' + JSON.stringify(err));
            return res.status(500).json({ message: err })    //การใส่ return เข้าไปคือ ถ้ามันทำงานบันทัด rueturn แล้วมันจะส่งค่านี้ออกไปแล้วไม่ทำบันทัดข้างล่าง
        } else if (err) {
            console.log('error: ' + JSON.stringify(err));
            return res.status(500).json({ message: err })
        }


        //const name = req.body.name //ใน postman จะมีการส่งค่ามาเป็น name : apiwat //ตัวแปร name = apiwat
        //const stock = req.body.stock
        //const price = req.body.price
        //const data ={
        //name,stock,price
        // }

        //const name1= [1,2,3,4]
        //const name2= [1,5]
        //const name3 = [...name1, name2] // name3 = [1,2,3,4,1,5]
        const data = {
            ...req.body,
            //image:req.file ? req.file.fieldname : undefined // ถ้ามีการ requir มาแบบ file image จะมีค่าเป็นชื่อไฟล์นั้น //ถ้ามาเป็น text จะได้ค่า null
            image: req.file ? req.file.filename : undefined // เปลี่ยนจาก fieldname เป็น filename //จะได้ชื่อแปลกๆยาวๆ

        }
        try {
            const product = await db.ReportProblems.create(data)  //สร้างข้อมูลลง database
            res.status(201).json(product)  //201 คือการสร้างข้อมูลลงฐาน database ถูกต้อง
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    })
});


router.put('/product/new/:number', async (req, res) => {    // put คือการแก้ไข จำเป็นจะต้องมี id ด้วย  post คือการสร้างใหม่   //พาทชื่อเดียวกันแต่แยกกันด้วย http method
    try {
        const result = await db.ReportProblems.findOne({
            where: {
                id: req.params.number
            }
        });
        if (!result) {   // เครืองหมายตกใจหมายถึง การไม่มีตัว result
            return res.status(404).json({ message: 'Product not found' })
        }

        updateProduct(req, res, result) // เรียกใช้ฟังชั่น

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.delete('/product/new/:number', async (req, res) => {  // เอามาจาก put
    try {
        const deleted = await db.ReportProblems.destroy({  //ค้นจากตัวไพมารี่คี
            where: {
                id: req.params.number
            }
        });
        if (!deleted) {   // เครืองหมายตกใจหมายถึง การไม่มีตัว result
            return res.status(404).json({ message: 'Product not found' })
        }
        else {
            return res.status(204).json({ message: 'Producr delect' })
        }
        updateProduct(req, res, result) // เรียกใช้ฟังชั่น

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

function updateProduct(req, res, product) {  //เอาเนี้อ code ข้างในมาจาก ด้านบนที่ upload รูปภาพ
    upload(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            console.log('error: ' + JSON.stringify(err));
            return res.status(500).json({ message: err })    //การใส่ return เข้าไปคือ ถ้ามันทำงานบันทัด rueturn แล้วมันจะส่งค่านี้ออกไปแล้วไม่ทำบันทัดข้างล่าง
        } else if (err) {
            console.log('error: ' + JSON.stringify(err));
            return res.status(500).json({ message: err })
        }
        const data = {
            ...req.body,
            //image:req.file ? req.file.fieldname : undefined // ถ้ามีการ requir มาแบบ file image จะมีค่าเป็นชื่อไฟล์นั้น //ถ้ามาเป็น text จะได้ค่า null
            image: req.file ? req.file.filename : undefined // เปลี่ยนจาก fieldname เป็น filename //จะได้ชื่อแปลกๆยาวๆ

        }
        try {
            const [updated] = await db.ReportProblems.update(data, {  //updated ถูกถอดออกมาในลักษณะ array
                where: {
                    id: product.id
                }
            })

            if (updated) {
                const updateProduct = await db.ReportProblems.findByPk(product.id)  //เราอยากรู้ว่ามันอัพเดทได้จริงไหม โดยการค้นหาแบบ ไพรมารี่คี
                res.status(200).json(updateProduct)
            }
            else {
                throw new Error('Product not found') //ถ้าอัพเดทไม่สำเร็จ ให้เกิดเอฟเฟกชั่น
            }

        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    })
}


module.exports = router  //export เล้นทาง