import { ApiCallMethodInterface, apiCall, http } from "../config/http";
import { AQAR_URL } from "../config/url";
import { GetDetailsInterface, GetDetailsJsonR } from "../interface/aqar";

const getDetails = async (props: ApiCallMethodInterface<GetDetailsJsonR, GetDetailsInterface>) =>
    await apiCall({
        ...props,
        method: async () =>
            (await http()).get(`${AQAR_URL.GET_BY_ID}/${props.data.id}?fromDetails=0`),
    });
const AqarService = {
    getDetails
}
export default AqarService;