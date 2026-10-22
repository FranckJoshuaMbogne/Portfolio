const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'franck-portfolio',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const createUserMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUserMutation', inputVars);
}
createUserMutationRef.operationName = 'CreateUserMutation';
exports.createUserMutationRef = createUserMutationRef;

exports.createUserMutation = function createUserMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createUserMutationRef(dcInstance, inputVars));
}
;

const updateUserMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserMutation', inputVars);
}
updateUserMutationRef.operationName = 'UpdateUserMutation';
exports.updateUserMutationRef = updateUserMutationRef;

exports.updateUserMutation = function updateUserMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars);
  return executeMutation(updateUserMutationRef(dcInstance, inputVars));
}
;

const deleteUserMutationRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUserMutation');
}
deleteUserMutationRef.operationName = 'DeleteUserMutation';
exports.deleteUserMutationRef = deleteUserMutationRef;

exports.deleteUserMutation = function deleteUserMutation(dc) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dc, undefined);
  return executeMutation(deleteUserMutationRef(dcInstance, inputVars));
}
;

const getUserQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserQuery');
}
getUserQueryRef.operationName = 'GetUserQuery';
exports.getUserQueryRef = getUserQueryRef;

exports.getUserQuery = function getUserQuery(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(getUserQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listUsersQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListUsersQuery');
}
listUsersQueryRef.operationName = 'ListUsersQuery';
exports.listUsersQueryRef = listUsersQueryRef;

exports.listUsersQuery = function listUsersQuery(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listUsersQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createProjectMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateProjectMutation', inputVars);
}
createProjectMutationRef.operationName = 'CreateProjectMutation';
exports.createProjectMutationRef = createProjectMutationRef;

exports.createProjectMutation = function createProjectMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createProjectMutationRef(dcInstance, inputVars));
}
;

const updateProjectMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateProjectMutation', inputVars);
}
updateProjectMutationRef.operationName = 'UpdateProjectMutation';
exports.updateProjectMutationRef = updateProjectMutationRef;

exports.updateProjectMutation = function updateProjectMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateProjectMutationRef(dcInstance, inputVars));
}
;

const deleteProjectMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteProjectMutation', inputVars);
}
deleteProjectMutationRef.operationName = 'DeleteProjectMutation';
exports.deleteProjectMutationRef = deleteProjectMutationRef;

exports.deleteProjectMutation = function deleteProjectMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteProjectMutationRef(dcInstance, inputVars));
}
;

const getProjectQueryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetProjectQuery', inputVars);
}
getProjectQueryRef.operationName = 'GetProjectQuery';
exports.getProjectQueryRef = getProjectQueryRef;

exports.getProjectQuery = function getProjectQuery(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getProjectQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listProjectsQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListProjectsQuery');
}
listProjectsQueryRef.operationName = 'ListProjectsQuery';
exports.listProjectsQueryRef = listProjectsQueryRef;

exports.listProjectsQuery = function listProjectsQuery(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listProjectsQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createSkillMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateSkillMutation', inputVars);
}
createSkillMutationRef.operationName = 'CreateSkillMutation';
exports.createSkillMutationRef = createSkillMutationRef;

exports.createSkillMutation = function createSkillMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createSkillMutationRef(dcInstance, inputVars));
}
;

const updateSkillMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateSkillMutation', inputVars);
}
updateSkillMutationRef.operationName = 'UpdateSkillMutation';
exports.updateSkillMutationRef = updateSkillMutationRef;

exports.updateSkillMutation = function updateSkillMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateSkillMutationRef(dcInstance, inputVars));
}
;

const deleteSkillMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteSkillMutation', inputVars);
}
deleteSkillMutationRef.operationName = 'DeleteSkillMutation';
exports.deleteSkillMutationRef = deleteSkillMutationRef;

exports.deleteSkillMutation = function deleteSkillMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteSkillMutationRef(dcInstance, inputVars));
}
;

const getSkillQueryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetSkillQuery', inputVars);
}
getSkillQueryRef.operationName = 'GetSkillQuery';
exports.getSkillQueryRef = getSkillQueryRef;

exports.getSkillQuery = function getSkillQuery(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getSkillQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listSkillsQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListSkillsQuery');
}
listSkillsQueryRef.operationName = 'ListSkillsQuery';
exports.listSkillsQueryRef = listSkillsQueryRef;

exports.listSkillsQuery = function listSkillsQuery(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listSkillsQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createUserSkillMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUserSkillMutation', inputVars);
}
createUserSkillMutationRef.operationName = 'CreateUserSkillMutation';
exports.createUserSkillMutationRef = createUserSkillMutationRef;

exports.createUserSkillMutation = function createUserSkillMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createUserSkillMutationRef(dcInstance, inputVars));
}
;

const deleteUserSkillMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteUserSkillMutation', inputVars);
}
deleteUserSkillMutationRef.operationName = 'DeleteUserSkillMutation';
exports.deleteUserSkillMutationRef = deleteUserSkillMutationRef;

exports.deleteUserSkillMutation = function deleteUserSkillMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteUserSkillMutationRef(dcInstance, inputVars));
}
;

const listMySkillsQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMySkillsQuery');
}
listMySkillsQueryRef.operationName = 'ListMySkillsQuery';
exports.listMySkillsQueryRef = listMySkillsQueryRef;

exports.listMySkillsQuery = function listMySkillsQuery(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listMySkillsQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createExperienceMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateExperienceMutation', inputVars);
}
createExperienceMutationRef.operationName = 'CreateExperienceMutation';
exports.createExperienceMutationRef = createExperienceMutationRef;

exports.createExperienceMutation = function createExperienceMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createExperienceMutationRef(dcInstance, inputVars));
}
;

const updateExperienceMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateExperienceMutation', inputVars);
}
updateExperienceMutationRef.operationName = 'UpdateExperienceMutation';
exports.updateExperienceMutationRef = updateExperienceMutationRef;

exports.updateExperienceMutation = function updateExperienceMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateExperienceMutationRef(dcInstance, inputVars));
}
;

const deleteExperienceMutationRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteExperienceMutation', inputVars);
}
deleteExperienceMutationRef.operationName = 'DeleteExperienceMutation';
exports.deleteExperienceMutationRef = deleteExperienceMutationRef;

exports.deleteExperienceMutation = function deleteExperienceMutation(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteExperienceMutationRef(dcInstance, inputVars));
}
;

const getExperienceQueryRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetExperienceQuery', inputVars);
}
getExperienceQueryRef.operationName = 'GetExperienceQuery';
exports.getExperienceQueryRef = getExperienceQueryRef;

exports.getExperienceQuery = function getExperienceQuery(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getExperienceQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listExperiencesQueryRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListExperiencesQuery');
}
listExperiencesQueryRef.operationName = 'ListExperiencesQuery';
exports.listExperiencesQueryRef = listExperiencesQueryRef;

exports.listExperiencesQuery = function listExperiencesQuery(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listExperiencesQueryRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;
