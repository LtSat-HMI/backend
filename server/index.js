const express  = require('express');
const mongoose = require('mongoose');
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require('cors');
const router = require('./routes');
const serial = require('./serial/index')
require("dotenv").config();

const app = express();
const Port = process.env.PORT || 3030;

const Uri = `mongodb+srv://ltsat:${process.env.DB_PASSWORD}@cluster0.jggbcwf.mongodb.net/?retryWrites=true&w=majority`;
const store = new MongoDBStore({
  uri: Uri,
  collection: "telemetry",
});

const connectDB = async () => {
  await mongoose.connect(Uri, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
  console.log('BD conectado');
  app.listen(Port, () => console.log(`Servidor na porta ${Port}`));
}

connectDB();

const conectSerial = () => {
  serial.Serial();
  console.log('Comunicação serial estabelecida');
}

conectSerial();

app.use(express.json());
app.use(cors());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: false,
      expires: false
    },
  })
);

app.use(router);