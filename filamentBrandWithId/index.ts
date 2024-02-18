/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createFilamentBrandModelFromDiscriminatorValue, serializeFilamentBoxModel, type FilamentBoxModel, type FilamentBrandModel } from '../models/';
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /FilamentBrand?id={id}
 */
export interface FilamentBrandWithIdRequestBuilder extends BaseRequestBuilder<FilamentBrandWithIdRequestBuilder> {
    /**
     * Delete by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     delete(requestConfiguration?: RequestConfiguration<FilamentBrandWithIdRequestBuilderDeleteQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Get by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of FilamentBrandModel
     */
     get(requestConfiguration?: RequestConfiguration<FilamentBrandWithIdRequestBuilderGetQueryParameters> | undefined) : Promise<FilamentBrandModel | undefined>;
    /**
     * Update by ID
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of ArrayBuffer
     */
     put(body: FilamentBoxModel, requestConfiguration?: RequestConfiguration<FilamentBrandWithIdRequestBuilderPutQueryParameters> | undefined) : Promise<ArrayBuffer | undefined>;
    /**
     * Delete by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toDeleteRequestInformation(requestConfiguration?: RequestConfiguration<FilamentBrandWithIdRequestBuilderDeleteQueryParameters> | undefined) : RequestInformation;
    /**
     * Get by ID
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FilamentBrandWithIdRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Update by ID
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPutRequestInformation(body: FilamentBoxModel, requestConfiguration?: RequestConfiguration<FilamentBrandWithIdRequestBuilderPutQueryParameters> | undefined) : RequestInformation;
}
/**
 * Delete by ID
 */
export interface FilamentBrandWithIdRequestBuilderDeleteQueryParameters {
    id?: string;
}
/**
 * Get by ID
 */
export interface FilamentBrandWithIdRequestBuilderGetQueryParameters {
    id?: string;
}
/**
 * Update by ID
 */
export interface FilamentBrandWithIdRequestBuilderPutQueryParameters {
    id?: string;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const FilamentBrandWithIdRequestBuilderRequestsMetadata: RequestsMetadata = {
    delete: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
    },
    get: {
        responseBodyContentType: "application/json",
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createFilamentBrandModelFromDiscriminatorValue,
    },
    put: {
        adapterMethodName: "sendPrimitiveAsync",
        responseBodyFactory:  "ArrayBuffer",
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeFilamentBoxModel,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const FilamentBrandWithIdRequestBuilderUriTemplate = "{+baseurl}/FilamentBrand?id={id}?id={id}";
/* tslint:enable */
/* eslint-enable */
