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
        'name': `${search} in:name`,
        'description': `${search} in:name,description`,
        'topics': `${search} in:topics`,
        'readme': `${search} in:readme`,
        'owner': `repo:here-name-owner/${search}`,
        'language': `${search}+language:here-language`
    };

    const valueFilter = getValueFromObjectWithKeyStringDynamic<string>(typeSearch, filters);
    
    return valueFilter;

}

/**
 * get range numbers
 * @param start initial position
 * @param end end position
 * @param step step by step
 * @returns 
 */
export const range = (start: number, end: number, step: number=1)=>{
    return Array.from({
        length: Math.ceil((end-start)/step),
    },
    (_, i)=>i+start);
};

export function parseDateToString(date: string): string{
    const dateObj = new Date(date);
    const parseDate = `${dateObj.getDay()}/${dateObj.getMonth()+1}/${dateObj.getFullYear()}`;
    return parseDate;
}

export function formatBytes(bytes: number = 0): string{
    const decimals = 2;

    if(bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}