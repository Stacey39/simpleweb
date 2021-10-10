const express = require('express')
const app = express()

app.set("view engine","pug")
app.set("views",__dirname)
 
app.get('/', function (req, res) {
  res.render("template",{
      heading:"Welcome",
      content:"tapei is the capital in taiwan.",
      label:"contact taipei",
      url:"/contact",
      title:"taipei website"

  })
})


app.get('/contact', function (req, res) {
  res.render("template",{
    heading:"contact info",
    content:"Reach out to taipei email.",
    label:"taipei@doc.com",
    url:"mailto:taipei@doc.com",
    title:"taipei contact information"

})
})
 
app.listen(3000)
