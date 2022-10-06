import { DataUsersGitHub } from "types/DataFromGitHubTypes";
import BaseRequest from "./BaseRequest";

export class UsersRequest extends BaseRequest{
    constructor() {super();}

    async getUserByName(userToSearch=''){
        const requestUsers = await this.makeRequest<DataUsersGitHub>({
            pathEndpoint: `search/users?q=${userToSearch} in:login`
        });

        try {
            return requestUsers;
        } catch (error) {
            console.error(error);
            throw new Error(`Error in request users: ${error}`);
            
        }
        
    }

}