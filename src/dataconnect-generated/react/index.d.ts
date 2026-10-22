import { CreateUserMutationData, CreateUserMutationVariables, UpdateUserMutationData, UpdateUserMutationVariables, DeleteUserMutationData, GetUserQueryData, ListUsersQueryData, CreateProjectMutationData, CreateProjectMutationVariables, UpdateProjectMutationData, UpdateProjectMutationVariables, DeleteProjectMutationData, DeleteProjectMutationVariables, GetProjectQueryData, GetProjectQueryVariables, ListProjectsQueryData, CreateSkillMutationData, CreateSkillMutationVariables, UpdateSkillMutationData, UpdateSkillMutationVariables, DeleteSkillMutationData, DeleteSkillMutationVariables, GetSkillQueryData, GetSkillQueryVariables, ListSkillsQueryData, CreateUserSkillMutationData, CreateUserSkillMutationVariables, DeleteUserSkillMutationData, DeleteUserSkillMutationVariables, ListMySkillsQueryData, CreateExperienceMutationData, CreateExperienceMutationVariables, UpdateExperienceMutationData, UpdateExperienceMutationVariables, DeleteExperienceMutationData, DeleteExperienceMutationVariables, GetExperienceQueryData, GetExperienceQueryVariables, ListExperiencesQueryData } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUserMutation(options?: useDataConnectMutationOptions<CreateUserMutationData, FirebaseError, CreateUserMutationVariables>): UseDataConnectMutationResult<CreateUserMutationData, CreateUserMutationVariables>;
export function useCreateUserMutation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserMutationData, FirebaseError, CreateUserMutationVariables>): UseDataConnectMutationResult<CreateUserMutationData, CreateUserMutationVariables>;

export function useUpdateUserMutation(options?: useDataConnectMutationOptions<UpdateUserMutationData, FirebaseError, UpdateUserMutationVariables | void>): UseDataConnectMutationResult<UpdateUserMutationData, UpdateUserMutationVariables>;
export function useUpdateUserMutation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateUserMutationData, FirebaseError, UpdateUserMutationVariables | void>): UseDataConnectMutationResult<UpdateUserMutationData, UpdateUserMutationVariables>;

export function useDeleteUserMutation(options?: useDataConnectMutationOptions<DeleteUserMutationData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserMutationData, undefined>;
export function useDeleteUserMutation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserMutationData, FirebaseError, void>): UseDataConnectMutationResult<DeleteUserMutationData, undefined>;

export function useGetUserQuery(options?: useDataConnectQueryOptions<GetUserQueryData>): UseDataConnectQueryResult<GetUserQueryData, undefined>;
export function useGetUserQuery(dc: DataConnect, options?: useDataConnectQueryOptions<GetUserQueryData>): UseDataConnectQueryResult<GetUserQueryData, undefined>;

export function useListUsersQuery(options?: useDataConnectQueryOptions<ListUsersQueryData>): UseDataConnectQueryResult<ListUsersQueryData, undefined>;
export function useListUsersQuery(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersQueryData>): UseDataConnectQueryResult<ListUsersQueryData, undefined>;

export function useCreateProjectMutation(options?: useDataConnectMutationOptions<CreateProjectMutationData, FirebaseError, CreateProjectMutationVariables>): UseDataConnectMutationResult<CreateProjectMutationData, CreateProjectMutationVariables>;
export function useCreateProjectMutation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateProjectMutationData, FirebaseError, CreateProjectMutationVariables>): UseDataConnectMutationResult<CreateProjectMutationData, CreateProjectMutationVariables>;

export function useUpdateProjectMutation(options?: useDataConnectMutationOptions<UpdateProjectMutationData, FirebaseError, UpdateProjectMutationVariables>): UseDataConnectMutationResult<UpdateProjectMutationData, UpdateProjectMutationVariables>;
export function useUpdateProjectMutation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateProjectMutationData, FirebaseError, UpdateProjectMutationVariables>): UseDataConnectMutationResult<UpdateProjectMutationData, UpdateProjectMutationVariables>;

export function useDeleteProjectMutation(options?: useDataConnectMutationOptions<DeleteProjectMutationData, FirebaseError, DeleteProjectMutationVariables>): UseDataConnectMutationResult<DeleteProjectMutationData, DeleteProjectMutationVariables>;
export function useDeleteProjectMutation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteProjectMutationData, FirebaseError, DeleteProjectMutationVariables>): UseDataConnectMutationResult<DeleteProjectMutationData, DeleteProjectMutationVariables>;

export function useGetProjectQuery(vars: GetProjectQueryVariables, options?: useDataConnectQueryOptions<GetProjectQueryData>): UseDataConnectQueryResult<GetProjectQueryData, GetProjectQueryVariables>;
export function useGetProjectQuery(dc: DataConnect, vars: GetProjectQueryVariables, options?: useDataConnectQueryOptions<GetProjectQueryData>): UseDataConnectQueryResult<GetProjectQueryData, GetProjectQueryVariables>;

export function useListProjectsQuery(options?: useDataConnectQueryOptions<ListProjectsQueryData>): UseDataConnectQueryResult<ListProjectsQueryData, undefined>;
export function useListProjectsQuery(dc: DataConnect, options?: useDataConnectQueryOptions<ListProjectsQueryData>): UseDataConnectQueryResult<ListProjectsQueryData, undefined>;

export function useCreateSkillMutation(options?: useDataConnectMutationOptions<CreateSkillMutationData, FirebaseError, CreateSkillMutationVariables>): UseDataConnectMutationResult<CreateSkillMutationData, CreateSkillMutationVariables>;
export function useCreateSkillMutation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateSkillMutationData, FirebaseError, CreateSkillMutationVariables>): UseDataConnectMutationResult<CreateSkillMutationData, CreateSkillMutationVariables>;

export function useUpdateSkillMutation(options?: useDataConnectMutationOptions<UpdateSkillMutationData, FirebaseError, UpdateSkillMutationVariables>): UseDataConnectMutationResult<UpdateSkillMutationData, UpdateSkillMutationVariables>;
export function useUpdateSkillMutation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateSkillMutationData, FirebaseError, UpdateSkillMutationVariables>): UseDataConnectMutationResult<UpdateSkillMutationData, UpdateSkillMutationVariables>;

export function useDeleteSkillMutation(options?: useDataConnectMutationOptions<DeleteSkillMutationData, FirebaseError, DeleteSkillMutationVariables>): UseDataConnectMutationResult<DeleteSkillMutationData, DeleteSkillMutationVariables>;
export function useDeleteSkillMutation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteSkillMutationData, FirebaseError, DeleteSkillMutationVariables>): UseDataConnectMutationResult<DeleteSkillMutationData, DeleteSkillMutationVariables>;

export function useGetSkillQuery(vars: GetSkillQueryVariables, options?: useDataConnectQueryOptions<GetSkillQueryData>): UseDataConnectQueryResult<GetSkillQueryData, GetSkillQueryVariables>;
export function useGetSkillQuery(dc: DataConnect, vars: GetSkillQueryVariables, options?: useDataConnectQueryOptions<GetSkillQueryData>): UseDataConnectQueryResult<GetSkillQueryData, GetSkillQueryVariables>;

export function useListSkillsQuery(options?: useDataConnectQueryOptions<ListSkillsQueryData>): UseDataConnectQueryResult<ListSkillsQueryData, undefined>;
export function useListSkillsQuery(dc: DataConnect, options?: useDataConnectQueryOptions<ListSkillsQueryData>): UseDataConnectQueryResult<ListSkillsQueryData, undefined>;

export function useCreateUserSkillMutation(options?: useDataConnectMutationOptions<CreateUserSkillMutationData, FirebaseError, CreateUserSkillMutationVariables>): UseDataConnectMutationResult<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;
export function useCreateUserSkillMutation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserSkillMutationData, FirebaseError, CreateUserSkillMutationVariables>): UseDataConnectMutationResult<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;

export function useDeleteUserSkillMutation(options?: useDataConnectMutationOptions<DeleteUserSkillMutationData, FirebaseError, DeleteUserSkillMutationVariables>): UseDataConnectMutationResult<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;
export function useDeleteUserSkillMutation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteUserSkillMutationData, FirebaseError, DeleteUserSkillMutationVariables>): UseDataConnectMutationResult<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;

export function useListMySkillsQuery(options?: useDataConnectQueryOptions<ListMySkillsQueryData>): UseDataConnectQueryResult<ListMySkillsQueryData, undefined>;
export function useListMySkillsQuery(dc: DataConnect, options?: useDataConnectQueryOptions<ListMySkillsQueryData>): UseDataConnectQueryResult<ListMySkillsQueryData, undefined>;

export function useCreateExperienceMutation(options?: useDataConnectMutationOptions<CreateExperienceMutationData, FirebaseError, CreateExperienceMutationVariables>): UseDataConnectMutationResult<CreateExperienceMutationData, CreateExperienceMutationVariables>;
export function useCreateExperienceMutation(dc: DataConnect, options?: useDataConnectMutationOptions<CreateExperienceMutationData, FirebaseError, CreateExperienceMutationVariables>): UseDataConnectMutationResult<CreateExperienceMutationData, CreateExperienceMutationVariables>;

export function useUpdateExperienceMutation(options?: useDataConnectMutationOptions<UpdateExperienceMutationData, FirebaseError, UpdateExperienceMutationVariables>): UseDataConnectMutationResult<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;
export function useUpdateExperienceMutation(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateExperienceMutationData, FirebaseError, UpdateExperienceMutationVariables>): UseDataConnectMutationResult<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;

export function useDeleteExperienceMutation(options?: useDataConnectMutationOptions<DeleteExperienceMutationData, FirebaseError, DeleteExperienceMutationVariables>): UseDataConnectMutationResult<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;
export function useDeleteExperienceMutation(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteExperienceMutationData, FirebaseError, DeleteExperienceMutationVariables>): UseDataConnectMutationResult<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;

export function useGetExperienceQuery(vars: GetExperienceQueryVariables, options?: useDataConnectQueryOptions<GetExperienceQueryData>): UseDataConnectQueryResult<GetExperienceQueryData, GetExperienceQueryVariables>;
export function useGetExperienceQuery(dc: DataConnect, vars: GetExperienceQueryVariables, options?: useDataConnectQueryOptions<GetExperienceQueryData>): UseDataConnectQueryResult<GetExperienceQueryData, GetExperienceQueryVariables>;

export function useListExperiencesQuery(options?: useDataConnectQueryOptions<ListExperiencesQueryData>): UseDataConnectQueryResult<ListExperiencesQueryData, undefined>;
export function useListExperiencesQuery(dc: DataConnect, options?: useDataConnectQueryOptions<ListExperiencesQueryData>): UseDataConnectQueryResult<ListExperiencesQueryData, undefined>;
