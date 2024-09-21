import { axiosInstance } from './axios-instance'

export async function getImageSrc(url: string | undefined) {
	try {
		const response = await axiosInstance.get(`/files/${url}`)
		return response
	} catch (error) {
		console.error(error)
		throw error
	}
}
