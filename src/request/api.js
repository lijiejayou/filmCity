import request from '@/request/http'

export default class Api {
    // 电影列表
    static filmList(data) {
        return request({
            url: '/filmList',
            method: 'get',
            data
        })
    }
}