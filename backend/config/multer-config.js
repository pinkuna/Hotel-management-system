const multer = require('multer')
const fs = require('fs') // ใช้สร้างไฟล์


// การที่จะนำไฟล์นี้ออกไปเรียกใช้ใน server.js จะต้องมีไฟล์ที่ใช้ในการ export
module.exports = multerConfig = {  //ตั้งชื่อว่า multerConfig
    config: {  //เป็น object แบบ config

        // เอา code มาจากเว็บ multer - npm ส่วนของ Storage -- DiskStorage
        storage: multer.diskStorage({  //ลักษณะแบบ object ต้องเปลี่ยน = เป็น :

            // destination คือปลายทาง
            destination: function (req, file, next) {    // ถ้าจะใช้เป็นแบบแอร์โร่ (req, file, cb) =>{} จาก function (req, file, cb) {} //require มาชื่อ file respon มาชื่อ next
                const folder = './images/'
                if (!fs.existsSync(folder)) { // ถ้าไม่มีไฟล์ที่ชื่อ images ให้สร้างไฟล์ขึ้นมา
                    fs.mkdirSync(folder)
                }
                next(null, folder)  //ส่ง next ออกไป
            },
            filename: function (req, file, next) {
                const ext = file.mimetype.split('/')[1]  //ระบุนามสกุล type arreyที่ 1
                next(null, file.fieldname+'-'+Date.now()+'.'+ext)   // `${file.fieldname} - ${Date.now()}.${ext}`
            }
        }),
        limits: { fileSize: 1024 * 1024 * 5 },  // เอามาจากเว็บไว้จำกัดขนาด limit 

        fileFilter: (req, file, next) => {
            const image = file.mimetype.startsWith('image/') //ยอมรับเฉพาะที่เป็นรูป
            if(image){ // เช็คว่าเป็นรูปไหม
                next(null, true)
            }
            else{
                next({message:'File type not supported'},false)  //message เป็น json
            }

          }

    },
    keyUpload: 'photo'  //รูปจะมาในตัวแปรที่ชื่อว่า photo
}