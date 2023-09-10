// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppRoutes } from './routers/routers.js';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from './stores';
import { PersistGate } from 'redux-persist/integration/react';

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={<div>loading store...</div>} persistor={persistor}>
        <AppRoutes />;
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
