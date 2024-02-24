import { VillaData } from "./aqar";

export interface BuildingTypeModel {
    id: number,
    name: string,
    aqars?: VillaData[]
}