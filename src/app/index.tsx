import './styles.css';
import HomePage from '../pages/homePage';
import Header from '../components/header';
import Footer from '../components/footer';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/404/NotFound';
import SinglePost from '../pages/single-product-page';
import { useEffect, useState } from 'react';
import api from '../services/api';
import { UserContext } from '../context/user-context';
import SearchField from '../components/search/SearchField';
import { isLiked } from '../utils/productUtils';
import { ProductsContext } from '../context/product-context';
import Profile from '../pages/profile/Profile';
import FavoritePage from '../pages/favoritePage/favoritePage';

export const App = () => {
	const [user, setUser] = useState<User | null>(null);
	const [products, setProducts] = useState<Product[]>([]);
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [cart, setCart] = useState<Product[]>([]);

	useEffect(() => {
		api
			.getUserInfo()
			.then((user) => setUser(user))
			.catch((err) => console.log(err));
	}, []);
	useEffect(() => {
		api
			.search(searchQuery)
			.then((list) => setProducts(list))
			.catch((err) => console.log(err));
	}, [searchQuery]);
	function handleChangeSearchInput(value: string) {
		setSearchQuery(value);
	}
	function handleProductLike(productData: ProductLikeParam) {
		const like = isLiked(productData.likes, user?._id);

		api.changeLikePostStatus(productData._id, like).then((updateProduct) => {
			const newProductsArray = products.map((currentProduct) =>
				currentProduct._id === updateProduct._id
					? updateProduct
					: currentProduct
			);
			setProducts(newProductsArray);
		});
	}
	console.log(searchQuery);

	return (
		<>
			<UserContext.Provider value={user}>
				<ProductsContext.Provider
					value={{ products, handleProductLike: handleProductLike }}>
					<Header>
						<SearchField setQuery={handleChangeSearchInput} />
					</Header>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/products/:productId' element={<SinglePost />} />
						<Route path='*' Component={NotFound} />
						<Route path='/profile' element={<Profile />} />
						<Route path='/favorite' element={<FavoritePage cart={cart} />} />
					</Routes>
					<Footer />
				</ProductsContext.Provider>
			</UserContext.Provider>
		</>
	);
};
