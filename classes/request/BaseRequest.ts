import { ResultResponse, MakeRequestParams } from "types/RequestTypes";

export default class BaseRequest {
    private BASE_PATH: string = 'https://api.github.com/';
    private _headers: Headers = new Headers({
        "Content-Type": "application/json; utf-8",
        
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
            data: undefined,
            error: null,
            statusRequest: 400
        };
        
        try {
            const resultJSON: T = await request.json();
            if(resultJSON) resultResponse.data = resultJSON;
            resultResponse.statusRequest = request.status;
        } catch (error: any) {
            resultResponse.statusRequest = request.status;
            resultResponse.error = error;    
        }

        return resultResponse;
    }
}