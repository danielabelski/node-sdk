/**
 * @typedef {import('../../../client.js').ChatBotKitClient} ChatBotKitClient
 */

/**
 * @typedef {{
 *   durationInSeconds?: number | null,
 *   config?: {
 *     allowedRoutes?: string[] | null,
 *     contactId?: string | null,
 *     namespace?: string | null,
 *   } | null,
 * }} PartnerUserSessionCreateRequestBody
 *
 * @typedef {PartnerUserSessionCreateRequestBody} PartnerUserSessionCreateRequest
 *
 * @typedef {{
 *   id: string,
 *   token: string,
 *   expiresAt: number,
 * }} PartnerUserSessionCreateResponseBody
 *
 * @typedef {PartnerUserSessionCreateResponseBody} PartnerUserSessionCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} userId
 * @param {PartnerUserSessionCreateRequest} request
 * @returns {Promise<PartnerUserSessionCreateResponse>}
 */
export async function createPartnerUserSession(client, userId, request) {
  const url = `/api/v1/partner/user/${userId}/session/create`

  /** @type {PartnerUserSessionCreateResponseBody} */
  const response = await client.clientFetch(url, {
    /** @type {PartnerUserSessionCreateRequestBody} */
    record: {
      ...request,
    },
  })

  return response
}
