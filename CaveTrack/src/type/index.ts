/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:28:50
 * @LastEditTime: 2024-05-26 17:37:16
 * @FilePath: /cave/CaveTrack/src/type/index.ts
 */
import { DefaultOptions } from './src/default'
import { ReportOptions } from './src/report'

export * from './src/default'
export * from './src/report'

export interface Options extends DefaultOptions, ReportOptions {}