const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.set("view engine", "ejs")

const posts = {
  imageUrl: "",
  postHeader:"",
  postBody: ""
}

app.get('/', (req, res) =>{
  

  res.render('index')
})



const port = 3000;
app.listen(port, () => {
  console.log("server started on port " + port);
});
