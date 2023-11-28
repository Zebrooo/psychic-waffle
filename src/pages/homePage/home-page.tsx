import { Container } from '@mui/material';
import PostList from '../../components/post-list';

interface IHomePosts {
	posts: Post[];
	onPostDelete: (id: string) => void;
}

const HomePage: React.FC<IHomePosts> = ({ posts, onPostDelete }) => {
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
				<PostList posts={posts} onPostDelete={onPostDelete} />
			</Container>
		</>
	);
};
export default HomePage;
