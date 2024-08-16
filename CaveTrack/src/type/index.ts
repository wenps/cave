/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:28:50
 * @LastEditTime: 2024-08-08 17:52:01
 * @FilePath: /cave/caveTrack/src/type/index.ts
 */
import { DefaultOptions } from './src/default'
import { ReportOptions } from './src/report'
import { ActionOptions } from './src/action'

export * from './src/default'
export * from './src/report'
export * from './src/action'
export * from './src/global'

export interface Options extends DefaultOptions, ReportOptions, ActionOptions {}