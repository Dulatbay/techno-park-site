import { message } from 'antd'
import { jwtDecode } from 'jwt-decode'
import { makeAutoObservable, runInAction } from 'mobx'
import { login } from '../instances/auth-instance'

interface Decoded {
	role: string
}

class AuthStore {
	isAuth = false
	access_token: string | null = null
	refresh_token: string | null = null
	role = 'ROLE_USER'

	constructor() {
		makeAutoObservable(this)
		this.loadTokens()
	}

	loadTokens() {
		const access_token = localStorage.getItem('access_token')
		const refresh_token = localStorage.getItem('refresh_token')
		const role = localStorage.getItem('role')

		if (access_token && refresh_token && role) {
			this.access_token = access_token
			this.refresh_token = refresh_token
			this.role = role
			this.isAuth = true
		} else {
			this.isAuth = false
		}
	}

	saveTokens(access_token: string, refresh_token: string, role: string) {
		this.access_token = access_token
		this.refresh_token = refresh_token
		this.role = role
		this.isAuth = true

		localStorage.setItem('access_token', access_token)
		localStorage.setItem('refresh_token', refresh_token)
		localStorage.setItem('role', role)
	}

	clearTokens() {
		this.access_token = null
		this.refresh_token = null
		this.role = 'ROLE_USER'
		this.isAuth = false

		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		localStorage.removeItem('role')
	}

	async loginAction(username: string, password: string) {
		try {
			const res = await login(username, password)
			const access_token = res['access-token']
			const refresh_token = res['refresh-token']

			if (typeof access_token === 'string') {
				const decoded: Decoded = jwtDecode(access_token)

				runInAction(() => {
					this.saveTokens(access_token, refresh_token, decoded.role)
				})
				message.success('Successfully logged in')
			} else {
				throw new Error('Invalid access token')
			}
		} catch (error) {
			this.isAuth = false
			console.error('Login error:', error)
			message.error('Invalid username or password')
			throw error
		}
	}

	logoutAction() {
		this.clearTokens()
	}
	isAdmin() {
		return this.role === 'ROLE_ADMIN'
	}
}

const authStore = new AuthStore()
export default authStore
