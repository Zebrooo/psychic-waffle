// import { Masonry } from '@mui/lab';
import { Grid, Stack, Typography, Pagination } from '@mui/material';
import { ChangeEvent } from 'react';
import usePagination from '../../hooks/usePagination';
import PostCard from '../post-card';

interface IpostListProps {
	posts: Post[];
	onPostDelete: (id: string) => void;
}

const PostList: React.FC<IpostListProps> = ({ posts, onPostDelete }) => {
	const perPage = 6;
	const { currentPage, getCurrentData, countPage, setPaginate } =
		usePagination<Post>(posts, perPage);

	const handlePageChange = (e: ChangeEvent<unknown>, page: number) => {
		setPaginate(page);
	};
	return (
		<>
			{/* <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
				{posts.map((el) => (
					<PostCard key={el._id} onPostDelete={onPostDelete} {...el} />
				))}
			</Masonry> */}
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
						<PostCard onPostDelete={onPostDelete} {...el} />
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
