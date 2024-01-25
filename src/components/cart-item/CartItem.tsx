import { RemoveCircleOutline } from '@mui/icons-material';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../services/Redux/types/types';
import AddIcon from '@mui/icons-material/Add';
import {
	addToCart,
	decreaseCart,
	removeFromCart,
} from '../../services/Redux/cartSlice/cartSlice';

interface CartItemProps {
	item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const dispatch = useDispatch();
	console.log(item);

	const handleRemove = () => {
		dispatch(removeFromCart(item._id));
	};

	const handleDecrease = () => {
		dispatch(
			item.quantity == 1 ? removeFromCart(item._id) : decreaseCart(item)
		);
	};

	const handleIncrease = () => {
		dispatch(addToCart(item));
	};

	return (
		<Card variant='outlined' sx={{ marginBottom: 2 }}>
			<CardMedia
				component='img'
				sx={{ width: 100, height: 100 }}
				image={item.pictures || 'placeholder-image-url'}
				alt={item.name}
			/>
			<CardContent>
				<Typography variant='h5'>{item.name}</Typography>
				<Typography color='textSecondary'>Цена: ${item.price}</Typography>
				<Typography color='textSecondary'>
					Количество: {item.quantity}
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton onClick={handleDecrease} color='primary'>
					<RemoveCircleOutline />
				</IconButton>
				{item.quantity < item.stock && (
					<IconButton onClick={handleIncrease} color='primary'>
						<AddIcon />
					</IconButton>
				)}
				<Button onClick={handleRemove} color='secondary'>
					Удалить
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
