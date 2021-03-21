const Cart = require('../models/cart')

exports.addItemToCart = (req, res) => {

    Cart.findOne({ user: req.user._id }).exec((err, cart) => {
        if(err) return res.status(400).json({err})
        if(cart){
            // if cart already exits then update cart by quantity
            const product = req.body.cartItems.product          
            const item = cart.cartItems.find(c => c.product == product)
            let condition, update
            // Kiem tra item them vao neu cung 1 sp thi update quantity
            if(item){
                condition = {"user": req.user._id, "cartItems.product":product }
                update = {
                    "$set": {
                        "cartItems.$": {
                            ...req.body.cartItems,
                            quantity: req.body.cartItems.quantity + item.quantity 
                        }
                    }
                }
                Cart.findOneAndUpdate(condition, update).exec((err, _cart) => {
                    if(err) return res.status(400).json({ err })
                       if(_cart) {
                           return res.status(201).json({cart: _cart})
                       }
                })
            } else {
                condition = { user: req.user._id }
                update = {
                    "$push": {
                        "cartItems": req.body.cartItems
                    }
                }
                Cart.findOneAndUpdate(condition, update).exec((err, _cart) => {
                    if(err) return res.status(400).json({ err })
                    if(_cart) {
                        return res.status(201).json({cart: _cart})
                    }
                })    
            }           
        } else {
            // if cart not exits then create a new cart
            const cart = new Cart({
                user: req.user._id,
                cartItems: [req.body.cartItems]
            
               })
            
               cart.save((err, cart) => {
                   if(err) return res.status(400).json({ err })
                   if(cart) {
                       return res.status(201).json({cart})
                   }
               })
        }
    })
}