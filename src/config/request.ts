import axios from "axios";

// 创建一个 axios 实例
const http = axios.create({
 baseURL: "http://127.0.0.1:8000",
  timeout: 10000, // 请求超时时间毫秒
  withCredentials: false, // 异步请求携带cookie
  headers: {
    // 设置后端需要的传参类型
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
});

// 添加请求拦截器
http.interceptors.request.use(
  function (config:any) {
    // 在发送请求之前做些什么
    console.log(config);
    return config;
    
  },
  function (error:any) {
    // 对请求错误做些什么
    console.log(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  function (response:any) {
    // 对响应数据做点什么
    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data;
    console.log(response.data)
    return dataAxios;
  },
  function (error:any) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default http;