/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:35:26
 * @LastEditTime: 2024-05-26 17:31:32
 * @FilePath: /cave/CaveTrack/src/type/src/report.ts
 */
import { HTTP_REQ_TYPE, REPORT_TYPE, BROWSER_EVENT_ENUM,  CUSTOM_ENUM, ERROR_ENUM, REQUEST_ENUM, ROUTE_ENUM, USER_ACTION_ENUM } from "../../common"

// 劫持类型（支持劫持的事件类型）
export type TrackType = REQUEST_ENUM | ERROR_ENUM | USER_ACTION_ENUM | BROWSER_EVENT_ENUM | ROUTE_ENUM 

// 上报类型
export type ReportType = TrackType | CUSTOM_ENUM 

export interface ReportOptions extends HttpOptions {
  reportMethodsArr: REPORT_TYPE[], // 上报方式数组（优先顺序）
  retryCount: number, // 重试次数，最多三次
  retryInterval: number, // 重试时间间隔
  beforeReport?: (data: ReportData) => void, // 上报前处理
  áfterReport?: (data: any) => void, // 上报后处理
}

// http相关项
type HttpOptions = {
  httpReportType?: HTTP_REQ_TYPE // http请求上报的情况，0：请求失败上报，1：请求成功上报，2：全部情况请求上报
  httpSuccessCodes?: (number | string)[] // 请求成功的状态集合
  httpFailCodes?: (number | string)[] // 请求失败的状态集合
  httpIgnorePatterns?: RegExp[], // http不上报的请求对应的正则列表
}

// 上报对象类型
type ReportData = {
  proId: string, // 项目id
  uuid: string,// 唯一id
  type: ReportType, // 上报类型
  time: number, // 上报时间
  page: string, // 页面地址
  data: string, // 上报数据
  [key: string]: any, // 其他参数
}