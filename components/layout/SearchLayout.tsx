import { ReactNode } from "react";
import { NavBar } from "components/NavBar";

type SearchLayoutProps = {
    children: ReactNode;
    placeholderSearch: string;
};

export function SearchLayout({ children, placeholderSearch }: SearchLayoutProps) {
    return (
        <>
            <NavBar
                showSearchInput={true}
                placheholderSearch={placeholderSearch}
            />
            <main className="px-3">
                { children }
            </main>
        </>
    );
}