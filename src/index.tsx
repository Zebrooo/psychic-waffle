import { createRoot } from 'react-dom/client';
import { App } from './app';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { Provider } from 'react-redux';
import store from './services/Redux/store';
require('dotenv').config();

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
