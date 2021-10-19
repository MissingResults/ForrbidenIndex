import express, { query } from 'express';

import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage:'xfree.sqlite3'
})
const app = express();

app.get('/post', async(req, res) => {
    let q = "x"
    const response = await sequelize.query(
        `SELECT couter FROM 'xfree' WHERE querry='${q}'`
        )
        if(response[0][0]==null){
            try{ 
                await sequelize.query(
                    "INSERT INTO 'xfree' VALUES ('x',50)"
                    )
                res.send("gicik")
            }catch (err){ console.log(err)}
        }
        else{
            //@ts-ignore
            let {couter}=response[0][0]
            console.log(couter);
        }
   /*  try{ 
        await sequelize.query(
            `SELECT counter FROM 'xfree' WHERE querry=${q}`
            )
        res.send("gicik")
    }catch (err){ console.log(err)} */
    /* try{ 
        await sequelize.query(
            "INSERT INTO 'xfree' VALUES ('x',50)"
            )
        res.send("gicik")
    }catch (err){ console.log(err)} */
})
app.get('/get', async(req, res) => {
    try{ 
        await sequelize.query(
            "SELECT * FROM 'xfree'"
            )
        res.send(await sequelize.query(
            "SELECT * FROM 'xfree'"
            ))
    }catch (err){ console.log(err)}
})
app.listen(5000,()=>{
    console.log("elo")
})