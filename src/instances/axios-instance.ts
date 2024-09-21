import axios from 'axios'

export const axiosInstance = axios.create({
	baseURL: 'http://91.243.71.68:8000',
	headers: {
		'Content-Type': 'application/json',
	},
})
