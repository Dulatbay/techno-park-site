import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export interface NewsArticle {
    id: number;
    title: string;
    tags: Tag[];
    content: string;
    created_at: string;
    image_url: string;
}

interface Tag{
    id: number;
    title: string;
}

export const technoHubApi = createApi({
    reducerPath: 'technoHubApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8888/' }),
    endpoints: (builder) => ({
        getAllBlogs: builder.query<NewsArticle[], void>({
            query: () => `blogs/all`,
        }),
    }),
})

export const { useGetAllBlogsQuery } = technoHubApi