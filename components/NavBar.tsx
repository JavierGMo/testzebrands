import Link from "next/link";
import { FormEvent, forwardRef, ReactNode, useEffect, useState } from "react";
import { ChangeEvent, KeyboardEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "store";

import { newSearch } from 'store/slices/searches/searchesSlice';
import { optionSearch } from 'store/slices/menus/menuOptionSearchSlice';
import { InputTextWithIcon } from "./inputs/InputTextWithIcon";
import { ItemMenu, MenuSelect } from "./menus/MenuSelect";



type NavBarProps = {
    showSearchInput: boolean;
    placheholderSearch?: string;
    optionsForSearch?: Array<ItemMenu>;
    actionForSearch?: (page?: number)=>void;
};

export type Ref = HTMLAudioElement;

const navStyle = {
    backgroundColor: '#181818',
    color: '#F2F2F2'
};

export function NavBar({
    showSearchInput,
    placheholderSearch,
    optionsForSearch,
    actionForSearch
}: NavBarProps){
    
    const searches = useSelector((state: RootState)=> state.shearches.value);
    const menuOptionSearch = useSelector((state: RootState) => state.menuOptionSearch.value);
    
    const [placeholder, setPlaceholer] = useState('Search...');

    const dispatch = useDispatch();

    const handleChangeSearch = (event: FormEvent<HTMLInputElement>)=>{
        const value = event.currentTarget.value;
        
        if(menuOptionSearch === 'org' ){
            setPlaceholer('organitation:to search');
        }
        if(menuOptionSearch === 'owner' ){
            setPlaceholer('owner:to search');
        }

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

    const handleClickButtonSearch = () => {
        actionForSearch?.();
    }

    useEffect(()=>{
        dispatch(newSearch(''));
        dispatch(optionSearch(''));
    }, []);
   
    return (
        <nav className="is-flex-widescreen-only is-flex-desktop-only is-justify-content-space-between is-align-items-center px-4 py-4" style={navStyle}>
            <div className="is-flex-mobile is-flex-tablet-only is-justify-content-center py-2">
                <Link href="/" passHref>
                    Home
                </Link>
            </div>
            {
                showSearchInput && (
                    <div className="field has-addons">
                        <div className="control">
                            <InputTextWithIcon
                                onKeyUp={handleOnKeyUpEnterInputSearch}
                                onChange={handleChangeSearch}
                                value={searches}
                                label="Search"
                                placeholder={placeholder??'Search'}
                                
                            />
                        </div>
                        {
                            optionsForSearch && 
                            <div className="control">
                                <MenuSelect
                                    options={optionsForSearch}
                                    onChange={handleChangeOptionSearch}
                                    value={menuOptionSearch}
                                />
                            </div>
                        }
                        <div className="control">
                            <a
                                className="button is-info"
                                onClick={handleClickButtonSearch}
                            >
                                Search
                            </a>
                        </div>
                    </div>
                )
            }
            <div className="is-flex-widescreen-only">
                <div className="mx-1">
                    <Link href={'/search/users'} >Search Users</Link>
                </div>
                <div className="is-hidden-mobile mx-2 divider-vertical"></div>
                <div className="is-hidden-widescreen-only mx-2 divider-horizontal"></div>
                <div className="mx-1">
                    <Link href={'/search/repositories'} >Search Repositories</Link>
                </div>
            </div>
        </nav>
    );
};