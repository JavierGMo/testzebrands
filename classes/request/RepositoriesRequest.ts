import { accessToDataFromRequest } from "lib/utils/utils";
import { DataRepositoriesGitHub, DataUsersGitHub, ItemRepository } from "types/DataFromGitHubTypes";
import { ResultResponse } from "types/RequestTypes";
import BaseRequest from "./BaseRequest";

export class RepositoriesRequest extends BaseRequest{
    constructor() {super();}

    async getRepositoriesByNameTechnologyRandom(){
        const languages = ['javascript', 'php', 'java', 'spring'];
        const languagesLen = languages.length;
        const indexLanguage = (Math.random()*languagesLen);
        try {
            const requestRepositories: ResultResponse<DataRepositoriesGitHub> = await this.makeRequest<DataRepositoriesGitHub>({
                pathEndpoint: `repositories?q=${languages[indexLanguage]} in:name&sort=stars&order=desc&page=1&per_page=1`
            });            
            //Change to repositories and not repositories with more data
            if(!requestRepositories?.data) throw new Error("Data not found");

            const res = accessToDataFromRequest<Array<ItemRepository>>(Object.entries(requestRepositories));
            return res;
        } catch (error) {
            console.error(error);
            throw new Error("Error in request random repositories");
        }
        
    }

    async getRepositoriesByName(repositoriesToSearch=''){
        const requestRepositories = await this.makeRequest<DataUsersGitHub>({
            pathEndpoint: `search/repositories?q=${repositoriesToSearch} in:name`
        });

        try {
            return requestRepositories;
        } catch (error) {
            console.error(error);
            throw new Error(`Error in request repositories: ${error}`);
        }
    }

}