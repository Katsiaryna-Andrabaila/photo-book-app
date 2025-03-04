import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";

import { AppRouter } from './app/router/app-router';
import { store } from './app/store';

function App() {
  return (
    <ErrorBoundary fallbackRender={
        ({ error }) => (
            <div className="w-screen mx-4 text-center text-gray-700 text-2xl">
                Something went wrong:
                <pre className="mt-2 text-red-500">{error.message}</pre>
            </div>
        )
    }>
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
  );
}

export default App;
