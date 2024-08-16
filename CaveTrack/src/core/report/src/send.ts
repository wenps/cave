/*
 * @Author: xiaoshanwen
 * @Date: 2024-08-08 18:19:11
 * @LastEditTime: 2024-08-16 14:50:28
 * @Description: 
 * @FilePath: /cave/caveTrack/src/core/report/src/send.ts
 */
import axios from "axios";
import { REPORT_TYPE } from "../../../common";
import { ReportData } from "../../../type";
import { _globalObj, Queue } from "../../../utils";

// 初始化队列
const queue = new Queue()

// 上报函数映射
const sendFnMap = {
  [REPORT_TYPE.AJAX]: (url = '', params: ReportData, cb = null) => {
    const requestFun = () => {
        axios({
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            url: url,
            data: params
        }).catch(() => {
          cb && cb()
        })
      };
      queue.addQueue(requestFun);
    // 实现AJAX发送逻辑
  },
  [REPORT_TYPE.IMG]: (url = '', params: ReportData, cb = null) => {
    // 实现IMG标签发送逻辑
    const requestFun = () => {
        const img = new Image();
        const spliceStr = url.indexOf('?') === -1 ? '?' : '&';
        img.src = `${url}${spliceStr}data=${encodeURIComponent(JSON.stringify(params))}`;
        img.onerror = cb && cb()
    };
    queue.addQueue(requestFun);
  },
  [REPORT_TYPE.SEND_BEACON]: (url = '', params: ReportData, cb = null) => {
    // 实现sendBeacon发送逻辑
    const sendBeacon = _globalObj.navigator?.sendBeacon
    const requestFun = () => {
      if (sendBeacon) {
        sendBeacon(url, JSON.stringify({ params, }))
      } else {
        cb && cb()
      }
    }
    queue.addQueue(requestFun);
  },
};

export function send(data: ReportData) {

}