export type MakeRequestParams = {
    method?: string;
    pathEndpoint: string;
    body?: BodyInit | undefined | null;
};

export type ResultResponse<T> = {
    data: T | null;
    error: any;
    statusRequest: number;
};