import Link from "next/link";

import { FormEvent, useEffect } from "react";
import { ChangeEvent, KeyboardEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "store";
import { newSearch } from 'store/slices/searches/searchesSlice';
import { optionSearch } from 'store/slices/menus/menuOptionSearchSlice';
import { InputTextWithIcon } from "./inputs/InputTextWithIcon";
import { faSearchengin } from '@fortawesome/free-brands-svg-icons'
import { ItemMenu, MenuSelect } from "./menus/MenuSelect";


type NavBarProps = {
    showSearchInput: boolean;
    placheholderSearch?: string;
    optionsForSearch?: Array<ItemMenu>;
    actionForSearch?: ()=>void;
};

const options = [
    {
        value: 'a',
        text: 'Hola'
    },
    {
        value: 'b',
        text: 'Adios'
    },

];

export function NavBar({
    showSearchInput,
    placheholderSearch,
    optionsForSearch,
    actionForSearch
}: NavBarProps){
    
    const searches = useSelector((state: RootState)=> state.shearches.value);
    const menuOptionSearch = useSelector((state: RootState) => state.menuOptionSearch.value);

    const dispatch = useDispatch();

    const handleChangeSearch = (event: FormEvent<HTMLInputElement>)=>{
        const value = event.currentTarget.value;
        dispatch(newSearch(value));
    };

    const handleChangeOptionSearch = (event: ChangeEvent<HTMLSelectElement>): void => {
        const value = event.currentTarget.value;
        dispatch(optionSearch(value));
    };

    const handleOnKeyUpEnterInputSearch = (event: KeyboardEvent<HTMLInputElement>)=>{
        const code = event.code;
        if(code !== 'Enter') return;
        actionForSearch?.();
    }

    useEffect(()=>{
        dispatch(newSearch(''));
        dispatch(optionSearch(''));
    }, []);

    return (
        <nav className="level is-flex px-4 py-2">
            {
                showSearchInput && (
                    <div className="columns">
                        <div className="column">
                            <InputTextWithIcon
                                onKeyUp={handleOnKeyUpEnterInputSearch}
                                onChange={handleChangeSearch}
                                value={searches}
                                label="Search"
                                placeholder={placheholderSearch??'Search'}
                                trailingIcon={faSearchengin}
                            />
                        </div>
                        {
                            optionsForSearch && 
                            <div className="column">
                                <MenuSelect
                                    options={optionsForSearch}
                                    onChange={handleChangeOptionSearch}
                                    value={menuOptionSearch}
                                />
                            </div>
                        }
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