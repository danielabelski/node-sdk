[**@chatbotkit/sdk**](../../../../README.md)

***

[@chatbotkit/sdk](../../../../modules.md) / [partner/user/token](../README.md) / PartnerUserTokenClient

# Class: PartnerUserTokenClient

Defined in: [partner/user/token/index.js:18](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L18)

Partner user token client.

## Extends

- [`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PartnerUserTokenClient**(`options`): `PartnerUserTokenClient`

Defined in: [partner/user/token/index.js:22](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L22)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PartnerUserTokenClient`

#### Overrides

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../../client/classes/ChatBotKitClient.md#constructor)

## Methods

### create()

> **create**(`userId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/token/index.js:44](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L44)

Creates a new user token.

#### Parameters

##### userId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`userId`, `tokenId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/token/index.js:67](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L67)

Deletes the user token.

#### Parameters

##### userId

`string`

##### tokenId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PartnerUserTokenClient`

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

`PartnerUserTokenClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../../client/classes/ChatBotKitClient.md).[`extend`](../../../../client/classes/ChatBotKitClient.md#extend)

***

### list()

> **list**(`userId`, `request?`): [`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [partner/user/token/index.js:33](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L33)

Retrieves a list of all user tokens.

#### Parameters

##### userId

`string`

##### request?

[`PartnerUserTokenListRequest`](../v1/type-aliases/PartnerUserTokenListRequest.md)

#### Returns

[`ResponsePromise`](../../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`userId`, `tokenId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/token/index.js:56](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/token/index.js#L56)

Updates the user token.

#### Parameters

##### userId

`string`

##### tokenId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
