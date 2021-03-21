const express = require('express')
const { requireSignin, adminMiddleware } = require('../common_middleware')
const { createProduct } = require('../controller/product')
const Product = require('../models/product')
const multer = require('multer')
const router = express.Router()
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

router.post('/product/create', requireSignin, adminMiddleware,upload.array('productPictures') ,createProduct)



module.exports = router