/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-26 16:16:59
 * @LastEditTime: 2024-05-29 11:11:54
 * @FilePath: /cave/CaveTrack/src/utils/src/options.ts
 */

import { Options } from "../../type";

// 入参校验
export function optionsCheck(options: Options, valueTypeObj: { [key: string]: {'type': string[], 'required'?: boolean} }) {
  const objKeys = Object.keys(options);  
  let result = true
  objKeys.forEach(item => {
    const val = valueTypeObj[item]
    if(val) {
      if(val.required) {
        if(!requiredCheck(objKeys, item)) {
          result = false
        }
      }
      if(val.type) {
        if(!typeCheck(options[item], item, val.type)) {
          result = false
        }
      }
    }
  })
  return result
}

// 必填校验
export function requiredCheck(objKeys: string[], key: string) {
  if (!objKeys.includes(key)) {
    console.error(`${key} is required`);
    return false
  }
  return true
}

// 类型校验
export function typeCheck(target: any, targetName: string, expectTypes: string[]): any {
  if (!target) return false;
  if (expectTypes.includes(typeGet(target)) ) return true;
  console.error(`${targetName} must be ${expectTypes.map((item, index) => {
    return item + (index === expectTypes.length - 1 ? '':' or ')
  })}, now is ${typeGet(target)}`);
  return false;
}


// 类型生成
export function typeGet(target: any): string {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}