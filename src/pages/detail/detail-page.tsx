import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import clsx from "clsx";

import { setFavorites, useAppDispatch, useAppSelector } from "@/app/store";
import { SvgIcon } from "@/shared/ui";

export const DetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const photo = useAppSelector((state) => state.cardsState.cards).find((el) => el.id === Number(id));
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const dispatch = useAppDispatch();
    const isFavorite = favorites.find((el) => el.id === photo?.id);

    const handleFavorites = useCallback(() => {
        if (!photo) return;
        if (isFavorite) {
            dispatch(setFavorites(favorites.filter((el) => el.id !== photo.id)));
        } else {
            dispatch(setFavorites([...favorites, photo]));
        }
    }, [dispatch, favorites, photo, isFavorite]);

    useEffect(() => {
        if (!photo) {
            navigate('/404');
        }
    }, [photo, navigate]);
    
    return (
        <div className="flex flex-col gap-4 w-9/10 mx-auto mt-20 mb-17">
            <div className="flex justify-between items-center gap-2 mx-2">
                <h1 className="text-center text-gray-700 dark:text-gray-200">{photo?.title}</h1>
                <SvgIcon
                    name="icon-fav"
                    size={44}
                    className={clsx([
                        'flex-none cursor-pointer text-gray-400',
                        isFavorite && 'text-red-400',
                    ])}
                    onClick={handleFavorites}
                />
            </div>
            <div className="relative w-full h-70 sm:h-100 overflow-hidden border border-gray-300">
                <span
                  className="absolute top-0 left-0 z-[-1] w-full h-full opacity-90 blur-lg"
                  style={{
                    background: `url(${photo?.thumbnailUrl || ''}) center/cover no-repeat`,
                  }}
                />
                <img
                    src={photo?.thumbnailUrl || ''}
                    alt={`image ${id}`}
                    className="w-full h-full object-contain"
                />
            </div>
            <p className="text-center text-gray-700 dark:text-gray-200">
                Album ID: {photo?.albumId}
            </p>
        </div>
    );
};
