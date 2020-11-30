import {fetch,post} from "./netWork";

export  function getPolicys(params){
    return fetch('/beneficiary/beneficiaryChange/getPolicys`', params)
}