import './styles.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import Header from '../components/header';
import Footer from '../components/footer';
import NotFound from '../pages/404/NotFound';
import Profile from '../pages/profile/Profile';
import FavoritePage from '../pages/favoritePage/favoritePage';
import SingleProductPage from '../pages/single-product-page';
import SignIn from '../pages/sign-in-page/sing-in-page';
import PrivateRoute from '../components/private-route/private-route';
import SignUpPage from '../pages/sign-up-page/sign-up-page';

export const App = () => {
	return (
		<>
			<Header>
				{/* <SearchField setQuery={handleChangeSearchInput} /> */}
			</Header>
			<Routes>
				<Route path='/' element={<Navigate replace to='/signin' />} />
				<Route path='/home' element={<PrivateRoute component={HomePage} />} />
				<Route path='/signin' element={<SignIn />} />
				<Route path='/signup' element={<SignUpPage />} />
				<Route
					path='/products/:productId'
					element={<PrivateRoute component={SingleProductPage} />}
				/>
				<Route path='*' Component={NotFound} />
				<Route path='/profile' element={<PrivateRoute component={Profile} />} />
				<Route
					path='/favorite'
					element={<PrivateRoute component={FavoritePage} />}
				/>
			</Routes>
			<Footer />
		</>
	);
};
