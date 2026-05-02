import { ChatBotKitClient } from '../../../client.js'
import { createPartnerUserSession } from './v1.js'

/**
 * Partner user session client.
 */
export class PartnerUserSessionClient extends ChatBotKitClient {
  /**
   * @param {import('../../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Creates a new partner user session.
   *
   * @param {string} userId
   * @param {import('./v1.js').PartnerUserSessionCreateRequest} request
   * @returns {Promise<import('./v1.js').PartnerUserSessionCreateResponse>}
   */
  create(userId, request) {
    return createPartnerUserSession(this, userId, request)
  }
}

export default PartnerUserSessionClient
