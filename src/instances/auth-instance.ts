import { axiosInstance } from './axios-instance'

export async function register(username: string, password: string) {
	try {
		const response = await axiosInstance.post('/auth/registration', {
			username,
			password,
		})
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function login(username: string, password: string) {
	try {
		const response = await axiosInstance.post('/auth/login', {
			username,
			password,
		})
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}
