import { ApiCallMethodInterface, apiCall, http } from "../config/http";
import { privacyPolicy_URL, termsConditions_URL } from "../config/url";
import { GetTermsConditionsJsonR, GetPrivacyPolicyJsonR } from "../interface/config";

const termsConditions = async (props: ApiCallMethodInterface<GetTermsConditionsJsonR, null>) =>
    await apiCall({
        ...props,
        method: async () =>
            (await http()).get(`${termsConditions_URL.GET_ALL}`),
    });

const privacyPolicy = async (props: ApiCallMethodInterface<GetPrivacyPolicyJsonR, null>) =>
    await apiCall({
        ...props,
        method: async () =>
            (await http()).get(`${privacyPolicy_URL.GET_ALL}`),
    });

const ConfigService = {
    termsConditions, privacyPolicy
}
export default ConfigService;