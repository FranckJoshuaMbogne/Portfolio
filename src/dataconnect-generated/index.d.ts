import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateExperienceMutationData {
  experience_insert: Experience_Key;
}

export interface CreateExperienceMutationVariables {
  companyName: string;
  role: string;
  startDate?: DateString | null;
  endDate?: DateString | null;
  description?: string | null;
}

export interface CreateProjectMutationData {
  project_insert: Project_Key;
}

export interface CreateProjectMutationVariables {
  title: string;
  description: string;
  projectUrl?: string | null;
  repoUrl?: string | null;
  imageUrl?: string | null;
}

export interface CreateSkillMutationData {
  skill_insert: Skill_Key;
}

export interface CreateSkillMutationVariables {
  name: string;
  category: string;
  proficiencyLevel?: string | null;
}

export interface CreateUserMutationData {
  user_insert: User_Key;
}

export interface CreateUserMutationVariables {
  displayName: string;
  email: string;
  username: string;
  bio?: string | null;
  profileImageUrl?: string | null;
  websiteUrl?: string | null;
}

export interface CreateUserSkillMutationData {
  userSkill_insert: UserSkill_Key;
}

export interface CreateUserSkillMutationVariables {
  skillId: UUIDString;
}

export interface DeleteExperienceMutationData {
  experience_delete?: Experience_Key | null;
}

export interface DeleteExperienceMutationVariables {
  id: UUIDString;
}

export interface DeleteProjectMutationData {
  project_delete?: Project_Key | null;
}

export interface DeleteProjectMutationVariables {
  id: UUIDString;
}

export interface DeleteSkillMutationData {
  skill_delete?: Skill_Key | null;
}

export interface DeleteSkillMutationVariables {
  id: UUIDString;
}

export interface DeleteUserMutationData {
  user_delete?: User_Key | null;
}

export interface DeleteUserSkillMutationData {
  userSkill_delete?: UserSkill_Key | null;
}

export interface DeleteUserSkillMutationVariables {
  skillId: UUIDString;
}

export interface Experience_Key {
  id: UUIDString;
  __typename?: 'Experience_Key';
}

export interface GetExperienceQueryData {
  experience?: {
    companyName: string;
    role: string;
    startDate?: DateString | null;
    endDate?: DateString | null;
    description?: string | null;
  };
}

export interface GetExperienceQueryVariables {
  id: UUIDString;
}

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

export interface GetProjectQueryVariables {
  id: UUIDString;
}

export interface GetSkillQueryData {
  skill?: {
    name: string;
    category: string;
    proficiencyLevel?: string | null;
  };
}

export interface GetSkillQueryVariables {
  id: UUIDString;
}

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

export interface ListExperiencesQueryData {
  experiences: ({
    companyName: string;
    role: string;
  })[];
}

export interface ListMySkillsQueryData {
  userSkills: ({
    skill: {
      name: string;
      category: string;
    };
  })[];
}

export interface ListProjectsQueryData {
  projects: ({
    title: string;
    description: string;
  })[];
}

export interface ListSkillsQueryData {
  skills: ({
    name: string;
    category: string;
  })[];
}

export interface ListUsersQueryData {
  users: ({
    username: string;
    displayName: string;
  })[];
}

export interface Project_Key {
  id: UUIDString;
  __typename?: 'Project_Key';
}

export interface Skill_Key {
  id: UUIDString;
  __typename?: 'Skill_Key';
}

export interface UpdateExperienceMutationData {
  experience_update?: Experience_Key | null;
}

export interface UpdateExperienceMutationVariables {
  id: UUIDString;
  role?: string | null;
  endDate?: DateString | null;
}

export interface UpdateProjectMutationData {
  project_update?: Project_Key | null;
}

export interface UpdateProjectMutationVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
}

export interface UpdateSkillMutationData {
  skill_update?: Skill_Key | null;
}

export interface UpdateSkillMutationVariables {
  id: UUIDString;
  proficiencyLevel?: string | null;
}

export interface UpdateUserMutationData {
  user_update?: User_Key | null;
}

export interface UpdateUserMutationVariables {
  displayName?: string | null;
  bio?: string | null;
  profileImageUrl?: string | null;
  websiteUrl?: string | null;
}

export interface UserSkill_Key {
  userId: UUIDString;
  skillId: UUIDString;
  __typename?: 'UserSkill_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserMutationVariables): MutationRef<CreateUserMutationData, CreateUserMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserMutationVariables): MutationRef<CreateUserMutationData, CreateUserMutationVariables>;
  operationName: string;
}
export const createUserMutationRef: CreateUserMutationRef;

export function createUserMutation(vars: CreateUserMutationVariables): MutationPromise<CreateUserMutationData, CreateUserMutationVariables>;
export function createUserMutation(dc: DataConnect, vars: CreateUserMutationVariables): MutationPromise<CreateUserMutationData, CreateUserMutationVariables>;

interface UpdateUserMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars?: UpdateUserMutationVariables): MutationRef<UpdateUserMutationData, UpdateUserMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars?: UpdateUserMutationVariables): MutationRef<UpdateUserMutationData, UpdateUserMutationVariables>;
  operationName: string;
}
export const updateUserMutationRef: UpdateUserMutationRef;

export function updateUserMutation(vars?: UpdateUserMutationVariables): MutationPromise<UpdateUserMutationData, UpdateUserMutationVariables>;
export function updateUserMutation(dc: DataConnect, vars?: UpdateUserMutationVariables): MutationPromise<UpdateUserMutationData, UpdateUserMutationVariables>;

interface DeleteUserMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<DeleteUserMutationData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<DeleteUserMutationData, undefined>;
  operationName: string;
}
export const deleteUserMutationRef: DeleteUserMutationRef;

export function deleteUserMutation(): MutationPromise<DeleteUserMutationData, undefined>;
export function deleteUserMutation(dc: DataConnect): MutationPromise<DeleteUserMutationData, undefined>;

interface GetUserQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetUserQueryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetUserQueryData, undefined>;
  operationName: string;
}
export const getUserQueryRef: GetUserQueryRef;

export function getUserQuery(options?: ExecuteQueryOptions): QueryPromise<GetUserQueryData, undefined>;
export function getUserQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<GetUserQueryData, undefined>;

interface ListUsersQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListUsersQueryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListUsersQueryData, undefined>;
  operationName: string;
}
export const listUsersQueryRef: ListUsersQueryRef;

export function listUsersQuery(options?: ExecuteQueryOptions): QueryPromise<ListUsersQueryData, undefined>;
export function listUsersQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListUsersQueryData, undefined>;

interface CreateProjectMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateProjectMutationVariables): MutationRef<CreateProjectMutationData, CreateProjectMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateProjectMutationVariables): MutationRef<CreateProjectMutationData, CreateProjectMutationVariables>;
  operationName: string;
}
export const createProjectMutationRef: CreateProjectMutationRef;

export function createProjectMutation(vars: CreateProjectMutationVariables): MutationPromise<CreateProjectMutationData, CreateProjectMutationVariables>;
export function createProjectMutation(dc: DataConnect, vars: CreateProjectMutationVariables): MutationPromise<CreateProjectMutationData, CreateProjectMutationVariables>;

interface UpdateProjectMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateProjectMutationVariables): MutationRef<UpdateProjectMutationData, UpdateProjectMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateProjectMutationVariables): MutationRef<UpdateProjectMutationData, UpdateProjectMutationVariables>;
  operationName: string;
}
export const updateProjectMutationRef: UpdateProjectMutationRef;

export function updateProjectMutation(vars: UpdateProjectMutationVariables): MutationPromise<UpdateProjectMutationData, UpdateProjectMutationVariables>;
export function updateProjectMutation(dc: DataConnect, vars: UpdateProjectMutationVariables): MutationPromise<UpdateProjectMutationData, UpdateProjectMutationVariables>;

interface DeleteProjectMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteProjectMutationVariables): MutationRef<DeleteProjectMutationData, DeleteProjectMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteProjectMutationVariables): MutationRef<DeleteProjectMutationData, DeleteProjectMutationVariables>;
  operationName: string;
}
export const deleteProjectMutationRef: DeleteProjectMutationRef;

export function deleteProjectMutation(vars: DeleteProjectMutationVariables): MutationPromise<DeleteProjectMutationData, DeleteProjectMutationVariables>;
export function deleteProjectMutation(dc: DataConnect, vars: DeleteProjectMutationVariables): MutationPromise<DeleteProjectMutationData, DeleteProjectMutationVariables>;

interface GetProjectQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetProjectQueryVariables): QueryRef<GetProjectQueryData, GetProjectQueryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetProjectQueryVariables): QueryRef<GetProjectQueryData, GetProjectQueryVariables>;
  operationName: string;
}
export const getProjectQueryRef: GetProjectQueryRef;

export function getProjectQuery(vars: GetProjectQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectQueryData, GetProjectQueryVariables>;
export function getProjectQuery(dc: DataConnect, vars: GetProjectQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetProjectQueryData, GetProjectQueryVariables>;

interface ListProjectsQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListProjectsQueryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListProjectsQueryData, undefined>;
  operationName: string;
}
export const listProjectsQueryRef: ListProjectsQueryRef;

export function listProjectsQuery(options?: ExecuteQueryOptions): QueryPromise<ListProjectsQueryData, undefined>;
export function listProjectsQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListProjectsQueryData, undefined>;

interface CreateSkillMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateSkillMutationVariables): MutationRef<CreateSkillMutationData, CreateSkillMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateSkillMutationVariables): MutationRef<CreateSkillMutationData, CreateSkillMutationVariables>;
  operationName: string;
}
export const createSkillMutationRef: CreateSkillMutationRef;

export function createSkillMutation(vars: CreateSkillMutationVariables): MutationPromise<CreateSkillMutationData, CreateSkillMutationVariables>;
export function createSkillMutation(dc: DataConnect, vars: CreateSkillMutationVariables): MutationPromise<CreateSkillMutationData, CreateSkillMutationVariables>;

interface UpdateSkillMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateSkillMutationVariables): MutationRef<UpdateSkillMutationData, UpdateSkillMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateSkillMutationVariables): MutationRef<UpdateSkillMutationData, UpdateSkillMutationVariables>;
  operationName: string;
}
export const updateSkillMutationRef: UpdateSkillMutationRef;

export function updateSkillMutation(vars: UpdateSkillMutationVariables): MutationPromise<UpdateSkillMutationData, UpdateSkillMutationVariables>;
export function updateSkillMutation(dc: DataConnect, vars: UpdateSkillMutationVariables): MutationPromise<UpdateSkillMutationData, UpdateSkillMutationVariables>;

interface DeleteSkillMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteSkillMutationVariables): MutationRef<DeleteSkillMutationData, DeleteSkillMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteSkillMutationVariables): MutationRef<DeleteSkillMutationData, DeleteSkillMutationVariables>;
  operationName: string;
}
export const deleteSkillMutationRef: DeleteSkillMutationRef;

export function deleteSkillMutation(vars: DeleteSkillMutationVariables): MutationPromise<DeleteSkillMutationData, DeleteSkillMutationVariables>;
export function deleteSkillMutation(dc: DataConnect, vars: DeleteSkillMutationVariables): MutationPromise<DeleteSkillMutationData, DeleteSkillMutationVariables>;

interface GetSkillQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetSkillQueryVariables): QueryRef<GetSkillQueryData, GetSkillQueryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetSkillQueryVariables): QueryRef<GetSkillQueryData, GetSkillQueryVariables>;
  operationName: string;
}
export const getSkillQueryRef: GetSkillQueryRef;

export function getSkillQuery(vars: GetSkillQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillQueryData, GetSkillQueryVariables>;
export function getSkillQuery(dc: DataConnect, vars: GetSkillQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetSkillQueryData, GetSkillQueryVariables>;

interface ListSkillsQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListSkillsQueryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListSkillsQueryData, undefined>;
  operationName: string;
}
export const listSkillsQueryRef: ListSkillsQueryRef;

export function listSkillsQuery(options?: ExecuteQueryOptions): QueryPromise<ListSkillsQueryData, undefined>;
export function listSkillsQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListSkillsQueryData, undefined>;

interface CreateUserSkillMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateUserSkillMutationVariables): MutationRef<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateUserSkillMutationVariables): MutationRef<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;
  operationName: string;
}
export const createUserSkillMutationRef: CreateUserSkillMutationRef;

export function createUserSkillMutation(vars: CreateUserSkillMutationVariables): MutationPromise<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;
export function createUserSkillMutation(dc: DataConnect, vars: CreateUserSkillMutationVariables): MutationPromise<CreateUserSkillMutationData, CreateUserSkillMutationVariables>;

interface DeleteUserSkillMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteUserSkillMutationVariables): MutationRef<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteUserSkillMutationVariables): MutationRef<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;
  operationName: string;
}
export const deleteUserSkillMutationRef: DeleteUserSkillMutationRef;

export function deleteUserSkillMutation(vars: DeleteUserSkillMutationVariables): MutationPromise<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;
export function deleteUserSkillMutation(dc: DataConnect, vars: DeleteUserSkillMutationVariables): MutationPromise<DeleteUserSkillMutationData, DeleteUserSkillMutationVariables>;

interface ListMySkillsQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMySkillsQueryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMySkillsQueryData, undefined>;
  operationName: string;
}
export const listMySkillsQueryRef: ListMySkillsQueryRef;

export function listMySkillsQuery(options?: ExecuteQueryOptions): QueryPromise<ListMySkillsQueryData, undefined>;
export function listMySkillsQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMySkillsQueryData, undefined>;

interface CreateExperienceMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateExperienceMutationVariables): MutationRef<CreateExperienceMutationData, CreateExperienceMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateExperienceMutationVariables): MutationRef<CreateExperienceMutationData, CreateExperienceMutationVariables>;
  operationName: string;
}
export const createExperienceMutationRef: CreateExperienceMutationRef;

export function createExperienceMutation(vars: CreateExperienceMutationVariables): MutationPromise<CreateExperienceMutationData, CreateExperienceMutationVariables>;
export function createExperienceMutation(dc: DataConnect, vars: CreateExperienceMutationVariables): MutationPromise<CreateExperienceMutationData, CreateExperienceMutationVariables>;

interface UpdateExperienceMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateExperienceMutationVariables): MutationRef<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateExperienceMutationVariables): MutationRef<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;
  operationName: string;
}
export const updateExperienceMutationRef: UpdateExperienceMutationRef;

export function updateExperienceMutation(vars: UpdateExperienceMutationVariables): MutationPromise<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;
export function updateExperienceMutation(dc: DataConnect, vars: UpdateExperienceMutationVariables): MutationPromise<UpdateExperienceMutationData, UpdateExperienceMutationVariables>;

interface DeleteExperienceMutationRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteExperienceMutationVariables): MutationRef<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteExperienceMutationVariables): MutationRef<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;
  operationName: string;
}
export const deleteExperienceMutationRef: DeleteExperienceMutationRef;

export function deleteExperienceMutation(vars: DeleteExperienceMutationVariables): MutationPromise<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;
export function deleteExperienceMutation(dc: DataConnect, vars: DeleteExperienceMutationVariables): MutationPromise<DeleteExperienceMutationData, DeleteExperienceMutationVariables>;

interface GetExperienceQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetExperienceQueryVariables): QueryRef<GetExperienceQueryData, GetExperienceQueryVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetExperienceQueryVariables): QueryRef<GetExperienceQueryData, GetExperienceQueryVariables>;
  operationName: string;
}
export const getExperienceQueryRef: GetExperienceQueryRef;

export function getExperienceQuery(vars: GetExperienceQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetExperienceQueryData, GetExperienceQueryVariables>;
export function getExperienceQuery(dc: DataConnect, vars: GetExperienceQueryVariables, options?: ExecuteQueryOptions): QueryPromise<GetExperienceQueryData, GetExperienceQueryVariables>;

interface ListExperiencesQueryRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListExperiencesQueryData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListExperiencesQueryData, undefined>;
  operationName: string;
}
export const listExperiencesQueryRef: ListExperiencesQueryRef;

export function listExperiencesQuery(options?: ExecuteQueryOptions): QueryPromise<ListExperiencesQueryData, undefined>;
export function listExperiencesQuery(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListExperiencesQueryData, undefined>;

