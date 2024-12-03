import axios from "axios";
// -------------------------1. 创建axios实例-----------------------
const instance = axios.create({
    // 接口
    baseURL: "/api",
    // 超时时间
    timeout: 3000,
});
// -------------------------2.请求拦截-----------------------
instance.interceptors.request.use(
    config => {
        // 根据需求修改，可以使用pinia状态管理
        let token = sessionStorage.getItem('token');
        if (token) {
            config.headers['token'] = token
        }
        // 加载loading
        // addLoading();
        return config;
    },
    error => {
        //  请求发生错误，抛出异常
        Promise.reject(error);
    }
);

// -------------------------3.响应拦截-----------------------
instance.interceptors.response.use(
    res => {
        // 取消加载 loading
        // cancelLoading();
        return res;
    },
    error => {
        // 取消加载 loading
        // cancelLoading();
        if (error && error.response) {
            const status = error.response.status
            switch (status) {
                case 400:
                    alert("请求错误");
                    break;
                case 401:
                    alert("未授权，请重新登录");
                    break;
                case 403:
                    alert("登录过期，请重新登录");
                    break;
                case 404:
                    alert("请求错误，未找到相应的资源");
                    break;
                case 408:
                    alert("请求超时");
                    break;
                case 500:
                    alert("服务器错误");
                    break;
                case 504:
                    alert("网络超时");
                    break;
                default:
                    alert("请求失败");
            }
        } else {
            if (JSON.stringify(error).includes("timeout")) {
                error.code = "TIMEOUT";
                error.message = "服务器响应超时，请刷新页面";
            }
        }
        return Promise.reject(error);
    },

);
export default instance;