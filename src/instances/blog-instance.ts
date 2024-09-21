import { IBlog } from '../types'
import { axiosInstance } from './axios-instance'

export async function getAllPosts() {
	try {
		const response = await axiosInstance.get('/blogs/all')
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function getPostById(id: number) {
	try {
		const response = await axiosInstance.get(`/blogs/${id}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function createBlog(blog: IBlog, file: File) {
	try {
		const formData = new FormData()
		formData.append('title', blog.title)
		formData.append('content', blog.content)
		formData.append('tagsIds', blog.tags?.join(',') ?? '')
		formData.append('file', file)

		const response = await axiosInstance.post('/blogs/create', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function addTagToBlog(blogId: number, tagIds: number[]) {
	try {
		const response = await axiosInstance.post(
			`/blogs/${blogId}/add-tag`,
			null,
			{
				params: { tagIds },
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function deletePost(id: number | undefined) {
	try {
		await axiosInstance.delete(`/blogs/delete/${id}`)
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function getBlogsByTagName(tagName: string) {
	try {
		const response = await axiosInstance.get(`/blogs/get-by-tag/${tagName}`)
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}

export async function deleteTagFromBlog(
	blogId: number | undefined,
	tagId: number | undefined
) {
	try {
		await axiosInstance.delete(`/blogs/${blogId}/remove-tag/${tagId}`)
	} catch (error) {
		console.error(error)
		throw error
	}
}
