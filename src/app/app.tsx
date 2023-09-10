// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { AppRoutes } from './routers/routers.js';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './stores';

export function App() {
  return (
    <ReduxProvider store={store}>
      <AppRoutes />;
    </ReduxProvider>
  );
}

export default App;
