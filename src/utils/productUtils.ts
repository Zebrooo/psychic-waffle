export const isLiked = (likes: string[], userId: string | undefined) =>
	likes.some((id) => id === userId);

export function setColorForIcon(likes: string[], id: string) {
	const like = isLiked(likes, id);
	let iconLikeColor = '';
	like ? (iconLikeColor = 'red') : (iconLikeColor = 'black');
	return iconLikeColor;
}
