import { UsersRequest } from "classes/request/UsersRequest";

export function accessToDataFromRequest<T>(entries: Array<Array<T>>): T {
    const [ data, status, error ] = entries;
    const [keyString, valueObject] = data;
    
    return valueObject;
}

export function getUsersByTypeSearch({
    search='',
    typeSearch=''
}) {
    const usersRequest = new UsersRequest();
}