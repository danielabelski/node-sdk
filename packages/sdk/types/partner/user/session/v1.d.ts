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
export function createPartnerUserSession(client: ChatBotKitClient, userId: string, request: PartnerUserSessionCreateRequest): Promise<PartnerUserSessionCreateResponse>;
export type ChatBotKitClient = import("../../../client.js").ChatBotKitClient;
export type PartnerUserSessionCreateRequestBody = {
    durationInSeconds?: number | null;
    config?: {
        allowedRoutes?: string[] | null;
        contactId?: string | null;
        namespace?: string | null;
    } | null;
};
export type PartnerUserSessionCreateRequest = PartnerUserSessionCreateRequestBody;
export type PartnerUserSessionCreateResponseBody = {
    id: string;
    token: string;
    expiresAt: number;
};
export type PartnerUserSessionCreateResponse = PartnerUserSessionCreateResponseBody;
