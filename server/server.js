const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors')
const routesUrls = require('./routes/routes')
// require("./db/conn");

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("Database successfully connected"))



app.use(express.json())
app.use(cors())
//app.use('/app', routesUrls)
//for prod
app.use('/', routesUrls)

//const port = process.env.PORT || 5000;
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`server started on port no ${port} `);
});