import { Alert, CircularProgress } from '@mui/material';
import { Stack } from '@mui/system';
import { useLayoutEffect, useRef } from 'react';

interface LoadMoreProps {
	action: () => void;
	isLoading?: boolean;
	isEndOfList?: boolean;
}

export default function LoadMore({
	action,
	isLoading,
	isEndOfList,
}: LoadMoreProps) {
	const ref = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		let observer: IntersectionObserver | undefined = undefined;
		if (!isEndOfList) {
			const options: IntersectionObserverInit = {
				threshold: 0.5,
			};
			const callback: IntersectionObserverCallback = (entries) => {
				if (entries[0].isIntersecting) {
					action();
				}
			};
			observer = new IntersectionObserver(callback, options);
			ref.current && observer.observe(ref.current);
		}

		return () => {
			observer && observer.disconnect();
		};
	}, [action, isEndOfList]);
	console.log(isEndOfList);
	return (
		<Stack
			ref={ref}
			direction='row'
			justifyContent='center'
			alignItems='center'
			sx={{ my: 5 }}>
			{isLoading && <CircularProgress />}
			{isEndOfList && <Alert severity='success'>Вы дошли до конца</Alert>}
		</Stack>
	);
}
