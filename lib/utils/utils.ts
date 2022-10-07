export function accessToDataFromRequest<T>(entries: Array<Array<T>>): T {
    const [ data, status, error ] = entries;
    const [keyString, valueObject] = data;
    
    return valueObject;
}