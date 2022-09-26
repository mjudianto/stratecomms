const path = require('path');
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, '../client/build')));

const ArtikelRouter = require('./backend/routes/ArtikelRoute');
app.use('/artikel', ArtikelRouter);

const HomePageRouter = require('./backend/routes/HomePageRoute');
app.use('/', HomePageRouter);

module.exports = app;

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
