import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@/shared/const';

import { Photo } from './types';

export const fetchPhotos = createApi({
    reducerPath: 'fetchPhotos',
    tagTypes: ['Photos'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        getPhotos: build.query<Photo[], string>({
            query: (limit = '') => limit ? `?_limit=${limit}` : '',
        }),
    }),
});

export const { useGetPhotosQuery } = fetchPhotos;
