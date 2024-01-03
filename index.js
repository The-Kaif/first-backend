require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/insta",(req,res)=>{
    res.send("mr.mohd.kaif_");
})

app.get('/kaif',(req,res)=>{
    res.send("<h1>Placement lekar hi maanu gaa</h1")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})