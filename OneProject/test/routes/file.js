var express = require('express');
var router = express.Router();
// var mongo = require('../lib/mongo.js')
// var db = require('../lib/db.js');
var multer = require('multer');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'shopList';   
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


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/uploads', upload.any(), function (req, res, next) {
    // console.log(res);
    next();
}, function (req, res, next) {
    // console.log(db);
    
// console.log(req.files);
     
                     // console.log(req.files[i].path);
        MongoClient.connect(url, function(err, client) {
          assert.equal(null, err);
          console.log("Connected successfully to server");
          const db = client.db(dbName);
            for(var i=0;i<req.files.length;i++){ 
          // Get the documents collection
         
          // Insert some documents
          db.collection('list').insertMany([
            {"imgsrc" : req.files[i].path, 
            "price" : req.body.price, 
            "title" : req.body.neirong}], function(err, result){
            // assert.equal(err, null);
            // assert.equal(3, result.result.n);
            // assert.equal(3, result.ops.length);
            console.log("Inserted 3 documents into the collection");
            // callback(result);
          });
        } 
        client.close();
    }); 

 
    console.log(req.body);
    res.send("upload success");
});


// router.post('/gai',upload.any(), function(req, res, next) {
//     console.log(req.body);
//    var id = mongoose.Types.ObjectId(req.body.id);
//    console.log(id);
//    console.log(req.body);
//    console.log(req.files);
  
//     //    db.query(function(db) {
//     //      for(var i=0;i<req.files.length;i++){ 
//     //      db.collection("list").update({
//     //         "_id": id
//     //       }, {
//     //         $set: {
//     //           imgsrc:req.files[i].path,
//     //           price:req.body.price,
//     //           title: req.body.neirong
//     //         }
//     //       }, function(err, result) {
//     //         if (err) {
//     //           console.log('Error:' + err);
//     //           return;
//     //         }
//     //         //console.log(result);
//     //     });
//     //     }
//     // });
 
// });
module.exports = router;