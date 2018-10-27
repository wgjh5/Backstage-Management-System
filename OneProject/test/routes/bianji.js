var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();
var db =  require('../lib/db.js');
var cheerio = require('cheerio');
var fs = require('fs');
var multer = require('multer');
var storage = multer.diskStorage({
    //设置上传后文件路径，uploads文件夹会自动创建。
    destination: function (req, file, cb) {
        //console.log(file)
        cb(null, 'public/src/images') //上传文件夹
    },
    //给上传文件重命名，获取添加后缀名
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        //给图片加上时间戳格式防止重名名
        //比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
        cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({
    storage: storage
});
  // Get the documents collection

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/bianji', function(req, res, next) {
db.query(function(db) {
        db.collection("list").find({}).toArray(function(err, docs) {
            // console.log(docs)
            res.json({
                list: docs
            });
        });
    })
});
// ===============删除单个商品
router.post('/del', function(req, res, next) {
    // console.log(req.body.id);
   var id = mongoose.Types.ObjectId(req.body.id);
   console.log(id);
  var imgsrc = req.body.imgsrc;
       db.query(function(db) {
         db.collection("list").remove({
            "_id":id
          }, function(err, result) {
              fs.unlink(imgsrc,function(error){
                  if(error){
                      console.log(error);
                      return false;
                  }
                  console.log('删除文件成功');
              })
              // console.log(result);
            if (err) {
              console.log('Error:' + err);
              return;
            }
           
          });
 
    });
 
});
// ==================删除所有商品
router.post('/dels', function(req, res, next) {
       db.query(function(db) {
          db.collection("list").remove({
  }, function(err, result) {
        })
   
    });
 });
// ===============改
router.post('/gai',upload.any() ,function (req, res, next)
    {
    // console.log(res);
     console.log(req.files.length);
    next();
}, function (req, res, next) {
    // console.log(req.body);
   var id = mongoose.Types.ObjectId(req.body.id);
 //   console.log(id);
 //   console.log(req.body);
   
       db.query(function(db) {
         for(var i=0;i<req.files.length;i++){ 
         db.collection("list").update({
            "_id": id
          }, {
            $set: {
              imgsrc:req.files[i].path,
              price:req.body.price,
              title: req.body.neirong
            }
          }, function(err, result) {
            if (err) {
              console.log('Error:' + err);
              return;
            }
            //console.log(result);
        });
        }
    });
 
});
// ===============根据搜索框查找商品
router.post('/find', function(req, res, next) {
    console.log(req.body);
db.query(function(db) {
        db.collection("list").find({"title":req.body.title}).toArray(function(err, docs) {
            console.log(docs);
            res.json({
                list: docs
            });
        });
    })
// });
});
// ======================删除管理员
router.post('/del0', function(req, res, next) {
    // console.log(req.body.id);
   var id = mongoose.Types.ObjectId(req.body.id);
   console.log(id);
   
       db.query(function(db) {
         db.collection("login").remove({
            "_id":id
          }, function(err, result) {
            if (err) {
              console.log('Error:' + err);
              return;

            }
           
          });
 
    });
 
});

// ========根据搜索框查找管理员
router.post('/finds', function(req, res, next) {
    console.log(req.body);
db.query(function(db) {
        db.collection("login").find({"nickname":req.body.nickname}).toArray(function(err, docs) {
            console.log(docs);
            res.json({
                list: docs
            });
        });
    })
// });
});
// ==============获取评论列表=============
router.get('/pinglun', function(req, res, next) {
db.query(function(db) {
        db.collection("liuyan").find({}).toArray(function(err, docs) {
            // console.log(docs)
            res.json({
                list: docs
            });
        });
    })
});
// ========删除单个评论=========
router.post('/delPL', function(req, res, next) {
    // console.log(req.body.id);
   var id = mongoose.Types.ObjectId(req.body.id);
   console.log(id);
  
       db.query(function(db) {
         db.collection("liuyan").remove({
            "_id":id
          }, function(err, result) {
            if (err) {
              console.log('Error:' + err);
              return;
            }
           
          });
 
    });
 
});
// ==========清空评论列表============
router.post('/delsPL', function(req, res, next) {
       db.query(function(db) {
          db.collection("liuyan").remove({
  }, function(err, result) {
        })
   
    });
 });

// fs.unlink('../src/index.txt',function(error){
//     if(error){
//         console.log(error);
//         return false;
//     }
//     console.log('删除文件成功');
// })
module.exports = router;
