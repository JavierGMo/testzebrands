import Link from "next/link";

import type { RootState } from "store";
import { useSelector, useDispatch } from 'react-redux'
import { newSearch } from 'store/slices/searches/searchesSlice';
import { FormEvent, InputHTMLAttributes, useEffect } from "react";


type NavBarProps = {
    showSearchInput: boolean;
    placheholderSearch?: string;
};

export function NavBar({ showSearchInput, placheholderSearch }: NavBarProps){
    
    const searches = useSelector((state: RootState)=> state.shearches.value);
    const dispatch = useDispatch();

    const handleChangeSearch = (event: FormEvent<HTMLInputElement>)=>{
        const value = event.currentTarget.value;
        dispatch(newSearch(value));
    };

    useEffect(()=>{
        dispatch(newSearch(''));
    }, []);

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
                        <input
                            type="text"
                            className="input"
                            placeholder={placheholderSearch??'Buscar'}
                            onChange={handleChangeSearch}
                            value={searches}
                        />
                    </div>
                )
            }
        </div>
    );
};