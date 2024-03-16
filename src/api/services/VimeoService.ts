import { ApiCallMethodInterface } from "../config/http";
import { VimeoJsonR } from "../interface/vimeo";
import axios from "axios";
import { httpErrorHandler } from "@/hooks/httpErrorHandler";

const accessToken = "70d12be0719812737fe8a0a5e1aa415d";

const getAll = async (props: ApiCallMethodInterface<VimeoJsonR, null>) => {
    try {
        if (props.onBefore) props.onBefore();
        props.paginationUrl
        var response = await axios.get(`https://api.vimeo.com${props.paginationUrl ?? '/me/videos?per_page=3'}`, {
            headers: {
                'Authorization': `bearer ${accessToken}`
            }
        })
        if (props.onSuccess) props.onSuccess(response.data);
        console.log(response.data);
    } catch (error) {
        httpErrorHandler(error, {
            onStatusCode: function (status: number): void {
                if (props.onStatusCodeError) {
                    props.onStatusCodeError(status, error.response.data);
                }
            },
        });
    } finally {
        if (props.onFinally) {
            props.onFinally();
        }
    }
}

const VimeoService = {
    getAll
}
export default VimeoService;
