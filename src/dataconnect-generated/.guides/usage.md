# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.




### React
For each operation, there is a wrapper hook that can be used to call the operation.

Here are all of the hooks that get generated:
```ts
import { useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation, useGetUserQuery, useListUsersQuery, useCreateProjectMutation, useUpdateProjectMutation, useDeleteProjectMutation, useGetProjectQuery, useListProjectsQuery } from '@dataconnect/generated/react';
// The types of these hooks are available in react/index.d.ts

const { data, isPending, isSuccess, isError, error } = useCreateUserMutation(createUserMutationVars);

const { data, isPending, isSuccess, isError, error } = useUpdateUserMutation(updateUserMutationVars);

const { data, isPending, isSuccess, isError, error } = useDeleteUserMutation();

const { data, isPending, isSuccess, isError, error } = useGetUserQuery();

const { data, isPending, isSuccess, isError, error } = useListUsersQuery();

const { data, isPending, isSuccess, isError, error } = useCreateProjectMutation(createProjectMutationVars);

const { data, isPending, isSuccess, isError, error } = useUpdateProjectMutation(updateProjectMutationVars);

const { data, isPending, isSuccess, isError, error } = useDeleteProjectMutation(deleteProjectMutationVars);

const { data, isPending, isSuccess, isError, error } = useGetProjectQuery(getProjectQueryVars);

const { data, isPending, isSuccess, isError, error } = useListProjectsQuery();

```

Here's an example from a different generated SDK:

```ts
import { useListAllMovies } from '@dataconnect/generated/react';

function MyComponent() {
  const { isLoading, data, error } = useListAllMovies();
  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div> An Error Occurred: {error} </div>
  }
}

// App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MyComponent from './my-component';

function App() {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>
    <MyComponent />
  </QueryClientProvider>
}
```



## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUserMutation, updateUserMutation, deleteUserMutation, getUserQuery, listUsersQuery, createProjectMutation, updateProjectMutation, deleteProjectMutation, getProjectQuery, listProjectsQuery } from '@dataconnect/generated';


// Operation CreateUserMutation:  For variables, look at type CreateUserMutationVars in ../index.d.ts
const { data } = await CreateUserMutation(dataConnect, createUserMutationVars);

// Operation UpdateUserMutation:  For variables, look at type UpdateUserMutationVars in ../index.d.ts
const { data } = await UpdateUserMutation(dataConnect, updateUserMutationVars);

// Operation DeleteUserMutation: 
const { data } = await DeleteUserMutation(dataConnect);

// Operation GetUserQuery: 
const { data } = await GetUserQuery(dataConnect);

// Operation ListUsersQuery: 
const { data } = await ListUsersQuery(dataConnect);

// Operation CreateProjectMutation:  For variables, look at type CreateProjectMutationVars in ../index.d.ts
const { data } = await CreateProjectMutation(dataConnect, createProjectMutationVars);

// Operation UpdateProjectMutation:  For variables, look at type UpdateProjectMutationVars in ../index.d.ts
const { data } = await UpdateProjectMutation(dataConnect, updateProjectMutationVars);

// Operation DeleteProjectMutation:  For variables, look at type DeleteProjectMutationVars in ../index.d.ts
const { data } = await DeleteProjectMutation(dataConnect, deleteProjectMutationVars);

// Operation GetProjectQuery:  For variables, look at type GetProjectQueryVars in ../index.d.ts
const { data } = await GetProjectQuery(dataConnect, getProjectQueryVars);

// Operation ListProjectsQuery: 
const { data } = await ListProjectsQuery(dataConnect);


```