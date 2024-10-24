import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select, Upload, message } from 'antd'
import { useEffect, useState } from 'react'
import { Controller, FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../../instances/blog-instance'
import { getAllTagsWithBlogs } from '../../instances/tag-instance'
import authStore from '../../stores/auth.store'
import { ITag } from '../../types'
import styles from './NewsForm.module.css'

const { TextArea } = Input

const NewsForm = () => {
	const [file, setFile] = useState(null)
	const [tags, setTags] = useState<ITag[]>([])
	const navigate = useNavigate()
	const {
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	useEffect(() => {
		const getTags = async () => {
			try {
				const fetchedTags = await getAllTagsWithBlogs()
				const formattedTags = fetchedTags.map(
					(tag: { name: string; id: number }) => ({
						value: tag.id,
						label: tag.name,
					})
				)
				setTags(formattedTags)
			} catch (error) {
				message.error('Error fetching tags')
			}
		}
		getTags()
	}, [])
	useEffect(() => {
		const isAuth = localStorage.getItem('isAuth')
		if (!authStore.isAuth) {
			navigate('/')
		}
	}, [navigate])

	const onSubmit = async (data: FieldValues) => {
		const formattedTagsIds = data.tags_ids.join(',')
		console.log(formattedTagsIds)
		const blog = {
			title: data.title,
			content: data.content,
			tags: data.tags_ids,
		}

		try {
			if (!file) {
				message.error('Image is required')
				return
			}
			await createBlog(blog, file)
			console.log('Blog: ', blog)
			console.log('File: ', file)
			message.success('Blog created successfully')
			reset()
		} catch (error) {
			message.error('Error submitting form')
		}
	}

	const uploadProps = {
		beforeUpload: (file: any) => {
			setFile(file)
			return false
		},
		onRemove: () => {
			setFile(null)
		},
	}

	return (
		<Form
			onFinish={handleSubmit(onSubmit)}
			layout='vertical'
			className={styles.formContainer}
		>
			<h2 className={styles.formTitle}>Create a New Blog</h2>

			<Form.Item
				label='Title'
				validateStatus={errors.title ? 'error' : ''}
				help={
					errors.title && (
						<span className={styles.errorMessage}>Title is required</span>
					)
				}
			>
				<Controller
					name='title'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<Input {...field} placeholder='Enter the blog title' />
					)}
				/>
			</Form.Item>

			<Form.Item
				label='Content'
				validateStatus={errors.content ? 'error' : ''}
				help={
					errors.content && (
						<span className={styles.errorMessage}>Content is required</span>
					)
				}
			>
				<Controller
					name='content'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<TextArea
							{...field}
							rows={4}
							style={{ resize: 'none' }}
							placeholder='Enter the blog content'
						/>
					)}
				/>
			</Form.Item>

			<Form.Item
				label='Tags'
				validateStatus={errors.tags_ids ? 'error' : ''}
				help={
					errors.tags_ids && (
						<span className={styles.errorMessage}>
							Please select at least one tag
						</span>
					)
				}
			>
				<Controller
					name='tags_ids'
					control={control}
					rules={{ required: true }}
					render={({ field }) => (
						<Select
							{...field}
							mode='multiple'
							placeholder='Select tags'
							options={tags}
						/>
					)}
				/>
			</Form.Item>

			<Form.Item label='Upload Image'>
				<Upload
					{...uploadProps}
					accept='image/*'
					maxCount={1}
					listType='picture'
				>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</Form.Item>

			<Form.Item>
				<button
					className={styles.submitButton}
					type='submit'
					style={{ color: '#ffffff' }}
				>
					Submit
				</button>
			</Form.Item>
		</Form>
	)
}

export default NewsForm
