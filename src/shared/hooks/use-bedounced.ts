import { useEffect, useState } from "react";

import { Photo } from "@/app/api";

export const useDebounced = (data: Photo[] | undefined, search: string) => {
    const [debouncedSearch, setDebouncedSearch] = useState('');
    const [cards, setCards] = useState<Photo[] | undefined>();

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
    }, [debouncedSearch, data]);

    return cards;
};
