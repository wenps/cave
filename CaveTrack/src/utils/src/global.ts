/*
 * @Author: xiaoshanwen
 * @Date: 2024-08-08 17:24:18
 * @LastEditTime: 2024-08-08 17:56:39
 * @Description: 
 * @FilePath: /cave/caveTrack/src/utils/src/global.ts
 */
import { Window } from "../../type";

export function getGlobalObj(): Window {
  return window as unknown as Window;
}
export function getGlobalTemp() {
    _globalObj._temp = _globalObj._temp || {}
    return _globalObj._temp
  }

const _globalObj = getGlobalObj();
// 生成临时变量
const _globalTempObj = getGlobalTemp()

// 导出临时变量和全局变量
export {_globalObj, _globalTempObj}