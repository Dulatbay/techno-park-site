import axios from 'axios'
import authStore from '../stores/auth.store'

export const axiosInstance = axios.create({
	baseURL: 'https://technopark-backend.sdutechnopark.kz',
	headers: {
		'Content-Type': 'application/json',
	},
})

export const refreshTokenReq = async (refreshToken: string) => {
	try {
		const response = await axiosInstance.post('/auth/refresh-token', {
			refreshToken,
		})
		return response.data
	} catch (error) {
		console.error(error)
	}
}

axiosInstance.interceptors.request.use(
	config => {
		const token = authStore.access_token
		console.log('request')
		if (token) config.headers['Authorization'] = `Bearer ${token}`
		return config
	},
	error => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
	response => response,
	async error => {
		const originalRequest = error.config
		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			try {
				const refreshToken = authStore.refresh_token
				if (!refreshToken) {
					authStore.logoutAction()
					return Promise.reject(error)
				}
				const res = await refreshTokenReq(refreshToken)
				const newAccesToken = res['access-token']

				localStorage.setItem('access-token', newAccesToken)
				authStore.access_token = newAccesToken

				axiosInstance.defaults.headers.common[
					'Authorization'
				] = `Bearer ${newAccesToken}`
				originalRequest.headers['Authorization'] = `Bearer ${newAccesToken}`
				console.log('response')
				return axiosInstance(originalRequest)
			} catch (error) {
				authStore.logoutAction()
				return Promise.reject(error)
			}
		}
	}
)
