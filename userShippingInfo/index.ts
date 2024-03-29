/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserShippingInfoModelFromDiscriminatorValue, serializeUserShippingInfoModel, type UserShippingInfoModel } from '../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /UserShippingInfo
 */
export interface UserShippingInfoRequestBuilder extends BaseRequestBuilder<UserShippingInfoRequestBuilder> {
    /**
     * Get all
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserShippingInfoModel
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UserShippingInfoModel[] | undefined>;
    /**
     * Create a new
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: UserShippingInfoModel, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
    /**
     * Get all
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
    /**
     * Create a new
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UserShippingInfoModel, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UserShippingInfoRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollectionAsync",
        responseBodyFactory:  createUserShippingInfoModelFromDiscriminatorValue,
    },
    post: {
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserShippingInfoModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserShippingInfoRequestBuilderUriTemplate = "{+baseurl}/UserShippingInfo";
/* tslint:enable */
/* eslint-enable */
