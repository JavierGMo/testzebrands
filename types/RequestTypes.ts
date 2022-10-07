export interface Generic<T> {data: T};

export interface MakeRequestParams {
    method?: string;
    pathEndpoint: string;
    body?: BodyInit | undefined | null;
};

export interface ResultResponse<T> {
    data?: T;
    error: any;
    statusRequest: number;
};