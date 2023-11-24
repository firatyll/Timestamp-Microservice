const express =require("express")
const app = express()
require("dotenv").config()
app.use(cors())

const routes = require("./routes/timestamproutes")
app.use(routes)

app.listen(process.env.PORT ,()=>{
    console.log(`Server Listening on Port ${process.env.PORT}`)
})