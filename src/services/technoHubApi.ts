import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface NewsArticle {
    id: number;
    title: string;
    tags: Tag[];
    content: string;
    created_at: string;
    image_url: string;
}

interface Tag {
    id: number;
    name: string;
}

export const baseUrl = "https://sdutechnopark.kz/api/v1"

export const technoHubApi = createApi({
    reducerPath: 'technoHubApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
        responseHandler: async (response) => {
            if (!response.ok) {
                const error = await response.json();
                return {error};
            }
            return response.json();
        },
    }),
    endpoints: (builder) => ({
        getAllBlogs: builder.query<NewsArticle[], void>({
            query: () => `blogs/all`,
        }),
        getAllTags: builder.query<Tag[], void>({
            query: () => 'tags/all'
        })
    }),
})

export const {useGetAllBlogsQuery, useGetAllTagsQuery} = technoHubApi