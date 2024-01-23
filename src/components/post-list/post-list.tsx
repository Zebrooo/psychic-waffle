import { Grid, Container } from '@mui/material';
import { useCallback, useState } from 'react';
import { useGetProductDataQuery } from '../../services/Redux/ApiSlice/ApiSlice';
import Product from '../product';
import LoadMore from '../shared/LoadMore/LoadMore';

interface PostsSearchFilter {
	searchPhrase: string;
	page: number;
}

const PostList: React.FC = () => {
	const [postsSearchFilter, setPostsSearchFilter] = useState<PostsSearchFilter>(
		{
			searchPhrase: 'Products',
			page: 1,
		}
	);

	const { data, error, isLoading, isFetching } = useGetProductDataQuery({
		query: postsSearchFilter.page,
		page: postsSearchFilter.page,
	});
	const isEndOfList = data && data.products.length >= data.total;
	const loadMorePosts = useCallback(() => {
		if (!isEndOfList) {
			setPostsSearchFilter((prev) => ({ ...prev, page: prev.page + 1 }));
		}
	}, [isEndOfList]);
	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>{error.toString()}</div>;
	return (
		<Container>
			<Grid container spacing={2}>
				{data?.products.map((el: Product) => (
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
			{data?.products?.length && (
				<LoadMore
					action={loadMorePosts}
					isEndOfList={isEndOfList}
					isLoading={isFetching}
				/>
			)}
		</Container>
	);
};

export default PostList;
