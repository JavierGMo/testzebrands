import { ResultResponse, MakeRequestParams } from "types/RequestTypes";

export default class BaseRequest {
    private BASE_PATH: string = 'https://api.github.com/';
    private _headers: Headers = new Headers({
        '': ''
    });

    constructor(headers?: Headers) {
        this._headers = headers??this._headers;
    }

    async makeRequest<T>({ method='GET', pathEndpoint, body }: MakeRequestParams): Promise<ResultResponse<T>>{
        const fullPath = `${this.BASE_PATH}${pathEndpoint}`;

        const request = await fetch(fullPath, {
            method,
            body,
            headers: this._headers
        });
        
        const resultResponse: ResultResponse<T> = {
            data: null,
            error: null,
            statusRequest: 400
        };
        
        try {
            const resultJSON: T = await request.json();
            resultResponse.data = resultJSON;
        } catch (error: any) {
            resultResponse.statusRequest = request.status;
            resultResponse.error = error;    
        }

        return resultResponse;
    }
}