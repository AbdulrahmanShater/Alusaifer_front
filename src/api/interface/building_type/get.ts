import { BuildingTypeModel } from "../../../model/buildingType";
import { BaseJsonResponse, PaginationResponse } from "../../config/BaseJson";


export interface GetAllJsonR extends BaseJsonResponse<PaginationResponse<BuildingTypeModel[]>> { }
