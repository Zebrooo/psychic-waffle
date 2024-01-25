import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/product';
import ProductItem from '../../components/product-item/ProductItem';
import api from '../../services/api';

export default function SingleProductPage() {
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
		<Container maxWidth='lg'>
			<ProductItem {...(product as Product)} />
		</Container>
	);
}
