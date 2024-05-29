/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:35:26
 * @LastEditTime: 2024-05-29 12:01:50
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
  [REPORT_TYPE.AJAX]?: ReportingConfig // ajax上报配置
  [REPORT_TYPE.IMG]?: ReportingConfig, // img上报配置
  [REPORT_TYPE.SEND_BEACON]?: ReportingConfig, // sendBeacon上报配置
  beforeReport?: (data: ReportData) => ReportData, // 上报前处理
  afterReport?: (data: any) => void, // 上报后处理
}

// 上报方式配置
export type ReportingConfig = {
  url: string, // 上报地址
  [key: string]: any, // 其他参数
}

// http相关项
type HttpOptions = {
  httpReportType?: HTTP_REQ_TYPE // http请求上报的情况，0：请求失败上报，1：请求成功上报，2：全部情况请求上报
  httpSuccessCodes?: (number | string)[] // 请求成功的状态集合，配置之后当状态码出现在数组中就会上报，如果没有配置则使用默认的成功状态, http上报情况不是全部的情况下生效，下同
  httpFailCodes?: (number | string)[] // 请求失败的状态集合
  httpIgnorePatterns?: RegExp[], // http不上报的请求对应的正则列表
}

// 上报对象类型
export type ReportData = {
  proId: string, // 项目id
  uuid: string,// 唯一id
  type: ReportType, // 上报类型
  time: number, // 上报时间
  page: string, // 页面地址
  data: string, // 上报数据
  reportWay?: REPORT_TYPE, // 上报方式
  [key: string]: any, // 其他参数
}