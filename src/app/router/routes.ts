import { ComponentType } from 'react';

import {
    DetailPage, FavoritesPage, MainPage, NotFoundPage,
} from '@/pages';

interface Route {
    path: string;
    component: ComponentType;
}

export const routes: Route[] = [
    { path: '/', component: MainPage },
    { path: '/detail/:id', component: DetailPage },
    { path: '/favorites', component: FavoritesPage },
    { path: '/404', component: NotFoundPage },
];
