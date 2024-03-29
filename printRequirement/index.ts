/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPrintRequirementModelFromDiscriminatorValue, serializePrintRequirementModel, type PrintRequirementModel } from '../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /PrintRequirement
 */
export interface PrintRequirementRequestBuilder extends BaseRequestBuilder<PrintRequirementRequestBuilder> {
    /**
     * Get all
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of PrintRequirementModel
     */
     get(requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<PrintRequirementModel[] | undefined>;
    /**
     * Create a new
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     */
     post(body: PrintRequirementModel, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<void>;
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
     toPostRequestInformation(body: PrintRequirementModel, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const PrintRequirementRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollectionAsync",
        responseBodyFactory:  createPrintRequirementModelFromDiscriminatorValue,
    },
    post: {
        adapterMethodName: "sendNoResponseContentAsync",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePrintRequirementModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const PrintRequirementRequestBuilderUriTemplate = "{+baseurl}/PrintRequirement";
/* tslint:enable */
/* eslint-enable */
