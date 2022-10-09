import { DataUsersGitHub } from "types/DataFromGitHubTypes";
import BaseRequest from "./BaseRequest";

export class UsersRequest extends BaseRequest{
    constructor() {super();}

    async getUserByQueryParam(toSearch: string=''){
        if(!toSearch) throw new Error("The query param must not to be empty");
        
        // toSearch: `search/users?q=${userToSearch} in:login`
        const fullPathEndoPoint = `search/users?q=${toSearch}&page=1&per_page=10&sort=stars&order=desc`
        const requestUsers = await this.makeRequest<DataUsersGitHub>({
            pathEndpoint: fullPathEndoPoint
        });

        try {
            return requestUsers;
        } catch (error) {
            console.error(error);
            throw new Error(`Error in request users: ${error}`);
            
        }
        
    }

}