/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createOrderModelFromDiscriminatorValue, serializeOrderModel, type OrderModel } from '../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /Order
 */
export interface OrderRequestBuilder extends BaseRequestBuilder<OrderRequestBuilder> {
    /**
     * Get all
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of OrderModel
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<OrderModel[] | undefined>;
    /**
     * Create a new
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: OrderModel, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
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
     toPostRequestInformation(body: OrderModel, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const OrderRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollectionAsync",
        responseBodyFactory:  createOrderModelFromDiscriminatorValue,
    },
    post: {
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeOrderModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const OrderRequestBuilderUriTemplate = "{+baseurl}/Order";
/* tslint:enable */
/* eslint-enable */
