import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'https://technopark-backend.sdutechnopark.kz',
	headers: {
		'Content-Type': 'application/json',
	},
})
