import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/shared/const';

import { Photo } from './types';
import { MOCK_IMAGES } from './const';

export const fetchPhotos = createApi({
    reducerPath: 'fetchPhotos',
    tagTypes: ['Photos'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    keepUnusedDataFor: 300,
    endpoints: (build) => ({
        getPhotos: build.query<Photo[], number>({
            query: (limit) => limit ? `?_limit=${limit}` : '',
            transformResponse: (response: Photo[]) => 
                response.map((el) => ({
                    ...el,
                    thumbnailUrl: MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)],
                }))
        }),
    }),
});

export const { useGetPhotosQuery } = fetchPhotos;
