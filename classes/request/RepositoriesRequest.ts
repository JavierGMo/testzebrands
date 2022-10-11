import { accessToDataFromRequest } from "lib/utils/utils";
import { DataRepositoriesGitHub, DataUsersGitHub, ItemRepository, OwnerRepository, RepositoryDataComplete } from "types/DataFromGitHubTypes";
import { ResultResponse } from "types/RequestTypes";
import BaseRequest from "./BaseRequest";

export class RepositoriesRequest extends BaseRequest{
    constructor() {super();}

    async getRepositoriesByNameTechnologyRandom(){
        const languages = ['javascript', 'php', 'java', 'spring'];
        const languagesLen = languages.length;
        
        const indexLanguage = Math.ceil(Math.random()*languagesLen-1);
        try {
            const fullPathEndoPoint = `search/repositories?q=language:${languages[indexLanguage]}&sort=stars&order=desc&page=1&per_page=10`;
            
            const requestRepositories = await this.makeRequest<DataRepositoriesGitHub>({
                pathEndpoint: fullPathEndoPoint
            });            
            //Change to repositories and not repositories with more data
            if(!requestRepositories?.data) throw new Error("Data not found");

            //const res = accessToDataFromRequest<Array<ItemRepository>>(Object.entries(requestRepositories));
            
            
            return requestRepositories.data.items;

        } catch (error) {
            console.error(error);
            throw new Error("Error in request random repositories");
        }
        
    }

    async getRepositoriesByFilter(toSearch:string='', page: number=1){
        if(!toSearch) throw new Error("The query param must not to be empty");

        

        try {
            const requestRepositories = await this.makeRequest<DataRepositoriesGitHub>({
                pathEndpoint: `search/repositories?q=${toSearch}&page=${page}&per_page=10&sort=stars&order=desc`
            });
            if(requestRepositories.error) throw new Error("Error in request repositories", requestRepositories.error);
            
            if(!requestRepositories.data?.items)throw new Error("Data doesn't exist");

            return requestRepositories;
        } catch (error) {
            console.error(error);
            throw new Error(`Error in request repositories: ${error}`);
        }
    }

    async getRepositoryByUserAndRepoName(user: string, repoName: string){
        if(!user || !repoName) throw new Error("User and repo name is requerid");

        const fullPathEndoPoint = `repos/${user}/${repoName}`;

        const requestRepository = await this.makeRequest<RepositoryDataComplete>({
            pathEndpoint: fullPathEndoPoint
        });

        return requestRepository;

    }

    async getSomeContributorsRepo(user: string, repoName: string){
        if(!user || !repoName) throw new Error("User and repo name is requerid");

        const fullPathEndoPoint = `repos/${user}/${repoName}/contributors?page=1&per_page=10`;

        const requestContributors = await this.makeRequest<Array<OwnerRepository>>({
            pathEndpoint: fullPathEndoPoint
        });

        return requestContributors;
    }
}