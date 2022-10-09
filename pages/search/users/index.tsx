import { SearchLayout } from "components/layout/SearchLayout";
import { BasicCard } from "components/cards/BasicCard";

import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "store";
import { selectSearchFilterForRepositories, selectSearchFilterForUsers } from "lib/utils/utils";
import { UsersRequest } from "classes/request/UsersRequest";
import { useState } from "react";
import { ItemUser } from "types/DataFromGitHubTypes";



const a = [
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" nome;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
    {
        avatar: "https://avatars.githubusercontent.com/u/1?v=4",
        name:" string;",
        labelAboutInformation:" string;",
        aboutInformation:" string;",
        linkToGitHub:" string;",
        footerChildren:" ReactNode;",
    },
];

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

    const actionGetUsers = () => {
        
        if(!searches || !menuOptionSearch) return;

        const endpointWithQueryParams = selectSearchFilterForUsers({
            search: searches,
            typeSearch: menuOptionSearch
        });


        const requestUsers = new UsersRequest();

        const catchPromise = async () => {
            try {
                if(!endpointWithQueryParams) throw new Error("Doesn't exist query param");
                
                const resultRequestUser = await requestUsers.getUserByQueryParam(endpointWithQueryParams);
                if(resultRequestUser.data?.items) setUserFromGitHub(resultRequestUser.data?.items);
                
                console.log(endpointWithQueryParams);
                
            } catch (error) {
                console.error(error);
            }
        };

        catchPromise().catch(e=>console.error(e));
        
    };

    return (
        <SearchLayout
            optionsForSearch={opt}
            placeholderSearch="Search usres"
            actionForSearch={actionGetUsers}
        >
            <div className="columns is-multiline is-centered is-3 is-gapless">
                {
                    userFromGitHub?.map((item, index)=>{
                        return (
                            <BasicCard
                                typeSearch="User"
                                key={index}
                                avatar={item.avatar_url}
                                className="column is-one-quarter is-narrow mx-3 my-2"
                                name={item.login}
                                linkToGitHub={item.html_url}
                            >
                            </BasicCard>
                        )
                    })
                }
            </div>
        </SearchLayout>
    );
};