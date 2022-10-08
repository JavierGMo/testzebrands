import { UsersRequest } from "classes/request/UsersRequest";

export function accessToDataFromRequest<T>(entries: Array<Array<T>>): T {
    const [ data, status, error ] = entries;
    const [keyString, valueObject] = data;
    
    return valueObject;
}


/**
 * 
 * @param param0 Object with the search and type search
 * 
 * Get user based a type search, for example get unique user, typeSearch: user, search: nameuser
 * 
 * default typeSearch: login. Matches with many users
 * 
 */
export function getQueryParam({
    search='',
    typeSearch=''
}) {
    const query = {param: ''};
    
    switch (typeSearch) {
        case 'user':
            query.param = `q=user:${search}`;
            break;
        case 'login':
            query.param = `q=${search} in:login`;
            break;
        case 'name':
            query.param = `q=${search} in:name`;
            break;
        case 'fullname':
            query.param = `q=fullname:${search}`;
            break;
        case 'email':
            query.param = `q=${search} in:email`;
            break;
        case 'org':
            query.param = `q=$org:${search} in:users`;
            break;
        default:
            break;
    }

    return (query.param);
}