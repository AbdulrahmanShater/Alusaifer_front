import { AqarModel } from "@/model/aqar";
import { BaseJsonResponse, PaginationResponse } from "../../config/BaseJson";


export interface FilterData {
    page?: number
    number?: string;
    status?: string
    map?: number
    latLang?: string
    search?: string
    cheaper?: string
    latest?: string
    isNearst?: boolean
    from_dashboard?: boolean
    mine?: string

    bathroomsCount?: string
    buildingtype?: number
    minprice?: string
    maxprice?: string
    mindistance?: string
    maxdistance?: string
    apartmentscount?: string
    bedroomscount?: string
    interface?: string
    age?: string
    streetwidth?: string
    shopscount?: string
}

export interface FilterJsonR extends BaseJsonResponse<PaginationResponse<AqarModel[]>> { }
