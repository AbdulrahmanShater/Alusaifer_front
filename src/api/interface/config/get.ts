import { ConditionsModel } from "../../../model/termsConditions";
import { PrivacyPolicyModel } from "../../../model/privacyPolicy";
import { BaseJsonResponse, PaginationResponse } from "../../config/BaseJson";


export interface GetPrivacyPolicyJsonR extends BaseJsonResponse<PrivacyPolicyModel> { }
export interface GetTermsConditionsJsonR extends BaseJsonResponse<ConditionsModel> { }
