/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:40:57
 * @LastEditTime: 2024-05-16 18:49:45
 * @FilePath: /cave/CaveTrack/src/common/src/report.ts
 */
export enum HTTP_REQ_TYPE { // http 请求状态枚举
  FAIL = 0, // 请求失败
  SUCCESS = 1, // 请求成功
  ALL = 2 // 全部
}

export enum REPORT_TYPE { // 上报类型枚举
  IMG = 'img',
  SEND_BEACON = 'sendBeacon',
  AJAX = 'ajax'
}