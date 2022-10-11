import { ReactNode, useEffect } from "react";
import { useState } from "react";
import type { RootState } from "store";
import { useSelector } from "react-redux";


import { NavBar } from "components/NavBar";
import { ItemMenu } from "components/menus/MenuSelect";
import { SimplePagination } from "components/pagination/SimplePagination";
import { SimpleLoader } from "components/loader/SimpleLoader";


type SearchLayoutProps = {
    children: ReactNode;
    placeholderSearch: string;
    optionsForSearch: Array<ItemMenu>;
    actionForSearch: (page?:number) => void;
};

export function SearchLayout({ children, placeholderSearch, optionsForSearch, actionForSearch }: SearchLayoutProps) {
    const totalItemsState = useSelector((state: RootState)=>state.counterPagination.totalItems);
    const isShowLoader = useSelector((state: RootState)=>state.showingLoader.show);

    const [currentPage, setCurrentPage] = useState(1);
    const handlerOnPageChange = (page: number = 1)=>{
        actionForSearch(page);
        setCurrentPage(page);
    }
    useEffect(()=>{
    }, []);
    
    return (
        <>
            <NavBar
                showSearchInput={true}
                placheholderSearch={placeholderSearch}
                optionsForSearch={optionsForSearch}
                actionForSearch={actionForSearch}
            />
            <SimpleLoader show={isShowLoader} />
            <main className="px-3">
                { children }
            </main>
            <footer>
                <SimplePagination
                    onPageChange={handlerOnPageChange}
                    totalItems={totalItemsState}
                    pageSize={10}
                    currentPage={currentPage}
                    siblingCount={1}
                />
            </footer>
        </>
    );
}