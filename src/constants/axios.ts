import axios from 'axios';

const baseURL = 'http://localhost:3000/admin'
const adminApi = axios.create({
	baseURL: baseURL,
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
}); 
export const adminImageApi = axios.create({
	baseURL: baseURL,
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "multipart/form-data",
	},
}); 

adminApi.interceptors.request.use(
    function(configs:any) {
        let admin=localStorage.getItem("authToken")
      const token = admin
      if (token) {
        configs.headers["Authorization"] =  `Bearer ${token}`;
      }
      return configs;
    },
    function(error:any) {
      return Promise.reject(error);
    }
)

export default adminApi;