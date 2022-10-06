import { DataUsersGitHub } from "types/DataFromGitHubTypes";
import BaseRequest from "./BaseRequest";

export class RepositoriesRequest extends BaseRequest{
    constructor() {super();}

    async getRepositoriesByNameTechnologyRandom(){
        const languages = ['javascript', 'php', 'java', 'spring'];
        const languagesLen = languages.length;
        const indexLanguage = (Math.random()*languagesLen);
        try {
            const requestRepositories = await this.makeRequest<DataUsersGitHub>({
                pathEndpoint: `repositories?q=${languages[indexLanguage]} in:name`
            });
            return requestRepositories.data;
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