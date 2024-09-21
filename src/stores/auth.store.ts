import { makeAutoObservable } from 'mobx'

class AuthStore {
	isAuth = localStorage.getItem('isAuth') === 'true'

	constructor() {
		makeAutoObservable(this)
	}

	login() {
		this.isAuth = true
		localStorage.setItem('isAuth', 'true')
	}

	logout() {
		this.isAuth = false
		localStorage.setItem('isAuth', 'false')
	}
}

const authStore = new AuthStore()
export default authStore
