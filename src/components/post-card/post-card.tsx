import {
	Card,
	CardMedia,
	CardHeader,
	CardContent,
	Typography,
	SvgIcon,
	SvgIconProps,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export function CloseIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path
				d='M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z'
				fill='#080341'></path>
		</SvgIcon>
	);
}

type TPostCardProps = {
	onPostDelete: (id: string) => void;
} & Post;

const PostCard: React.FC<TPostCardProps> = ({
	name,
	price,
	discount,
	wight,
	description,
	isFavorite,
	isCart,
	available,
	stock,
	picture,
	_id,
	onPostDelete,
}) => {
	const handleClickRemove = () => {
		onPostDelete(_id);
	};
	return (
		<>
			<Card sx={{ maxWidth: 345 }}>
				<div>
					<CloseIcon onClick={handleClickRemove} />
					<CardMedia
						height='194'
						component='img'
						image={picture ? picture : ''}
						alt=''
					/>
					<CardHeader title={name} />
					<CardContent>
						<Typography>Цена:{price}</Typography>
						<Typography>{description}</Typography>
						<div>
							<FavoriteBorderIcon /> {isFavorite}
						</div>
					</CardContent>
				</div>
			</Card>
		</>
	);
};

export default PostCard;
