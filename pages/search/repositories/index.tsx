import { BasicCard } from "components/cards/BasicCard";
import { OwnerInformation } from "components/information/OwnerInformation";
import { SearchLayout } from "components/layout/SearchLayout";
import { useSelector } from 'react-redux';
import type { RootState } from "store";
import { selectSearchFilterForRepositories, selectSearchFilterForUsers } from "lib/utils/utils";
import { useState } from "react";
import { RepositoriesRequest } from "classes/request/RepositoriesRequest";
import { ItemRepository, ItemUser } from "types/DataFromGitHubTypes";
import { SimplePagination } from "components/pagination/SimplePagination";

const a = [
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
        value: 'name',
        text: 'Name',
    },
    {
        value: 'description',
        text: 'Description',
    },
    {
        value: 'topics',
        text: 'Topics',
    },
    {
        value: 'readme',
        text: 'Readme',
    },
    {
        value: 'owner',
        text: 'Owner',
    },
    {
        value: 'language',
        text: 'Language',
    },
];

export default function SearchRepositories(){
    const searches = useSelector((state: RootState)=> state.shearches.value);
    const menuOptionSearch = useSelector((state: RootState) => state.menuOptionSearch.value);

    const [repositories, setRepositories] = useState<Array<ItemRepository>>([]);

    const actionSearch = () => {
        if(!searches || !menuOptionSearch) return;

        const endponitWithQueryParams = selectSearchFilterForRepositories({
            search: searches,
            typeSearch: menuOptionSearch
        });

        const requestRepositories = new RepositoriesRequest();

        const catchPromise = async () => {
            try {
                if(!endponitWithQueryParams) throw new Error("Doesn't exist query param");

                const resultRequestRepositories = await requestRepositories.getRepositoriesByFilter(endponitWithQueryParams);

                setRepositories(resultRequestRepositories);
                
            } catch (error: any) {
                console.error(error);
            }
        };

        catchPromise().catch(e=>console.error(e));

    };
    return (
        <SearchLayout
            optionsForSearch={opt}
            placeholderSearch="Search repositories"
            actionForSearch={actionSearch}
        >
        <div className="columns is-multiline is-centered is-3 is-gapless">
            {
                repositories.map((item, index)=>{
                    return (
                        <BasicCard
                            typeSearch="Reporsitory"
                            key={index}
                            className="column is-one-quarter is-narrow mx-3 my-2"
                            name={item.name}
                            labelAboutInformation="About"
                            aboutInformation={item.description}
                            linkToGitHub={item.html_url}
                        >
                            <OwnerInformation
                                avatar={item.owner.avatar_url}
                                linkUserOnGitHub={item.owner.html_url}
                                name={item.name}
                                userNameLogin={item.name}
                            />
                        </BasicCard>
                    )
                })
            }
        </div>
        <SimplePagination
            totalItems={10}
            perPage={10}
        />
        </SearchLayout>
    );
};