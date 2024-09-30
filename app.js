const express = require('express');
const cors = require("cors");
const app = express();
const { errorHandler } = require("./middlewares/errorHandler");

const router = require('./routers');
const PORT = 3000

app.get("/", (req,res) => {
    res.send("Hello world!");
});

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});

module.exports = app;