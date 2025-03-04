import { Link } from "react-router-dom";

type CardProps = {
    id: number;
    title: string;
    url: string;
};

export const Card = ({ id, title, url }: CardProps) => {
    return (
        <Link
            to={`/detail/${id}`}
            className="relative flex flex-col gap-2 h-50 sm:h-70 border border-gray-300 py-2 transform hover:scale-102 transition-all duration-300 ease"
        >
            <h2 className="text-center text-gray-700 dark:text-gray-200">{title}</h2>
            <img
                src={url}
                alt={`image ${id}`}
                className="absolute bottom-0 left-0 w-full h-30 sm:h-50 object-cover"
            />
        </Link>
    );
};
