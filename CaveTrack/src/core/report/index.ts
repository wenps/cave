/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-26 16:20:28
 * @LastEditTime: 2024-08-08 18:24:19
 * @Description: 
 * @FilePath: /cave/caveTrack/src/core/report/index.ts
 */

import { Options, ReportData } from "../../type";
import { optionsInit } from "./src/init";
import { send } from "./src/send";

class report {
    init (options: Options)  {
        return optionsInit(options)
    }
    // 上报函数
    send (data: ReportData) {
        send(data)
    }
}

const reportObj = new report()

export default reportObj