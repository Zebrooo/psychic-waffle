import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardHeader, CardMedia, Button } from '@mui/material';
type ProductItemProps = {
	setCart: (id: string) => void;
} & Product;

const ProductItem: FC<ProductItemProps> = ({
	_id,
	discount,
	pictures,
	price,
	wight,
	name,
	reviews,
	description,
	setCart,
}) => {
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
					{' '}
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
		reviews?.map((review) => {
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
		switch (num) {
			case 1:
				return 'отзыв';

			case 2:
			case 3:
			case 4:
				return 'отзыва';
			case 5:
				return 'отзывов';

			default:
				return 'Нет отзывов';
		}
	}
	const addFavoriteHandle = (id: string) => {
		setCart((prev)=> ...prev, id)
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
							{/* <div>
								<FavoriteBorderIcon
									sx={{ color: setColorForIcon(likes, currentUser._id) }}
									fontSize='small'
								/>
								{likes.length}
							</div> */}
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
						<Button
							style={{
								borderRadius: '20px',
								backgroundColor: '#FFE44D',
								color: 'black',
								margin: '20px',
							}}>
							В корзину
						</Button>
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
