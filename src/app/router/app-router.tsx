import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from './routes';
import { Layout } from '../layout';

export const AppRouter = () => (
    <Routes>
        <Route path="/" element={<Layout />}>
            {routes
                .map(({ path, component: Component }) => {
                    return (
                        <Route
                            path={`/${path}`}
                            element={<Component />}
                            key={path}
                        />
                    );
                })}
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
);
