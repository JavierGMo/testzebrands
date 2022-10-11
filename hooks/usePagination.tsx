import { range } from "lib/utils/utils";
import { useMemo } from "react";

/**
 * Save the state paginate
 */
 export function usePagination(totalItems: number, pageSize: number, currentPage: number, siblingCount: number){
    const useMemoPagination = useMemo(()=>{
        const totalPageCount = Math.ceil(totalItems/pageSize);
        const totalPageNumbers = siblingCount+5;

        if(totalPageNumbers >= totalPageCount) return range(1, totalPageCount);

        const leftSiblingIndex = Math.max(currentPage-siblingCount, 1);

        const rightSiblingIndex = Math.min(
            currentPage+siblingCount,
            totalPageCount
        );

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
        
            return [...leftRange, '...', totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
      
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(
              totalPageCount - rightItemCount + 1,
              totalPageCount
            );
            return [firstPageIndex, '...', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex];
        }
    }, [totalItems, pageSize, currentPage, siblingCount]);

    return useMemoPagination;
}