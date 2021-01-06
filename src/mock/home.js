import Mock from 'mockjs'
const Random = Mock.Random;
export const getHomeList = {
    'resultCode': "200",
    'resultMsg': "请求成功！",
    'teams':[{
        'groups': [{
            'bqTypeCode': "0",
            'info': "客户信息维护",
            'isBq': true,
            'isChoose': true,
            'parentId': "0",
            'path': "/bd_query",
            'src': "icons1.png",
            'urlLink': "/cust",
        },{
            'bqTypeCode': "4",
            'info': "续期交费信息变更",
            'isBq': true,
            'isChoose': true,
            'parentId': "0",
            'path': "/renewalQuery",
            'src': "icons2.png",
            'urlLink': ""
        },{
            'bqTypeCode': "5",
            'info': "受益人变更",
            'isBq': true,
            'isChoose': true,
            'parentId': "0",
            'path': "/benefitQuery",
            'src': "icons3.png",
            'urlLink': "/cust",
        },{
            'bqTypeCode': "6",
            'info': "收付费信息变更",
            'isBq': true,
            'isChoose': true,
            'parentId': "0",
            'path': "/chargeQuery",
            'src': "icons4.png",
            'urlLink': "/chargepaychange",
        }],
        'title': "变更类"
    },{
        'groups': [{
            'bqTypeCode': "",
            'info': "保全记录查询",
            'isBq': false,
            'isChoose': true,
            'parentId': null,
            'path': "/query",
            'src': "icons20.png",
            'urlLink': "/image"
        }],
        'title': "保障调整类"
    },{
        'groups': [{
            'bqTypeCode': "",
            'info': "保全记录查询",
            'isBq': false,
            'isChoose': true,
            'parentId': null,
            'path': "/query",
            'src': "icons20.png",
            'urlLink': "/image"
        }],
        'title': "贷款类"
    },{
        'groups': [{
            'bqTypeCode': "",
            'info': "保全记录查询",
            'isBq': false,
            'isChoose': true,
            'parentId': null,
            'path': "/query",
            'src': "icons20.png",
            'urlLink': "/image"
        }],
        'title': "领取类"
    },{
        'groups': [{
            'bqTypeCode': "",
            'info': "保全记录查询",
            'isBq': false,
            'isChoose': true,
            'parentId': null,
            'path': "/query",
            'src': "icons20.png",
            'urlLink': "/image"
        },{
            'bqTypeCode': "9",
            'info': "双录质检结果查询",
            'isBq': false,
            'isChoose': true,
            'parentId': "5",
            'path': "/doubleQuery",
            'src': "icons21.png",
            'urlLink': ""
        }],
        'title': "更多服务"
    }]
};
export const searchList = (opt) => {
    console.log('opt',opt);
    let list = [];
    for (let i = 0; i<=10; i++) {
        let temp = {
            'orderNo': Random.string('number', 10, 15),
            'name': Random.cname(),
            'adress': Random.county(),
            'reason': Random.csentence(10, 32),
            'data': Random.date('yyyy-MM-dd'),
            'email': Random.email()
        };
        let item = Mock.mock(temp);
        list.push(item);
    }
    return {
        "resultCode": 200,
        "resultMsg": "success",
        "resultBody": {
            "list":list
        }
    };
}