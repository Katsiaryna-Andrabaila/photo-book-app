import { useEffect, useState } from "react";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Photo, useGetPhotosQuery } from "@/app/api";
import { Card } from "@/entities";
import { setCardsState, useAppDispatch } from "@/app/store";

export const MainPage = () => {
    const { data, isLoading  } = useGetPhotosQuery(50);
    const [search, setSearch] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [cards, setCards] = useState<Photo[] | undefined>();
    const dispatch = useAppDispatch();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedSearch(search);
        }, 1000);
    
        return () => {
            clearTimeout(timeout);
        };
    }, [search]);

    useEffect(() => {
        if (debouncedSearch) {
          setCards(data?.filter((el) => el.title.includes(debouncedSearch)));
          return;
        }
        setCards(data);
        dispatch(setCardsState(data || []));
    }, [debouncedSearch, data, dispatch]);

    if (isLoading) {
        return (
            <p className="w-dvw mt-20 mb-17 text-center text-gray-700 dark:text-gray-200 text-3xl">
                Loading...
            </p>
        );
    }

    return (
        <div className="flex flex-col gap-4 w-9/10 min-h-dvh mx-auto mt-20 mb-17">
            <input
                type="search"
                className="w-1/4 h-10 border border-gray-300 focus:border-gray-700 dark:focus:border-gray-100
                          focus:outline-none px-2 text-gray-700 dark:text-gray-200"
                placeholder="Search..."
                onChange={handleSearch}
            />
            <DndProvider backend={HTML5Backend}>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                    {cards?.map((el) => (
                        <Card key={el.id} card={el} />
                    ))}
                </div>
            </DndProvider>
        </div>
    );
};
