// import { FilterData } from "../interface/advertisements";
import { ApiCallMethodInterface, apiCall, buildUrlWithParams, http } from "../config/http";
import { ADVERTISEMENTS_URL } from "../config/url";
import { FilterData, FilterJsonR } from "../interface/advertisements/filter";


const accessToken = "70d12be0719812737fe8a0a5e1aa415d";
const clientSecret = "eh1M1Hg+LITMD1wq3MB39lM9eB0UW8mwwSFZE0ZTlWx6Fs4NowAkn8oF8Opjsk+d5GG7ptkklZO9usVhUjj1oZtkBTy5vcvrtvqiTSiILm1uN3TKowNj5z/dJ3/zR5tM";
const clientId = "96c57799a6b250ef148cc1438f6c24bff6550a8a";

const getAll = async (props: ApiCallMethodInterface<FilterJsonR, FilterData>) => {
   
    await apiCall({
        ...props,
        method: async () => {
            return (await http()).get(buildUrlWithParams<FilterData>(ADVERTISEMENTS_URL.FILTER, props.data) + props.paginationUrl ?? '');
        },
    });
}

const FilterService = {
    getAll
}
export default FilterService;
