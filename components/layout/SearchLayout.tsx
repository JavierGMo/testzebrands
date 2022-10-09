import { ReactNode } from "react";
import { NavBar } from "components/NavBar";
import { ItemMenu } from "components/menus/MenuSelect";

type SearchLayoutProps = {
    children: ReactNode;
    placeholderSearch: string;
    optionsForSearch: Array<ItemMenu>;
    actionForSearch: () => void;
};

export function SearchLayout({ children, placeholderSearch, optionsForSearch, actionForSearch }: SearchLayoutProps) {
    return (
        <>
            <NavBar
                showSearchInput={true}
                placheholderSearch={placeholderSearch}
                optionsForSearch={optionsForSearch}
                actionForSearch={actionForSearch}
            />
            <main className="px-3">
                { children }
            </main>
        </>
    );
}