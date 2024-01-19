import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/product';
import ProductItem from '../../components/product-item/ProductItem';
import api from '../../services/api';

interface SingleProductPageProps {
	setCart: (id: string) => void;
}

export default function SingleProductPage({ setCart }: SingleProductPageProps) {
	const [product, setProduct] = useState<Product | null>(null);
	const { productId } = useParams();
	useEffect(() => {
		if (productId) {
			api
				.getProductId(productId)
				.then((el) => setProduct(el))
				.catch((err) => {
					console.log(err);
				});
		}
	}, [productId]);
	return (
		<>
			<Container maxWidth='lg'>
				<ProductItem setCart={setCart} {...(product as Product)} />
			</Container>
		</>
	);
}
