/**
 * Partner user session client.
 */
export class PartnerUserSessionClient extends ChatBotKitClient {
    /**
     * Creates a new partner user session.
     *
     * @param {string} userId
     * @param {import('./v1.js').PartnerUserSessionCreateRequest} request
     * @returns {Promise<import('./v1.js').PartnerUserSessionCreateResponse>}
     */
    create(userId: string, request: import("./v1.js").PartnerUserSessionCreateRequest): Promise<import("./v1.js").PartnerUserSessionCreateResponse>;
}
export default PartnerUserSessionClient;
import { ChatBotKitClient } from '../../../client.js';
