import { Grid, Stack, Typography, Pagination } from '@mui/material';
import { useState } from 'react';
// import usePagination from '../../hooks/usePagination';
import { useGetProductDataQuery } from '../../services/Redux/ApiSlice/ApiSlice';
import Product from '../product';

// interface IpostListProps {
// 	posts: Product[];
// 	onPostDelete: (id: string) => void;
// }

const PostList: React.FC = () => {
	// const perPage = 6;
	const [page, setPage] = useState(1);

	const { data, error, isLoading } = useGetProductDataQuery({
		query: 'product',
		page: page,
		limit: 10,
	});
	// const { currentPage, getCurrentData, countPage, setPaginate } =
	// 	usePagination<Product>(data.products, perPage);
	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>{error.toString()}</div>;

	// const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
	// 	setPaginate(page);
	// };

	return (
		<>
			<Grid container spacing={2}>
				{data.products.map((el: Product) => (
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
			<div>
				<button
					onClick={() => setPage((current: number) => current - 1)}
					disabled={page === 1}>
					Назад
				</button>
				<span>Страница {page}</span>
				<button onClick={() => setPage((current: number) => current + 1)}>
					Вперед
				</button>
			</div>
			{/* <Stack spacing={2} sx={{ marginTop: 2 }}> */}
			{/* <Typography> Страница: {currentPage}</Typography>
				<Pagination
					count={countPage}
					page={currentPage}
					onChange={handlePageChange}
				/>
			</Stack> */}
		</>
	);
};

export default PostList;
