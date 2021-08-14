import axios from "axios";

const http = axios.create({
  baseURL:"api"
  // baseURL:" http://39.99.151.246/api"
  // baseURL:" https://cnodejs.org/api/v1"
});
const detailHttp = axios.create({
  baseURL:"http://39.99.151.246/api"
  // baseURL:" http://39.99.151.246/api"
  // baseURL:" https://cnodejs.org/api/v1"
});
export {http,detailHttp};