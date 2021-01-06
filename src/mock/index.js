import Mock from 'mockjs'
import {Random, toJSONSchema} from 'mockjs'
import {getHomeList,searchList} from './home'
Mock.setup({
    timeout:1500
});
// Mock.mock( url, post/get , 返回的数据)；根据数据模板生成模拟数据。
Mock.mock('/image/collect/queryBqInfos','get',getHomeList);
Mock.mock('/beneficiary/beneficiaryChange/getPolicys','post',searchList);