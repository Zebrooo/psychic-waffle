import './styles.css';
import HomePage from '../pages/homePage';
import Header from '../components/header';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/404/NotFound';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { UserContext } from '../context/user-context';
import SearchField from '../components/search/SearchField';
import Profile from '../pages/profile/Profile';
import FavoritePage from '../pages/favoritePage/favoritePage';
import SingleProductPage from '../pages/single-product-page';

export const App = () => {
	const [user, setUser] = useState<User | null>(null);
	const [searchQuery, setSearchQuery] = useState<string>('');

	useEffect(() => {
		api
			.getUserInfo()
			.then((user) => setUser(user))
			.catch((err) => console.log(err));
	}, []);
	function handleChangeSearchInput(value: string) {
		setSearchQuery(value);
	}

	return (
		<>
			<UserContext.Provider value={user}>
				<Header>
					<SearchField setQuery={handleChangeSearchInput} />
				</Header>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/products/:productId' element={<SingleProductPage />} />
					<Route path='*' Component={NotFound} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/favorite' element={<FavoritePage />} />
				</Routes>
				<Footer />
			</UserContext.Provider>
		</>
	);
};
