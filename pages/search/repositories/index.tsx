import { SearchLayout } from "components/layout/SearchLayout";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from "store";
import { selectSearchFilterForRepositories } from "lib/utils/utils";
import { useState } from "react";
import { RepositoriesRequest } from "classes/request/RepositoriesRequest";
import { ItemRepository } from "types/DataFromGitHubTypes";
import { RepositoryCard } from "components/cards/RepositoryCard";
import { showLoader } from "store/slices/loaders/simpleLoaderSlice";
import { totalItems as totalItemsReducer } from "store/slices/counters/counterPaginationSlice";

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

    const dispatch = useDispatch();

    const actionSearch = (page: number=1) => {
        if(!searches || !menuOptionSearch) return;

        const endponitWithQueryParams = selectSearchFilterForRepositories({
            search: searches,
            typeSearch: menuOptionSearch
        });

        const requestRepositories = new RepositoriesRequest();

        const catchPromise = async () => {
            try {
                dispatch(showLoader(true));
                if(!endponitWithQueryParams) throw new Error("Doesn't exist query param");

                const resultRequestRepositories = await requestRepositories.getRepositoriesByFilter(endponitWithQueryParams, page);

                if(!resultRequestRepositories.data){
                    dispatch(showLoader(false));
                    return;
                }
                dispatch(totalItemsReducer(resultRequestRepositories.data.total_count));
                setRepositories(resultRequestRepositories.data?.items);
                
            } catch (error: any) {
                console.error(error);
                dispatch(showLoader(false));
            }finally{
                dispatch(showLoader(false));
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
                        <RepositoryCard
                            key={index}
                            nameRepository={repository.name}
                            fullNameRepository={repository.full_name}
                            linkRepositoryToGitHub={repository.html_url}
                            descriptionRepository={repository.description}
                            avatarOwner={repository.owner.avatar_url}
                            usernameOwner={repository.owner.login}
                            showOwner={true}
                        />
                    )
                })
            }
        </div>
        </SearchLayout>
    );
};