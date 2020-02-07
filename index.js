const express = require("express");
const cors = require("cors");
const router = require("./event/router");
const bodyParser = require("body-parser");

// const ventRouter = require("./vent/router");
// const roomRouter = require("./room/router");

const app = express();
// const db = require("./db.js");
const port = 4000;
// function onListen() {
//   console.log(`Listening on :${port}`);
// }
const corsMiddleware = cors();
app.use(corsMiddleware);

const parserMiddleware = bodyParser.json();
app.use(parserMiddleware);

// app.use(ventRouter);
// app.use(roomRouter);
app.use(router);

const Event = require("./event/model");
// app.use(Event, db);

app.listen(port, () => console.log(`Listening on :${port}`));
