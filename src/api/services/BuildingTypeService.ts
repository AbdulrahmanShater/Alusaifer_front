import { ApiCallMethodInterface, apiCall, http } from "../config/http";
import { BUILDING_TYPE_URL } from "../config/url";
import { GetAllJsonR } from "../interface/building_type";

const getAll = (props: ApiCallMethodInterface<GetAllJsonR, null>) =>
    apiCall({
        ...props,
        method: async () =>
            (await http()).get(BUILDING_TYPE_URL.GET_ALL),
    });


const BuildingTypeService = {
    getAll
}
export default BuildingTypeService;