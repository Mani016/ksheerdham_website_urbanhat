
import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://159.89.163.98/api/';
const responseBody = res => res.body;

const token = localStorage.getItem("token");
const requests = {
    del: url =>
        superagent
            .del(`${API_ROOT}${url}`)
            .then(responseBody),
    get: url =>
        superagent
            .get(`${API_ROOT}${url}`)
            .set("Authorization", `Bearer ${token}`)
            .then(responseBody),
    put: (url, body) =>
        superagent
            .put(`${API_ROOT}${url}`, body)
            .set("Authorization", `Bearer ${token}`)
            .then(responseBody),
    post: (url, body) =>
        superagent
            .post(`${API_ROOT}${url}`, body)
            .set("Authorization", `Bearer ${token}`)
            .then(responseBody),
};

const Register = {
    register: (data) => requests.post('customer/auth/create', data),
    registerOtp: (data) => requests.post('customer/auth/otp', data)
};
const Login = {
    login: (data) => requests.post('customer/auth/login', data),
    loginOtp: (data) => requests.post('customer/auth/login/otp', data),
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
    removeFromCart: (data) => requests.post(`customer/product/cart/subtract`, data),
    toggleSubscriptions: (data) => requests.put(`customer/subscription/${data}/status`),
    endSubscriptions: (data) => requests.put(`customer/subscription/${data}/end`),
    addOrder: (data) => requests.post(`customer/product/order/add-order`, data),
    productDetail: (data) => requests.get(`customer/categories/product-details?productId=${data}`),
    addSubscription: (data) => requests.put(`customer/subscription/add`, data),
    subscriptionsCalendar: (data) => requests.get(`customer/subscription/calendar/customer/date?date=${data}`),
    updateSubscription: (id, product_id, data) => requests.put(`customer/subscription/update/${id}/${product_id}`, data)
}
const Services = {
    Register,
    Login,
    Products,
    Customers
}
export default Services
