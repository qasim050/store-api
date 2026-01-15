require("dotenv").config()
require("express-async-errors")
const errorMiddleware = require("./middleware/error-handler.js")
const notFoundMiddleware = require("./middleware/not-found.js")
const productsRouter = require("./routes/products")
const express = require("express")
const app = express()

const connectDB = require("./db/connect")

app.use(express.json())

app.get("",(req,res)=>{
    res.send("<h1>this is my app</h1>")
})

app.use("/products",productsRouter)
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000

start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`app is listening on port : ${port}`))
    } catch (error) {
        console.log(error)
    }
} 
start()