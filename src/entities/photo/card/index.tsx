import { useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { useDrag, useDrop } from "react-dnd";

import { setFavorites, useAppDispatch, useAppSelector } from "@/app/store";
import { SvgIcon } from "@/shared/ui";
import { Photo } from "@/app/api";

type CardProps = {
    card: Photo;
    index?: number;
    moveCard?:(from: number, to: number) => void;
};

export const Card = ({ card, index, moveCard }: CardProps) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.find((el) => el.id === card.id);
    const ref = useRef<HTMLAnchorElement | null>(null);

    const [, drop] = useDrop({
        accept: 'image',
        hover(item: { index: number }) {
            if (!ref.current) {
              return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
              return;
            }
            moveCard?.(dragIndex, hoverIndex!);
            item.index = hoverIndex!;
        },
    });
    
    const [, drag] = useDrag({
        type: 'image',
        item: { index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    
    drag(drop(ref));

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
            ref={ref}
            to={`/detail/${card.id}`}
            className="flex flex-col gap-2 h-50 sm:h-70 border border-gray-300 py-2
                      transform hover:scale-102 transition-all duration-300 ease"
        >
            <img
                src={card.thumbnailUrl}
                alt={`image ${card.id}`}
                className="w-full h-30 sm:h-50 object-cover"
            />
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
        </Link>
    );
};
