import request from '@/common/request'

export function getPageInfo () {
    return request({
        url: '/getPageInfo',
        method: 'get'
    });
}

export function getProductList () {
    return request({
        url: '/getProductList',
        method: 'get'
    });
}


