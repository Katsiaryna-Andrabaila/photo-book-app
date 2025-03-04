import { Outlet } from 'react-router-dom';

import { Footer, Header } from '@/widgets';

export const Layout = () => (
    <>
        <Header />
        <main className="w-screen">
            <Outlet />
        </main>
        <Footer />
    </>
);