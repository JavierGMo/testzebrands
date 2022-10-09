import { UsersRequest } from "classes/request/UsersRequest";

export function getValueFromObjectWithKeyStringDynamic<T>(key: string, obj: {}): T {
    type ObjectKey = keyof typeof obj;

    const keyDynamic = key as ObjectKey;

    const value = obj[keyDynamic];

    return value;
}


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
export function selectSearchFilterForUsers({
    search='',
    typeSearch=''
}): string | undefined {
    const filters = {
        'user': `user:${search}`,
        'login': `${search} in:login`,
        'name': `${search} in:name`,
        'fullname': `fullname:${search}`,
        'email': `${search} in:email`,
        'org': `org:${search} type:users`
    };

    const valueFilter = getValueFromObjectWithKeyStringDynamic<string>(typeSearch, filters);

    return valueFilter;
    
}

export function selectSearchFilterForRepositories({
    search='',
    typeSearch=''
}): string | undefined {
    const filters = {
        'name': `?q=${search} in:name&sort=stars&order=desc`,
        'description': `?q=${search} in:name,description&sort=stars&order=desc`,
        'topics': `?q=${search} in:topics&sort=stars&order=desc`,
        'readme': `?q=${search} in:readme&sort=stars&order=desc`,
        'owner': `?q=repo:here-name-owner/${search}&sort=stars&order=desc`,
        'language': `?q=${search}+language:here-language&sort=stars&order=desc`
    };

    const valueFilter = getValueFromObjectWithKeyStringDynamic<string>(typeSearch, filters);
    
    return valueFilter;

}