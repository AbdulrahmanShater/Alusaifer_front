import { ApiCallMethodInterface } from "../config/http";
import { VimeoJsonR } from "../interface/vimeo";
import axios, { AxiosResponse } from "axios";
import { httpErrorHandler } from "@/hooks/httpErrorHandler";


const getAll = async (props: ApiCallMethodInterface<VimeoJsonR, null>) => {
    try {
        if (props.onBefore) props.onBefore();
        var response = await axios.get<any, AxiosResponse<VimeoJsonR>>(`https://api.vimeo.com${props.paginationUrl ?? '/me/videos?per_page=3'}`, {
            headers: {
                'Authorization': `bearer ${process.env.NEXT_PUBLIC_VIMEO_ACCESSTOKEN}`
            }
        })
        if (props.onSuccess) props.onSuccess(response.data);
    } catch (error: any) {
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
