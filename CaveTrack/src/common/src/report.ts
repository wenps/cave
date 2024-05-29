/*
 * @Author: xiaoshanwen
 * @Date: 2024-05-16 18:40:57
 * @LastEditTime: 2024-05-29 11:36:33
 * @FilePath: /cave/CaveTrack/src/common/src/report.ts
 */
export enum HTTP_REQ_TYPE { // http 请求状态枚举
  FAIL = 0, // 请求失败
  SUCCESS = 1, // 请求成功
  ALL = 2 // 全部
}

export enum REPORT_TYPE { // 上报类型枚举
  IMG = 'img',
  SEND_BEACON = 'sendBeacon',
  AJAX = 'ajax'
}

// http 成功状态码
export const DEFAULT_HTTP_SUCCESS_CODE = [
  200, // OK
  201, // Created
  202, // Accepted
  204, // No Content
  205, // Reset Content
  206, // Partial Content
  304, // Not Modified
  103, // Early Hints
  218, // This is fine
  226, // IM Used
  308, // Permanent Redirect
  418, // I'm a teapot
  422, // Unprocessable Entity
  428, // Precondition Required
  451  // Unavailable For Legal Reasons
]

// http 失败状态码
export const DEFAULT_HTTP_FAIL_CODE = [
  400, // Bad Request
  401, // Unauthorized
  403, // Forbidden
  404, // Not Found
  405, // Method Not Allowed
  406, // Not Acceptable
  408, // Request Timeout
  409, // Conflict
  410, // Gone
  411, // Length Required
  412, // Precondition Failed
  413, // Payload Too Large
  414, // URI Too Long
  415, // Unsupported Media Type
  416, // Range Not Satisfiable
  417, // Expectation Failed
  418, // I'm a teapot
  421, // Misdirected Request
  422, // Unprocessable Entity
  423, // Locked
  424, // Failed Dependency
  425, // Too Early
  426, // Upgrade Required
  428, // Precondition Required
  429, // Too Many Requests
  431, // Request Header Fields Too Large
  451, // Unavailable For Legal Reasons
  500, // Internal Server Error
  501, // Not Implemented
  502, // Bad Gateway
  503, // Service Unavailable
  504, // Gateway Timeout
  505, // HTTP Version Not Supported
  506, // Variant Also Negotiates
  507, // Insufficient Storage
  508, // Loop Detected
  510, // Not Extended
  511  // Network Authentication Required
]