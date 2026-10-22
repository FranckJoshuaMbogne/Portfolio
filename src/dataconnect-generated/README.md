# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetUserQuery*](#getuserquery)
  - [*ListUsersQuery*](#listusersquery)
  - [*GetProjectQuery*](#getprojectquery)
  - [*ListProjectsQuery*](#listprojectsquery)
  - [*GetSkillQuery*](#getskillquery)
  - [*ListSkillsQuery*](#listskillsquery)
  - [*ListMySkillsQuery*](#listmyskillsquery)
  - [*GetExperienceQuery*](#getexperiencequery)
  - [*ListExperiencesQuery*](#listexperiencesquery)
- [**Mutations**](#mutations)
  - [*CreateUserMutation*](#createusermutation)
  - [*UpdateUserMutation*](#updateusermutation)
  - [*DeleteUserMutation*](#deleteusermutation)
  - [*CreateProjectMutation*](#createprojectmutation)
  - [*UpdateProjectMutation*](#updateprojectmutation)
  - [*DeleteProjectMutation*](#deleteprojectmutation)
  - [*CreateSkillMutation*](#createskillmutation)
  - [*UpdateSkillMutation*](#updateskillmutation)
  - [*DeleteSkillMutation*](#deleteskillmutation)
  - [*CreateUserSkillMutation*](#createuserskillmutation)
  - [*DeleteUserSkillMutation*](#deleteuserskillmutation)
  - [*CreateExperienceMutation*](#createexperiencemutation)
  - [*UpdateExperienceMutation*](#updateexperiencemutation)
  - [*DeleteExperienceMutation*](#deleteexperiencemutation)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetUserQuery
You can execute the `GetUserQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserQuery(options?: ExecuteQueryOptions): QueryPromise<GetUserQueryData, undefined>;

interface GetUserQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserQueryData, undefined>;
}
export const getUserQueryRef: GetUserQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserQueryData, undefined>;

interface GetUserQueryRef {
  ...
  (dc: DataConnect): QueryRef<GetUserQueryData, undefined>;
}
export const getUserQueryRef: GetUserQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserQueryRef:
```typescript
const name = getUserQueryRef.operationName;
console.log(name);
```

### Variables
The `GetUserQuery` query has no variables.
### Return Type
Recall that executing the `GetUserQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetUserQueryData {
  user?: {
    username: string;
    email: string;
    displayName: string;
    bio?: string | null;
    profileImageUrl?: string | null;
    websiteUrl?: string | null;
  };
}
```
### Using `GetUserQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserQuery } from '@dataconnect/generated';


// Call the `getUserQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserQuery(dataConnect);

console.log(data.user);

// Or, you can use the `Promise` API.
getUserQuery().then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

### Using `GetUserQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserQueryRef } from '@dataconnect/generated';


// Call the `getUserQueryRef()` function to get a reference to the query.
const ref = getUserQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.user);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.user);
});
```

## ListUsersQuery
You can execute the `ListUsersQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listUsersQuery(options?: ExecuteQueryOptions): QueryPromise<ListUsersQueryData, undefined>;

interface ListUsersQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersQueryData, undefined>;
}
export const listUsersQueryRef: ListUsersQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listUsersQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersQueryData, undefined>;

interface ListUsersQueryRef {
  ...
  (dc: DataConnect): QueryRef<ListUsersQueryData, undefined>;
}
export const listUsersQueryRef: ListUsersQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listUsersQueryRef:
```typescript
const name = listUsersQueryRef.operationName;
console.log(name);
```

### Variables
The `ListUsersQuery` query has no variables.
### Return Type
Recall that executing the `ListUsersQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListUsersQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListUsersQueryData {
  users: ({
    username: string;
    displayName: string;
  })[];
}
```
### Using `ListUsersQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listUsersQuery } from '@dataconnect/generated';


// Call the `listUsersQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listUsersQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listUsersQuery(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
listUsersQuery().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `ListUsersQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listUsersQueryRef } from '@dataconnect/generated';


// Call the `listUsersQueryRef()` function to get a reference to the query.
const ref = listUsersQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listUsersQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

## GetProjectQuery
You can execute the `GetProjectQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getProjectQuery(vars: GetProjectQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectQueryData, GetProjectQueryVariables>;

interface GetProjectQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProjectQueryVariables): QueryRef<GetProjectQueryData, GetProjectQueryVariables>;
}
export const getProjectQueryRef: GetProjectQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getProjectQuery(dc: DataConnect, vars: GetProjectQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectQueryData, GetProjectQueryVariables>;

interface GetProjectQueryRef {
  ...
  (dc: DataConnect, vars: GetProjectQueryVariables): QueryRef<GetProjectQueryData, GetProjectQueryVariables>;
}
export const getProjectQueryRef: GetProjectQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getProjectQueryRef:
```typescript
const name = getProjectQueryRef.operationName;
console.log(name);
```

### Variables
The `GetProjectQuery` query requires an argument of type `GetProjectQueryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetProjectQueryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetProjectQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetProjectQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetProjectQueryData {
  project?: {
    title: string;
    description: string;
    projectUrl?: string | null;
    repoUrl?: string | null;
    imageUrl?: string | null;
    user: {
      username: string;
    };
  };
}
```
### Using `GetProjectQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getProjectQuery, GetProjectQueryVariables } from '@dataconnect/generated';

// The `GetProjectQuery` query requires an argument of type `GetProjectQueryVariables`:
const getProjectQueryVars: GetProjectQueryVariables = {
  id: ..., 
};

// Call the `getProjectQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getProjectQuery(getProjectQueryVars);
// Variables can be defined inline as well.
const { data } = await getProjectQuery({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getProjectQuery(dataConnect, getProjectQueryVars);

console.log(data.project);

// Or, you can use the `Promise` API.
getProjectQuery(getProjectQueryVars).then((response) => {
  const data = response.data;
  console.log(data.project);
});
```

### Using `GetProjectQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getProjectQueryRef, GetProjectQueryVariables } from '@dataconnect/generated';

// The `GetProjectQuery` query requires an argument of type `GetProjectQueryVariables`:
const getProjectQueryVars: GetProjectQueryVariables = {
  id: ..., 
};

// Call the `getProjectQueryRef()` function to get a reference to the query.
const ref = getProjectQueryRef(getProjectQueryVars);
// Variables can be defined inline as well.
const ref = getProjectQueryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getProjectQueryRef(dataConnect, getProjectQueryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.project);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.project);
});
```

## ListProjectsQuery
You can execute the `ListProjectsQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listProjectsQuery(options?: ExecuteQueryOptions): QueryPromise<ListProjectsQueryData, undefined>;

interface ListProjectsQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsQueryData, undefined>;
}
export const listProjectsQueryRef: ListProjectsQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listProjectsQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectsQueryData, undefined>;

interface ListProjectsQueryRef {
  ...
  (dc: DataConnect): QueryRef<ListProjectsQueryData, undefined>;
}
export const listProjectsQueryRef: ListProjectsQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listProjectsQueryRef:
```typescript
const name = listProjectsQueryRef.operationName;
console.log(name);
```

### Variables
The `ListProjectsQuery` query has no variables.
### Return Type
Recall that executing the `ListProjectsQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListProjectsQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListProjectsQueryData {
  projects: ({
    title: string;
    description: string;
  })[];
}
```
### Using `ListProjectsQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listProjectsQuery } from '@dataconnect/generated';


// Call the `listProjectsQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listProjectsQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listProjectsQuery(dataConnect);

console.log(data.projects);

// Or, you can use the `Promise` API.
listProjectsQuery().then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

### Using `ListProjectsQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listProjectsQueryRef } from '@dataconnect/generated';


// Call the `listProjectsQueryRef()` function to get a reference to the query.
const ref = listProjectsQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listProjectsQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.projects);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.projects);
});
```

## GetSkillQuery
You can execute the `GetSkillQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getSkillQuery(vars: GetSkillQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillQueryData, GetSkillQueryVariables>;

interface GetSkillQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSkillQueryVariables): QueryRef<GetSkillQueryData, GetSkillQueryVariables>;
}
export const getSkillQueryRef: GetSkillQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getSkillQuery(dc: DataConnect, vars: GetSkillQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillQueryData, GetSkillQueryVariables>;

interface GetSkillQueryRef {
  ...
  (dc: DataConnect, vars: GetSkillQueryVariables): QueryRef<GetSkillQueryData, GetSkillQueryVariables>;
}
export const getSkillQueryRef: GetSkillQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getSkillQueryRef:
```typescript
const name = getSkillQueryRef.operationName;
console.log(name);
```

### Variables
The `GetSkillQuery` query requires an argument of type `GetSkillQueryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetSkillQueryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetSkillQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetSkillQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetSkillQueryData {
  skill?: {
    name: string;
    category: string;
    proficiencyLevel?: string | null;
  };
}
```
### Using `GetSkillQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getSkillQuery, GetSkillQueryVariables } from '@dataconnect/generated';

// The `GetSkillQuery` query requires an argument of type `GetSkillQueryVariables`:
const getSkillQueryVars: GetSkillQueryVariables = {
  id: ..., 
};

// Call the `getSkillQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getSkillQuery(getSkillQueryVars);
// Variables can be defined inline as well.
const { data } = await getSkillQuery({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getSkillQuery(dataConnect, getSkillQueryVars);

console.log(data.skill);

// Or, you can use the `Promise` API.
getSkillQuery(getSkillQueryVars).then((response) => {
  const data = response.data;
  console.log(data.skill);
});
```

### Using `GetSkillQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getSkillQueryRef, GetSkillQueryVariables } from '@dataconnect/generated';

// The `GetSkillQuery` query requires an argument of type `GetSkillQueryVariables`:
const getSkillQueryVars: GetSkillQueryVariables = {
  id: ..., 
};

// Call the `getSkillQueryRef()` function to get a reference to the query.
const ref = getSkillQueryRef(getSkillQueryVars);
// Variables can be defined inline as well.
const ref = getSkillQueryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getSkillQueryRef(dataConnect, getSkillQueryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.skill);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.skill);
});
```

## ListSkillsQuery
You can execute the `ListSkillsQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listSkillsQuery(options?: ExecuteQueryOptions): QueryPromise<ListSkillsQueryData, undefined>;

interface ListSkillsQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSkillsQueryData, undefined>;
}
export const listSkillsQueryRef: ListSkillsQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listSkillsQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSkillsQueryData, undefined>;

interface ListSkillsQueryRef {
  ...
  (dc: DataConnect): QueryRef<ListSkillsQueryData, undefined>;
}
export const listSkillsQueryRef: ListSkillsQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listSkillsQueryRef:
```typescript
const name = listSkillsQueryRef.operationName;
console.log(name);
```

### Variables
The `ListSkillsQuery` query has no variables.
### Return Type
Recall that executing the `ListSkillsQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListSkillsQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListSkillsQueryData {
  skills: ({
    name: string;
    category: string;
  })[];
}
```
### Using `ListSkillsQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listSkillsQuery } from '@dataconnect/generated';


// Call the `listSkillsQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listSkillsQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listSkillsQuery(dataConnect);

console.log(data.skills);

// Or, you can use the `Promise` API.
listSkillsQuery().then((response) => {
  const data = response.data;
  console.log(data.skills);
});
```

### Using `ListSkillsQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listSkillsQueryRef } from '@dataconnect/generated';


// Call the `listSkillsQueryRef()` function to get a reference to the query.
const ref = listSkillsQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listSkillsQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.skills);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.skills);
});
```

## ListMySkillsQuery
You can execute the `ListMySkillsQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMySkillsQuery(options?: ExecuteQueryOptions): QueryPromise<ListMySkillsQueryData, undefined>;

interface ListMySkillsQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySkillsQueryData, undefined>;
}
export const listMySkillsQueryRef: ListMySkillsQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMySkillsQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySkillsQueryData, undefined>;

interface ListMySkillsQueryRef {
  ...
  (dc: DataConnect): QueryRef<ListMySkillsQueryData, undefined>;
}
export const listMySkillsQueryRef: ListMySkillsQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMySkillsQueryRef:
```typescript
const name = listMySkillsQueryRef.operationName;
console.log(name);
```

### Variables
The `ListMySkillsQuery` query has no variables.
### Return Type
Recall that executing the `ListMySkillsQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMySkillsQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMySkillsQueryData {
  userSkills: ({
    skill: {
      name: string;
      category: string;
    };
  })[];
}
```
### Using `ListMySkillsQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMySkillsQuery } from '@dataconnect/generated';


// Call the `listMySkillsQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMySkillsQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMySkillsQuery(dataConnect);

console.log(data.userSkills);

// Or, you can use the `Promise` API.
listMySkillsQuery().then((response) => {
  const data = response.data;
  console.log(data.userSkills);
});
```

### Using `ListMySkillsQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMySkillsQueryRef } from '@dataconnect/generated';


// Call the `listMySkillsQueryRef()` function to get a reference to the query.
const ref = listMySkillsQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMySkillsQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userSkills);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userSkills);
});
```

## GetExperienceQuery
You can execute the `GetExperienceQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getExperienceQuery(vars: GetExperienceQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetExperienceQueryData, GetExperienceQueryVariables>;

interface GetExperienceQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetExperienceQueryVariables): QueryRef<GetExperienceQueryData, GetExperienceQueryVariables>;
}
export const getExperienceQueryRef: GetExperienceQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getExperienceQuery(dc: DataConnect, vars: GetExperienceQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetExperienceQueryData, GetExperienceQueryVariables>;

interface GetExperienceQueryRef {
  ...
  (dc: DataConnect, vars: GetExperienceQueryVariables): QueryRef<GetExperienceQueryData, GetExperienceQueryVariables>;
}
export const getExperienceQueryRef: GetExperienceQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getExperienceQueryRef:
```typescript
const name = getExperienceQueryRef.operationName;
console.log(name);
```

### Variables
The `GetExperienceQuery` query requires an argument of type `GetExperienceQueryVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetExperienceQueryVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetExperienceQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetExperienceQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetExperienceQueryData {
  experience?: {
    companyName: string;
    role: string;
    startDate?: DateString | null;
    endDate?: DateString | null;
    description?: string | null;
  };
}
```
### Using `GetExperienceQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getExperienceQuery, GetExperienceQueryVariables } from '@dataconnect/generated';

// The `GetExperienceQuery` query requires an argument of type `GetExperienceQueryVariables`:
const getExperienceQueryVars: GetExperienceQueryVariables = {
  id: ..., 
};

// Call the `getExperienceQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getExperienceQuery(getExperienceQueryVars);
// Variables can be defined inline as well.
const { data } = await getExperienceQuery({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getExperienceQuery(dataConnect, getExperienceQueryVars);

console.log(data.experience);

// Or, you can use the `Promise` API.
getExperienceQuery(getExperienceQueryVars).then((response) => {
  const data = response.data;
  console.log(data.experience);
});
```

### Using `GetExperienceQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getExperienceQueryRef, GetExperienceQueryVariables } from '@dataconnect/generated';

// The `GetExperienceQuery` query requires an argument of type `GetExperienceQueryVariables`:
const getExperienceQueryVars: GetExperienceQueryVariables = {
  id: ..., 
};

// Call the `getExperienceQueryRef()` function to get a reference to the query.
const ref = getExperienceQueryRef(getExperienceQueryVars);
// Variables can be defined inline as well.
const ref = getExperienceQueryRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getExperienceQueryRef(dataConnect, getExperienceQueryVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.experience);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.experience);
});
```

## ListExperiencesQuery
You can execute the `ListExperiencesQuery` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listExperiencesQuery(options?: ExecuteQueryOptions): QueryPromise<ListExperiencesQueryData, undefined>;

interface ListExperiencesQueryRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListExperiencesQueryData, undefined>;
}
export const listExperiencesQueryRef: ListExperiencesQueryRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listExperiencesQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListExperiencesQueryData, undefined>;

interface ListExperiencesQueryRef {
  ...
  (dc: DataConnect): QueryRef<ListExperiencesQueryData, undefined>;
}
export const listExperiencesQueryRef: ListExperiencesQueryRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listExperiencesQueryRef:
```typescript
const name = listExperiencesQueryRef.operationName;
console.log(name);
```

### Variables
The `ListExperiencesQuery` query has no variables.
### Return Type
Recall that executing the `ListExperiencesQuery` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListExperiencesQueryData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListExperiencesQueryData {
  experiences: ({
    companyName: string;
    role: string;
  })[];
}
```
### Using `ListExperiencesQuery`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listExperiencesQuery } from '@dataconnect/generated';


// Call the `listExperiencesQuery()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listExperiencesQuery();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listExperiencesQuery(dataConnect);

console.log(data.experiences);

// Or, you can use the `Promise` API.
listExperiencesQuery().then((response) => {
  const data = response.data;
  console.log(data.experiences);
});
```

### Using `ListExperiencesQuery`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listExperiencesQueryRef } from '@dataconnect/generated';


// Call the `listExperiencesQueryRef()` function to get a reference to the query.
const ref = listExperiencesQueryRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listExperiencesQueryRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.experiences);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.experiences);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUserMutation
You can execute the `CreateUserMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUserMutation(vars: CreateUserMutationVariables): MutationPromise<CreateUserMutationData, CreateUserMutationVariables>;

interface CreateUserMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserMutationVariables): MutationRef<CreateUserMutationData, CreateUserMutationVariables>;
}
export const createUserMutationRef: CreateUserMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserMutation(dc: DataConnect, vars: CreateUserMutationVariables): MutationPromise<CreateUserMutationData, CreateUserMutationVariables>;

interface CreateUserMutationRef {
  ...
  (dc: DataConnect, vars: CreateUserMutationVariables): MutationRef<CreateUserMutationData, CreateUserMutationVariables>;
}
export const createUserMutationRef: CreateUserMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserMutationRef:
```typescript
const name = createUserMutationRef.operationName;
console.log(name);
```

### Variables
The `CreateUserMutation` mutation requires an argument of type `CreateUserMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserMutationVariables {
  displayName: string;
  email: string;
  username: string;
  bio?: string | null;
  profileImageUrl?: string | null;
  websiteUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateUserMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserMutationData {
  user_insert: User_Key;
}
```
### Using `CreateUserMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserMutation, CreateUserMutationVariables } from '@dataconnect/generated';

// The `CreateUserMutation` mutation requires an argument of type `CreateUserMutationVariables`:
const createUserMutationVars: CreateUserMutationVariables = {
  displayName: ..., 
  email: ..., 
  username: ..., 
  bio: ..., // optional
  profileImageUrl: ..., // optional
  websiteUrl: ..., // optional
};

// Call the `createUserMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserMutation(createUserMutationVars);
// Variables can be defined inline as well.
const { data } = await createUserMutation({ displayName: ..., email: ..., username: ..., bio: ..., profileImageUrl: ..., websiteUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserMutation(dataConnect, createUserMutationVars);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUserMutation(createUserMutationVars).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUserMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserMutationRef, CreateUserMutationVariables } from '@dataconnect/generated';

// The `CreateUserMutation` mutation requires an argument of type `CreateUserMutationVariables`:
const createUserMutationVars: CreateUserMutationVariables = {
  displayName: ..., 
  email: ..., 
  username: ..., 
  bio: ..., // optional
  profileImageUrl: ..., // optional
  websiteUrl: ..., // optional
};

// Call the `createUserMutationRef()` function to get a reference to the mutation.
const ref = createUserMutationRef(createUserMutationVars);
// Variables can be defined inline as well.
const ref = createUserMutationRef({ displayName: ..., email: ..., username: ..., bio: ..., profileImageUrl: ..., websiteUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserMutationRef(dataConnect, createUserMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUserMutation
You can execute the `UpdateUserMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserMutation(vars?: UpdateUserMutationVariables): MutationPromise<UpdateUserMutationData, UpdateUserMutationVariables>;

interface UpdateUserMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserMutationVariables): MutationRef<UpdateUserMutationData, UpdateUserMutationVariables>;
}
export const updateUserMutationRef: UpdateUserMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserMutation(dc: DataConnect, vars?: UpdateUserMutationVariables): MutationPromise<UpdateUserMutationData, UpdateUserMutationVariables>;

interface UpdateUserMutationRef {
  ...
  (dc: DataConnect, vars?: UpdateUserMutationVariables): MutationRef<UpdateUserMutationData, UpdateUserMutationVariables>;
}
export const updateUserMutationRef: UpdateUserMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserMutationRef:
```typescript
const name = updateUserMutationRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserMutation` mutation has an optional argument of type `UpdateUserMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateUserMutationVariables {
  displayName?: string | null;
  bio?: string | null;
  profileImageUrl?: string | null;
  websiteUrl?: string | null;
}
```
### Return Type
Recall that executing the `UpdateUserMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserMutationData {
  user_update?: User_Key | null;
}
```
### Using `UpdateUserMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserMutation, UpdateUserMutationVariables } from '@dataconnect/generated';

// The `UpdateUserMutation` mutation has an optional argument of type `UpdateUserMutationVariables`:
const updateUserMutationVars: UpdateUserMutationVariables = {
  displayName: ..., // optional
  bio: ..., // optional
  profileImageUrl: ..., // optional
  websiteUrl: ..., // optional
};

// Call the `updateUserMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserMutation(updateUserMutationVars);
// Variables can be defined inline as well.
const { data } = await updateUserMutation({ displayName: ..., bio: ..., profileImageUrl: ..., websiteUrl: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserMutationVariables` argument.
const { data } = await updateUserMutation();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserMutation(dataConnect, updateUserMutationVars);

console.log(data.user_update);

// Or, you can use the `Promise` API.
updateUserMutation(updateUserMutationVars).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

### Using `UpdateUserMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserMutationRef, UpdateUserMutationVariables } from '@dataconnect/generated';

// The `UpdateUserMutation` mutation has an optional argument of type `UpdateUserMutationVariables`:
const updateUserMutationVars: UpdateUserMutationVariables = {
  displayName: ..., // optional
  bio: ..., // optional
  profileImageUrl: ..., // optional
  websiteUrl: ..., // optional
};

// Call the `updateUserMutationRef()` function to get a reference to the mutation.
const ref = updateUserMutationRef(updateUserMutationVars);
// Variables can be defined inline as well.
const ref = updateUserMutationRef({ displayName: ..., bio: ..., profileImageUrl: ..., websiteUrl: ..., });
// Since all variables are optional for this mutation, you can omit the `UpdateUserMutationVariables` argument.
const ref = updateUserMutationRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserMutationRef(dataConnect, updateUserMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_update);
});
```

## DeleteUserMutation
You can execute the `DeleteUserMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUserMutation(): MutationPromise<DeleteUserMutationData, undefined>;

interface DeleteUserMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserMutationData, undefined>;
}
export const deleteUserMutationRef: DeleteUserMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUserMutation(dc: DataConnect): MutationPromise<DeleteUserMutationData, undefined>;

interface DeleteUserMutationRef {
  ...
  (dc: DataConnect): MutationRef<DeleteUserMutationData, undefined>;
}
export const deleteUserMutationRef: DeleteUserMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserMutationRef:
```typescript
const name = deleteUserMutationRef.operationName;
console.log(name);
```

### Variables
The `DeleteUserMutation` mutation has no variables.
### Return Type
Recall that executing the `DeleteUserMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserMutationData {
  user_delete?: User_Key | null;
}
```
### Using `DeleteUserMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUserMutation } from '@dataconnect/generated';


// Call the `deleteUserMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUserMutation();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUserMutation(dataConnect);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
deleteUserMutation().then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

### Using `DeleteUserMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserMutationRef } from '@dataconnect/generated';


// Call the `deleteUserMutationRef()` function to get a reference to the mutation.
const ref = deleteUserMutationRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserMutationRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_delete);
});
```

## CreateProjectMutation
You can execute the `CreateProjectMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createProjectMutation(vars: CreateProjectMutationVariables): MutationPromise<CreateProjectMutationData, CreateProjectMutationVariables>;

interface CreateProjectMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectMutationVariables): MutationRef<CreateProjectMutationData, CreateProjectMutationVariables>;
}
export const createProjectMutationRef: CreateProjectMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createProjectMutation(dc: DataConnect, vars: CreateProjectMutationVariables): MutationPromise<CreateProjectMutationData, CreateProjectMutationVariables>;

interface CreateProjectMutationRef {
  ...
  (dc: DataConnect, vars: CreateProjectMutationVariables): MutationRef<CreateProjectMutationData, CreateProjectMutationVariables>;
}
export const createProjectMutationRef: CreateProjectMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createProjectMutationRef:
```typescript
const name = createProjectMutationRef.operationName;
console.log(name);
```

### Variables
The `CreateProjectMutation` mutation requires an argument of type `CreateProjectMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateProjectMutationVariables {
  title: string;
  description: string;
  projectUrl?: string | null;
  repoUrl?: string | null;
  imageUrl?: string | null;
}
```
### Return Type
Recall that executing the `CreateProjectMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateProjectMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateProjectMutationData {
  project_insert: Project_Key;
}
```
### Using `CreateProjectMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createProjectMutation, CreateProjectMutationVariables } from '@dataconnect/generated';

// The `CreateProjectMutation` mutation requires an argument of type `CreateProjectMutationVariables`:
const createProjectMutationVars: CreateProjectMutationVariables = {
  title: ..., 
  description: ..., 
  projectUrl: ..., // optional
  repoUrl: ..., // optional
  imageUrl: ..., // optional
};

// Call the `createProjectMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createProjectMutation(createProjectMutationVars);
// Variables can be defined inline as well.
const { data } = await createProjectMutation({ title: ..., description: ..., projectUrl: ..., repoUrl: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createProjectMutation(dataConnect, createProjectMutationVars);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
createProjectMutation(createProjectMutationVars).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

### Using `CreateProjectMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createProjectMutationRef, CreateProjectMutationVariables } from '@dataconnect/generated';

// The `CreateProjectMutation` mutation requires an argument of type `CreateProjectMutationVariables`:
const createProjectMutationVars: CreateProjectMutationVariables = {
  title: ..., 
  description: ..., 
  projectUrl: ..., // optional
  repoUrl: ..., // optional
  imageUrl: ..., // optional
};

// Call the `createProjectMutationRef()` function to get a reference to the mutation.
const ref = createProjectMutationRef(createProjectMutationVars);
// Variables can be defined inline as well.
const ref = createProjectMutationRef({ title: ..., description: ..., projectUrl: ..., repoUrl: ..., imageUrl: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createProjectMutationRef(dataConnect, createProjectMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_insert);
});
```

## UpdateProjectMutation
You can execute the `UpdateProjectMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateProjectMutation(vars: UpdateProjectMutationVariables): MutationPromise<UpdateProjectMutationData, UpdateProjectMutationVariables>;

interface UpdateProjectMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectMutationVariables): MutationRef<UpdateProjectMutationData, UpdateProjectMutationVariables>;
}
export const updateProjectMutationRef: UpdateProjectMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateProjectMutation(dc: DataConnect, vars: UpdateProjectMutationVariables): MutationPromise<UpdateProjectMutationData, UpdateProjectMutationVariables>;

interface UpdateProjectMutationRef {
  ...
  (dc: DataConnect, vars: UpdateProjectMutationVariables): MutationRef<UpdateProjectMutationData, UpdateProjectMutationVariables>;
}
export const updateProjectMutationRef: UpdateProjectMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateProjectMutationRef:
```typescript
const name = updateProjectMutationRef.operationName;
console.log(name);
```

### Variables
The `UpdateProjectMutation` mutation requires an argument of type `UpdateProjectMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateProjectMutationVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
}
```
### Return Type
Recall that executing the `UpdateProjectMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateProjectMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateProjectMutationData {
  project_update?: Project_Key | null;
}
```
### Using `UpdateProjectMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateProjectMutation, UpdateProjectMutationVariables } from '@dataconnect/generated';

// The `UpdateProjectMutation` mutation requires an argument of type `UpdateProjectMutationVariables`:
const updateProjectMutationVars: UpdateProjectMutationVariables = {
  id: ..., 
  title: ..., // optional
  description: ..., // optional
};

// Call the `updateProjectMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateProjectMutation(updateProjectMutationVars);
// Variables can be defined inline as well.
const { data } = await updateProjectMutation({ id: ..., title: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateProjectMutation(dataConnect, updateProjectMutationVars);

console.log(data.project_update);

// Or, you can use the `Promise` API.
updateProjectMutation(updateProjectMutationVars).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

### Using `UpdateProjectMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateProjectMutationRef, UpdateProjectMutationVariables } from '@dataconnect/generated';

// The `UpdateProjectMutation` mutation requires an argument of type `UpdateProjectMutationVariables`:
const updateProjectMutationVars: UpdateProjectMutationVariables = {
  id: ..., 
  title: ..., // optional
  description: ..., // optional
};

// Call the `updateProjectMutationRef()` function to get a reference to the mutation.
const ref = updateProjectMutationRef(updateProjectMutationVars);
// Variables can be defined inline as well.
const ref = updateProjectMutationRef({ id: ..., title: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateProjectMutationRef(dataConnect, updateProjectMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_update);
});
```

## DeleteProjectMutation
You can execute the `DeleteProjectMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteProjectMutation(vars: DeleteProjectMutationVariables): MutationPromise<DeleteProjectMutationData, DeleteProjectMutationVariables>;

interface DeleteProjectMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectMutationVariables): MutationRef<DeleteProjectMutationData, DeleteProjectMutationVariables>;
}
export const deleteProjectMutationRef: DeleteProjectMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteProjectMutation(dc: DataConnect, vars: DeleteProjectMutationVariables): MutationPromise<DeleteProjectMutationData, DeleteProjectMutationVariables>;

interface DeleteProjectMutationRef {
  ...
  (dc: DataConnect, vars: DeleteProjectMutationVariables): MutationRef<DeleteProjectMutationData, DeleteProjectMutationVariables>;
}
export const deleteProjectMutationRef: DeleteProjectMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteProjectMutationRef:
```typescript
const name = deleteProjectMutationRef.operationName;
console.log(name);
```

### Variables
The `DeleteProjectMutation` mutation requires an argument of type `DeleteProjectMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteProjectMutationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteProjectMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteProjectMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteProjectMutationData {
  project_delete?: Project_Key | null;
}
```
### Using `DeleteProjectMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteProjectMutation, DeleteProjectMutationVariables } from '@dataconnect/generated';

// The `DeleteProjectMutation` mutation requires an argument of type `DeleteProjectMutationVariables`:
const deleteProjectMutationVars: DeleteProjectMutationVariables = {
  id: ..., 
};

// Call the `deleteProjectMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteProjectMutation(deleteProjectMutationVars);
// Variables can be defined inline as well.
const { data } = await deleteProjectMutation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteProjectMutation(dataConnect, deleteProjectMutationVars);

console.log(data.project_delete);

// Or, you can use the `Promise` API.
deleteProjectMutation(deleteProjectMutationVars).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
});
```

### Using `DeleteProjectMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteProjectMutationRef, DeleteProjectMutationVariables } from '@dataconnect/generated';

// The `DeleteProjectMutation` mutation requires an argument of type `DeleteProjectMutationVariables`:
const deleteProjectMutationVars: DeleteProjectMutationVariables = {
  id: ..., 
};

// Call the `deleteProjectMutationRef()` function to get a reference to the mutation.
const ref = deleteProjectMutationRef(deleteProjectMutationVars);
// Variables can be defined inline as well.
const ref = deleteProjectMutationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteProjectMutationRef(dataConnect, deleteProjectMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.project_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.project_delete);
});
```

## CreateSkillMutation
You can execute the `CreateSkillMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createSkillMutation(vars: CreateSkillMutationVariables): MutationPromise<CreateSkillMutationData, CreateSkillMutationVariables>;

interface CreateSkillMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillMutationVariables): MutationRef<CreateSkillMutationData, CreateSkillMutationVariables>;
}
export const createSkillMutationRef: CreateSkillMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createSkillMutation(dc: DataConnect, vars: CreateSkillMutationVariables): MutationPromise<CreateSkillMutationData, CreateSkillMutationVariables>;

interface CreateSkillMutationRef {
  ...
  (dc: DataConnect, vars: CreateSkillMutationVariables): MutationRef<CreateSkillMutationData, CreateSkillMutationVariables>;
}
export const createSkillMutationRef: CreateSkillMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createSkillMutationRef:
```typescript
const name = createSkillMutationRef.operationName;
console.log(name);
```

### Variables
The `CreateSkillMutation` mutation requires an argument of type `CreateSkillMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateSkillMutationVariables {
  name: string;
  category: string;
  proficiencyLevel?: string | null;
}
```
### Return Type
Recall that executing the `CreateSkillMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateSkillMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateSkillMutationData {
  skill_insert: Skill_Key;
}
```
### Using `CreateSkillMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createSkillMutation, CreateSkillMutationVariables } from '@dataconnect/generated';

// The `CreateSkillMutation` mutation requires an argument of type `CreateSkillMutationVariables`:
const createSkillMutationVars: CreateSkillMutationVariables = {
  name: ..., 
  category: ..., 
  proficiencyLevel: ..., // optional
};

// Call the `createSkillMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createSkillMutation(createSkillMutationVars);
// Variables can be defined inline as well.
const { data } = await createSkillMutation({ name: ..., category: ..., proficiencyLevel: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createSkillMutation(dataConnect, createSkillMutationVars);

console.log(data.skill_insert);

// Or, you can use the `Promise` API.
createSkillMutation(createSkillMutationVars).then((response) => {
  const data = response.data;
  console.log(data.skill_insert);
});
```

### Using `CreateSkillMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createSkillMutationRef, CreateSkillMutationVariables } from '@dataconnect/generated';

// The `CreateSkillMutation` mutation requires an argument of type `CreateSkillMutationVariables`:
const createSkillMutationVars: CreateSkillMutationVariables = {
  name: ..., 
  category: ..., 
  proficiencyLevel: ..., // optional
};

// Call the `createSkillMutationRef()` function to get a reference to the mutation.
const ref = createSkillMutationRef(createSkillMutationVars);
// Variables can be defined inline as well.
const ref = createSkillMutationRef({ name: ..., category: ..., proficiencyLevel: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createSkillMutationRef(dataConnect, createSkillMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.skill_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.skill_insert);
});
```

## UpdateSkillMutation
You can execute the `UpdateSkillMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateSkillMutation(vars: UpdateSkillMutationVariables): MutationPromise<UpdateSkillMutationData, UpdateSkillMutationVariables>;

interface UpdateSkillMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillMutationVariables): MutationRef<UpdateSkillMutationData, UpdateSkillMutationVariables>;
}
export const updateSkillMutationRef: UpdateSkillMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateSkillMutation(dc: DataConnect, vars: UpdateSkillMutationVariables): MutationPromise<UpdateSkillMutationData, UpdateSkillMutationVariables>;

interface UpdateSkillMutationRef {
  ...
  (dc: DataConnect, vars: UpdateSkillMutationVariables): MutationRef<UpdateSkillMutationData, UpdateSkillMutationVariables>;
}
export const updateSkillMutationRef: UpdateSkillMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateSkillMutationRef:
```typescript
const name = updateSkillMutationRef.operationName;
console.log(name);
```

### Variables
The `UpdateSkillMutation` mutation requires an argument of type `UpdateSkillMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateSkillMutationVariables {
  id: UUIDString;
  proficiencyLevel?: string | null;
}
```
### Return Type
Recall that executing the `UpdateSkillMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateSkillMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateSkillMutationData {
  skill_update?: Skill_Key | null;
}
```
### Using `UpdateSkillMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateSkillMutation, UpdateSkillMutationVariables } from '@dataconnect/generated';

// The `UpdateSkillMutation` mutation requires an argument of type `UpdateSkillMutationVariables`:
const updateSkillMutationVars: UpdateSkillMutationVariables = {
  id: ..., 
  proficiencyLevel: ..., // optional
};

// Call the `updateSkillMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateSkillMutation(updateSkillMutationVars);
// Variables can be defined inline as well.
const { data } = await updateSkillMutation({ id: ..., proficiencyLevel: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateSkillMutation(dataConnect, updateSkillMutationVars);

console.log(data.skill_update);

// Or, you can use the `Promise` API.
updateSkillMutation(updateSkillMutationVars).then((response) => {
  const data = response.data;
  console.log(data.skill_update);
});
```

### Using `UpdateSkillMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateSkillMutationRef, UpdateSkillMutationVariables } from '@dataconnect/generated';

// The `UpdateSkillMutation` mutation requires an argument of type `UpdateSkillMutationVariables`:
const updateSkillMutationVars: UpdateSkillMutationVariables = {
  id: ..., 
  proficiencyLevel: ..., // optional
};

// Call the `updateSkillMutationRef()` function to get a reference to the mutation.
const ref = updateSkillMutationRef(updateSkillMutationVars);
// Variables can be defined inline as well.
const ref = updateSkillMutationRef({ id: ..., proficiencyLevel: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateSkillMutationRef(dataConnect, updateSkillMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.skill_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.skill_update);
});
```

## DeleteSkillMutation
You can execute the `DeleteSkillMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteSkillMutation(vars: DeleteSkillMutationVariables): MutationPromise<DeleteSkillMutationData, DeleteSkillMutationVariables>;

interface DeleteSkillMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSkillMutationVariables): MutationRef<DeleteSkillMutationData, DeleteSkillMutationVariables>;
}
export const deleteSkillMutationRef: DeleteSkillMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteSkillMutation(dc: DataConnect, vars: DeleteSkillMutationVariables): MutationPromise<DeleteSkillMutationData, DeleteSkillMutationVariables>;

interface DeleteSkillMutationRef {
  ...
  (dc: DataConnect, vars: DeleteSkillMutationVariables): MutationRef<DeleteSkillMutationData, DeleteSkillMutationVariables>;
}
export const deleteSkillMutationRef: DeleteSkillMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteSkillMutationRef:
```typescript
const name = deleteSkillMutationRef.operationName;
console.log(name);
```

### Variables
The `DeleteSkillMutation` mutation requires an argument of type `DeleteSkillMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteSkillMutationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteSkillMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteSkillMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteSkillMutationData {
  skill_delete?: Skill_Key | null;
}
```
### Using `DeleteSkillMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteSkillMutation, DeleteSkillMutationVariables } from '@dataconnect/generated';

// The `DeleteSkillMutation` mutation requires an argument of type `DeleteSkillMutationVariables`:
const deleteSkillMutationVars: DeleteSkillMutationVariables = {
  id: ..., 
};

// Call the `deleteSkillMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteSkillMutation(deleteSkillMutationVars);
// Variables can be defined inline as well.
const { data } = await deleteSkillMutation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteSkillMutation(dataConnect, deleteSkillMutationVars);

console.log(data.skill_delete);

// Or, you can use the `Promise` API.
deleteSkillMutation(deleteSkillMutationVars).then((response) => {
  const data = response.data;
  console.log(data.skill_delete);
});
```

### Using `DeleteSkillMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteSkillMutationRef, DeleteSkillMutationVariables } from '@dataconnect/generated';

// The `DeleteSkillMutation` mutation requires an argument of type `DeleteSkillMutationVariables`:
const deleteSkillMutationVars: DeleteSkillMutationVariables = {
  id: ..., 
};

// Call the `deleteSkillMutationRef()` function to get a reference to the mutation.
const ref = deleteSkillMutationRef(deleteSkillMutationVars);
// Variables can be defined inline as well.
const ref = deleteSkillMutationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteSkillMutationRef(dataConnect, deleteSkillMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.skill_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.skill_delete);
});
```

## CreateUserSkillMutation
You can execute the `CreateUserSkillMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUserSkillMutation(vars: CreateUserSkillMutationVariables): MutationPromise<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;

interface CreateUserSkillMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserSkillMutationVariables): MutationRef<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;
}
export const createUserSkillMutationRef: CreateUserSkillMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserSkillMutation(dc: DataConnect, vars: CreateUserSkillMutationVariables): MutationPromise<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;

interface CreateUserSkillMutationRef {
  ...
  (dc: DataConnect, vars: CreateUserSkillMutationVariables): MutationRef<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;
}
export const createUserSkillMutationRef: CreateUserSkillMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserSkillMutationRef:
```typescript
const name = createUserSkillMutationRef.operationName;
console.log(name);
```

### Variables
The `CreateUserSkillMutation` mutation requires an argument of type `CreateUserSkillMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateUserSkillMutationVariables {
  skillId: UUIDString;
}
```
### Return Type
Recall that executing the `CreateUserSkillMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserSkillMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserSkillMutationData {
  userSkill_insert: UserSkill_Key;
}
```
### Using `CreateUserSkillMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserSkillMutation, CreateUserSkillMutationVariables } from '@dataconnect/generated';

// The `CreateUserSkillMutation` mutation requires an argument of type `CreateUserSkillMutationVariables`:
const createUserSkillMutationVars: CreateUserSkillMutationVariables = {
  skillId: ..., 
};

// Call the `createUserSkillMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserSkillMutation(createUserSkillMutationVars);
// Variables can be defined inline as well.
const { data } = await createUserSkillMutation({ skillId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserSkillMutation(dataConnect, createUserSkillMutationVars);

console.log(data.userSkill_insert);

// Or, you can use the `Promise` API.
createUserSkillMutation(createUserSkillMutationVars).then((response) => {
  const data = response.data;
  console.log(data.userSkill_insert);
});
```

### Using `CreateUserSkillMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserSkillMutationRef, CreateUserSkillMutationVariables } from '@dataconnect/generated';

// The `CreateUserSkillMutation` mutation requires an argument of type `CreateUserSkillMutationVariables`:
const createUserSkillMutationVars: CreateUserSkillMutationVariables = {
  skillId: ..., 
};

// Call the `createUserSkillMutationRef()` function to get a reference to the mutation.
const ref = createUserSkillMutationRef(createUserSkillMutationVars);
// Variables can be defined inline as well.
const ref = createUserSkillMutationRef({ skillId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserSkillMutationRef(dataConnect, createUserSkillMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userSkill_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userSkill_insert);
});
```

## DeleteUserSkillMutation
You can execute the `DeleteUserSkillMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteUserSkillMutation(vars: DeleteUserSkillMutationVariables): MutationPromise<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;

interface DeleteUserSkillMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserSkillMutationVariables): MutationRef<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;
}
export const deleteUserSkillMutationRef: DeleteUserSkillMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteUserSkillMutation(dc: DataConnect, vars: DeleteUserSkillMutationVariables): MutationPromise<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;

interface DeleteUserSkillMutationRef {
  ...
  (dc: DataConnect, vars: DeleteUserSkillMutationVariables): MutationRef<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;
}
export const deleteUserSkillMutationRef: DeleteUserSkillMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteUserSkillMutationRef:
```typescript
const name = deleteUserSkillMutationRef.operationName;
console.log(name);
```

### Variables
The `DeleteUserSkillMutation` mutation requires an argument of type `DeleteUserSkillMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteUserSkillMutationVariables {
  skillId: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteUserSkillMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteUserSkillMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteUserSkillMutationData {
  userSkill_delete?: UserSkill_Key | null;
}
```
### Using `DeleteUserSkillMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteUserSkillMutation, DeleteUserSkillMutationVariables } from '@dataconnect/generated';

// The `DeleteUserSkillMutation` mutation requires an argument of type `DeleteUserSkillMutationVariables`:
const deleteUserSkillMutationVars: DeleteUserSkillMutationVariables = {
  skillId: ..., 
};

// Call the `deleteUserSkillMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteUserSkillMutation(deleteUserSkillMutationVars);
// Variables can be defined inline as well.
const { data } = await deleteUserSkillMutation({ skillId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteUserSkillMutation(dataConnect, deleteUserSkillMutationVars);

console.log(data.userSkill_delete);

// Or, you can use the `Promise` API.
deleteUserSkillMutation(deleteUserSkillMutationVars).then((response) => {
  const data = response.data;
  console.log(data.userSkill_delete);
});
```

### Using `DeleteUserSkillMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteUserSkillMutationRef, DeleteUserSkillMutationVariables } from '@dataconnect/generated';

// The `DeleteUserSkillMutation` mutation requires an argument of type `DeleteUserSkillMutationVariables`:
const deleteUserSkillMutationVars: DeleteUserSkillMutationVariables = {
  skillId: ..., 
};

// Call the `deleteUserSkillMutationRef()` function to get a reference to the mutation.
const ref = deleteUserSkillMutationRef(deleteUserSkillMutationVars);
// Variables can be defined inline as well.
const ref = deleteUserSkillMutationRef({ skillId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteUserSkillMutationRef(dataConnect, deleteUserSkillMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userSkill_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userSkill_delete);
});
```

## CreateExperienceMutation
You can execute the `CreateExperienceMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createExperienceMutation(vars: CreateExperienceMutationVariables): MutationPromise<CreateExperienceMutationData, CreateExperienceMutationVariables>;

interface CreateExperienceMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExperienceMutationVariables): MutationRef<CreateExperienceMutationData, CreateExperienceMutationVariables>;
}
export const createExperienceMutationRef: CreateExperienceMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createExperienceMutation(dc: DataConnect, vars: CreateExperienceMutationVariables): MutationPromise<CreateExperienceMutationData, CreateExperienceMutationVariables>;

interface CreateExperienceMutationRef {
  ...
  (dc: DataConnect, vars: CreateExperienceMutationVariables): MutationRef<CreateExperienceMutationData, CreateExperienceMutationVariables>;
}
export const createExperienceMutationRef: CreateExperienceMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createExperienceMutationRef:
```typescript
const name = createExperienceMutationRef.operationName;
console.log(name);
```

### Variables
The `CreateExperienceMutation` mutation requires an argument of type `CreateExperienceMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateExperienceMutationVariables {
  companyName: string;
  role: string;
  startDate?: DateString | null;
  endDate?: DateString | null;
  description?: string | null;
}
```
### Return Type
Recall that executing the `CreateExperienceMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateExperienceMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateExperienceMutationData {
  experience_insert: Experience_Key;
}
```
### Using `CreateExperienceMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createExperienceMutation, CreateExperienceMutationVariables } from '@dataconnect/generated';

// The `CreateExperienceMutation` mutation requires an argument of type `CreateExperienceMutationVariables`:
const createExperienceMutationVars: CreateExperienceMutationVariables = {
  companyName: ..., 
  role: ..., 
  startDate: ..., // optional
  endDate: ..., // optional
  description: ..., // optional
};

// Call the `createExperienceMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createExperienceMutation(createExperienceMutationVars);
// Variables can be defined inline as well.
const { data } = await createExperienceMutation({ companyName: ..., role: ..., startDate: ..., endDate: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createExperienceMutation(dataConnect, createExperienceMutationVars);

console.log(data.experience_insert);

// Or, you can use the `Promise` API.
createExperienceMutation(createExperienceMutationVars).then((response) => {
  const data = response.data;
  console.log(data.experience_insert);
});
```

### Using `CreateExperienceMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createExperienceMutationRef, CreateExperienceMutationVariables } from '@dataconnect/generated';

// The `CreateExperienceMutation` mutation requires an argument of type `CreateExperienceMutationVariables`:
const createExperienceMutationVars: CreateExperienceMutationVariables = {
  companyName: ..., 
  role: ..., 
  startDate: ..., // optional
  endDate: ..., // optional
  description: ..., // optional
};

// Call the `createExperienceMutationRef()` function to get a reference to the mutation.
const ref = createExperienceMutationRef(createExperienceMutationVars);
// Variables can be defined inline as well.
const ref = createExperienceMutationRef({ companyName: ..., role: ..., startDate: ..., endDate: ..., description: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createExperienceMutationRef(dataConnect, createExperienceMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.experience_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.experience_insert);
});
```

## UpdateExperienceMutation
You can execute the `UpdateExperienceMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateExperienceMutation(vars: UpdateExperienceMutationVariables): MutationPromise<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;

interface UpdateExperienceMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExperienceMutationVariables): MutationRef<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;
}
export const updateExperienceMutationRef: UpdateExperienceMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateExperienceMutation(dc: DataConnect, vars: UpdateExperienceMutationVariables): MutationPromise<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;

interface UpdateExperienceMutationRef {
  ...
  (dc: DataConnect, vars: UpdateExperienceMutationVariables): MutationRef<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;
}
export const updateExperienceMutationRef: UpdateExperienceMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateExperienceMutationRef:
```typescript
const name = updateExperienceMutationRef.operationName;
console.log(name);
```

### Variables
The `UpdateExperienceMutation` mutation requires an argument of type `UpdateExperienceMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateExperienceMutationVariables {
  id: UUIDString;
  role?: string | null;
  endDate?: DateString | null;
}
```
### Return Type
Recall that executing the `UpdateExperienceMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateExperienceMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateExperienceMutationData {
  experience_update?: Experience_Key | null;
}
```
### Using `UpdateExperienceMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateExperienceMutation, UpdateExperienceMutationVariables } from '@dataconnect/generated';

// The `UpdateExperienceMutation` mutation requires an argument of type `UpdateExperienceMutationVariables`:
const updateExperienceMutationVars: UpdateExperienceMutationVariables = {
  id: ..., 
  role: ..., // optional
  endDate: ..., // optional
};

// Call the `updateExperienceMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateExperienceMutation(updateExperienceMutationVars);
// Variables can be defined inline as well.
const { data } = await updateExperienceMutation({ id: ..., role: ..., endDate: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateExperienceMutation(dataConnect, updateExperienceMutationVars);

console.log(data.experience_update);

// Or, you can use the `Promise` API.
updateExperienceMutation(updateExperienceMutationVars).then((response) => {
  const data = response.data;
  console.log(data.experience_update);
});
```

### Using `UpdateExperienceMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateExperienceMutationRef, UpdateExperienceMutationVariables } from '@dataconnect/generated';

// The `UpdateExperienceMutation` mutation requires an argument of type `UpdateExperienceMutationVariables`:
const updateExperienceMutationVars: UpdateExperienceMutationVariables = {
  id: ..., 
  role: ..., // optional
  endDate: ..., // optional
};

// Call the `updateExperienceMutationRef()` function to get a reference to the mutation.
const ref = updateExperienceMutationRef(updateExperienceMutationVars);
// Variables can be defined inline as well.
const ref = updateExperienceMutationRef({ id: ..., role: ..., endDate: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateExperienceMutationRef(dataConnect, updateExperienceMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.experience_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.experience_update);
});
```

## DeleteExperienceMutation
You can execute the `DeleteExperienceMutation` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteExperienceMutation(vars: DeleteExperienceMutationVariables): MutationPromise<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;

interface DeleteExperienceMutationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExperienceMutationVariables): MutationRef<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;
}
export const deleteExperienceMutationRef: DeleteExperienceMutationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteExperienceMutation(dc: DataConnect, vars: DeleteExperienceMutationVariables): MutationPromise<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;

interface DeleteExperienceMutationRef {
  ...
  (dc: DataConnect, vars: DeleteExperienceMutationVariables): MutationRef<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;
}
export const deleteExperienceMutationRef: DeleteExperienceMutationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteExperienceMutationRef:
```typescript
const name = deleteExperienceMutationRef.operationName;
console.log(name);
```

### Variables
The `DeleteExperienceMutation` mutation requires an argument of type `DeleteExperienceMutationVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteExperienceMutationVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteExperienceMutation` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteExperienceMutationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteExperienceMutationData {
  experience_delete?: Experience_Key | null;
}
```
### Using `DeleteExperienceMutation`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteExperienceMutation, DeleteExperienceMutationVariables } from '@dataconnect/generated';

// The `DeleteExperienceMutation` mutation requires an argument of type `DeleteExperienceMutationVariables`:
const deleteExperienceMutationVars: DeleteExperienceMutationVariables = {
  id: ..., 
};

// Call the `deleteExperienceMutation()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteExperienceMutation(deleteExperienceMutationVars);
// Variables can be defined inline as well.
const { data } = await deleteExperienceMutation({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteExperienceMutation(dataConnect, deleteExperienceMutationVars);

console.log(data.experience_delete);

// Or, you can use the `Promise` API.
deleteExperienceMutation(deleteExperienceMutationVars).then((response) => {
  const data = response.data;
  console.log(data.experience_delete);
});
```

### Using `DeleteExperienceMutation`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteExperienceMutationRef, DeleteExperienceMutationVariables } from '@dataconnect/generated';

// The `DeleteExperienceMutation` mutation requires an argument of type `DeleteExperienceMutationVariables`:
const deleteExperienceMutationVars: DeleteExperienceMutationVariables = {
  id: ..., 
};

// Call the `deleteExperienceMutationRef()` function to get a reference to the mutation.
const ref = deleteExperienceMutationRef(deleteExperienceMutationVars);
// Variables can be defined inline as well.
const ref = deleteExperienceMutationRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteExperienceMutationRef(dataConnect, deleteExperienceMutationVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.experience_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.experience_delete);
});
```

