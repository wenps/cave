/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-26 16:10:07
 * @LastEditTime: 2024-05-26 17:41:45
 * @FilePath: /cave/CaveTrack/src/core/report/src/init.ts
 */
import { globalOptions } from "../..";
import { REPORT_TYPE } from "../../../common";
import { Options } from "../../../type";
import { optionsCheck } from "../../../utils";
export async function optionsInit(options: Options) {
  // 必传参数校验
  const value = optionsCheck(options, 
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
        type: ['function'],
      },
      áfterReport: {
        type: ['function'],
      },
      httpReportType: {
        type: ['number'],
      },
      httpSuccessCodes: {
        type: ['array'],
      },
      httpFailCodes: {
        type: ['array'],
      },
      httpIgnorePatterns: {
        type: ['array'],
      }
    }
  )

  // 上报顺序
  globalOptions.reportMethodsArr = options.reportMethodsArr || [REPORT_TYPE.SEND_BEACON, REPORT_TYPE.IMG, REPORT_TYPE.AJAX];
  // 重试次数
  globalOptions.retryCount = options.retryCount === 0 ? 0 : options.retryCount || 3;
  // 重试间隔
  globalOptions.retryInterval = options.retryInterval || 1000;

   return value
}