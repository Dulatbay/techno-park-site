import { Button, Popover } from 'antd'
import { useEffect, useState } from 'react'
import { deletePost, deleteTagFromBlog } from '../../instances/blog-instance'
import { getImageSrc } from '../../instances/file-instance'
import authStore from '../../stores/auth.store'
import styles from './NewsMain.module.css'

interface Props {
	idOfBlog: number | undefined
	imageUrl: string | undefined
	title: string
	description: string
	date: Date | undefined
	genre: string[] | undefined
	genreId: number[] | undefined
}

export const NewsMain = ({
	idOfBlog,
	imageUrl,
	title,
	description,
	date,
	genre,
	genreId,
}: Props) => {
	const [openPopoverIndex, setOpenPopoverIndex] = useState<number | null>(null)
	const [imageSrc, setImageSrc] = useState<string>('')
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const fetchImage = async () => {
			try {
				const response = await getImageSrc(imageUrl)
				setImageSrc(response.data)
			} catch (error) {
				setError('Не удалось загрузить изображение')
			}
		}

		if (imageUrl) {
			fetchImage()
		}
	}, [imageUrl])

	const handleDeleteTag = async (blogId: number, tagId: number) => {
		await deleteTagFromBlog(blogId, tagId)
	}

	const handleDelete = async (id: number | undefined) => {
		await deletePost(id)
	}

	const handleOpenChange = (index: number, newOpen: boolean) => {
		if (newOpen) {
			setOpenPopoverIndex(index)
		} else {
			setOpenPopoverIndex(null)
		}
	}

	return (
		<div className={styles.newsMain}>
			<div className={styles.container}>
				<div className={styles.imgContainer}>
					{imageSrc ? (
						<img
							className={styles.img}
							alt={title}
							src={`${import.meta.env.VITE_API_URL}/files/${imageUrl}`}
						/>
					) : (
						<p>{error || 'Загрузка изображения...'}</p>
					)}
				</div>

				<div className={styles.content}>
					<h5>{title}</h5>
					<p>{description}</p>

					<div className={styles.contentBottom}>
						<span>{date?.toString().slice(0, 10)}</span>
						<div className={styles.genres}>
							{genre &&
								genre.map((item, index) =>
									authStore.isAuth ? (
										<Popover
											key={index}
											content={
												<Button
													onClick={() =>
														handleDeleteTag(idOfBlog!, genreId![index])
													}
												>
													Delete
												</Button>
											}
											trigger='click'
											open={openPopoverIndex === index}
											onOpenChange={newOpen => handleOpenChange(index, newOpen)}
										>
											<span className={styles.tag}>{item}</span>
										</Popover>
									) : (
										<span className={styles.tag}>{item}</span>
									)
								)}
						</div>
					</div>

					{authStore.isAuth ? (
						<div className={styles.deleteButtonContainer}>
							<Button onClick={() => handleDelete(idOfBlog)}>
								Delete Post
							</Button>
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</div>
	)
}
