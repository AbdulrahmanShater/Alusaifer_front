import { AqarModel } from "./aqar";

export interface BuildingTypeModel {
    id: number,
    name: string,
    aqars?: AqarModel[]
}