const express = require('express')
const { addCategory, getCategories} = require('../controller/category')
const { requireSignin, adminMiddleware } = require('../common_middleware')
const router = express.Router()
const multer = require('multer')
const shortid = require('shortid')
const path = require('path')
const { join } = require('path')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, shortid.generate() + '-' + file.originalname)
    }
  })

  const upload = multer({ storage })


router.post('/category/create', requireSignin, adminMiddleware, upload.single('categoryImage'),addCategory)
router.get('/category', getCategories)


module.exports = router