const product = require("../models/product")
const getAllProductsStatic = async(req,res)=>{
    const products = await product.find({})
    return res.status(200).json({products,nbHits:3})
}
const getAllProducts = async(req,res)=>{
    const {featured,company,name,sort,fields,numericFilter} = req.query
    const queryObject = {}
    if(featured){
        queryObject.featured = featured === "true"?true:false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = {$regex :name,$options : "i"}
    }
    if(numericFilter){
        const operatorMap= {
            ">=":"$gte",
            "<=":"$lte",
            ">":"$gt",
            "<":"$lt",
            "=":"$eq",
        }
        
        const regEx = /(>=|<=|>|<|=)/g;
        const options = ["price","rating"]
        let filters = numericFilter.replace(regEx,(match)=>`-${operatorMap[match]}-`)
        filters = filters.split(",").forEach((item) => {
            const [field,operator,value] = item.split("-")
            if(options.includes(field)){
                queryObject[field] = {[operator]: Number(value)}
            }
        });
        
    }
    console.log(queryObject)
    let result = product.find(queryObject)
    if(sort){
        const sortList = sort.split(",").join(" ")
        result = result.sort(sortList)
    }else{
        result = result.sort("createdAt")
    }
    if (fields){
        const selectList = fields.split(",").join(" ")
        result = result.select(selectList)
    }
    const limit = Number(req.query.limit) || 10
    const page = Number(req.query.page) || 1
    const skip = (page-1) * limit
    result = result.limit(limit).skip(skip)
    console.log(queryObject)
    const products = await result
    // if(products.length=== 0 ){
    //     return res.status(404).json({msg : `no data whit value : ${JSON.stringify(req.query)}`})
    // }
    return res.status(200).json({products,nbHits : products.length})
}
module.exports = {
    getAllProducts,
    getAllProductsStatic
}
