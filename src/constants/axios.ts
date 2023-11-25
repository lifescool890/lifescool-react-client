import axios from 'axios';


const adminBaseURL = 'http://localhost:3000/admin'
const userBaseURL = 'http://localhost:3000/'
const adminApi = axios.create({
	baseURL: adminBaseURL,
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
}); 
export const adminImageApi = axios.create({
	baseURL: adminBaseURL,
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "multipart/form-data",
	},
}); 
export const userApi=axios.create({
	baseURL: userBaseURL,
	responseType: "json",
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
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
