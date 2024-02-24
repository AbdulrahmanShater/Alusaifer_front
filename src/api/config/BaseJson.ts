/**
 * Base Response Json.
 * @param T data type.
 */
export type BaseJsonResponse<dataType> = {
    message: string;
    success: boolean;
    data: dataType;
}

export interface PaginationResponse<dataType> {
    data: dataType,
    links: {
        first: string,
        last: string,
        prev: string | null,
        next: string | null,
    },
    meta: {
        current_page: number,
        from: number,
        last_page: number,
        links: {
            url: string | null,
            label: string,
            active: boolean,
        }[],
        path: string,
        per_page: number,
        to: number,
        total: number,
    }
}