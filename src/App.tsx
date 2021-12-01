import { RootRouter } from './components';
import { RootThemeProvider } from './theme/RootThemeProvider';

export default function App() {
  return (
    <RootThemeProvider>
      <RootRouter />
    </RootThemeProvider>
  );
}
