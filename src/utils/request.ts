import axios from 'axios'
import { API_URL, REQUEST_TIME_OUT } from '../config/Constant'
import Qs from 'qs'
import Actions from '../store/Actions'
import { IState } from '../store/Store'
import { Dispatch } from 'redux'

export interface IParams {
  url: string
  api: string
  method?: string
  params?: object
  data?: object | any
}

/**
 * 通用网络请求
 */

export function requestFn(dispatch: Dispatch<Actions>, state: IState, params: IParams): any {
  return new Promise((resolve, reject) => {
    dispatch({
      type: 'fetch_begin',
      payload: {
        pageLoading: true
      }
    })
    axios.interceptors.response.use(
      response => {
        return response
      },
      // 除了401错误，所有响应码都接受，每个请求错误单独处理。只有非登录页的401错误会进入这里
      error => {
        if (error.response && error.response.status === 401) {
          return reject({ state, res: error })
        } else {
          return resolve({ state, res: error })
        }
      }
    )
    axios
      .request({
        url: params.url,
        method: params.method || 'get',
        baseURL: `${API_URL}`,
        params: params.params || {},
        paramsSerializer: arg => {
          return Qs.stringify(arg, { arrayFormat: 'brackets' })
        },
        data: params.data || {},
        timeout: REQUEST_TIME_OUT,
        validateStatus: status => {
          // 除了401错误，所有响应码都接受，每个请求错误单独处理。
          return status !== 401
        }
      })
      .then(res => {
        dispatch({
          type: 'fetch_success',
          payload: {
            res,
            pageLoading: false
          }
        })
        resolve({ state, res })
      })
      .catch(err => {
        dispatch({
          type: 'fetch_failed',
          payload: {
            res: err,
            pageLoading: false
          }
        })
        resolve({ state, res: err })
      })
  })
}
