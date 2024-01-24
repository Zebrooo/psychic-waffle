import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import store from './services/Redux/store';
import theme from './theme/theme';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
	<StrictMode>
		<BrowserRouter
			basename={process.env.PUBLIC_PATH ? process.env.PUBLIC_PATH : '/'}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Provider store={store}>
					<App />
				</Provider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
);
