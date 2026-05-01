[**@chatbotkit/sdk**](../../../README.md)

***

[@chatbotkit/sdk](../../../modules.md) / [partner/user](../README.md) / PartnerUserClient

# Class: PartnerUserClient

Defined in: [partner/user/index.js:21](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L21)

Partner user client.

## Extends

- [`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md)

## Constructors

### Constructor

> **new PartnerUserClient**(`options`): `PartnerUserClient`

Defined in: [partner/user/index.js:25](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L25)

#### Parameters

##### options

[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)

#### Returns

`PartnerUserClient`

#### Overrides

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`constructor`](../../../client/classes/ChatBotKitClient.md#constructor)

## Properties

### context

> **context**: `PartnerUserContextClient`

Defined in: [partner/user/index.js:31](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L31)

***

### token

> **token**: [`PartnerUserTokenClient`](../token/classes/PartnerUserTokenClient.md)

Defined in: [partner/user/index.js:36](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L36)

## Methods

### create()

> **create**(`request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/index.js:65](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L65)

Creates a new user.

#### Parameters

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### delete()

> **delete**(`userId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/index.js:86](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L86)

Deletes the user.

#### Parameters

##### userId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

***

### extend()

> **extend**(`extensionOptions`): `PartnerUserClient`

Defined in: [client.js:390](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/client.js#L390)

Creates a new instance of the same client type with extended options.

This is useful when you need to create a client with modified configuration
(e.g., different endpoint, token, or headers) without affecting the original.

Note: This method creates a completely new instance rather than cloning,
which is necessary because private class fields cannot be copied.

#### Parameters

##### extensionOptions

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ChatBotKitClientOptions`](../../../client/interfaces/ChatBotKitClientOptions.md)\>

Options to merge with current options

#### Returns

`PartnerUserClient`

A new instance of the same client class with extended options

#### Inherited from

[`ChatBotKitClient`](../../../client/classes/ChatBotKitClient.md).[`extend`](../../../client/classes/ChatBotKitClient.md#extend)

***

### fetch()

> **fetch**(`userId`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

Defined in: [partner/user/index.js:55](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L55)

Fetches a user.

#### Parameters

##### userId

`string`

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, `never`\>

***

### list()

> **list**(`request?`): [`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

Defined in: [partner/user/index.js:45](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L45)

Retrieves a list of all users.

#### Parameters

##### request?

[`PartnerUserListRequest`](../v1/type-aliases/PartnerUserListRequest.md)

#### Returns

[`ResponsePromise`](../../../client/classes/ResponsePromise.md)\<\{ \}, \{ \}\>

***

### update()

> **update**(`userId`, `request`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>

Defined in: [partner/user/index.js:76](https://github.com/chatbotkit/node-sdk/blob/main/sdks/node/packages/sdk/src/partner/user/index.js#L76)

Updates the user.

#### Parameters

##### userId

`string`

##### request

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<\{ \}\>
