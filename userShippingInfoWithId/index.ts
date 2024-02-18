/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createUserShippingInfoModelFromDiscriminatorValue, serializeUserShippingInfoModel, type UserShippingInfoModel } from '../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /UserShippingInfo?id={id}
 */
export interface UserShippingInfoWithIdRequestBuilder extends BaseRequestBuilder<UserShippingInfoWithIdRequestBuilder> {
    /**
     * Delete by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     delete(requestConfiguration?: RequestConfiguration<UserShippingInfoWithIdRequestBuilderDeleteQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UserShippingInfoModel
     */
     get(requestConfiguration?: RequestConfiguration<UserShippingInfoWithIdRequestBuilderGetQueryParameters> | undefined) : Promise<UserShippingInfoModel | undefined>;
    /**
     * Update by ID
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     put(body: UserShippingInfoModel, requestConfiguration?: RequestConfiguration<UserShippingInfoWithIdRequestBuilderPutQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Delete by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<UserShippingInfoWithIdRequestBuilderDeleteQueryParameters> | undefined) : RequestInformation;
    /**
     * Get by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<UserShippingInfoWithIdRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update by ID
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPutRequestInformation(body: UserShippingInfoModel, requestConfiguration?: RequestConfiguration<UserShippingInfoWithIdRequestBuilderPutQueryParameters> | undefined) : RequestInformation;
}
/**
 * Delete by ID
 */
export interface UserShippingInfoWithIdRequestBuilderDeleteQueryParameters {
    id?: string;
}
/**
 * Get by ID
 */
export interface UserShippingInfoWithIdRequestBuilderGetQueryParameters {
    id?: string;
}
/**
 * Update by ID
 */
export interface UserShippingInfoWithIdRequestBuilderPutQueryParameters {
    id?: string;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UserShippingInfoWithIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUserShippingInfoModelFromDiscriminatorValue,
    },
    put: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUserShippingInfoModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UserShippingInfoWithIdRequestBuilderUriTemplate = "{+baseurl}/UserShippingInfo?id={id}?id={id}";
/* tslint:enable */
/* eslint-enable */
