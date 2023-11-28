import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontSize: '1rem',
				},
			},
		},
		MuiCssBaseline: {
			styleOverrides: {
				'@global': {
					'html, body, #root': {
						height: '100%',
						margin: 0,
						padding: 10,
					},
					body: {
						backgroundColor: '#f7f7f7',
						fontFamily: 'Arial, sans-serif',
					},
				},
			},
		},
	},
	typography: {
		fontFamily: 'Arial, sans-serif',
		body1: {
			fontSize: '1rem',
		},
	},
});

export default theme;
