## @chayns/uac-service

With this package Uac groups can be requested and edited. The package works in the frontend as well as in the node backend. In the background, the package uses protobuf for communication with the uac-service.

### Installation in frontend projects

1. Install package ```npm install @chayns/uac-service```
2. Create instance of UacServiceClient (could be in separate js/ts file in your project)
```js
import { getAccessToken, getLanguage, getSite, getUser } from 'chayns-api';
export const client = new UacServiceClient({
    getToken: async () => ((await getAccessToken()).accessToken || ""),
    getDefaultSiteId: () => getSite().id,
    logger: logger, // your chayns logger instance
    getDefaultPersonId: () => getUser()?.personId || "",
    getLanguage: () => getLanguage().active
});
```

### Installation in node projects

1. Install package ```npm install @chayns/uac-service```
2. Create instance of UacServiceClient (could be in separate js/ts file in your project)
```js
export const client = new UacServiceClient({
    getApiToken: async () => accessToken,
    logger: logger, // your chayns logger instance
});
```

### Usage in front and backend projects

These are just a few examples, there are many more functions. 

#### Create UserGroup
```js
const { id } = await client.createUserGroup({ showName: 'test name', users:['GER-TDNKN'], description: 'Beschreibung'});
```

#### Get all usergroups from site
```js
const result = await client.getUserGroups({ countUsers: true });
```

#### Get all users in group 
```js
const members = await client.getGroupMembers({ groupId: 1 });
```

#### Add user to group
```js
await client.addUsersToGroup({ groupId: 1, members: [{personId: 'F69-1LT41'}] })
```
