import { DataUsersGitHub, ItemRepository, UserDataComplete } from "types/DataFromGitHubTypes";
import BaseRequest from "./BaseRequest";

export class UsersRequest extends BaseRequest{
    constructor() {super();}

    async getUserByQueryParam(toSearch: string='', page: number=1){
        if(!toSearch) throw new Error("The query param must not to be empty");
        
        // toSearch: `search/users?q=${userToSearch} in:login`
        const fullPathEndoPoint = `search/users?q=${toSearch}&page=${page}&per_page=10&sort=stars&order=desc`
        

        try {
            const requestUsers = await this.makeRequest<DataUsersGitHub>({
                pathEndpoint: fullPathEndoPoint
            });
            return requestUsers;
        } catch (error) {
            console.error(error);
            throw new Error(`Error in request users: ${error}`);
            
        }
        
    }

    async getUserByLogin(login: string) {
        if(!login) throw new Error("Username is requerid");

        const fullPathEndoPoint = `users/${login}`;
        
        const requestUser = await this.makeRequest<UserDataComplete>({
            pathEndpoint: fullPathEndoPoint
        });
        
        return requestUser;
    }

    async getSomeReposOfSpeficUser(login: string){
        if(!login) throw new Error("Username is requerid");

        const fullPathEndoPoint = `users/${login}/repos?page=1&per_page=10`;
        
        const requestSomeRepos = await this.makeRequest<Array<ItemRepository>>({
            pathEndpoint: fullPathEndoPoint
        });
        
        return requestSomeRepos;

    }

}