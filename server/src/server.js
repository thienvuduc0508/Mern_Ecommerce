const express = require('express')
const env = require('dotenv')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin/auth")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const cartRoutes = require('./routes/cart')

env.config()

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@react-blog.crrpc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{   
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}
    ).then(() => console.log(`DB connected`))

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname,'uploads')))
app.use('/api', authRoutes)
app.use('/api', adminRoutes)
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)
app.use('/api', cartRoutes)

app.listen(process.env.PORT, () => {
console.log(`server running on port ${process.env.PORT}`);
})