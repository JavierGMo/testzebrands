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
import { RepositoryCard } from "components/cards/RepositoryCard";

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
    
    const [currentPage, setCurrentPage] = useState(1);
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
                repositories.map((repository, index)=>{
                    return (
                        <div key={index} className="column columns is-multiline is-centered is-3 is-gapless">
                            <RepositoryCard
                                nameRepository={repository.name}
                                fullNameRepository={repository.full_name}
                                linkRepositoryToGitHub={repository.html_url}
                                descriptionRepository={repository.description}
                                avatarOwner={repository.owner.avatar_url}
                                usernameOwner={repository.owner.login}
                            />
                        </div>
                    )
                })
            }
        </div>
        <SimplePagination
            onPageChange={page=>setCurrentPage(page)}
            totalItems={1210}
            pageSize={10}
            currentPage={currentPage}
            siblingCount={1}
        />
        </SearchLayout>
    );
};