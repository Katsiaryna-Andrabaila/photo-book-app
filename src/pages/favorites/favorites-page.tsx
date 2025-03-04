import { Card } from "@/entities";
import { useAppSelector } from "@/app/store";

export const FavoritesPage = () => {
    const favorites = useAppSelector((state) => state.favorites.favorites);

    return (
        <div className="flex flex-col gap-4 w-9/10 min-h-dvh mx-auto mt-20 mb-17">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                {favorites.map((el) => (
                    <Card key={el.id} card={el} />
                ))}
            </div>
        </div>
    );
};
