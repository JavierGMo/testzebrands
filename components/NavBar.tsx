import Link from "next/link";

import type { RootState } from "store";
import { useSelector, useDispatch } from 'react-redux'
import { newSearch } from 'store/slices/searches/searchesSlice';
import { FormEvent, useEffect } from "react";
import { InputTextWithIcon } from "./inputs/InputTextWithIcon";
import { faSearchengin, IconDefinition } from '@fortawesome/free-brands-svg-icons'


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
        <nav className="level is-flex px-4 py-2">
            {
                showSearchInput && (
                    <div>
                        {/*<input
                            type="text"
                            className="input"
                            placeholder={placheholderSearch??'Buscar'}
                            onChange={handleChangeSearch}
                            value={searches}
                        />*/}
                        <InputTextWithIcon
                            onChange={handleChangeSearch}
                            value={searches}
                            label="Search"
                            placeholder={placheholderSearch??'Search'}
                            trailingIcon={faSearchengin}
                        />
                    </div>
                )
            }
            <div className="is-flex">
                <div className="mx-1">
                    <Link href={'/search/users'} >Search Users</Link>
                </div>
                <div className="mx-1">
                    <Link href={'/search/repositories'} >Search Repositories</Link>
                </div>
            </div>
            
        </nav>
    );
};