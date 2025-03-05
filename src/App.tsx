import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from "react-error-boundary";

import { AppRouter } from './app/router/app-router';
import { store } from './app/store';
import { FallbackRender } from './shared/ui';

function App() {
  return (
    <ErrorBoundary fallbackRender={FallbackRender}>
        <Provider store={store}>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </Provider>
    </ErrorBoundary>
  );
}

export default App;
