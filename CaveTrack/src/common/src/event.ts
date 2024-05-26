/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-26 14:54:47
 * @LastEditTime: 2024-05-26 15:34:32
 * @FilePath: /cave/CaveTrack/src/common/src/event.ts
 */
// 请求枚举
export enum REQUEST_ENUM {
  xhr = 'XMLHttpRequest',
  fetch = 'fetch',
}

// 错误枚举
export enum ERROR_ENUM {
  resource = 'resource',
  error = 'error',
  unhandledrejection = 'unhandledrejection',
  vue = 'vue',
}

// 用户行为枚举
export enum USER_ACTION_ENUM {
  click = 'click',
  input = 'input',
}

// 浏览器事件枚举
export enum BROWSER_EVENT_ENUM {
  refresh = 'refresh',
}

// 路由枚举
export enum ROUTE_ENUM {
  hash = 'hash',
  history = 'history',
}

// 自定义行为枚举
export enum CUSTOM_ENUM { 
  CUSTOM = 'custom'
}