const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync({ force: false }).then(() => console.log("database connected"));

module.exports = db;
