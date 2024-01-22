import * as yup from 'yup';

const registrationSchema = yup
	.object({
		email: yup
			.string()
			.email('Неверный формат email')
			.required('Email обязателен'),
		group: yup
			.string()
			.matches(/sb-\d+/, 'Формат должен быть ra-<номер потока>')
			.required('ID группы обязателен'),
		password: yup
			.string()
			.min(6, 'Пароль должен быть от 6 до 24 символов')
			.max(24, 'Пароль должен быть от 6 до 24 символов')
			.required('Пароль обязателен'),
	})
	.required();
export default registrationSchema;
