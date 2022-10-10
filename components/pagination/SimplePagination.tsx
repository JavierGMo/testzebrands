import { usePagination } from "hooks/usePagination";

type SimplePaginationProps = {
    onPageChange: (index: number)=>void
    totalItems: number;
    pageSize: number;
    currentPage: number;
    siblingCount: number;
};

export function SimplePagination({ onPageChange, totalItems, pageSize, currentPage, siblingCount }: SimplePaginationProps) {
    const pagination = usePagination(
      totalItems,
      pageSize,
      currentPage,
      siblingCount  
    );
    if(currentPage === 0 || (pagination?.length && pagination.length < 2)) return (<></>);

    const onNext = ()=>{
        onPageChange(currentPage+1);
    }

    const onPrevious = ()=>{
        onPageChange(currentPage-1);
    }

    const lastPage =  pagination?pagination[pagination?.length - 1]:1;
    return (
        <nav className="pagination is-centered py-4" role="navigation" aria-label="pagination">
            <a
                className={`pagination-previous ${currentPage === 1?'is-disabled':''}`}
                onClick={currentPage === 1?undefined:onPrevious}
            >
                Previous
            </a>
            <a
                className={`pagination-next ${currentPage === lastPage?'is-disabled':''}`}
                onClick={currentPage === lastPage?undefined:onNext}
            >
                Next page
            </a>
            <ul className="pagination-list">
                {
                    pagination && pagination.map((page, index)=>{
                        if(page === '...')
                            return <li key={index}><span className="pagination-ellipsis">{page}</span></li>
                        return (
                            <li key={index}>
                                <a
                                    className={`pagination-link ${page===currentPage?'is-current':''}`}
                                    aria-label={`Goto page ${page}`}
                                    onClick={()=>{
                                        if(typeof page === 'number') onPageChange(page);
                                    }}
                                >
                                        {page}
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}