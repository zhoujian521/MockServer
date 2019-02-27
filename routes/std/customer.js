var express = require('express');
var router = express.Router();
var Mock = require('mockjs');
/* 微营销标准版 V3.6.2 根据接口文档生成的Mock数据 */

/* 1.1.	获取今日待办数据 */
router.post('/getTodayCustomer', function(req, res, next) {
      console.log(req.body);
  let data = Mock.mock({
      'code':0,
      'attr':null,
      'data':{
          'customer1|1-10':[{
              'cusGrade|1-10':1,
              'cusGradeName':function(){
                return Mock.Random.csentence(3,5);
              },
              'customerId|1':["156","155","154","153","152","151","150","149","148","147","146","108","70",],
              'taskId|1':["13390","13364"],
              'customerName':function(){
                return Mock.Random.cname();
              },
              'nickName':function(){
                return Mock.Random.cname();
              },
              'hostNum|1':['183****8680','183****6587','177****6861'],
              // 拨打状态 0-未拨打 1-未拨通 2-已拨通
              'callStatus|1':[0],
              'recentTime':function(){
                  return Mock.Random.integer(1470032270000,1470732270000);
              }
          }],
          'customer2|1-10':[{
            'cusGrade|1-10':1,
            'cusGradeName':function(){
              return Mock.Random.csentence(3,5);
            },
            'customerId|1':["156","155","154","153","152","151","150","149","148","147","146","108","70",],
            'taskId|1':["13390","13364"],
            'customerName':function(){
              return Mock.Random.cname();
            },
            'nickName':function(){
              return Mock.Random.cname();
            },
            'hostNum|1':['183****8680','183****6587','177****6861'],
            // 拨打状态 0-未拨打 1-未拨通 2-已拨通
            'callStatus|1':[0],
            'recentTime':function(){
                return Mock.Random.integer(1470032270000,1470732270000);
            }
          }],
      },
      'msg':"查询客户列表成功",
      'no':req.body.no
  });
  res.header("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data,null,2))
});

/* 1.2.	推送打点接口 */
router.post('/push', function(req, res, next) {
  console.log(req.body);
    let data = Mock.mock({
        'code':0,
        'attr':null,
        'data':{},
        'msg':"发送成功",
        'no':req.body.no
    });
    res.header("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(data,null,2))
});

module.exports = router;
