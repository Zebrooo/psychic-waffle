const useAuth = () => {
	const token = localStorage.getItem('authToken');
	return !!token; // Возвращает true, если токен существует
};
export default useAuth;
