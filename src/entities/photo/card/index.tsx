import { useCallback } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { setFavorites, useAppDispatch, useAppSelector } from "@/app/store";
import { SvgIcon } from "@/shared/ui";
import { Photo } from "@/app/api";

type CardProps = {
    card: Photo;
};

export const Card = ({ card }: CardProps) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.find((el) => el.id === card.id);

    const handleFavorites = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
        e.preventDefault();
        if (isFavorite) {
            dispatch(setFavorites(favorites.filter((el) => el.id !== card.id)));
        } else {
            dispatch(setFavorites([...favorites, card]));
        }
    }, [dispatch, favorites, card, isFavorite]);

    return (
        <Link
            to={`/detail/${card.id}`}
            className="relative flex flex-col gap-2 h-50 sm:h-70 border border-gray-300 py-2
                      transform hover:scale-102 transition-all duration-300 ease"
        >
            <div className="flex justify-between gap-2 mx-2">
                <h2 className="text-gray-700 dark:text-gray-200">{card.title}</h2>
                <SvgIcon
                    name="icon-fav"
                    size={32}
                    className={clsx([
                        'flex-none',
                        isFavorite && 'text-red-400',
                        !isFavorite && 'text-grey-200',
                    ])}
                    onClick={handleFavorites}
                />
            </div>
            <img
                src={card.thumbnailUrl}
                alt={`image ${card.id}`}
                className="absolute bottom-0 left-0 w-full h-30 sm:h-50 object-cover"
            />
        </Link>
    );
};
