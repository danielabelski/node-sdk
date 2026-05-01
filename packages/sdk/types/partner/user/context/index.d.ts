/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * Partner user context client.
 */
export class PartnerUserContextClient extends ChatBotKitClient {
    /**
     * Retrieves a list of partner user contexts.
     *
     * @param {string} userId
     * @param {import('./v1.js').PartnerUserContextListRequest} [request]
     * @returns {ResponsePromise<import('./v1.js').PartnerUserContextListResponse,import('./v1.js').PartnerUserContextListStreamType>}
     */
    list(userId: string, request?: import("./v1.js").PartnerUserContextListRequest): ResponsePromise<import("./v1.js").PartnerUserContextListResponse, import("./v1.js").PartnerUserContextListStreamType>;
    /**
     * Fetches a partner user context.
     *
     * @param {string} userId
     * @param {string} contextId
     * @returns {ResponsePromise<import('./v1.js').PartnerUserContextFetchResponse,never>}
     */
    fetch(userId: string, contextId: string): ResponsePromise<import("./v1.js").PartnerUserContextFetchResponse, never>;
    /**
     * Creates a partner user context.
     *
     * @param {string} userId
     * @param {import('./v1.js').PartnerUserContextCreateRequest} request
     * @returns {Promise<import('./v1.js').PartnerUserContextCreateResponse>}
     */
    create(userId: string, request: import("./v1.js").PartnerUserContextCreateRequest): Promise<import("./v1.js").PartnerUserContextCreateResponse>;
    /**
     * Updates a partner user context.
     *
     * @param {string} userId
     * @param {string} contextId
     * @param {import('./v1.js').PartnerUserContextUpdateRequest} request
     * @returns {Promise<import('./v1.js').PartnerUserContextUpdateResponse>}
     */
    update(userId: string, contextId: string, request: import("./v1.js").PartnerUserContextUpdateRequest): Promise<import("./v1.js").PartnerUserContextUpdateResponse>;
    /**
     * Deletes a partner user context.
     *
     * @param {string} userId
     * @param {string} contextId
     * @returns {Promise<import('./v1.js').PartnerUserContextDeleteResponse>}
     */
    delete(userId: string, contextId: string): Promise<import("./v1.js").PartnerUserContextDeleteResponse>;
}
export default PartnerUserContextClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
import { ChatBotKitClient } from '../../../client.js';
