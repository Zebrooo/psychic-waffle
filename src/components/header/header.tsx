import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';

// Стили для поискового поля
const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
}));

// Компонент Header
const Header: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	const performSearch = () => {
		// Логика поиска
		console.log('Поиск по странице:', searchQuery);
		// Здесь может быть код для перехода к разделу страницы или фильтрации контента
	};

	return (
		<AppBar position='static'>
			<Toolbar>
				<Typography
					variant='h6'
					noWrap
					component='div'
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
					Собачий сайт
				</Typography>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Поиск…'
						inputProps={{ 'aria-label': 'search' }}
						value={searchQuery}
						onChange={handleSearchChange}
						onKeyPress={(ev) => {
							if (ev.key === 'Enter') {
								ev.preventDefault();
								performSearch();
							}
						}}
					/>
				</Search>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
