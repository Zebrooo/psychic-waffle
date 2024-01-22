import {
	Card,
	CardMedia,
	CardHeader,
	CardContent,
	Typography,
	SvgIcon,
	SvgIconProps,
	CardActions,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from '../../services/Redux/hooks';
import { addToCart } from '../../services/Redux/cartSlice/cartSlice';

export function CloseIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path
				d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
				fill='#080341'></path>
		</SvgIcon>
	);
}

// type TPostCardProps = {
// } & Product;

const Product: React.FC<Product> = ({
	name,
	price,
	discount,
	wight,
	description,
	isFavorite,
	isCart,
	available,
	stock,
	pictures,
	_id,
	reviews,
}) => {
	const dispatch = useDispatch();
	let discountNewContent;
	if (discount !== 0) {
		discountNewContent = (
			<div
				style={{
					borderRadius: '15px',
					backgroundColor: 'red',
					color: 'white',
				}}>
				- {discount} %
			</div>
		);
	} else {
		discountNewContent = null;
	}
	const handleAddToCart = () => {
		dispatch(
			addToCart({
				name,
				price,
				discount,
				wight,
				description,
				isFavorite,
				isCart,
				available,
				stock,
				pictures,
				_id,
				reviews,
			})
		);
	};
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<span>{discountNewContent}</span>
				<Link to={`/products/${_id}`}>
					<CardMedia
						component='img'
						height='500px'
						width='500px'
						image={pictures ? pictures : 'https://picsum.photos/480/320'}
						alt=''
					/>
				</Link>
				<CardHeader title={`${price} P`} />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{name}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{description}
					</Typography>
				</CardContent>
				<CardActions>
					{stock && (
						<button
							onClick={handleAddToCart}
							style={{
								borderRadius: '20px',
								backgroundColor: '#FFE44D',
								color: 'black',
								margin: '20px',
							}}>
							В корзину
						</button>
					)}
				</CardActions>
			</Card>
		</>
	);
};
export default Product;
