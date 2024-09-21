import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	// base: 'https://sdutechnopark.kz/',
	plugins: [react()],
	server: {
		port: 3000,
	},
	define: {
		'process.env': {}, // Define an empty object or add your specific env variables
	},
})
