import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAllTagsWithBlogs } from '../../instances/tag-instance'
import styles from './NewsTop.module.css'

export const NewsTop = ({
	setActiveCategory,
}: {
	setActiveCategory: (name: string) => void
}) => {
	const [activeCategoryIndex, setActiveCategoryIndex] = useState(0)
	const [data, setData] = useState<{ id?: number; name: string }[] | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		const getItems = async () => {
			try {
				const response = await getAllTagsWithBlogs()
				console.log('Received data:', response)
				setData(response)
			} catch (error) {
				console.error('Error fetching tags:', error)
			}
		}

		getItems()
	}, [activeCategoryIndex])

	function onClick(id: number, name: string, event: React.MouseEvent) {
		event.preventDefault()
		setActiveCategoryIndex(id)
		setActiveCategory(name)

		if (id === 0) {
			navigate('/news')
		} else {
			navigate(`/news?category=${name.toLowerCase()}`)
		}
	}

	return (
		<div className={`${styles.newsCategory}`}>
			<div className={`${styles.newsCategory__container}`}>
				<div className={`${styles.newsCategory__inner}`}>
					<nav className={`${styles.menu}`}>
						<ul>
							<li
								className={`${
									styles[activeCategoryIndex === 0 ? 'active' : 'inactive']
								}`}
								onClick={event => onClick(0, 'all', event)}
							>
								<a href='#'>Все</a>
							</li>
							{data?.map(link => (
								<li
									key={link.id}
									className={`${
										styles[
											activeCategoryIndex === link.id ? 'active' : 'inactive'
										]
									}`}
									onClick={event =>
										onClick(link.id ?? 0, link.name.toLowerCase(), event)
									}
								>
									<a href='#'>
										{link.name.charAt(0).toUpperCase() +
											link.name.slice(1).toLowerCase()}
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	)
}
