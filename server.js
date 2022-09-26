const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const ArtikelRouter = require('./backend/routes/ArtikelApi');
app.use('/artikel', ArtikelRouter);

app.post("/post", function(req, res)  {
  const newUser = {
    Username: req.body.username,
  };

  // console.log(newUser);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
