import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardHeader, CardMedia, Button } from '@mui/material';
import { useDispatch } from '../../services/Redux/hooks';
import { addToCart } from '../../services/Redux/cartSlice/cartSlice';

const ProductItem: FC<Product> = ({
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
	if (discount) {
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
	} else {
		discountNewContent = null;
	}

	function getAllReviews() {
		const components: any = [];
		reviews?.map((review: any) => {
			components.push(
				<>
					<div>
						<h3>{review.author?.name}</h3>
					</div>
					<div>{review.text}</div>
				</>
			);
		});
		return components;
	}

	function setNounForm() {
		const num = reviews.length;
		if (num === 1) {
			return 'отзыв';
		} else if (num === 3 || 5 || 4) {
			return 'отзыва';
		} else if (num >= 5) {
			return 'отзывов';
		} else {
			return 'Нет отзывов';
		}
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
			<NavLink style={{ marginBottom: '20px' }} to='/'>
				Назад
			</NavLink>
			<div>
				<h2>{name}</h2>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					marginBottom: '20px',
				}}>
				<div style={{ alignItems: 'center' }}>
					<span>{reviews && setNounForm()}</span>
				</div>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					marginBottom: '20px',
				}}>
				<div>
					<Card sx={{ width: 600 }}>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}></div>
						<div
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
							}}>
							<div>{discountNewContent}</div>
						</div>

						<CardMedia
							component='img'
							height='500px'
							width='500px'
							image={pictures ? pictures : 'https://picsum.photos/480/320'}
							alt=''
						/>
					</Card>
				</div>
				<div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'flex-start',
							alignItems: 'flex-start',
							margin: '40px',
						}}>
						<CardHeader title={`${price} P`} />
						{stock && (
							<Button
								onClick={handleAddToCart}
								style={{
									borderRadius: '20px',
									backgroundColor: '#FFE44D',
									color: 'black',
									margin: '20px',
								}}>
								В корзину
							</Button>
						)}
						<div>
							<h3>Описание:</h3>
							<span>{description}</span>
						</div>
						<div>
							<h3>Характеристики:</h3>
							<div>
								{wight && (
									<>
										<span>Вес:</span> <span>{wight}</span>
									</>
								)}
								<br></br>
								<span>Цена:</span> <span>{price}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div>
					<h3>Отзывы:</h3>
					<div>{getAllReviews()}</div>
				</div>
			</div>
		</>
	);
};

export default ProductItem;
