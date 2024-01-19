import { Grid, Stack, Typography, Pagination } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import usePagination from '../../hooks/usePagination';
import api from '../../services/api';
import Product from '../product';

// interface IpostListProps {
// 	posts: Product[];
// 	onPostDelete: (id: string) => void;
// }

const PostList: React.FC = () => {
	const [allProducts, setAllProducts] = useState<Product[]>([]);
	const perPage = 6;
	const { currentPage, getCurrentData, countPage, setPaginate } =
		usePagination<Product>(allProducts, perPage);
	useEffect(() => {
		api
			.getAllProducts({
				query: 'product',
				page: currentPage,
				limit: 100,
			})
			.then((productData) => setAllProducts(productData.products));
	}, [currentPage]);

	const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
		setPaginate(page);
	};
	return (
		<>
			<Grid container spacing={2}>
				{getCurrentData().map((el) => (
					<Grid
						key={el._id}
						item
						sx={{ display: 'flex' }}
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<Product {...el} />
					</Grid>
				))}
			</Grid>
			<Stack spacing={2} sx={{ marginTop: 2 }}>
				<Typography> Страница: {currentPage}</Typography>
				<Pagination
					count={countPage}
					page={currentPage}
					onChange={handlePageChange}
				/>
			</Stack>
		</>
	);
};

export default PostList;
