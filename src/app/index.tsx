import './styles.css';
import { useEffect, useState } from 'react';
import HomePage from '../pages/homePage';
import Header from '../components/header';
import Footer from '../components/footer';
import { postData } from '../data';

export const App = () => {
	const [posts, setPosts] = useState<Post[]>([]);

	useEffect(() => {
		setPosts(postData);
	}, []);

	const handlePostDelete = (id: string) => {
		const filteredPosts = posts.filter((el) => el._id !== id);
		setPosts(filteredPosts);
	};
	return (
		<>
			<Header />
			<HomePage posts={posts} onPostDelete={handlePostDelete} />
			<Footer />
		</>
	);
};
