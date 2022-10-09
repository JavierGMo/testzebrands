import { useMemo } from "react";

type SimplePaginationProps = {
    totalItems: number;
    pageSize: number;
    currentPage: number;
    siblingCount: number;
};

export function SimplePagination({ totalItems, pageSize, currentPage, siblingCount }: SimplePaginationProps) {
    const range = (start: number, end: number, step: number=1)=>{
        return Array.from({
            length: Math.ceil((end-start)/step),
        },
        (_, i)=>{
            start+step*i
        });
    };
    const paginationRange = useMemo(()=>{
        const totalPageCount = Math.ceil(totalItems/pageSize);
        const totalPageNumbers = siblingCount+5;

        if(totalPageNumbers >= totalPageCount) return range(1, totalPageCount);

        const leftSiblingsIndex = Math.max(currentPage-siblingCount, 1);

        

    },[totalItems, currentPage]);

    return (
        <nav className="pagination is-centered py-4" role="navigation" aria-label="pagination">
            <a className="pagination-previous">Previous</a>
            <a className="pagination-next">Next page</a>
            <ul className="pagination-list">
                <li><a className="pagination-link" aria-label="Goto page 1">1</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a className="pagination-link" aria-label="Goto page 45">45</a></li>
                <li><a className="pagination-link is-current" aria-label="Page 46" aria-current="page">46</a></li>
                <li><a className="pagination-link" aria-label="Goto page 47">47</a></li>
                <li><span className="pagination-ellipsis">&hellip;</span></li>
                <li><a className="pagination-link" aria-label="Goto page 86">86</a></li>
            </ul>
        </nav>
    );
}