var router = require('express').Router();

// router.get('/artikel', function(req,res){
//   res.render('./components/Artikel.js');
// });

router.post('/post',function(req,res, next){
  console.log('artikel post')
});

module.exports = router