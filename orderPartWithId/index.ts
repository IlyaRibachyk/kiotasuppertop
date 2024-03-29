/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOrderPartModelFromDiscriminatorValue, serializeOrderPartModel, type OrderPartModel } from '../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /OrderPart?id={id}
 */
export interface OrderPartWithIdRequestBuilder extends BaseRequestBuilder<OrderPartWithIdRequestBuilder> {
    /**
     * Delete by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     delete(requestConfiguration?: RequestConfiguration<OrderPartWithIdRequestBuilderDeleteQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrderPartModel
     */
     get(requestConfiguration?: RequestConfiguration<OrderPartWithIdRequestBuilderGetQueryParameters> | undefined) : Promise<OrderPartModel | undefined>;
    /**
     * Update by ID
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     put(body: OrderPartModel, requestConfiguration?: RequestConfiguration<OrderPartWithIdRequestBuilderPutQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Delete by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<OrderPartWithIdRequestBuilderDeleteQueryParameters> | undefined) : RequestInformation;
    /**
     * Get by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<OrderPartWithIdRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update by ID
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPutRequestInformation(body: OrderPartModel, requestConfiguration?: RequestConfiguration<OrderPartWithIdRequestBuilderPutQueryParameters> | undefined) : RequestInformation;
}
/**
 * Delete by ID
 */
export interface OrderPartWithIdRequestBuilderDeleteQueryParameters {
    id?: string;
}
/**
 * Get by ID
 */
export interface OrderPartWithIdRequestBuilderGetQueryParameters {
    id?: string;
}
/**
 * Update by ID
 */
export interface OrderPartWithIdRequestBuilderPutQueryParameters {
    id?: string;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const OrderPartWithIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createOrderPartModelFromDiscriminatorValue,
    },
    put: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOrderPartModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const OrderPartWithIdRequestBuilderUriTemplate = "{+baseurl}/OrderPart?id={id}?id={id}";
/* tslint:enable */
/* eslint-enable */
