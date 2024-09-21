import React, { useEffect, useState } from 'react'
import { NewsMain } from '../../components/NewsMain/NewsMain.tsx'
import { NewsTop } from '../../components/NewsTop/NewsTop.tsx'
import { getAllPosts } from '../../instances/blog-instance.ts'
import { IBlog } from '../../types/index.ts'
import styles from './News.module.css'

export const News = () => {
	const [activeCategory, setActiveCategory] = useState('all')
	const [filteredItems, setFilteredItems] = useState<IBlog[]>([])
	const [data, setData] = useState<IBlog[]>([])

	useEffect(() => {
		const getItems = async () => {
			const res = await getAllPosts()
			setData(res)
		}
		getItems()
		const filterItems = () => {
			if (activeCategory === 'all') {
				setFilteredItems(data)
			} else {
				const filtered = data.filter((post: IBlog) =>
					post.tags?.some(
						tag => tag.name.toLowerCase() === activeCategory.toLowerCase()
					)
				)
				setFilteredItems(filtered)
			}
		}

		filterItems()
	}, [activeCategory, data])

	return (
		<div className={styles.news}>
			<NewsTop setActiveCategory={setActiveCategory} />
			<div className={styles.newsContainerList}>
				{filteredItems.map((i: IBlog) => (
					<React.Fragment key={i.id}>
						<hr className={styles.hr} />
						<NewsMain
							idOfBlog={i.id}
							imageUrl={i.imageUrl}
							title={i.title}
							description={i.content}
							date={i.createdAt}
							genre={i.tags?.map(j => j.name)}
							genreId={i.tags?.map(j => j.id)}
						/>
					</React.Fragment>
				))}
				<hr className={styles.hr} />
			</div>
		</div>
	)
}
