import { AqarModel } from "@/model/aqar";
import { BaseJsonResponse } from "../../config/BaseJson";

export interface GetDetailsInterface {
    id: number
}
export interface GetDetailsJsonR extends BaseJsonResponse<AqarModel> { }
