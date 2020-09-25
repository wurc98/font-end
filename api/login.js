import request from './request'


export const login = () => {
    return request({
      url: '/',
      method: 'get'
    })
  }