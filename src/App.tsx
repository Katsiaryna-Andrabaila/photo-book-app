import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './app/router/app-router';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
