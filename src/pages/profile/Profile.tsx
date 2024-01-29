import { Box, Grid, Avatar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useGetUserInfoQuery } from '../../services/Redux/ApiSlice/ApiSlice';
import { useDispatch, useSelector } from '../../services/Redux/hooks';
import { RootState } from '../../services/Redux/store';
import { clearUser } from '../../services/Redux/userSlice/userSlice';

export default function Profile() {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.user.user);
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const exitHandler = () => {
		dispatch(clearUser());
		navigate('/signin');
	};
	if (!user) {
		return <div>Пользователь не найден</div>;
	}
	return (
		<>
			<Box sx={{ flexGrow: 1, p: 2 }}>
				<Button onClick={goBack}>Назад</Button>
				<Button sx={{ marginRight: '20px' }} onClick={exitHandler}>
					Выйти из учетной записи
				</Button>
				<Grid container spacing={2} alignItems='center'>
					<Grid item xs={12} sm={3}>
						<Avatar
							alt={user.name || 'Аватар пользователя'}
							src={user.avatar || 'путь-к-изображению-по-умолчанию'}
							sx={{ width: 150, height: 150 }}
						/>
					</Grid>
					<Grid item xs={12} sm={9}>
						<Typography variant='h5'>{user.name}</Typography>
						<Typography variant='subtitle1'>Email: {user.email}</Typography>
						<Typography variant='subtitle1'>Группа: {user.group}</Typography>
						<Typography variant='subtitle1'>О себе: {user.about}</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
