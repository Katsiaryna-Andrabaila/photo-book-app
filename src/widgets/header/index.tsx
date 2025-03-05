import { useEffect, useRef, useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import clsx from 'clsx';

import { SvgIcon, ThemeSwitcher } from '@/shared/ui';

export const Header = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [scrollBg, setScrollBg] = useState(false);
    const resolved = useResolvedPath("/favorites");
    const match = useMatch({ path: resolved.pathname, end: true });

    useEffect(() => {
        const handleScroll = (elRef: React.RefObject<HTMLElement | null>) => {
            if (elRef.current) {
                setScrollBg(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1);
            }
        };

        handleScroll(ref);

        window.addEventListener('scroll', () => handleScroll(ref));

        return () => {
            window.removeEventListener('scroll', () => handleScroll(ref));
        };
    }, []);

    return (
        <header ref={ref} className={clsx([
            'fixed top-0 left-0 right-0 z-1 transition duration-300 ease',
            scrollBg && 'bg-gray-100 dark:bg-gray-400 opacity-95',
        ])}>
            <div className="flex justify-between items-center h-auto w-9/10 mx-auto my-3">
                <Link to="/" className="font-[Alex_Brush] text-4xl">
                    Gallery
                </Link>
                <Link to="/favorites" className="flex items-center justify-center flex-1 max-w-fit ml-auto mr-4">
                    <SvgIcon
                        name="icon-fav"
                        size={32}
                        className={clsx(['text-grey-200', match && 'text-red-400'])}
                    />
                </Link>
                <ThemeSwitcher />
            </div>
        </header>
    );
};
