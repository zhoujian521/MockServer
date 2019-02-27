var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = Mock.mock({
      'data|1-10':[{
        //常规类型
        'isNew|1-2' : true,
        'userCusSum|1-4' : 1,
        'taskType|1' : ['移动','联通','电信'],
        'taskId' : Mock.Random.integer(10000,20000),

        //中文字段
        'userName|1':function (params) {
            return Mock.Random.cname()
        },
        'taskName' : function () {
            return Mock.Random.csentence(10)
        },
        'taskDesc' : function () {
            return Mock.Random.cparagraph()
        },
        //时间戳
        'startTime' : function () {
            return  parseInt( Mock.Random.now('T')) - Mock.Random.integer(100000,20000);
        },
        'endTime' : function () {
            return parseInt( Mock.Random.now('T')) + Mock.Random.integer(100000,20000);
        },
        //图片
        'imageUrl':Mock.Random.image('2000x1500', '#50B347')
      }]
    
  })
  res.header("Content-Type", "application/json; charset=utf-8");

  res.end(JSON.stringify(data,null,2))
});

module.exports = router;

