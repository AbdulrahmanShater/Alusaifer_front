import axios, { AxiosError } from "axios"
// import MyToast from "./toast"

type THttpError = Error | AxiosError | null

interface HttpErrorHandlerProps {
    onERR_NETWORK?: () => void,
    onNo_INTERNET?: () => void,

    onERR_CANCELED?: () => void,
    onStatusCode: (status: number) => void,
    onSettingError?: () => void,
    onNO_RESPONSE?: () => void,
    onUNRECONVERABLE_ERROR?: () => void,
}
export function httpErrorHandler(error: THttpError, props: HttpErrorHandlerProps) {

    if (error === null) {

        if (props.onUNRECONVERABLE_ERROR) {
            props.onUNRECONVERABLE_ERROR()
        } else {
            alert("Unrecoverable error!!")
            // new MyToast("Unrecoverable error!!").error()
        }
    } else {

        if (axios.isAxiosError(error)) {

            //here we have a type guard check, error inside this if will be treated as AxiosError
            const response = error?.response
            const request = error?.request
            if (error.message === 'Network Error') {
                if (props.onNo_INTERNET) {
                    props.onNo_INTERNET()
                } else {
                     alert("NETWORK_ERROR")
                }
            } else if (error.code === 'ERR_NETWORK') {
                if (props.onERR_NETWORK) {
                    props.onERR_NETWORK()
                } else {
                     alert("ERR_NETWORK")
                }
            } else if (error.code === 'ECONNABORTED') {
                if (props.onERR_NETWORK) {
                    props.onERR_NETWORK()
                } else {
                     alert("ERR_NETWORK")
                }
            } else if (error.code === 'ERR_CANCELED') {
                if (props.onERR_CANCELED) {
                    props.onERR_CANCELED()
                } else {
                     alert("ERR_CANCELED")
                }
            } else if (response) {
                const statusCode = response?.status
                props.onStatusCode(statusCode)
            } else if (request) {
                if (props.onNO_RESPONSE) {
                    props.onNO_RESPONSE()
                } else {
                     alert("NO_RESPONSE")
                }
            } else {
                if (props.onSettingError) {
                    props.onSettingError()
                } else {
                    //  alert("SettingError")
                }
            }
        } else {
            if (props.onSettingError) {
                props.onSettingError()
            } else {
                //  alert("SettingError")
            }
        }
    }

}