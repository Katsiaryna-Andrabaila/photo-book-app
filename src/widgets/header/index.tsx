import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { SvgIcon } from '@/shared/svg-icon';

export const Header = () => {
    const ref = useRef<HTMLElement | null>(null);
    const [scrollBg, setScrollBg] = useState('');

    useEffect(() => {
        const handleScroll = (elRef: React.RefObject<HTMLElement | null>) => {
            if (elRef.current) {
                if (
                    document.body.scrollTop > 1 ||
                    document.documentElement.scrollTop > 1
                ) {
                    setScrollBg('fixed_header');
                } else {
                    setScrollBg('');
                }
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
            scrollBg && 'bg-gray-800',
        ])}>
            <div className="flex justify-between align-center h-auto w-9/10 mx-auto my-4">
                <Link to="/" className="font-[Alex_Brush] text-4xl">
                    Gallery
                </Link>
                <Link to="/favorites">
                    <SvgIcon name="icon-fav" size={32} color="grey" />
                </Link>
            </div>
        </header>
    );
};
