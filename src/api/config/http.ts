import axios, { AxiosInstance, AxiosResponse } from "axios";
import { httpErrorHandler } from "../../hooks/httpErrorHandler";

export const endPointNotFoundMessage: string = "لا يمكن الوصل للسيرفر  المسار غير موجود";

export interface ApiCallInterface<ResponseInterface, BobyInterface> extends ApiCallMethodInterface<ResponseInterface, BobyInterface> {
    method: () => Promise<AxiosResponse>
}

export interface ApiCallMethodInterface<ResponseInterface, BobyInterface> extends ApiCallMethodFunctionsInterface<ResponseInterface> {
    data: BobyInterface,
    paginationUrl?: string
}

export interface ApiCallMethodFunctionsInterface<ResponseInterface> {
    onBefore?: () => void,
    onSuccess?: (response: ResponseInterface) => void,
    onStatusCodeError?: (status: number, response: ResponseInterface) => void,
    onFinally?: () => void
}

export const apiCall = async <ResponseInterface, BobyInterface>({ method, onBefore, onSuccess, onStatusCodeError, onFinally }: ApiCallInterface<ResponseInterface, BobyInterface>) => {

    try {
        if (onBefore) {
            onBefore();
        }
        const response = await method();

        if (onSuccess) {
            onSuccess(response.data);
        }
    } catch (error) {
        httpErrorHandler(error, {
            onStatusCode: function (status: number): void {
                if (onStatusCodeError) {
                    onStatusCodeError(status, error.response.data);
                }
            },
        });
    } finally {
        if (onFinally) {
            onFinally();
        }
    }
    // if (onBefore) {
    //     onBefore()
    // }
    // method().then(response => {
    //     if (onSuccess) {
    //         onSuccess(response.data)
    //     }
    // })
    //     .catch(error => {
    //         httpErrorHandler(error, {
    //             onStatusCode: function (status: number): void {
    //                 if (onStatusCodeError) {
    //                     onStatusCodeError(status, error.response.data)
    //                 }
    //             },
    //         })
    //     }).finally(onFinally);
}

export const buildUrlWithParams = <DataType>(URL: string, data: DataType): string => {
    const params = new URLSearchParams();

    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element !== undefined) {
                params.set(key, String(element));
            }

        }
    }
    return `${URL}?${params}`;
}

export async function http(multipart?: boolean): Promise<AxiosInstance> {

    const BASE_URL: string = "https://akar.alusaifer.com.sa/api";

    return axios.create({
        baseURL: BASE_URL,
        headers: {
            "Accept": "application/json",
            "Accept-Language": "ar",
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': "*",
            "Content-Type": multipart ? "multipart/form-data" : "application/json"
        }
    });
}

