/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../../../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   cursor?: string,
 *   order?: 'desc'|'asc',
 *   take?: number,
 *   meta?: Record<string,string>,
 *   blueprintId?: string,
 *   botId?: string,
 *   datasetId?: string,
 *   skillsetId?: string
 * }} PartnerUserContextListRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPartnerUserContexts']['responses']['200']['content']['application/json']} PartnerUserContextListResponse
 *
 * @typedef {import('../../../types/api/v1.js').operations['listPartnerUserContexts']['responses']['200']['content']['application/jsonl']} PartnerUserContextListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserContextListRequest} [request]
 * @returns {ResponsePromise<PartnerUserContextListResponse,PartnerUserContextListStreamType>}
 */
export function listPartnerUserContexts(client: ChatBotKitClient, userId: string, request?: PartnerUserContextListRequest): ResponsePromise<PartnerUserContextListResponse, PartnerUserContextListStreamType>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPartnerUserContext']['responses']['200']['content']['application/json']} PartnerUserContextFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @returns {ResponsePromise<PartnerUserContextFetchResponse,never>}
 */
export function fetchPartnerUserContext(client: ChatBotKitClient, userId: string, contextId: string): ResponsePromise<PartnerUserContextFetchResponse, never>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['createPartnerUserContext']['requestBody']['content']['application/json']} PartnerUserContextCreateRequestBody
 *
 * @typedef {PartnerUserContextCreateRequestBody} PartnerUserContextCreateRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['createPartnerUserContext']['responses']['200']['content']['application/json']} PartnerUserContextCreateResponseBody
 *
 * @typedef {PartnerUserContextCreateResponseBody} PartnerUserContextCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserContextCreateRequest} request
 * @returns {Promise<PartnerUserContextCreateResponse>}
 */
export function createPartnerUserContext(client: ChatBotKitClient, userId: string, request: PartnerUserContextCreateRequest): Promise<PartnerUserContextCreateResponse>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['updatePartnerUserContext']['requestBody']['content']['application/json']} PartnerUserContextUpdateRequestBody
 *
 * @typedef {PartnerUserContextUpdateRequestBody} PartnerUserContextUpdateRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['updatePartnerUserContext']['responses']['200']['content']['application/json']} PartnerUserContextUpdateResponseBody
 *
 * @typedef {PartnerUserContextUpdateResponseBody} PartnerUserContextUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @param {PartnerUserContextUpdateRequest} request
 * @returns {Promise<PartnerUserContextUpdateResponse>}
 */
export function updatePartnerUserContext(client: ChatBotKitClient, userId: string, contextId: string, request: PartnerUserContextUpdateRequest): Promise<PartnerUserContextUpdateResponse>;
/**
 * @typedef {import('../../../types/api/v1.js').operations['deletePartnerUserContext']['requestBody']['content']['application/json']} PartnerUserContextDeleteRequestBody
 *
 * @typedef {PartnerUserContextDeleteRequestBody} PartnerUserContextDeleteRequest
 *
 * @typedef {import('../../../types/api/v1.js').operations['deletePartnerUserContext']['responses']['200']['content']['application/json']} PartnerUserContextDeleteResponseBody
 *
 * @typedef {PartnerUserContextDeleteResponseBody} PartnerUserContextDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @param {PartnerUserContextDeleteRequest} [request]
 * @returns {Promise<PartnerUserContextDeleteResponse>}
 */
export function deletePartnerUserContext(client: ChatBotKitClient, userId: string, contextId: string, request?: PartnerUserContextDeleteRequest): Promise<PartnerUserContextDeleteResponse>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type ResponsePromise<T, U> = import("../../../client.js").ResponsePromise<T, U>;
export type PartnerUserContextListRequest = {
    cursor?: string;
    order?: "desc" | "asc";
    take?: number;
    meta?: Record<string, string>;
    blueprintId?: string;
    botId?: string;
    datasetId?: string;
    skillsetId?: string;
};
export type PartnerUserContextListResponse = import("../../../types/api/v1.js").operations["listPartnerUserContexts"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserContextListStreamType = import("../../../types/api/v1.js").operations["listPartnerUserContexts"]["responses"]["200"]["content"]["application/jsonl"];
export type PartnerUserContextFetchResponse = import("../../../types/api/v1.js").operations["fetchPartnerUserContext"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserContextCreateRequestBody = import("../../../types/api/v1.js").operations["createPartnerUserContext"]["requestBody"]["content"]["application/json"];
export type PartnerUserContextCreateRequest = PartnerUserContextCreateRequestBody;
export type PartnerUserContextCreateResponseBody = import("../../../types/api/v1.js").operations["createPartnerUserContext"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserContextCreateResponse = PartnerUserContextCreateResponseBody;
export type PartnerUserContextUpdateRequestBody = import("../../../types/api/v1.js").operations["updatePartnerUserContext"]["requestBody"]["content"]["application/json"];
export type PartnerUserContextUpdateRequest = PartnerUserContextUpdateRequestBody;
export type PartnerUserContextUpdateResponseBody = import("../../../types/api/v1.js").operations["updatePartnerUserContext"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserContextUpdateResponse = PartnerUserContextUpdateResponseBody;
export type PartnerUserContextDeleteRequestBody = import("../../../types/api/v1.js").operations["deletePartnerUserContext"]["requestBody"]["content"]["application/json"];
export type PartnerUserContextDeleteRequest = PartnerUserContextDeleteRequestBody;
export type PartnerUserContextDeleteResponseBody = import("../../../types/api/v1.js").operations["deletePartnerUserContext"]["responses"]["200"]["content"]["application/json"];
export type PartnerUserContextDeleteResponse = PartnerUserContextDeleteResponseBody;
