import { Model, DataTypes, Sequelize } from "sequelize";

  const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "xfree.sqlite3",
    logging: false,
  });
  class Querry extends Model {}
  Querry.init(
    {
      querry: DataTypes.STRING,
      counter: DataTypes.NUMBER,
    },
    { sequelize, modelName: "querry" }
  );

   sequelize.sync();
  export default Querry;

