import { useCallback } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Card } from "@/entities";
import { setFavorites, useAppDispatch, useAppSelector } from "@/app/store";

export const FavoritesPage = () => {
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const dispatch = useAppDispatch();

    const moveCard = useCallback((from: number, to: number) => {
        const updatedCards = [...favorites];
        const [movedImage] = updatedCards.splice(from, 1);
        updatedCards.splice(to, 0, movedImage);
        dispatch(setFavorites(updatedCards));
    }, [favorites, dispatch]);

    if (!favorites.length) return (
        <p className="w-dvw mt-20 mb-17 text-center text-gray-700 dark:text-gray-200 text-3xl">
            You have no favorites yet.
        </p>
    );

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="flex flex-col gap-4 w-9/10 min-h-dvh mx-auto mt-20 mb-17">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {favorites.map((el, i) => (
                        <Card key={el.id} card={el} index={i} moveCard={moveCard} />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};
