/*
 * @Author: xiaoshanwen
 * @Date: 2024-08-08 17:18:48
 * @LastEditTime: 2024-08-16 14:52:14
 * @Description: 
 * @FilePath: /cave/caveTrack/src/utils/src/queue.ts
 */
// 队列类，批量执行简单任务

import { _globalObj } from "./global";
import { typeCheck } from "./options";

export class Queue {
    private queue: (() => void)[] = [];
    private isFlushing = false;
  
    /**
     * 添加一个函数到队列中
     * @param fn 待执行的函数
     */
    addQueue(fn: () => void) {
      if (!typeCheck(fn, 'fn', ['function'])) return;
      if (!('requestIdleCallback' in _globalObj || 'Promise' in _globalObj)) {
        fn();
        return;
      }
      this.queue.push(fn);
      if (!this.isFlushing) {
        this.isFlushing = true;
        this.flushQueue();
      }
    }
  
    // 清空队列
    clearQueue() {
      this.queue = [];
      this.isFlushing = false;
    }
  
    // 获取队列
    getQueue() {
      return this.queue;
    }
  
    // 处理队列
    private flushQueue() {
      const tempQueue = this.queue.slice(0);
      this.clearQueue();
  
      if ('requestIdleCallback' in _globalObj) {
        requestIdleCallback(() => {
          tempQueue.forEach(item => item());
        });
      } else {
        Promise.resolve().then(() => {
          tempQueue.forEach(item => item());
        });
      }
    }
  }