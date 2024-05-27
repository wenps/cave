/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:29:09
 * @LastEditTime: 2024-05-27 17:33:39
 * @FilePath: /cave/CaveTrack/src/type/src/default.ts
 */

import { TrackType } from "./report";

// 默认参数项
export interface DefaultOptions {
  proId: string | number, // 项目ID
  disabled: boolean // 是否禁用上报
  sameErrReport?: Boolean // 相同的错误事件是否支持上报
  trackEvents?: TrackType[] // 劫持上报事件数组
}