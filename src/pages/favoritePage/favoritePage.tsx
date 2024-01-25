import CartItem from '../../components/cart-item/CartItem';
import { useSelector } from '../../services/Redux/hooks';
import { RootState } from '../../services/Redux/store';

export default function FavoritePage() {
	const cart = useSelector((state: RootState) => state.cart);
	console.log(cart);
	return (
		<>
			{cart.length > 0 ? (
				<>
					{cart.map((el) => (
						<CartItem key={el._id} item={el} />
					))}
				</>
			) : (
				<>Корзина пуста</>
			)}
		</>
	);
}
