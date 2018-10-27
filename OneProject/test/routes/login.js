var express = require('express');
var router = express.Router();
var db = require("../lib/db.js");
var cheerio = require('cheerio');
// var request = require('request');
// var cheerio = require('cheerio');
var fs = require('fs');
/* GET users listing. */
router.post('/login', function(req, res, next) {
    // console.log(req.body.nickname);
      db.query(function(db){
          db.collection("login").find({"nickname":req.body.nickname}).toArray(function(err, result) {
                   // $nick = JSON.stringify(req.body.nickname);
                   // console.log($nick);
                   //  for(var i=0;i<result.length;i++){
                   //      if($nick == result[i].nickname){
                   //          res.send('true');
                   //          return;
                   //      }else{
                   //          res.send('false');
                   //          return;
                   //      }
                   //      console.log(result[i].nickname);
                   //  }
                   if(result.length>0){
                         res.send('true');
                            return;
                   }else{
                     res.send('false');
                        return;
                   
                   }
                  });
    });

});
router.post('/login1', function(req, res, next){
    console.log(req.body);
      db.query(function(db){
           db.collection("login").insert([
            {
             nickname:req.body.nickname,
             password:req.body.password
            }], function(err, result) {
           
            console.log(result);
            res.send("true");
     });

});
  })
router.post('/denglu', function(req, res, next){
    console.log(req.body);
  db.query(function(db){
          db.collection("login").find({"nickname":req.body.nickname}).toArray(function(err, result) {
            // console.log(result);
            // for(var i= 0;i<result.length)
                      if(result.length <=0){
                           // db.close();
                           res.send("fail");
                        }
                        if(result.length>0){
                            if(req.body.password == result[0].password){
                              // db.close();
                              res.send("true");
                            }else{
                              // db.close();
                              res.send("fail");
                            }
                        }
                  });
    });
  })

router.post('/guanList', function(req, res, next) {
    console.log(req.body);
db.query(function(db) {
        db.collection("login").find({}).toArray(function(err, docs) {
            console.log(docs);
            res.json({
                list: docs
            });
        });
    })
// });
});


// ==========del=========


router.post('/dels', function(req, res, next) {
   
  
       db.query(function(db) {
          db.collection("login").remove({
  }, function(err, result) {
      
        })
   
    });
 });


module.exports = router;
