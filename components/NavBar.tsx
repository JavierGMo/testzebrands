import Link from "next/link";
import { type } from "os";

type NavBarProps = {
    showSearchInput: boolean;
    placheholderSearch?: string;
};

export function NavBar({ showSearchInput, placheholderSearch }: NavBarProps){
    console.log(showSearchInput);
    
    return (
        <div className="is-flex px-2 py-1">
            <div className="is-flex">
                <div className="mx-1">
                    <Link href={'/search/users'} >Search Users</Link>
                </div>
                <div className="mx-1">
                    <Link href={'/search/repositories'} >Search Repositories</Link>
                </div>
            </div>
            {
                showSearchInput && (
                    <div>
                        <input type="text" className="input" placeholder={placheholderSearch??'Buscar'} />
                    </div>
                )
            }
        </div>
    );
};