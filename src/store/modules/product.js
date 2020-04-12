import { getPageInfo, getProductList } from "../../api/product.js";
export default {
    namespaced: true,
    state: {
        bannerList: [],
        module1: [],
        module2: [],
        productList: []
    },
    mutations: {
        SET_PAGE_INFO (state, pageData) {
            state.bannerList = pageData.bannerList;
            state.module1 = pageData.module1;
            state.module2 = pageData.module2;
        },
        SET_PRODUCT_LIST (state, data) {
            state.productList = state.productList.concat(data.productList)
        },
    },
    actions: {
        getPageInfo ({commit}) {
            return new Promise((resolve, reject) => {
                getPageInfo().then(res => {
                    if(res.success){
                        commit('SET_PAGE_INFO', res.data);
                        resolve(res) 
                    }else{
                        reject(res.message)
                    }
                })
            })
        },
        getProductList ({commit}) {
            return new Promise((resolve, reject) => {
                getProductList().then(res => {
                    if(res.success){
                        commit('SET_PRODUCT_LIST', res.data);
                        resolve(res) 
                    }else{
                        reject(res.message)
                    }
                })
            })
        }
    }
    
}