import axios from "axios";

const http = axios.create({
  baseURL:"api"
});
const detailHttp = axios.create({
   baseURL:" http://10.24.24.64:9999/api"
});
export {http,detailHttp};