import { ChatBotKitClient } from '../../../client.js'
import {
  createPartnerUserContext,
  deletePartnerUserContext,
  fetchPartnerUserContext,
  listPartnerUserContexts,
  updatePartnerUserContext,
} from './v1.js'

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
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Retrieves a list of partner user contexts.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserContextListRequest} [request]
   * @returns {ResponsePromise<import('./v1.js').PartnerUserContextListResponse,import('./v1.js').PartnerUserContextListStreamType>}
   */
  list(userId, request) {
    return listPartnerUserContexts(this, userId, request)
  }

  /**
   * Fetches a partner user context.
   *
   * @param {string} userId
   * @param {string} contextId
   * @returns {ResponsePromise<import('./v1.js').PartnerUserContextFetchResponse,never>}
   */
  fetch(userId, contextId) {
    return fetchPartnerUserContext(this, userId, contextId)
  }

  /**
   * Creates a partner user context.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserContextCreateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserContextCreateResponse>}
   */
  create(userId, request) {
    return createPartnerUserContext(this, userId, request)
  }

  /**
   * Updates a partner user context.
   *
   * @param {string} userId
   * @param {string} contextId
   * @param {import('./v1.js').PartnerUserContextUpdateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserContextUpdateResponse>}
   */
  update(userId, contextId, request) {
    return updatePartnerUserContext(this, userId, contextId, request)
  }

  /**
   * Deletes a partner user context.
   *
   * @param {string} userId
   * @param {string} contextId
   * @returns {Promise<import('./v1.js').PartnerUserContextDeleteResponse>}
   */
  delete(userId, contextId) {
    return deletePartnerUserContext(this, userId, contextId)
  }
}

export default PartnerUserContextClient
