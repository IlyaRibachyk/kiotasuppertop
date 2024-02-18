/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { DeliveryBoxPartsInfoRequestBuilderRequestsMetadata, DeliveryBoxPartsInfoRequestBuilderUriTemplate, type DeliveryBoxPartsInfoRequestBuilder } from './deliveryBoxPartsInfo/';
import { DeliveryBoxPartsInfoWithIdRequestBuilderRequestsMetadata, DeliveryBoxPartsInfoWithIdRequestBuilderUriTemplate, type DeliveryBoxPartsInfoWithIdRequestBuilder } from './deliveryBoxPartsInfoWithId/';
import { FilamentRequestBuilderRequestsMetadata, FilamentRequestBuilderUriTemplate, type FilamentRequestBuilder } from './filament/';
import { FilamentBoxRequestBuilderRequestsMetadata, FilamentBoxRequestBuilderUriTemplate, type FilamentBoxRequestBuilder } from './filamentBox/';
import { FilamentBoxWithIdRequestBuilderRequestsMetadata, FilamentBoxWithIdRequestBuilderUriTemplate, type FilamentBoxWithIdRequestBuilder } from './filamentBoxWithId/';
import { FilamentBrandRequestBuilderRequestsMetadata, FilamentBrandRequestBuilderUriTemplate, type FilamentBrandRequestBuilder } from './filamentBrand/';
import { FilamentBrandWithIdRequestBuilderRequestsMetadata, FilamentBrandWithIdRequestBuilderUriTemplate, type FilamentBrandWithIdRequestBuilder } from './filamentBrandWithId/';
import { FilamentWithIdRequestBuilderRequestsMetadata, FilamentWithIdRequestBuilderUriTemplate, type FilamentWithIdRequestBuilder } from './filamentWithId/';
import { OrderRequestBuilderRequestsMetadata, OrderRequestBuilderUriTemplate, type OrderRequestBuilder } from './order/';
import { OrderPartRequestBuilderRequestsMetadata, OrderPartRequestBuilderUriTemplate, type OrderPartRequestBuilder } from './orderPart/';
import { OrderPartWithIdRequestBuilderRequestsMetadata, OrderPartWithIdRequestBuilderUriTemplate, type OrderPartWithIdRequestBuilder } from './orderPartWithId/';
import { OrderWithIdRequestBuilderRequestsMetadata, OrderWithIdRequestBuilderUriTemplate, type OrderWithIdRequestBuilder } from './orderWithId/';
import { PartRequestBuilderRequestsMetadata, PartRequestBuilderUriTemplate, type PartRequestBuilder } from './part/';
import { PartItemRequestBuilderRequestsMetadata, PartItemRequestBuilderUriTemplate, type PartItemRequestBuilder } from './partItem/';
import { PartItemWithIdRequestBuilderRequestsMetadata, PartItemWithIdRequestBuilderUriTemplate, type PartItemWithIdRequestBuilder } from './partItemWithId/';
import { PartWithIdRequestBuilderRequestsMetadata, PartWithIdRequestBuilderUriTemplate, type PartWithIdRequestBuilder } from './partWithId/';
import { PrintRequirementRequestBuilderRequestsMetadata, PrintRequirementRequestBuilderUriTemplate, type PrintRequirementRequestBuilder } from './printRequirement/';
import { PrintRequirementWithIdRequestBuilderRequestsMetadata, PrintRequirementWithIdRequestBuilderUriTemplate, type PrintRequirementWithIdRequestBuilder } from './printRequirementWithId/';
import { type UsersRequestBuilder, UsersRequestBuilderRequestsMetadata, UsersRequestBuilderUriTemplate } from './users/';
import { type UserShippingInfoRequestBuilder, UserShippingInfoRequestBuilderRequestsMetadata, UserShippingInfoRequestBuilderUriTemplate } from './userShippingInfo/';
import { type UserShippingInfoWithIdRequestBuilder, UserShippingInfoWithIdRequestBuilderRequestsMetadata, UserShippingInfoWithIdRequestBuilderUriTemplate } from './userShippingInfoWithId/';
import { type UsersWithIdRequestBuilder, UsersWithIdRequestBuilderRequestsMetadata, UsersWithIdRequestBuilderUriTemplate } from './usersWithId/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface Client extends BaseRequestBuilder<Client> {
    /**
     * The DeliveryBoxPartsInfo property
     */
    get deliveryBoxPartsInfo(): DeliveryBoxPartsInfoRequestBuilder;
    /**
     * The filament property
     */
    get filament(): FilamentRequestBuilder;
    /**
     * The FilamentBox property
     */
    get filamentBox(): FilamentBoxRequestBuilder;
    /**
     * The FilamentBrand property
     */
    get filamentBrand(): FilamentBrandRequestBuilder;
    /**
     * The Order property
     */
    get order(): OrderRequestBuilder;
    /**
     * The OrderPart property
     */
    get orderPart(): OrderPartRequestBuilder;
    /**
     * The Part property
     */
    get part(): PartRequestBuilder;
    /**
     * The PartItem property
     */
    get partItem(): PartItemRequestBuilder;
    /**
     * The PrintRequirement property
     */
    get printRequirement(): PrintRequirementRequestBuilder;
    /**
     * The Users property
     */
    get users(): UsersRequestBuilder;
    /**
     * The UserShippingInfo property
     */
    get userShippingInfo(): UserShippingInfoRequestBuilder;
    /**
     * Builds and executes requests for operations under /DeliveryBoxPartsInfo?id={id}
     * @returns a DeliveryBoxPartsInfoWithIdRequestBuilder
     */
     deliveryBoxPartsInfoWithId() : DeliveryBoxPartsInfoWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /FilamentBox?id={id}
     * @returns a FilamentBoxWithIdRequestBuilder
     */
     filamentBoxWithId() : FilamentBoxWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /FilamentBrand?id={id}
     * @returns a FilamentBrandWithIdRequestBuilder
     */
     filamentBrandWithId() : FilamentBrandWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /filament?id={id}
     * @returns a filamentWithIdRequestBuilder
     */
     filamentWithId() : FilamentWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /OrderPart?id={id}
     * @returns a OrderPartWithIdRequestBuilder
     */
     orderPartWithId() : OrderPartWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /Order?id={id}
     * @returns a OrderWithIdRequestBuilder
     */
     orderWithId() : OrderWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /PartItem?id={id}
     * @returns a PartItemWithIdRequestBuilder
     */
     partItemWithId() : PartItemWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /Part?id={id}
     * @returns a PartWithIdRequestBuilder
     */
     partWithId() : PartWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /PrintRequirement?id={id}
     * @returns a PrintRequirementWithIdRequestBuilder
     */
     printRequirementWithId() : PrintRequirementWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /UserShippingInfo?id={id}
     * @returns a UserShippingInfoWithIdRequestBuilder
     */
     userShippingInfoWithId() : UserShippingInfoWithIdRequestBuilder;
    /**
     * Builds and executes requests for operations under /Users?id={id}
     * @returns a UsersWithIdRequestBuilder
     */
     usersWithId() : UsersWithIdRequestBuilder;
}
/**
 * Instantiates a new Client and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createClient(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "http://localhost:7071";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<Client>(requestAdapter, pathParameters, ClientUriTemplate, ClientNavigationMetadata, undefined);
}
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const ClientNavigationMetadata: Record<Exclude<keyof Client, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    deliveryBoxPartsInfoWithId: {
        uriTemplate: DeliveryBoxPartsInfoWithIdRequestBuilderUriTemplate,
        requestsMetadata: DeliveryBoxPartsInfoWithIdRequestBuilderRequestsMetadata,
    },
    filamentBoxWithId: {
        uriTemplate: FilamentBoxWithIdRequestBuilderUriTemplate,
        requestsMetadata: FilamentBoxWithIdRequestBuilderRequestsMetadata,
    },
    filamentBrandWithId: {
        uriTemplate: FilamentBrandWithIdRequestBuilderUriTemplate,
        requestsMetadata: FilamentBrandWithIdRequestBuilderRequestsMetadata,
    },
    filamentWithId: {
        uriTemplate: FilamentWithIdRequestBuilderUriTemplate,
        requestsMetadata: FilamentWithIdRequestBuilderRequestsMetadata,
    },
    orderPartWithId: {
        uriTemplate: OrderPartWithIdRequestBuilderUriTemplate,
        requestsMetadata: OrderPartWithIdRequestBuilderRequestsMetadata,
    },
    orderWithId: {
        uriTemplate: OrderWithIdRequestBuilderUriTemplate,
        requestsMetadata: OrderWithIdRequestBuilderRequestsMetadata,
    },
    partItemWithId: {
        uriTemplate: PartItemWithIdRequestBuilderUriTemplate,
        requestsMetadata: PartItemWithIdRequestBuilderRequestsMetadata,
    },
    partWithId: {
        uriTemplate: PartWithIdRequestBuilderUriTemplate,
        requestsMetadata: PartWithIdRequestBuilderRequestsMetadata,
    },
    printRequirementWithId: {
        uriTemplate: PrintRequirementWithIdRequestBuilderUriTemplate,
        requestsMetadata: PrintRequirementWithIdRequestBuilderRequestsMetadata,
    },
    userShippingInfoWithId: {
        uriTemplate: UserShippingInfoWithIdRequestBuilderUriTemplate,
        requestsMetadata: UserShippingInfoWithIdRequestBuilderRequestsMetadata,
    },
    usersWithId: {
        uriTemplate: UsersWithIdRequestBuilderUriTemplate,
        requestsMetadata: UsersWithIdRequestBuilderRequestsMetadata,
    },
    deliveryBoxPartsInfo: {
        uriTemplate: DeliveryBoxPartsInfoRequestBuilderUriTemplate,
        requestsMetadata: DeliveryBoxPartsInfoRequestBuilderRequestsMetadata,
    },
    filament: {
        uriTemplate: FilamentRequestBuilderUriTemplate,
        requestsMetadata: FilamentRequestBuilderRequestsMetadata,
    },
    filamentBox: {
        uriTemplate: FilamentBoxRequestBuilderUriTemplate,
        requestsMetadata: FilamentBoxRequestBuilderRequestsMetadata,
    },
    filamentBrand: {
        uriTemplate: FilamentBrandRequestBuilderUriTemplate,
        requestsMetadata: FilamentBrandRequestBuilderRequestsMetadata,
    },
    order: {
        uriTemplate: OrderRequestBuilderUriTemplate,
        requestsMetadata: OrderRequestBuilderRequestsMetadata,
    },
    orderPart: {
        uriTemplate: OrderPartRequestBuilderUriTemplate,
        requestsMetadata: OrderPartRequestBuilderRequestsMetadata,
    },
    part: {
        uriTemplate: PartRequestBuilderUriTemplate,
        requestsMetadata: PartRequestBuilderRequestsMetadata,
    },
    partItem: {
        uriTemplate: PartItemRequestBuilderUriTemplate,
        requestsMetadata: PartItemRequestBuilderRequestsMetadata,
    },
    printRequirement: {
        uriTemplate: PrintRequirementRequestBuilderUriTemplate,
        requestsMetadata: PrintRequirementRequestBuilderRequestsMetadata,
    },
    users: {
        uriTemplate: UsersRequestBuilderUriTemplate,
        requestsMetadata: UsersRequestBuilderRequestsMetadata,
    },
    userShippingInfo: {
        uriTemplate: UserShippingInfoRequestBuilderUriTemplate,
        requestsMetadata: UserShippingInfoRequestBuilderRequestsMetadata,
    },
};
/**
 * Uri template for the request builder.
 */
export const ClientUriTemplate = "{+baseurl}";
/* tslint:enable */
/* eslint-enable */
