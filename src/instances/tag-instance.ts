import { ITag } from '../types'
import { axiosInstance } from './axios-instance'

export async function getAllTagsWithBlogs() {
	try {
		const response = await axiosInstance.get('/tags/all')
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}
export async function getTagById(id: number) {
	try {
		const response = await axiosInstance.get(`/tags/${id}`)
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}
export async function createTag(tag: ITag) {
	try {
		const response = await axiosInstance.post('/tags/create', tag, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}
export async function deleteTag(id: number) {
	try {
		await axiosInstance.delete(`/tags/${id}`)
	} catch (error) {
		console.log(error)
		throw error
	}
}
