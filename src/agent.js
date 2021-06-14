import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://159.89.163.98/api/';
const responseBody = res => res.body;

// let token = null;
// const tokenPlugin = req => {
//     if (token) {
//         req.set('Authorization', `Bearer  ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6IjYwYzRmNTUwN2QwOGE5MjZmZTA5NTI1NCIsImVtYWlsIjoibWFuaXNoYWd1cHRhMDE2QGdtYWlsLmNvbSIsIm5hbWUiOiJtYW5pc2hhIiwiYWNjb3VudF9zdGF0dXMiOjAsImlhdCI6MTYyMzYwMDE4NH0.lHPz8I3I_zcNWHRqH8A54YTFd0kF8gjdatDQGsCzIKc'}`);
//     }
// };
const requests = {
    del: url =>
        superagent
            .del(`${API_ROOT}${url}`)
            .then(responseBody),
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6IjYwYzRmNTUwN2QwOGE5MjZmZTA5NTI1NCIsImVtYWlsIjoibWFuaXNoYWd1cHRhMDE2QGdtYWlsLmNvbSIsIm5hbWUiOiJtYW5pc2hhIiwiYWNjb3VudF9zdGF0dXMiOjEsImlhdCI6MTYyMzY4MzkxMX0.sIaqsvvC28EpfG0EgZH-hRn9EFauXpr2augtMiY3imA")
            .then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT}${url}`, body)
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6IjYwYzRmNTUwN2QwOGE5MjZmZTA5NTI1NCIsImVtYWlsIjoibWFuaXNoYWd1cHRhMDE2QGdtYWlsLmNvbSIsIm5hbWUiOiJtYW5pc2hhIiwiYWNjb3VudF9zdGF0dXMiOjEsImlhdCI6MTYyMzY4MzkxMX0.sIaqsvvC28EpfG0EgZH-hRn9EFauXpr2augtMiY3imA")
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .set("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lciI6IjYwYzRmNTUwN2QwOGE5MjZmZTA5NTI1NCIsImVtYWlsIjoibWFuaXNoYWd1cHRhMDE2QGdtYWlsLmNvbSIsIm5hbWUiOiJtYW5pc2hhIiwiYWNjb3VudF9zdGF0dXMiOjEsImlhdCI6MTYyMzY4MzkxMX0.sIaqsvvC28EpfG0EgZH-hRn9EFauXpr2augtMiY3imA")
            .then(responseBody),
    postLoginOTP: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            // .set('Access-Control-Expose-Headers' ,'X-Total-Count, X-Paging-PageSize')
            .set("Access-Control-Expose-Headers", "Authorization")
            .then(res => res)
};

const Register = {
    register: (data) => requests.post('customer/auth/create', data),
    registerOtp: (data) => requests.post('customer/auth/otp', data)
};
const Login = {
    login: (data) => requests.post('customer/auth/login', data),
    loginOtp: (data) => requests.postLoginOTP('customer/auth/login/otp', data),
};
const Products = {
    get: () => requests.get('customer/product/item'),
    search: (data) => requests.get(`customer/product/search/product?name=${data}`),
    categories: () => requests.get(`customer/categories`),
    subcatoriesWiseProducts: (data) => requests.get(`customer/categories/product-with-subcategory?categoryId=${data}`),
    flashSales: () => requests.get(`customer/sale/flash-offer`),
}
const Customers = {
    subscriptions: (data) => requests.get(`customer/subscription/${data.pageIndex}/${data.pageSize}`),
    wallet: () => requests.get(`customer/wallet/balance`),
    addMoney: (data) => requests.put(`customer/wallet/add-money`, data),
    billingHistory: () => requests.get(`customer/product/order/history`),
    getCart: () => requests.get(`customer/product/cart/getCart`),
    addToCart: (data) => requests.post(`customer/product/cart/add`, data),
    removeFromCart: (data) => requests.post(`customer/product/cart/subtract`,data),
    toggleSubscriptions: (data) => requests.put(`customer/subscription/${data}/status`),
    endSubscriptions: (data) => requests.put(`customer/subscription/${data}/end`),
    subscriptionsCalendar: () => requests.get(`customer/subscription/calendar`),
}
const Services = {
    Register,
    Login,
    Products,
    Customers
}
export default Services
