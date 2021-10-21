const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require("./models/querry");

mongoose.connect(
  "mongodb+srv://xfree_user:usertest@cluster0.iwcrx.mongodb.net/test"
);
const Querry = mongoose.model("querries");


const app = express();
app.use(bodyParser.json())

app.post("/post",(req,res)=>{
  var body = req.body.query.searchword
  const doc = Querry.findOne({ querry: body }).then((doc) => {
    if (doc) {
      doc.counter = doc.counter + 1;
      doc.save();
      res.send({ querry: doc.querry, counter: doc.counter });
    } else {
      new Querry({ querry: body, counter: 1 }).save();
      res.send("made a new one");
    }
  });

})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
