
const path=require("path");
const express = require('express')
const app = express()
const port = 3000
const hbs=require('hbs');
const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templetes/views");
const partialPath=path.join(__dirname,"../templetes/partials");
//const staticPath=path.join(__dirname,"../public");
app.set("view engine","hbs");
app.set("views",templatePath);
hbs.registerPartials(partialPath);
//app.use(express.static(staticPath));
app.get('/', (req, res) => {
  res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
  })
  app.get('/news', (req, res) => {
    res.status(200).send('India Won the Match')
  })
  app.get('*', (req, res) => {
    res.render("404",{
      ajshow: "Oops Page not found"
    });
  });
  


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})