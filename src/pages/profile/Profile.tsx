import { Box, Paper, Grid, Avatar, Typography, Button } from '@mui/material';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, UserContextInterface } from '../../context/user-context';

export default function Profile() {
	const { name, avatar, email, group, about } = useContext(
		UserContext
	) as UserContextInterface;
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	};
	return (
		<>
			<Box sx={{ flexGrow: 1, p: 2 }}>
				<Button onClick={goBack}>Назад</Button>
				<Paper elevation={3} sx={{ p: 2 }}>
					<Grid container spacing={2} alignItems='center'>
						<Grid item xs={12} sm={3}>
							<Avatar
								alt={name}
								src={avatar}
								sx={{ width: 150, height: 150 }}
							/>
						</Grid>
						<Grid item xs={12} sm={9}>
							<Typography variant='h5'>{name}</Typography>
							<Typography variant='subtitle1'>Email: {email}</Typography>
							<Typography variant='subtitle1'>Группа: {group}</Typography>
							<Typography variant='subtitle1'>О себе: {about}</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Box>
		</>
	);
}
