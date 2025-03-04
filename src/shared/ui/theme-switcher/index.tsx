import { useEffect, useState } from "react";
import clsx from "clsx";

import { SvgIcon } from "../svg-icon";

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'light'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      className="relative flex items-center gap-2 w-16 h-8 bg-[#b3b1b1] dark:bg-[#e1dfdf] rounded-full p-1 cursor-pointer"
      onClick={toggleTheme}
    >
        <div className={clsx([
            'absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform',
            theme === 'dark' && 'translate-x-8',
            theme !== 'dark' && 'translate-x-0',
        ])} />
        <SvgIcon name="icon-sun" size={24} />
        <SvgIcon name="icon-moon" size={24} />
    </div>
  );
};
