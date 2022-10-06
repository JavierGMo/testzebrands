import { ReactNode } from "react";
import { NavBar } from "components/NavBar";

type BaseLayoutProps = {
    children: ReactNode;
};

export function BaseLayout({ children }: BaseLayoutProps) {
    return (
        <>
            <NavBar
                showSearchInput={false}
            />
            <main>
                { children }
            </main>
        </>
    );
}