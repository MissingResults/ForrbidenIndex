import express, { query } from "express";
import Querry from "./models/querry.model";
import bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());
app.post("/post", async (req, res) => {
  console.log(req.body);
  try {
    var body: string = req.body.query.searchword;
    const dbResponse = await Querry.findOne({
      where: {
        querry: body,
      },
    });
    if (dbResponse) {
      //@ts-ignore
      dbResponse.counter = dbResponse.counter + 1;
      //@ts-ignore
      await dbResponse.save();
      res.send(dbResponse);
    } else {
      await Querry.create({
        querry: body,
        counter: 1,
      }).then((result) => {
        res.send(result);
      });
    }
  } catch (err) {
    console.log(err);
  }
});
app.listen(5000, () => {});
