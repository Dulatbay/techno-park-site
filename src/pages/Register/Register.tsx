import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authStore from '../../stores/auth.store'
import styles from './Register.module.css'

export const Register: React.FC = () => {
	const adminLogin = import.meta.env.VITE_ADMIN_LOGIN
	const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault()
		if (login === adminLogin && password === adminPassword) {
			localStorage.setItem('isAuth', 'true')
			authStore.login()
			navigate('/news-form')
		} else {
			setError('Wrong credentials')
		}
	}
	return (
		<div className={styles.container}>
			<div className={styles.formWrapper}>
				<h2 className={styles.title}>Sign In</h2>
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label htmlFor='name'>Full Name</label>
						<input
							type='text'
							id='login'
							value={login}
							onChange={e => setLogin(e.target.value)}
							placeholder='Enter your login'
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							name='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='Enter your password'
							required
						/>
					</div>

					{error && <p className={styles.error}>{error}</p>}

					<button type='submit' className={styles.submitButton}>
						Sign In
					</button>
				</form>
			</div>
		</div>
	)
}
