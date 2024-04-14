// import { FilterData } from "../interface/advertisements";
import { ApiCallMethodInterface, apiCall, buildUrlWithParams, http } from "../config/http";
import { ADVERTISEMENTS_URL } from "../config/url";
import { FilterData, FilterJsonR } from "../interface/advertisements/filter";

const getAll = async (props: ApiCallMethodInterface<FilterJsonR, FilterData>) => {

    await apiCall({
        ...props,
        method: async () => {
            return (await http()).get(`${buildUrlWithParams<FilterData>(ADVERTISEMENTS_URL.FILTER, props.data)}${props.paginationUrl ?? ''}`);
        },
    });
}

const FilterService = {
    getAll
}
export default FilterService;
