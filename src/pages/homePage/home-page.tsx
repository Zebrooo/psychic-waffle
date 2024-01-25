import { Container } from '@mui/material';
import PostList from '../../components/post-list';

const HomePage = () => {
	return (
		<>
			<Container
				maxWidth='lg'
				sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
				<PostList />
			</Container>
		</>
	);
};
export default HomePage;
