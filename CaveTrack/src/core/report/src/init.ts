/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-26 16:10:07
 * @LastEditTime: 2024-05-29 12:08:10
 * @FilePath: /cave/CaveTrack/src/core/report/src/init.ts
 */
import { globalOptions } from '../..'
import { DEFAULT_HTTP_FAIL_CODE, DEFAULT_HTTP_SUCCESS_CODE, HTTP_REQ_TYPE, REPORT_TYPE } from '../../../common'
import { Options, ReportData } from '../../../type'
import { optionsCheck } from '../../../utils'
export async function optionsInit (options: Options) {
    return new Promise<void>((resolve, reject) => {
        if (check(options)) {
          Complete(options)
          resolve()
        } else {
          reject()
        }
    })
}

// 配置补全
function Complete (options: Options) {
    /** 上报基础配置补全 */
    baseOptionsComplete(options)
    /** 上报Http配置补全 */
    httpOptionsComplete(options)
}

// 基础配置补全
function baseOptionsComplete (options: Options) {
    // 上报顺序
    globalOptions.reportMethodsArr = options.reportMethodsArr || [REPORT_TYPE.SEND_BEACON, REPORT_TYPE.IMG, REPORT_TYPE.AJAX]
    // 重试次数
    globalOptions.retryCount = options.retryCount === 0 ? 0 : options.retryCount || 3
    // 重试间隔
    globalOptions.retryInterval = options.retryInterval || 1000
    // ajax配置
    globalOptions[REPORT_TYPE.AJAX] = {
      url: '',
      method: 'POST',
      headers: {},
      data: {},
      timeout: 3000,
      dataType: 'json',
      withCredentials: false,
      ...(options[REPORT_TYPE.AJAX] || {})
    }
    // img配置
    globalOptions[REPORT_TYPE.IMG] = {
      url: '',
      ...(options[REPORT_TYPE.IMG] || {})
    }
    // sendBeacon配置
    globalOptions[REPORT_TYPE.SEND_BEACON] = {
      url: '',
      ...(options[REPORT_TYPE.SEND_BEACON] || {})
    }
    // 上报前置函数
    globalOptions.beforeReport = options.beforeReport || ((data: ReportData) => {
        return data
    })
    // 上报后置函数
    globalOptions.afterReport = options.afterReport || ((_data: any) => { })
}
// Http配置补全
function httpOptionsComplete (options: Options) {
    // 无论请求成功还是失败，都会进行上报
    globalOptions.httpReportType = options.httpReportType || HTTP_REQ_TYPE.ALL
    // 请求成功的状态集合
    globalOptions.httpSuccessCodes = options.httpSuccessCodes || DEFAULT_HTTP_SUCCESS_CODE
    // 请求失败的状态集合
    globalOptions.httpFailCodes = options.httpFailCodes || DEFAULT_HTTP_FAIL_CODE
    // 不上报的请求正则
    globalOptions.httpIgnorePatterns = options.httpIgnorePatterns || []
}

// 基础校验
function check (options: Options) {
    return optionsCheck(options,
        {
            reportMethodsArr: {
                type: ['array'],
                required: true
            },
            retryCount: {
                type: ['number'],
                required: true
            },
            retryInterval: {
                type: ['number'],
                required: true
            },
            beforeReport: {
                type: ['function']
            },
            afterReport: {
                type: ['function']
            },
            [REPORT_TYPE.AJAX]: {
                type: ['object']
            },
            [REPORT_TYPE.IMG]: {
                type: ['object']
            },
            [REPORT_TYPE.SEND_BEACON]: {
                type: ['object']
            },
            httpReportType: {
                type: ['number']
            },
            httpSuccessCodes: {
                type: ['array']
            },
            httpFailCodes: {
                type: ['array']
            },
            httpIgnorePatterns: {
                type: ['array']
            }
        }
    )
}
