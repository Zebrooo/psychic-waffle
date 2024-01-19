import Product from '../../components/product';

interface FavoritePageProps {
	cart: Product[];
}

export default function FavoritePage({ cart }: FavoritePageProps) {
	return (
		<>
			{cart.length > 0 ? (
				<>
					{cart.map((el) => (
						<Product key={el._id} {...el} />
					))}
				</>
			) : (
				<>Корзина пуста</>
			)}
		</>
	);
}
