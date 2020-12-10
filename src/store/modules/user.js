import {queryBqInfos} from "../../api/benefitApi";

const user = {
    state: {
        homeList: []
    },
    mutations: {
        updateHomeList(state,homeList){
            state.homeList = homeList
        }
    },
    actions: {
        getHomeList({commit,state},pararm){
            queryBqInfos(pararm).then(result => {
                if (result.resultCode == 200) {
                    commit('updateHomeList',result.teams);
                    // return Promise.resolve(result.teams);
                } else {
                    alert(result.resultMsg);
                }
            })
        }
    }
}
export default user