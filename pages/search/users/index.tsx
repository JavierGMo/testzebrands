import { SearchLayout } from "components/layout/SearchLayout";

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from "store";
import { selectSearchFilterForUsers } from "lib/utils/utils";
import { UsersRequest } from "classes/request/UsersRequest";
import { useEffect, useState } from "react";
import { ItemUser } from "types/DataFromGitHubTypes";
import { UserCard } from "components/cards/UserCard";
import { totalItems as totalItemsReducer } from "store/slices/counters/counterPaginationSlice";
import { showLoader } from "store/slices/loaders/simpleLoaderSlice"

const opt = [
    {
        value: 'user',
        text: 'Unique user',
    },
    {
        value: 'login',
        text: 'Between user',
    },
    {
        value: 'name',
        text: 'By Name',
    },
    {
        value: 'fullname',
        text: 'By fullname',
    },
    {
        value: 'email',
        text: 'By email',
    },
    {
        value: 'org',
        text: 'By organitation',
    },
];

export default function SearchUsers(){
    const searches = useSelector((state: RootState)=> state.shearches.value);
    const menuOptionSearch = useSelector((state: RootState) => state.menuOptionSearch.value);


    const [userFromGitHub, setUserFromGitHub] = useState<Array<ItemUser>>([]);
    
    const dispatch = useDispatch();

    const actionGetUsers = (page: number = 1) => {
        if(!searches || !menuOptionSearch) return;

        const endpointWithQueryParams = selectSearchFilterForUsers({
            search: searches,
            typeSearch: menuOptionSearch
        });


        const requestUsers = new UsersRequest();

        const catchPromise = async () => {
            try {
                dispatch(showLoader(true));
                if(!endpointWithQueryParams) throw new Error("Doesn't exist query param");
                
                const resultRequestUser = await requestUsers.getUserByQueryParam(endpointWithQueryParams, page);
                
                if(!resultRequestUser.data) return;

                setUserFromGitHub(resultRequestUser.data.items);
                dispatch(totalItemsReducer(resultRequestUser.data.total_count));
                
            } catch (error) {
                console.error(error);
                dispatch(showLoader(false));
            }finally{
                dispatch(showLoader(false));
            }
        };

        catchPromise().catch(e=>console.error(e));
        
    };

    useEffect(()=>{
        //dispatch(totalItemsReducer(0));
    }, []);

    return (
        <SearchLayout
            optionsForSearch={opt}
            placeholderSearch="Search users"
            actionForSearch={actionGetUsers}
        >
            <div className="columns is-multiline is-centered is-3 is-gapless">
                {
                    userFromGitHub?.map((item, index)=>{
                        return (
                            <UserCard
                                key={index}
                                srcAvatar={item.avatar_url}
                                userName={item.login}
                                typeSearch="User"
                                linkToGitHub={item.html_url}
                            />
                        )
                    })
                }
            </div>
        </SearchLayout>
    );
};