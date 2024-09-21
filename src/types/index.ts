export interface IBlog {
	id?: number
	title: string
	content: string
	tags?: ITag[]
	imageUrl?: string
	createdAt?: Date
	updatedAt?: Date
}
export interface ITag {
	id: number
	name: string
}
