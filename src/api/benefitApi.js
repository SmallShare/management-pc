import {fetch,post} from "./netWork";
// home页面判断人脸是否开启
export function queryFaceCheckConfigFlag(paramObj){
    return fetch('/image/collect/queryFaceCheckConfigFlag',paramObj);
}
// home页面判断人脸是否开启
export function queryBqInfos(paramObj){
    return fetch('/image/collect/queryBqInfos',paramObj);
}

export  function getPolicys(params){
    return fetch('/beneficiary/beneficiaryChange/getPolicys', params)
}
export function searchList(params) {
    return post('/beneficiary/beneficiaryChange/searchList', params)
}