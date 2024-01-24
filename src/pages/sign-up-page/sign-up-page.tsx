import React from 'react';
import { useForm } from 'react-hook-form';
import registrationSchema from '../../utils/userUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRegisterUserMutation } from '../../services/Redux/ApiSlice/ApiSlice';
import { TextField, Button, Container, Box, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(registrationSchema),
	});
	const [registerUser, { isLoading }] = useRegisterUserMutation();
	const navigate = useNavigate();

	const onSubmit = async (data: any) => {
		try {
			const response = await registerUser(data).unwrap();
			if (response.name) {
				navigate('/signin');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Container component='main' maxWidth='xs'>
				<Box sx={{ mt: 1, display: 'inline-block' }}>
					<Typography>Email</Typography>
					<TextField type='email' {...register('email')} />
					<p>{errors.email?.message}</p>
					<Typography>group</Typography>
					<TextField type='text' {...register('group')} />
					<p>{errors.group?.message}</p>
					<Typography>password</Typography>
					<TextField type='password' {...register('password')} />
					<p>{errors.password?.message}</p>

					<Button type='submit' variant='contained' disabled={isLoading}>
						Зарегистрироваться
					</Button>
				</Box>
				<Link to='/signin'>{'Уже есть аккаунт? Войдите в профиль'}</Link>
			</Container>
		</form>
	);
}
