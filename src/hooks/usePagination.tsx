import { useState } from 'react';

export default function usePagination<T>(data: T[], itemPerPage: number) {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const minPage = 1;
	const countPage = Math.ceil(data.length / itemPerPage);

	function getCurrentData() {
		const start = (currentPage - 1) * itemPerPage;
		const end = start + itemPerPage;
		return data.slice(start, end);
	}

	function next() {
		setCurrentPage((currentPage) => Math.min(currentPage + 1, countPage));
	}
	function prev() {
		setCurrentPage((currentPage) => Math.min(currentPage - 1, minPage));
	}

	function setPaginate(page: number) {
		const pageNumber = Math.max(1, page);
		setCurrentPage(() => Math.min(pageNumber, countPage));
	}

	return { currentPage, getCurrentData, countPage, next, prev, setPaginate };
}
