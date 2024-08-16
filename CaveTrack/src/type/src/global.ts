/*
 * @Author: xiaoshanwen
 * @Date: 2024-08-08 17:49:18
 * @LastEditTime: 2024-08-08 18:29:26
 * @Description: 
 * @FilePath: /cave/caveTrack/src/type/src/global.ts
 */
// Window 对象类型
export interface Window {
    _temp: { // 临时存储
        [key: string]: any;
    };
    navigator: any;
    location: any,
    history: any;
    document: any;
    XMLHttpRequest: any;
    addEventListener: any;
    onpopstate: any;
    performance: {
        [key:string]: any
    };
}