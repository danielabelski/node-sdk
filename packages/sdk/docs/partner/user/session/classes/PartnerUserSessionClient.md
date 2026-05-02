[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [partner/user/session](../README.md) / PartnerUserSessionClient

# Class: PartnerUserSessionClient

Defined in: [partner/user/session/index.js:7](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/session/index.js#L7)

Partner user session client.

## Extends

- [`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PartnerUserSessionClient**(`options`): `PartnerUserSessionClient`

Defined in: [partner/user/session/index.js:11](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/session/index.js#L11)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PartnerUserSessionClient`

#### Overrides

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`userId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PartnerUserSessionCreateResponseBody`](../v1/type-aliases/PartnerUserSessionCreateResponseBody.md)\>

Defined in: [partner/user/session/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/session/index.js#L22)

Creates a new partner user session.

#### Parameters

##### userId

`string`

##### request

[`PartnerUserSessionCreateRequestBody`](../v1/type-aliases/PartnerUserSessionCreateRequestBody.md)

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`PartnerUserSessionCreateResponseBody`](../v1/type-aliases/PartnerUserSessionCreateResponseBody.md)\>

***

### extend()

> **extend**(`extensionOptions`): `PartnerUserSessionClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`PartnerUserSessionClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`extend`](../../../../client/classes/ChatBotKitClient.md#extend)
