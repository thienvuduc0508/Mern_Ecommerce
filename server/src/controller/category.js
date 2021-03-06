
const slugify = require('slugify')
const Category = require("../models/category")



function createCategories(categories, parentId= null){
    const categoryList = []
    let category
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined)
    } else{
        category = categories.filter(cat=>cat.parentId == parentId)
    }
    for (let cate of category ){
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: createCategories(categories, cate._id)
        })
    }
    return categoryList
}


exports.addCategory = (req, res) => {

    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name)
    }
    if(req.file){
        categoryObj.categoryImage = process.env.API + '/public' + req.file.filename
    }
    if(req.body.parentId){
        categoryObj.parentId = req.body.parentId
    }
    const category = new Category(categoryObj)
    category.save((err, data) =>{
        if(err) return res.status(400).json({err})
        if(data) return res.status(201).json({data})
    })
}

exports.getCategories = (req, res) => {
    Category.find({}).exec((err, categories) => {
        if(err) return res.status(400).json({err})
        if(categories){
            const categoryList = createCategories(categories)
            res.status(200).json({categoryList})
        }
    })
}