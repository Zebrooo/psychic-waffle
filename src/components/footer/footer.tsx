import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Footer: React.FC = () => {
	return (
		<Box
			component='footer'
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.grey[200]
						: theme.palette.grey[800],
			}}>
			<Container maxWidth='sm'>
				<Typography variant='body1'>Мой потрясающий футер</Typography>
				<Typography variant='body2' color='text.secondary'>
					{'© '}
					{new Date().getFullYear()}{' '}
					<Link color='inherit' href='https://yourwebsite.com/'>
						Your Website
					</Link>
					{'.'}
				</Typography>
			</Container>
		</Box>
	);
};

export default Footer;