module.exports = function (app) {

  app.post("/", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

}

// var router = require('express').Router();

// const path = require("path");

// router.get('/artikel', function(req,res){
//   res.render('./components/Artikel.js');
// });

// router.post('/artikel',function(req,res, next){
//   res.redirect('/');
// });

// module.exports = router