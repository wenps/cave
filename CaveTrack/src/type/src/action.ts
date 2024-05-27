
/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-26 15:49:37
 * @LastEditTime: 2024-05-27 17:29:46
 * @FilePath: /cave/CaveTrack/src/type/src/action.ts
 */
import { ReportType as ActionType } from "./report";

export type ActionData = {
  uuid: string,
  time: string,
  type: ActionType, // 行为类型
  [props: string]: any
}

export type ActionOptions = {
  supportType?: ActionType[] // 支持入行为栈的类型
  maxActionNum?: number, // 最大行为栈数量
  beforeAction?: (data: ActionData) => void, // 入行为栈前处理
  afterAction?: (data: ActionData) => void, // 入行为栈后处理
}