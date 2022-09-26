var router = require('express').Router();

router.post('/post',function(req,res,next){
  const newUser = {
        Username: req.body.username,
      };
    
      console.log(newUser);
});

module.exports = router