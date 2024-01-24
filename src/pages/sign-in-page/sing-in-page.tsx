import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useUserAuthorizationMutation } from '../../services/Redux/ApiSlice/ApiSlice';
import { Link, useNavigate } from 'react-router-dom';
import { setUser } from '../../services/Redux/userSlice/userSlice';
import { useDispatch } from '../../services/Redux/hooks';

const SignIn = () => {
	const dispatch = useDispatch();
	const [userAuthorization] = useUserAuthorizationMutation();

	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email('Неверный формат email')
				.required('Обязательное поле'),
			password: Yup.string()
				.min(6, 'Минимум 6 символов')
				.required('Обязательное поле'),
		}),
		onSubmit: async (values, { setSubmitting, resetForm }) => {
			try {
				const userData = { ...values };
				const response = await userAuthorization(userData).unwrap();
				console.log('Успешная авторизация', response);
				if (response.token) {
					dispatch(
						setUser({
							user: {
								name: response.data.name,
								about: response.data.about,
								avatar: response.data.avatar,
								email: response.data.email,
								group: response.data.group,
							},
							token: response.token,
						})
					);
					navigate('/home');
				}
				setSubmitting(false);
				resetForm();
			} catch (error) {
				console.error('Ошибка авторизации', error);
				setSubmitting(false);
			}
		},
	});

	return (
		<form onSubmit={formik.handleSubmit}>
			<Container component='main' maxWidth='xs'>
				<Box sx={{ mt: 1, display: 'inline-block' }}>
					<div>
						<Typography>Email</Typography>
						<TextField
							id='email'
							type='email'
							sx={{ mt: 1 }}
							{...formik.getFieldProps('email')}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div>{formik.errors.email}</div>
						) : null}
					</div>
					<div>
						<Typography>Пароль</Typography>
						<TextField
							sx={{ mt: 1 }}
							id='password'
							type='password'
							{...formik.getFieldProps('password')}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div>{formik.errors.password}</div>
						) : null}
					</div>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Войти
					</Button>
					<Link to='/signup'>{'Нет Акаунта? Зарегестрируйтесь'}</Link>
				</Box>
			</Container>
		</form>
	);
};

export default SignIn;
