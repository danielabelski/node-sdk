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
export function listPartnerUserContexts(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/context/list`

  /** @type {ResponsePromise<PartnerUserContextListResponse,PartnerUserContextListStreamType>} */
  const response = client.clientFetch(url, { query: request })

  return response
}

/**
 * @typedef {import('../../../types/api/v1.js').operations['fetchPartnerUserContext']['responses']['200']['content']['application/json']} PartnerUserContextFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {string} contextId
 * @returns {ResponsePromise<PartnerUserContextFetchResponse,never>}
 */
export function fetchPartnerUserContext(client, userId, contextId) {
  const url = `/api/v1/partner/user/${userId}/context/${contextId}/fetch`

  /** @type {ResponsePromise<PartnerUserContextFetchResponse,never>} */
  const response = client.clientFetch(url)

  return response
}

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
export async function createPartnerUserContext(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/context/create`

  /** @type {PartnerUserContextCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserContextCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

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
export async function updatePartnerUserContext(
  client,
  userId,
  contextId,
  request
) {
  const url = `/api/v1/partner/user/${userId}/context/${contextId}/update`

  /** @type {PartnerUserContextUpdateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserContextUpdateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}

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
export async function deletePartnerUserContext(
  client,
  userId,
  contextId,
  request
) {
  const url = `/api/v1/partner/user/${userId}/context/${contextId}/delete`

  /** @type {PartnerUserContextDeleteResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserContextDeleteRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
