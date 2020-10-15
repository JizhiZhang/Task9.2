var express = require('express');
//定义路由级中间件
var router = express.Router();
//创建model，这个地方的ch_user对应mongodb数据库中ch_users的conllection。
//mongoose会自动改成复数，如模型名：xx―>xxes, kitten―>kittens, money还是money
var mongoose = require('mongoose');
//引入数据模型模块
var UserSchema = require('../models/user.server.model');
var User=mongoose.model('Userlist',UserSchema);//创建mongoose下model对象
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* 查 */
router.get('/findAll',function(req,res,next){
    User.find({
    }, function (err, docs) {
        if(err){
            console.log('Error:');
            return next();
        }
        res.json(docs);
    });
});
/* 增 */
router.post('/add', function (req, res, next) {
    console.log(req.body)
    var user=new User({
        desc:req.body.desc
    });
    user.save({
        // uid:1,
        desc:req.body.desc
    },function(err,doc){
        if(err){
            res.end('Error');
            
            return next();
        } else {
            console.log(doc)//新增数据成功
            res.json({'result':'success'});
        }
    });
    // res.json({'result':'无结果'});
});
/* 更新一条信息 */
router.get("/update", (req, res) => {
    User.findOneAndUpdate(
    //   { _id: req.params.id },
        {desc:'caopeng'},
      {
        $set: {
            username: '新的名字',
        }
      },
      {
        new: true
      }
    )
      .then(state => res.json(`${state}修改成功`))
      .catch(err => res.json(err));
});
/* 删除 */
router.get("/delete", (req, res) => {
    // console.log(req.params.id);
    User.findOneAndRemove({
        // _id: req.params.id
        uid:1
    })
    .then(state => res.send(`${state.uid}删除成功`))
    .catch(err => res.json(err));
});
module.exports = router;