import { makeBindingClass, Options } from 'graphql-binding'
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import schema from  './schema'

export interface Query {
    codeOfConduct: <T = CodeOfConduct | null>(args: { key: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    codesOfConduct: <T = CodeOfConduct[] | null>(args?: {}, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    license: <T = License | null>(args: { key: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    licenses: <T = License[]>(args?: {}, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    marketplaceCategories: <T = MarketplaceCategory[]>(args: { excludeEmpty?: Boolean }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    marketplaceCategory: <T = MarketplaceCategory | null>(args: { slug: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    marketplaceListing: <T = MarketplaceListing | null>(args: { slug: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    marketplaceListings: <T = MarketplaceListingConnection>(args: { first?: Int, after?: String, last?: Int, before?: String, categorySlug?: String, viewerCanAdmin?: Boolean, adminId?: ID_Output, organizationId?: ID_Output, allStates?: Boolean, slugs?: String[], primaryCategoryOnly?: Boolean, withFreeTrialsOnly?: Boolean }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    meta: <T = GitHubMetadata>(args?: {}, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    nodes: <T = Node[]>(args: { ids: ID_Output[] }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    organization: <T = Organization | null>(args: { login: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    rateLimit: <T = RateLimit | null>(args: { dryRun?: Boolean }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    relay: <T = Query>(args?: {}, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    repository: <T = Repository | null>(args: { owner: String, name: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    repositoryOwner: <T = RepositoryOwner | null>(args: { login: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    resource: <T = UniformResourceLocatable | null>(args: { url: URI }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    search: <T = SearchResultItemConnection>(args: { first?: Int, after?: String, last?: Int, before?: String, query: String, type: SearchType }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    topic: <T = Topic | null>(args: { name: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    user: <T = User | null>(args: { login: String }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    viewer: <T = User>(args?: {}, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> 
  }

export interface Mutation {
    acceptTopicSuggestion: <T = AcceptTopicSuggestionPayload | null>(args: { input: AcceptTopicSuggestionInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addComment: <T = AddCommentPayload | null>(args: { input: AddCommentInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addProjectCard: <T = AddProjectCardPayload | null>(args: { input: AddProjectCardInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addProjectColumn: <T = AddProjectColumnPayload | null>(args: { input: AddProjectColumnInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addPullRequestReview: <T = AddPullRequestReviewPayload | null>(args: { input: AddPullRequestReviewInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addPullRequestReviewComment: <T = AddPullRequestReviewCommentPayload | null>(args: { input: AddPullRequestReviewCommentInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addReaction: <T = AddReactionPayload | null>(args: { input: AddReactionInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    addStar: <T = AddStarPayload | null>(args: { input: AddStarInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    createProject: <T = CreateProjectPayload | null>(args: { input: CreateProjectInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    declineTopicSuggestion: <T = DeclineTopicSuggestionPayload | null>(args: { input: DeclineTopicSuggestionInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    deleteProject: <T = DeleteProjectPayload | null>(args: { input: DeleteProjectInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    deleteProjectCard: <T = DeleteProjectCardPayload | null>(args: { input: DeleteProjectCardInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    deleteProjectColumn: <T = DeleteProjectColumnPayload | null>(args: { input: DeleteProjectColumnInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    deletePullRequestReview: <T = DeletePullRequestReviewPayload | null>(args: { input: DeletePullRequestReviewInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    dismissPullRequestReview: <T = DismissPullRequestReviewPayload | null>(args: { input: DismissPullRequestReviewInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    lockLockable: <T = LockLockablePayload | null>(args: { input: LockLockableInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    moveProjectCard: <T = MoveProjectCardPayload | null>(args: { input: MoveProjectCardInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    moveProjectColumn: <T = MoveProjectColumnPayload | null>(args: { input: MoveProjectColumnInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    removeOutsideCollaborator: <T = RemoveOutsideCollaboratorPayload | null>(args: { input: RemoveOutsideCollaboratorInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    removeReaction: <T = RemoveReactionPayload | null>(args: { input: RemoveReactionInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    removeStar: <T = RemoveStarPayload | null>(args: { input: RemoveStarInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    requestReviews: <T = RequestReviewsPayload | null>(args: { input: RequestReviewsInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    submitPullRequestReview: <T = SubmitPullRequestReviewPayload | null>(args: { input: SubmitPullRequestReviewInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updateProject: <T = UpdateProjectPayload | null>(args: { input: UpdateProjectInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updateProjectCard: <T = UpdateProjectCardPayload | null>(args: { input: UpdateProjectCardInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updateProjectColumn: <T = UpdateProjectColumnPayload | null>(args: { input: UpdateProjectColumnInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updatePullRequestReview: <T = UpdatePullRequestReviewPayload | null>(args: { input: UpdatePullRequestReviewInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updatePullRequestReviewComment: <T = UpdatePullRequestReviewCommentPayload | null>(args: { input: UpdatePullRequestReviewCommentInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updateSubscription: <T = UpdateSubscriptionPayload | null>(args: { input: UpdateSubscriptionInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> ,
    updateTopics: <T = UpdateTopicsPayload | null>(args: { input: UpdateTopicsInput }, info?: GraphQLResolveInfo | string, context?: { [key: string]: any }) => Promise<T> 
  }

export interface Subscription {}

export interface BindingInstance {
  query: Query
  mutation: Mutation
  subscription: Subscription
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
  delegateSubscription(fieldName: string, args?: {
      [key: string]: any;
  }, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
  getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(...args): T
}

export const Binding = makeBindingClass<BindingConstructor<BindingInstance>>({ schema })

/**
 * Types
*/

/*
 * State of the project; either 'open' or 'closed'

 */
export type ProjectState =   'OPEN' |
  'CLOSED'

/*
 * The possible reasons a given repository could be in a locked state.

 */
export type RepositoryLockReason =   'MOVING' |
  'BILLING' |
  'RENAME' |
  'MIGRATING'

/*
 * Properties by which ref connections can be ordered.

 */
export type RefOrderField =   'TAG_COMMIT_DATE' |
  'ALPHABETICAL'

/*
 * Whether or not a PullRequest can be merged.

 */
export type MergeableState =   'MERGEABLE' |
  'CONFLICTING' |
  'UNKNOWN'

/*
 * Properties by which release connections can be ordered.

 */
export type ReleaseOrderField =   'CREATED_AT' |
  'NAME'

/*
 * The possible PubSub channels for an issue.

 */
export type IssuePubSubTopic =   'UPDATED' |
  'MARKASREAD'

/*
 * The privacy of a Gist

 */
export type GistPrivacy =   'PUBLIC' |
  'SECRET' |
  'ALL'

/*
 * The possible states of a milestone.

 */
export type MilestoneState =   'OPEN' |
  'CLOSED'

/*
 * A list of fields that reactions can be ordered by.

 */
export type ReactionOrderField =   'CREATED_AT'

/*
 * Properties by which team connections can be ordered.

 */
export type TeamOrderField =   'NAME'

/*
 * Reason that the suggested topic is declined.

 */
export type TopicSuggestionDeclineReason =   'NOT_RELEVANT' |
  'TOO_SPECIFIC' |
  'PERSONAL_PREFERENCE' |
  'TOO_GENERAL'

/*
 * The possible states of an issue.

 */
export type IssueState =   'OPEN' |
  'CLOSED'

/*
 * Properties by which gist connections can be ordered.

 */
export type GistOrderField =   'CREATED_AT' |
  'UPDATED_AT' |
  'PUSHED_AT'

/*
 * Defines which types of team members are included in the returned list. Can be one of IMMEDIATE, CHILD_TEAM or ALL.

 */
export type TeamMembershipType =   'IMMEDIATE' |
  'CHILD_TEAM' |
  'ALL'

/*
 * Emojis that can be attached to Issues, Pull Requests and Comments.

 */
export type ReactionContent =   'THUMBS_UP' |
  'THUMBS_DOWN' |
  'LAUGH' |
  'HOORAY' |
  'CONFUSED' |
  'HEART'

/*
 * Properties by which team member connections can be ordered.

 */
export type TeamMemberOrderField =   'LOGIN' |
  'CREATED_AT'

/*
 * The reason a repository is listed as 'contributed'.

 */
export type RepositoryContributionType =   'COMMIT' |
  'ISSUE' |
  'PULL_REQUEST' |
  'REPOSITORY' |
  'PULL_REQUEST_REVIEW'

/*
 * Properties by which issue connections can be ordered.

 */
export type IssueOrderField =   'CREATED_AT' |
  'UPDATED_AT' |
  'COMMENTS'

/*
 * The privacy of a repository

 */
export type RepositoryPrivacy =   'PUBLIC' |
  'PRIVATE'

/*
 * Properties by which team repository connections can be ordered.

 */
export type TeamRepositoryOrderField =   'CREATED_AT' |
  'UPDATED_AT' |
  'PUSHED_AT' |
  'NAME' |
  'PERMISSION' |
  'STARGAZERS'

/*
 * The possible errors that will prevent a user from updating a comment.

 */
export type CommentCannotUpdateReason =   'INSUFFICIENT_ACCESS' |
  'LOCKED' |
  'LOGIN_REQUIRED' |
  'MAINTENANCE' |
  'VERIFIED_EMAIL_REQUIRED'

/*
 * The possible commit status states.

 */
export type StatusState =   'EXPECTED' |
  'ERROR' |
  'FAILURE' |
  'PENDING' |
  'SUCCESS'

/*
 * Properties by which repository connections can be ordered.

 */
export type RepositoryOrderField =   'CREATED_AT' |
  'UPDATED_AT' |
  'PUSHED_AT' |
  'NAME' |
  'STARGAZERS'

/*
 * The possible states in which a deployment can be.

 */
export type DeploymentState =   'ABANDONED' |
  'ACTIVE' |
  'DESTROYED' |
  'ERROR' |
  'FAILURE' |
  'INACTIVE' |
  'PENDING'

/*
 * Possible directions in which to order a list of items when provided an `orderBy` argument.

 */
export type OrderDirection =   'ASC' |
  'DESC'

/*
 * Properties by which language connections can be ordered.

 */
export type LanguageOrderField =   'SIZE'

/*
 * The affiliation of a user to a repository

 */
export type RepositoryAffiliation =   'OWNER' |
  'COLLABORATOR' |
  'ORGANIZATION_MEMBER'

/*
 * Properties by which project connections can be ordered.

 */
export type ProjectOrderField =   'CREATED_AT' |
  'UPDATED_AT' |
  'NAME'

/*
 * Various content states of a ProjectCard

 */
export type ProjectCardState =   'CONTENT_ONLY' |
  'NOTE_ONLY' |
  'REDACTED'

/*
 * The possible default permissions for repositories.

 */
export type DefaultRepositoryPermissionField =   'NONE' |
  'READ' |
  'WRITE' |
  'ADMIN'

/*
 * The role of a user on a team.

 */
export type TeamRole =   'ADMIN' |
  'MEMBER'

/*
 * The possible organization invitation types.

 */
export type OrganizationInvitationType =   'USER' |
  'EMAIL'

/*
 * Represents the individual results of a search.

 */
export type SearchType =   'ISSUE' |
  'REPOSITORY' |
  'USER'

/*
 * The possible team member roles; either 'maintainer' or 'member'.

 */
export type TeamMemberRole =   'MAINTAINER' |
  'MEMBER'

/*
 * A comment author association with repository.

 */
export type CommentAuthorAssociation =   'MEMBER' |
  'OWNER' |
  'COLLABORATOR' |
  'CONTRIBUTOR' |
  'FIRST_TIME_CONTRIBUTOR' |
  'FIRST_TIMER' |
  'NONE'

/*
 * The possible states of a pull request.

 */
export type PullRequestState =   'OPEN' |
  'CLOSED' |
  'MERGED'

/*
 * The possible states of a subscription.

 */
export type SubscriptionState =   'UNSUBSCRIBED' |
  'SUBSCRIBED' |
  'IGNORED' |
  'UNAVAILABLE'

/*
 * The possible states for a deployment status.

 */
export type DeploymentStatusState =   'PENDING' |
  'SUCCESS' |
  'FAILURE' |
  'INACTIVE' |
  'ERROR'

/*
 * The affiliation type between collaborator and repository.

 */
export type RepositoryCollaboratorAffiliation =   'ALL' |
  'OUTSIDE'

/*
 * Properties by which milestone connections can be ordered.

 */
export type MilestoneOrderField =   'DUE_DATE' |
  'CREATED_AT' |
  'UPDATED_AT' |
  'NUMBER'

/*
 * The possible reasons that an issue or pull request was locked.

 */
export type LockReason =   'OFF_TOPIC' |
  'TOO_HEATED' |
  'RESOLVED' |
  'SPAM'

/*
 * The possible events to perform on a pull request review.

 */
export type PullRequestReviewEvent =   'COMMENT' |
  'APPROVE' |
  'REQUEST_CHANGES' |
  'DISMISS'

/*
 * Collaborators affiliation level with a subject.

 */
export type CollaboratorAffiliation =   'OUTSIDE' |
  'DIRECT' |
  'ALL'

/*
 * Properties by which star connections can be ordered.

 */
export type StarOrderField =   'STARRED_AT'

/*
 * The access level to a repository

 */
export type RepositoryPermission =   'ADMIN' |
  'WRITE' |
  'READ'

/*
 * The possible organization invitation roles.

 */
export type OrganizationInvitationRole =   'DIRECT_MEMBER' |
  'ADMIN' |
  'BILLING_MANAGER' |
  'REINSTATE'

/*
 * The possible PubSub channels for a pull request.

 */
export type PullRequestPubSubTopic =   'UPDATED' |
  'MARKASREAD' |
  'HEAD_REF'

/*
 * The state of a Git signature.

 */
export type GitSignatureState =   'VALID' |
  'INVALID' |
  'MALFORMED_SIG' |
  'UNKNOWN_KEY' |
  'BAD_EMAIL' |
  'UNVERIFIED_EMAIL' |
  'NO_USER' |
  'UNKNOWN_SIG_TYPE' |
  'UNSIGNED' |
  'GPGVERIFY_UNAVAILABLE' |
  'GPGVERIFY_ERROR' |
  'NOT_SIGNING_KEY' |
  'EXPIRED_KEY' |
  'OCSP_PENDING' |
  'OCSP_ERROR' |
  'OCSP_REVOKED'

/*
 * The possible states of a pull request review.

 */
export type PullRequestReviewState =   'PENDING' |
  'COMMENTED' |
  'APPROVED' |
  'CHANGES_REQUESTED' |
  'DISMISSED'

/*
 * The possible team privacy values.

 */
export type TeamPrivacy =   'SECRET' |
  'VISIBLE'

/*
 * Autogenerated input type of AddComment

 */
export interface AddCommentInput {
  clientMutationId?: String
  subjectId: ID_Input
  body: String
}

/*
 * Autogenerated input type of UpdateProject

 */
export interface UpdateProjectInput {
  clientMutationId?: String
  projectId: ID_Input
  name?: String
  body?: String
  state?: ProjectState
  public?: Boolean
}

/*
 * Autogenerated input type of RemoveReaction

 */
export interface RemoveReactionInput {
  clientMutationId?: String
  subjectId: ID_Input
  content: ReactionContent
}

/*
 * Autogenerated input type of DeleteProject

 */
export interface DeleteProjectInput {
  clientMutationId?: String
  projectId: ID_Input
}

/*
 * Autogenerated input type of DismissPullRequestReview

 */
export interface DismissPullRequestReviewInput {
  clientMutationId?: String
  pullRequestReviewId: ID_Input
  message: String
}

/*
 * Autogenerated input type of DeleteProjectCard

 */
export interface DeleteProjectCardInput {
  clientMutationId?: String
  cardId: ID_Input
}

/*
 * Autogenerated input type of AddPullRequestReview

 */
export interface AddPullRequestReviewInput {
  clientMutationId?: String
  pullRequestId: ID_Input
  commitOID?: GitObjectID
  body?: String
  event?: PullRequestReviewEvent
  comments?: DraftPullRequestReviewComment[] | DraftPullRequestReviewComment
}

/*
 * Ways in which lists of releases can be ordered upon return.

 */
export interface ReleaseOrder {
  field: ReleaseOrderField
  direction: OrderDirection
}

/*
 * Ways in which star connections can be ordered.

 */
export interface StarOrder {
  field: StarOrderField
  direction: OrderDirection
}

/*
 * Ordering options for team member connections

 */
export interface TeamMemberOrder {
  field: TeamMemberOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of UpdateTopics

 */
export interface UpdateTopicsInput {
  clientMutationId?: String
  repositoryId: ID_Input
  topicNames: String[] | String
}

/*
 * Autogenerated input type of DeleteProjectColumn

 */
export interface DeleteProjectColumnInput {
  clientMutationId?: String
  columnId: ID_Input
}

/*
 * Ways in which team connections can be ordered.

 */
export interface TeamOrder {
  field: TeamOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of SubmitPullRequestReview

 */
export interface SubmitPullRequestReviewInput {
  clientMutationId?: String
  pullRequestReviewId: ID_Input
  event: PullRequestReviewEvent
  body?: String
}

/*
 * Autogenerated input type of AddPullRequestReviewComment

 */
export interface AddPullRequestReviewCommentInput {
  clientMutationId?: String
  pullRequestReviewId: ID_Input
  commitOID?: GitObjectID
  body: String
  path?: String
  position?: Int
  inReplyTo?: ID_Input
}

/*
 * Ways in which lists of git refs can be ordered upon return.

 */
export interface RefOrder {
  field: RefOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of AddStar

 */
export interface AddStarInput {
  clientMutationId?: String
  starrableId: ID_Input
}

/*
 * Autogenerated input type of DeletePullRequestReview

 */
export interface DeletePullRequestReviewInput {
  clientMutationId?: String
  pullRequestReviewId: ID_Input
}

/*
 * Autogenerated input type of UpdatePullRequestReview

 */
export interface UpdatePullRequestReviewInput {
  clientMutationId?: String
  pullRequestReviewId: ID_Input
  body: String
}

/*
 * Autogenerated input type of RequestReviews

 */
export interface RequestReviewsInput {
  clientMutationId?: String
  pullRequestId: ID_Input
  userIds?: ID_Input[] | ID_Input
  teamIds?: ID_Input[] | ID_Input
  union?: Boolean
}

/*
 * Autogenerated input type of UpdateProjectColumn

 */
export interface UpdateProjectColumnInput {
  clientMutationId?: String
  projectColumnId: ID_Input
  name: String
}

/*
 * Ways in which lists of projects can be ordered upon return.

 */
export interface ProjectOrder {
  field: ProjectOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of CreateProject

 */
export interface CreateProjectInput {
  clientMutationId?: String
  ownerId: ID_Input
  name: String
  body?: String
}

/*
 * Autogenerated input type of LockLockable

 */
export interface LockLockableInput {
  clientMutationId?: String
  lockableId: ID_Input
  lockReason?: LockReason
}

/*
 * Ordering options for gist connections

 */
export interface GistOrder {
  field: GistOrderField
  direction: OrderDirection
}

/*
 * Specifies an author for filtering Git commits.

 */
export interface CommitAuthor {
  id?: ID_Input
  emails?: String[] | String
}

/*
 * Specifies a review comment to be left with a Pull Request Review.

 */
export interface DraftPullRequestReviewComment {
  path: String
  position: Int
  body: String
}

/*
 * Ordering options for milestone connections.

 */
export interface MilestoneOrder {
  field: MilestoneOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of AddProjectCard

 */
export interface AddProjectCardInput {
  clientMutationId?: String
  projectColumnId: ID_Input
  contentId?: ID_Input
  note?: String
}

/*
 * Autogenerated input type of MoveProjectCard

 */
export interface MoveProjectCardInput {
  clientMutationId?: String
  cardId: ID_Input
  columnId: ID_Input
  afterCardId?: ID_Input
}

/*
 * Autogenerated input type of UpdateSubscription

 */
export interface UpdateSubscriptionInput {
  clientMutationId?: String
  subscribableId: ID_Input
  state: SubscriptionState
}

/*
 * Ordering options for language connections.

 */
export interface LanguageOrder {
  field: LanguageOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of UpdatePullRequestReviewComment

 */
export interface UpdatePullRequestReviewCommentInput {
  clientMutationId?: String
  pullRequestReviewCommentId: ID_Input
  body: String
}

/*
 * Autogenerated input type of RemoveStar

 */
export interface RemoveStarInput {
  clientMutationId?: String
  starrableId: ID_Input
}

/*
 * Autogenerated input type of UpdateProjectCard

 */
export interface UpdateProjectCardInput {
  clientMutationId?: String
  projectCardId: ID_Input
  note: String
}

/*
 * Ways in which lists of reactions can be ordered upon return.

 */
export interface ReactionOrder {
  field: ReactionOrderField
  direction: OrderDirection
}

/*
 * Ordering options for team repository connections

 */
export interface TeamRepositoryOrder {
  field: TeamRepositoryOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of RemoveOutsideCollaborator

 */
export interface RemoveOutsideCollaboratorInput {
  clientMutationId?: String
  userId: ID_Input
  organizationId: ID_Input
}

/*
 * Ways in which lists of issues can be ordered upon return.

 */
export interface IssueOrder {
  field: IssueOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of MoveProjectColumn

 */
export interface MoveProjectColumnInput {
  clientMutationId?: String
  columnId: ID_Input
  afterColumnId?: ID_Input
}

/*
 * Autogenerated input type of AddProjectColumn

 */
export interface AddProjectColumnInput {
  clientMutationId?: String
  projectId: ID_Input
  name: String
}

/*
 * Autogenerated input type of DeclineTopicSuggestion

 */
export interface DeclineTopicSuggestionInput {
  clientMutationId?: String
  repositoryId: ID_Input
  name: String
  reason: TopicSuggestionDeclineReason
}

/*
 * Ordering options for repository connections

 */
export interface RepositoryOrder {
  field: RepositoryOrderField
  direction: OrderDirection
}

/*
 * Autogenerated input type of AddReaction

 */
export interface AddReactionInput {
  clientMutationId?: String
  subjectId: ID_Input
  content: ReactionContent
}

/*
 * Autogenerated input type of AcceptTopicSuggestion

 */
export interface AcceptTopicSuggestionInput {
  clientMutationId?: String
  repositoryId: ID_Input
  name: String
}

/*
 * A subset of repository info.

 */
export interface RepositoryInfo {
  createdAt: DateTime
  description?: String
  descriptionHTML: HTML
  forkCount: Int
  hasIssuesEnabled: Boolean
  hasWikiEnabled: Boolean
  homepageUrl?: URI
  isArchived: Boolean
  isFork: Boolean
  isLocked: Boolean
  isMirror: Boolean
  isPrivate: Boolean
  license?: String
  licenseInfo?: License
  lockReason?: RepositoryLockReason
  mirrorUrl?: URI
  name: String
  nameWithOwner: String
  owner: RepositoryOwner
  pushedAt?: DateTime
  resourcePath: URI
  shortDescriptionHTML: HTML
  updatedAt: DateTime
  url: URI
}

/*
 * Represents an owner of a Repository.

 */
export interface RepositoryOwner {
  avatarUrl: URI
  id: ID_Output
  login: String
  pinnedRepositories: RepositoryConnection
  repositories: RepositoryConnection
  repository?: Repository
  resourcePath: URI
  url: URI
}

/*
 * Represents an owner of a Project.

 */
export interface ProjectOwner {
  id: ID_Output
  project?: Project
  projects: ProjectConnection
  projectsResourcePath: URI
  projectsUrl: URI
  viewerCanCreateProjects: Boolean
}

/*
 * Represents a subject that can be reacted on.

 */
export interface Reactable {
  databaseId?: Int
  id: ID_Output
  reactionGroups?: ReactionGroup[]
  reactions: ReactionConnection
  viewerCanReact: Boolean
}

/*
 * Represents an object which can take actions on GitHub. Typically a User or Bot.

 */
export interface Actor {
  avatarUrl: URI
  login: String
  resourcePath: URI
  url: URI
}

/*
 * An object with an ID.

 */
export interface Node {
  id: ID_Output
}

/*
 * Information about a signature (GPG or S/MIME) on a Commit or Tag.

 */
export interface GitSignature {
  email: String
  isValid: Boolean
  payload: String
  signature: String
  signer?: User
  state: GitSignatureState
}

/*
 * Comments that can be updated.

 */
export interface UpdatableComment {
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
}

/*
 * Represents a Git object.

 */
export interface GitObject {
  abbreviatedOid: String
  commitResourcePath: URI
  commitUrl: URI
  id: ID_Output
  oid: GitObjectID
  repository: Repository
}

/*
 * Entities that can be deleted.

 */
export interface Deletable {
  viewerCanDelete: Boolean
}

/*
 * An object that can have labels assigned to it.

 */
export interface Labelable {
  labels?: LabelConnection
}

/*
 * Things that can be starred.

 */
export interface Starrable {
  id: ID_Output
  stargazers: StargazerConnection
  viewerHasStarred: Boolean
}

/*
 * Represents a comment.

 */
export interface Comment {
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  createdAt: DateTime
  createdViaEmail: Boolean
  editor?: Actor
  id: ID_Output
  lastEditedAt?: DateTime
  publishedAt?: DateTime
  updatedAt: DateTime
  userContentEdits?: UserContentEditConnection
  viewerDidAuthor: Boolean
}

/*
 * Entities that can be subscribed to for web and email notifications.

 */
export interface Subscribable {
  id: ID_Output
  viewerCanSubscribe: Boolean
  viewerSubscription: SubscriptionState
}

/*
 * An object that can be locked.

 */
export interface Lockable {
  activeLockReason?: LockReason
  locked: Boolean
}

/*
 * An object that can have users assigned to it.

 */
export interface Assignable {
  assignees: UserConnection
}

/*
 * Represents a object that belongs to a repository.

 */
export interface RepositoryNode {
  repository: Repository
}

/*
 * Represents a type that can be retrieved by a URL.

 */
export interface UniformResourceLocatable {
  resourcePath: URI
  url: URI
}

/*
 * Entities that can be updated.

 */
export interface Updatable {
  viewerCanUpdate: Boolean
}

/*
 * An object that can be closed

 */
export interface Closable {
  closed: Boolean
  closedAt?: DateTime
}

/*
 * Describes the status of a given deployment attempt.

 */
export interface DeploymentStatus extends Node {
  createdAt: DateTime
  creator?: Actor
  deployment: Deployment
  description?: String
  environmentUrl?: URI
  id: ID_Output
  logUrl?: URI
  state: DeploymentStatusState
  updatedAt: DateTime
}

/*
 * Represents an unknown signature on a Commit or Tag.

 */
export interface UnknownSignature extends GitSignature {
  email: String
  isValid: Boolean
  payload: String
  signature: String
  signer?: User
  state: GitSignatureState
}

/*
 * A topic aggregates entities that are related to a subject.

 */
export interface Topic extends Node {
  id: ID_Output
  name: String
  relatedTopics: Topic[]
}

/*
 * The connection type for PullRequestCommit.

 */
export interface PullRequestCommitConnection {
  edges?: PullRequestCommitEdge[]
  nodes?: PullRequestCommit[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for ReleaseAsset.

 */
export interface ReleaseAssetConnection {
  edges?: ReleaseAssetEdge[]
  nodes?: ReleaseAsset[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of UpdateSubscription

 */
export interface UpdateSubscriptionPayload {
  clientMutationId?: String
  subscribable: Subscribable
}

/*
 * An edge in a connection.

 */
export interface ReleaseAssetEdge {
  cursor: String
  node?: ReleaseAsset
}

/*
 * Represents a Git commit part of a pull request.

 */
export interface PullRequestCommit extends Node, UniformResourceLocatable {
  commit: Commit
  id: ID_Output
  pullRequest: PullRequest
  resourcePath: URI
  url: URI
}

/*
 * A release asset contains the content for a release asset.

 */
export interface ReleaseAsset extends Node {
  contentType: String
  createdAt: DateTime
  downloadCount: Int
  downloadUrl: URI
  id: ID_Output
  name: String
  release?: Release
  size: Int
  updatedAt: DateTime
  uploadedBy: User
  url: URI
}

/*
 * An edge in a connection.

 */
export interface IssueCommentEdge {
  cursor: String
  node?: IssueComment
}

/*
 * An emoji reaction to a particular piece of content.

 */
export interface Reaction extends Node {
  content: ReactionContent
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
  reactable: Reactable
  user?: User
}

/*
 * An edge in a connection.

 */
export interface ReviewRequestEdge {
  cursor: String
  node?: ReviewRequest
}

/*
 * An edge in a connection.

 */
export interface ReactionEdge {
  cursor: String
  node?: Reaction
}

/*
 * An edge in a connection.

 */
export interface TopicEdge {
  cursor: String
  node?: Topic
}

/*
 * The connection type for Release.

 */
export interface ReleaseConnection {
  edges?: ReleaseEdge[]
  nodes?: Release[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for Team.

 */
export interface TeamConnection {
  edges?: TeamEdge[]
  nodes?: Team[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * An edge in a connection.

 */
export interface ReleaseEdge {
  cursor: String
  node?: Release
}

/*
 * The connection type for IssueComment.

 */
export interface IssueCommentConnection {
  edges?: IssueCommentEdge[]
  nodes?: IssueComment[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for RepositoryTopic.

 */
export interface RepositoryTopicConnection {
  edges?: RepositoryTopicEdge[]
  nodes?: RepositoryTopic[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for OrganizationInvitation.

 */
export interface OrganizationInvitationConnection {
  edges?: OrganizationInvitationEdge[]
  nodes?: OrganizationInvitation[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * An edge in a connection.

 */
export interface RepositoryTopicEdge {
  cursor: String
  node?: RepositoryTopic
}

/*
 * An Invitation for a user to an organization.

 */
export interface OrganizationInvitation extends Node {
  createdAt: DateTime
  email?: String
  id: ID_Output
  invitationType: OrganizationInvitationType
  invitee?: User
  inviter: User
  organization: Organization
  role: OrganizationInvitationRole
}

/*
 * A repository-topic connects a repository to a topic.

 */
export interface RepositoryTopic extends Node, UniformResourceLocatable {
  id: ID_Output
  resourcePath: URI
  topic: Topic
  url: URI
}

/*
 * A label for categorizing Issues or Milestones with a given Repository.

 */
export interface Label extends Node {
  color: String
  description?: String
  id: ID_Output
  isDefault: Boolean
  issues: IssueConnection
  name: String
  pullRequests: PullRequestConnection
  repository: Repository
}

/*
 * An edge in a connection.

 */
export interface PullRequestCommitEdge {
  cursor: String
  node?: PullRequestCommit
}

/*
 * The connection type for Label.

 */
export interface LabelConnection {
  edges?: LabelEdge[]
  nodes?: Label[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a comment on an Issue.

 */
export interface IssueComment extends Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode {
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  editor?: Actor
  id: ID_Output
  issue: Issue
  lastEditedAt?: DateTime
  publishedAt?: DateTime
  pullRequest?: PullRequest
  reactionGroups?: ReactionGroup[]
  reactions: ReactionConnection
  repository: Repository
  resourcePath: URI
  updatedAt: DateTime
  url: URI
  userContentEdits?: UserContentEditConnection
  viewerCanDelete: Boolean
  viewerCanReact: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
}

/*
 * An edge in a connection.

 */
export interface PullRequestEdge {
  cursor: String
  node?: PullRequest
}

/*
 * The connection type for User.

 */
export interface FollowerConnection {
  edges?: UserEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a user who is a member of a team.

 */
export interface TeamMemberEdge {
  cursor: String
  memberAccessResourcePath: URI
  memberAccessUrl: URI
  node: User
  role: TeamMemberRole
}

/*
 * The connection type for User.

 */
export interface FollowingConnection {
  edges?: UserEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a Git reference.

 */
export interface Ref extends Node {
  associatedPullRequests: PullRequestConnection
  id: ID_Output
  name: String
  prefix: String
  repository: Repository
  target: GitObject
}

/*
 * A Gist.

 */
export interface Gist extends Node, Starrable {
  comments: GistCommentConnection
  createdAt: DateTime
  description?: String
  id: ID_Output
  isPublic: Boolean
  name: String
  owner?: RepositoryOwner
  pushedAt?: DateTime
  stargazers: StargazerConnection
  updatedAt: DateTime
  viewerHasStarred: Boolean
}

/*
 * The connection type for Repository.

 */
export interface TeamRepositoryConnection {
  edges?: TeamRepositoryEdge[]
  nodes?: Repository[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for GistComment.

 */
export interface GistCommentConnection {
  edges?: GistCommentEdge[]
  nodes?: GistComment[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a Git tree.

 */
export interface Tree extends Node, GitObject {
  abbreviatedOid: String
  commitResourcePath: URI
  commitUrl: URI
  entries?: TreeEntry[]
  id: ID_Output
  oid: GitObjectID
  repository: Repository
}

/*
 * An edge in a connection.

 */
export interface GistCommentEdge {
  cursor: String
  node?: GistComment
}

/*
 * An edge in a connection.

 */
export interface PullRequestReviewEdge {
  cursor: String
  node?: PullRequestReview
}

/*
 * Represents a comment on an Gist.

 */
export interface GistComment extends Node, Comment, Deletable, Updatable, UpdatableComment {
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  editor?: Actor
  gist: Gist
  id: ID_Output
  lastEditedAt?: DateTime
  publishedAt?: DateTime
  updatedAt: DateTime
  userContentEdits?: UserContentEditConnection
  viewerCanDelete: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
}

/*
 * The connection type for PullRequestReviewComment.

 */
export interface PullRequestReviewCommentConnection {
  edges?: PullRequestReviewCommentEdge[]
  nodes?: PullRequestReviewComment[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * A list of reactions that have been left on the subject.

 */
export interface ReactionConnection {
  edges?: ReactionEdge[]
  nodes?: Reaction[]
  pageInfo: PageInfo
  totalCount: Int
  viewerHasReacted: Boolean
}

/*
 * A review comment associated with a given repository pull request.

 */
export interface PullRequestReviewComment extends Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode {
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  commit: Commit
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  diffHunk: String
  draftedAt: DateTime
  editor?: Actor
  id: ID_Output
  lastEditedAt?: DateTime
  originalCommit?: Commit
  originalPosition: Int
  path: String
  position?: Int
  publishedAt?: DateTime
  pullRequest: PullRequest
  pullRequestReview?: PullRequestReview
  reactionGroups?: ReactionGroup[]
  reactions: ReactionConnection
  replyTo?: PullRequestReviewComment
  repository: Repository
  resourcePath: URI
  updatedAt: DateTime
  url: URI
  userContentEdits?: UserContentEditConnection
  viewerCanDelete: Boolean
  viewerCanReact: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
}

/*
 * Represents a user that's made a reaction.

 */
export interface ReactingUserEdge {
  cursor: String
  node: User
  reactedAt: DateTime
}

/*
 * The connection type for PullRequestTimelineItem.

 */
export interface PullRequestTimelineConnection {
  edges?: PullRequestTimelineItemEdge[]
  nodes?: PullRequestTimelineItem[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for User.

 */
export interface ReactingUserConnection {
  edges?: ReactingUserEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for Topic.

 */
export interface TopicConnection {
  edges?: TopicEdge[]
  nodes?: Topic[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for Gist.

 */
export interface GistConnection {
  edges?: GistEdge[]
  nodes?: Gist[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * A threaded list of comments for a given pull request.

 */
export interface PullRequestReviewThread extends Node {
  comments: PullRequestReviewCommentConnection
  id: ID_Output
  pullRequest: PullRequest
  repository: Repository
}

/*
 * An edge in a connection.

 */
export interface GistEdge {
  cursor: String
  node?: Gist
}

/*
 * Represents a Git tag.

 */
export interface Tag extends Node, GitObject {
  abbreviatedOid: String
  commitResourcePath: URI
  commitUrl: URI
  id: ID_Output
  message?: String
  name: String
  oid: GitObjectID
  repository: Repository
  tagger?: GitActor
  target: GitObject
}

/*
 * The connection type for Organization.

 */
export interface OrganizationConnection {
  edges?: OrganizationEdge[]
  nodes?: Organization[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a 'subscribed' event on a given `Subscribable`.

 */
export interface SubscribedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  subscribable: Subscribable
}

/*
 * An edge in a connection.

 */
export interface OrganizationEdge {
  cursor: String
  node?: Organization
}

/*
 * Represents a 'merged' event on a given pull request.

 */
export interface MergedEvent extends Node, UniformResourceLocatable {
  actor?: Actor
  commit?: Commit
  createdAt: DateTime
  id: ID_Output
  mergeRef?: Ref
  mergeRefName: String
  pullRequest: PullRequest
  resourcePath: URI
  url: URI
}

/*
 * The connection type for PublicKey.

 */
export interface PublicKeyConnection {
  edges?: PublicKeyEdge[]
  nodes?: PublicKey[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents an S/MIME signature on a Commit or Tag.

 */
export interface SmimeSignature extends GitSignature {
  email: String
  isValid: Boolean
  payload: String
  signature: String
  signer?: User
  state: GitSignatureState
}

/*
 * An edge in a connection.

 */
export interface PublicKeyEdge {
  cursor: String
  node?: PublicKey
}

/*
 * Represents an 'assigned' event on any assignable object.

 */
export interface AssignedEvent extends Node {
  actor?: Actor
  assignable: Assignable
  createdAt: DateTime
  id: ID_Output
  user?: User
}

/*
 * A user's public key.

 */
export interface PublicKey extends Node {
  id: ID_Output
  key: String
}

/*
 * Represents a 'labeled' event on a given issue or pull request.

 */
export interface LabeledEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  label: Label
  labelable: Labelable
}

/*
 * A group of emoji reactions to a particular piece of content.

 */
export interface ReactionGroup {
  content: ReactionContent
  createdAt?: DateTime
  subject: Reactable
  users: ReactingUserConnection
  viewerHasReacted: Boolean
}

/*
 * Represents a 'milestoned' event on a given issue or pull request.

 */
export interface MilestonedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  milestoneTitle: String
  subject: MilestoneItem
}

/*
 * The connection type for Repository.

 */
export interface StarredRepositoryConnection {
  edges?: StarredRepositoryEdge[]
  nodes?: Repository[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a 'demilestoned' event on a given issue or pull request.

 */
export interface DemilestonedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  milestoneTitle: String
  subject: MilestoneItem
}

/*
 * Represents a starred repository.

 */
export interface StarredRepositoryEdge {
  cursor: String
  node: Repository
  starredAt: DateTime
}

/*
 * Represents a 'removed_from_project' event on a given issue or pull request.

 */
export interface RemovedFromProjectEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * The connection type for IssueTimelineItem.

 */
export interface IssueTimelineConnection {
  edges?: IssueTimelineItemEdge[]
  nodes?: IssueTimelineItem[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents an 'unlocked' event on a given issue or pull request.

 */
export interface UnlockedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  lockable: Lockable
}

/*
 * An edge in a connection.

 */
export interface IssueTimelineItemEdge {
  cursor: String
  node?: IssueTimelineItem
}

/*
 * Represents triggered deployment instance.

 */
export interface Deployment extends Node {
  commit?: Commit
  createdAt: DateTime
  creator?: Actor
  databaseId?: Int
  environment?: String
  id: ID_Output
  latestStatus?: DeploymentStatus
  payload?: String
  repository: Repository
  state?: DeploymentState
  statuses?: DeploymentStatusConnection
}

/*
 * Represents a 'converted_note_to_issue' event on a given issue or pull request.

 */
export interface ConvertedNoteToIssueEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * Represents an individual commit status context

 */
export interface StatusContext extends Node {
  commit?: Commit
  context: String
  createdAt: DateTime
  creator?: Actor
  description?: String
  id: ID_Output
  state: StatusState
  targetUrl?: URI
}

/*
 * An edit on user content

 */
export interface UserContentEdit extends Node {
  createdAt: DateTime
  editor?: Actor
  id: ID_Output
  updatedAt: DateTime
}

/*
 * The connection type for DeploymentStatus.

 */
export interface DeploymentStatusConnection {
  edges?: DeploymentStatusEdge[]
  nodes?: DeploymentStatus[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * An Identity Provider configured to provision SAML and SCIM identities for Organizations

 */
export interface OrganizationIdentityProvider extends Node {
  digestMethod?: URI
  externalIdentities: ExternalIdentityConnection
  id: ID_Output
  idpCertificate?: X509Certificate
  issuer?: String
  organization?: Organization
  signatureMethod?: URI
  ssoUrl?: URI
}

/*
 * Represents a 'head_ref_deleted' event on a given pull request.

 */
export interface HeadRefDeletedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  headRef?: Ref
  headRefName: String
  id: ID_Output
  pullRequest: PullRequest
}

/*
 * The connection type for ExternalIdentity.

 */
export interface ExternalIdentityConnection {
  edges?: ExternalIdentityEdge[]
  nodes?: ExternalIdentity[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a 'head_ref_force_pushed' event on a given pull request.

 */
export interface HeadRefForcePushedEvent extends Node {
  actor?: Actor
  afterCommit?: Commit
  beforeCommit?: Commit
  createdAt: DateTime
  id: ID_Output
  pullRequest: PullRequest
  ref?: Ref
}

/*
 * An edge in a connection.

 */
export interface ExternalIdentityEdge {
  cursor: String
  node?: ExternalIdentity
}

/*
 * Represents an 'review_requested' event on a given pull request.

 */
export interface ReviewRequestedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  pullRequest: PullRequest
  requestedReviewer?: RequestedReviewer
  subject?: User
}

/*
 * An external identity provisioned by SAML SSO or SCIM.

 */
export interface ExternalIdentity extends Node {
  guid: String
  id: ID_Output
  organizationInvitation?: OrganizationInvitation
  samlIdentity?: ExternalIdentitySamlAttributes
  scimIdentity?: ExternalIdentityScimAttributes
  user?: User
}

/*
 * Represents a 'review_dismissed' event on a given issue or pull request.

 */
export interface ReviewDismissedEvent extends Node, UniformResourceLocatable {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
  message: String
  messageHtml: HTML
  previousReviewState: PullRequestReviewState
  pullRequest: PullRequest
  pullRequestCommit?: PullRequestCommit
  resourcePath: URI
  review?: PullRequestReview
  url: URI
}

/*
 * SAML attributes for the External Identity

 */
export interface ExternalIdentitySamlAttributes {
  nameId?: String
}

/*
 * An edge in a connection.

 */
export interface DeployKeyEdge {
  cursor: String
  node?: DeployKey
}

/*
 * SCIM attributes for the External Identity

 */
export interface ExternalIdentityScimAttributes {
  username?: String
}

/*
 * The connection type for Deployment.

 */
export interface DeploymentConnection {
  edges?: DeploymentEdge[]
  nodes?: Deployment[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a 'comment_deleted' event on a given issue or pull request.

 */
export interface CommentDeletedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * A respository's open source license

 */
export interface License {
  body: String
  conditions: LicenseRule[]
  description?: String
  featured: Boolean
  hidden: Boolean
  id: ID_Output
  implementation?: String
  key: String
  limitations: LicenseRule[]
  name: String
  nickname?: String
  permissions: LicenseRule[]
  spdxId?: String
  url?: URI
}

/*
 * An edge in a connection.

 */
export interface UserContentEditEdge {
  cursor: String
  node?: UserContentEdit
}

/*
 * An edge in a connection.

 */
export interface CommitEdge {
  cursor: String
  node?: Commit
}

/*
 * Represents the client's rate limit.

 */
export interface RateLimit {
  cost: Int
  limit: Int
  nodeCount: Int
  remaining: Int
  resetAt: DateTime
}

/*
 * Represents the language of a repository.

 */
export interface LanguageEdge {
  cursor: String
  node: Language
  size: Int
}

/*
 * A list of edits to content.

 */
export interface UserContentEditConnection {
  edges?: UserContentEditEdge[]
  nodes?: UserContentEdit[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for Commit.

 */
export interface CommitHistoryConnection {
  edges?: CommitEdge[]
  nodes?: Commit[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * A list of results that matched against a search query.

 */
export interface SearchResultItemConnection {
  codeCount: Int
  edges?: SearchResultItemEdge[]
  issueCount: Int
  nodes?: SearchResultItem[]
  pageInfo: PageInfo
  repositoryCount: Int
  userCount: Int
  wikiCount: Int
}

/*
 * The connection type for Milestone.

 */
export interface MilestoneConnection {
  edges?: MilestoneEdge[]
  nodes?: Milestone[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * An edge in a connection.

 */
export interface SearchResultItemEdge {
  cursor: String
  node?: SearchResultItem
  textMatches?: TextMatch[]
}

/*
 * Represents a Git blame.

 */
export interface Blame {
  ranges: BlameRange[]
}

/*
 * A special type of user which takes actions on behalf of GitHub Apps.

 */
export interface Bot extends Node, Actor, UniformResourceLocatable {
  avatarUrl: URI
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
  login: String
  resourcePath: URI
  updatedAt: DateTime
  url: URI
}

/*
 * Represents an actor in a Git commit (ie. an author or committer).

 */
export interface GitActor {
  avatarUrl: URI
  date?: GitTimestamp
  email?: String
  name?: String
  user?: User
}

/*
 * A text match within a search result.

 */
export interface TextMatch {
  fragment: String
  highlights: TextMatchHighlight[]
  property: String
}

/*
 * An edge in a connection.

 */
export interface ProjectEdge {
  cursor: String
  node?: Project
}

/*
 * Represents a single highlight in a search result match.

 */
export interface TextMatchHighlight {
  beginIndice: Int
  endIndice: Int
  text: String
}

/*
 * An edge in a connection.

 */
export interface ProtectedBranchEdge {
  cursor: String
  node?: ProtectedBranch
}

/*
 * Represents a comment on a given Commit.

 */
export interface CommitComment extends Node, Comment, Deletable, Updatable, UpdatableComment, Reactable, RepositoryNode {
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  commit?: Commit
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  editor?: Actor
  id: ID_Output
  lastEditedAt?: DateTime
  path?: String
  position?: Int
  publishedAt?: DateTime
  reactionGroups?: ReactionGroup[]
  reactions: ReactionConnection
  repository: Repository
  resourcePath: URI
  updatedAt: DateTime
  url: URI
  userContentEdits?: UserContentEditConnection
  viewerCanDelete: Boolean
  viewerCanReact: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
}

/*
 * The connection type for PushAllowance.

 */
export interface PushAllowanceConnection {
  edges?: PushAllowanceEdge[]
  nodes?: PushAllowance[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of AcceptTopicSuggestion

 */
export interface AcceptTopicSuggestionPayload {
  clientMutationId?: String
  topic: Topic
}

/*
 * A team or user who has the ability to push to a protected branch.

 */
export interface PushAllowance extends Node {
  actor?: PushAllowanceActor
  id: ID_Output
  protectedBranch: ProtectedBranch
}

/*
 * An edge in a connection.

 */
export interface CommitCommentEdge {
  cursor: String
  node?: CommitComment
}

/*
 * The connection type for ReviewDismissalAllowance.

 */
export interface ReviewDismissalAllowanceConnection {
  edges?: ReviewDismissalAllowanceEdge[]
  nodes?: ReviewDismissalAllowance[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of AddComment

 */
export interface AddCommentPayload {
  clientMutationId?: String
  commentEdge: IssueCommentEdge
  subject: Node
  timelineEdge: IssueTimelineItemEdge
}

/*
 * A team or user who has the ability to dismiss a review on a protected branch.

 */
export interface ReviewDismissalAllowance extends Node {
  actor?: ReviewDismissalAllowanceActor
  id: ID_Output
  protectedBranch: ProtectedBranch
}

/*
 * The connection type for CommitComment.

 */
export interface CommitCommentConnection {
  edges?: CommitCommentEdge[]
  nodes?: CommitComment[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a GPG signature on a Commit or Tag.

 */
export interface GpgSignature extends GitSignature {
  email: String
  isValid: Boolean
  keyId?: String
  payload: String
  signature: String
  signer?: User
  state: GitSignatureState
}

/*
 * Autogenerated return type of AddProjectCard

 */
export interface AddProjectCardPayload {
  cardEdge: ProjectCardEdge
  clientMutationId?: String
  projectColumn: Project
}

/*
 * The connection type for Ref.

 */
export interface RefConnection {
  edges?: RefEdge[]
  nodes?: Ref[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a user who is a collaborator of a repository.

 */
export interface RepositoryCollaboratorEdge {
  cursor: String
  node: User
  permission: RepositoryPermission
}

/*
 * A release contains the content for a release.

 */
export interface Release extends Node, UniformResourceLocatable {
  author?: User
  createdAt: DateTime
  description?: String
  id: ID_Output
  isDraft: Boolean
  isPrerelease: Boolean
  name?: String
  publishedAt?: DateTime
  releaseAssets: ReleaseAssetConnection
  resourcePath: URI
  tag?: Ref
  updatedAt: DateTime
  url: URI
}

/*
 * Autogenerated return type of AddProjectColumn

 */
export interface AddProjectColumnPayload {
  clientMutationId?: String
  columnEdge: ProjectColumnEdge
  project: Project
}

/*
 * The connection type for ReviewRequest.

 */
export interface ReviewRequestConnection {
  edges?: ReviewRequestEdge[]
  nodes?: ReviewRequest[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for User.

 */
export interface RepositoryCollaboratorConnection {
  edges?: RepositoryCollaboratorEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * A team of users in an organization.

 */
export interface Team extends Node, Subscribable {
  ancestors: TeamConnection
  avatarUrl?: URI
  childTeams: TeamConnection
  combinedSlug: String
  createdAt: DateTime
  description?: String
  editTeamResourcePath: URI
  editTeamUrl: URI
  id: ID_Output
  invitations?: OrganizationInvitationConnection
  members: TeamMemberConnection
  membersResourcePath: URI
  membersUrl: URI
  name: String
  newTeamResourcePath: URI
  newTeamUrl: URI
  organization: Organization
  parentTeam?: Team
  privacy: TeamPrivacy
  repositories: TeamRepositoryConnection
  repositoriesResourcePath: URI
  repositoriesUrl: URI
  resourcePath: URI
  slug: String
  teamsResourcePath: URI
  teamsUrl: URI
  updatedAt: DateTime
  url: URI
  viewerCanAdminister: Boolean
  viewerCanSubscribe: Boolean
  viewerSubscription: SubscriptionState
}

/*
 * Represents a user that's starred a repository.

 */
export interface StargazerEdge {
  cursor: String
  node: User
  starredAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface IssueEdge {
  cursor: String
  node?: Issue
}

/*
 * The connection type for User.

 */
export interface StargazerConnection {
  edges?: StargazerEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for Issue.

 */
export interface IssueConnection {
  edges?: IssueEdge[]
  nodes?: Issue[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of AddPullRequestReview

 */
export interface AddPullRequestReviewPayload {
  clientMutationId?: String
  pullRequestReview: PullRequestReview
  reviewEdge: PullRequestReviewEdge
}

/*
 * A repository pull request.

 */
export interface PullRequest extends Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable {
  activeLockReason?: LockReason
  additions: Int
  assignees: UserConnection
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  baseRef?: Ref
  baseRefName: String
  baseRefOid: GitObjectID
  body: String
  bodyHTML: HTML
  bodyText: String
  changedFiles: Int
  closed: Boolean
  closedAt?: DateTime
  comments: IssueCommentConnection
  commits: PullRequestCommitConnection
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  deletions: Int
  editor?: Actor
  headRef?: Ref
  headRefName: String
  headRefOid: GitObjectID
  headRepository?: Repository
  headRepositoryOwner?: RepositoryOwner
  id: ID_Output
  isCrossRepository: Boolean
  labels?: LabelConnection
  lastEditedAt?: DateTime
  locked: Boolean
  mergeCommit?: Commit
  mergeable: MergeableState
  merged: Boolean
  mergedAt?: DateTime
  milestone?: Milestone
  number: Int
  participants: UserConnection
  potentialMergeCommit?: Commit
  projectCards: ProjectCardConnection
  publishedAt?: DateTime
  reactionGroups?: ReactionGroup[]
  reactions: ReactionConnection
  repository: Repository
  resourcePath: URI
  revertResourcePath: URI
  revertUrl: URI
  reviewRequests?: ReviewRequestConnection
  reviews?: PullRequestReviewConnection
  state: PullRequestState
  suggestedReviewers: SuggestedReviewer[]
  timeline: PullRequestTimelineConnection
  title: String
  updatedAt: DateTime
  url: URI
  userContentEdits?: UserContentEditConnection
  viewerCanReact: Boolean
  viewerCanSubscribe: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
  viewerSubscription: SubscriptionState
}

/*
 * A repository contains the content for a project.

 */
export interface Repository extends Node, ProjectOwner, Subscribable, Starrable, UniformResourceLocatable, RepositoryInfo {
  assignableUsers: UserConnection
  codeOfConduct?: CodeOfConduct
  collaborators?: RepositoryCollaboratorConnection
  commitComments: CommitCommentConnection
  createdAt: DateTime
  databaseId?: Int
  defaultBranchRef?: Ref
  deployKeys: DeployKeyConnection
  deployments: DeploymentConnection
  description?: String
  descriptionHTML: HTML
  diskUsage?: Int
  forkCount: Int
  forks: RepositoryConnection
  hasIssuesEnabled: Boolean
  hasWikiEnabled: Boolean
  homepageUrl?: URI
  id: ID_Output
  isArchived: Boolean
  isFork: Boolean
  isLocked: Boolean
  isMirror: Boolean
  isPrivate: Boolean
  issue?: Issue
  issueOrPullRequest?: IssueOrPullRequest
  issues: IssueConnection
  label?: Label
  labels?: LabelConnection
  languages?: LanguageConnection
  license?: String
  licenseInfo?: License
  lockReason?: RepositoryLockReason
  mentionableUsers: UserConnection
  mergeCommitAllowed: Boolean
  milestone?: Milestone
  milestones?: MilestoneConnection
  mirrorUrl?: URI
  name: String
  nameWithOwner: String
  object?: GitObject
  owner: RepositoryOwner
  parent?: Repository
  primaryLanguage?: Language
  project?: Project
  projects: ProjectConnection
  projectsResourcePath: URI
  projectsUrl: URI
  protectedBranches: ProtectedBranchConnection
  pullRequest?: PullRequest
  pullRequests: PullRequestConnection
  pushedAt?: DateTime
  rebaseMergeAllowed: Boolean
  ref?: Ref
  refs?: RefConnection
  release?: Release
  releases: ReleaseConnection
  repositoryTopics: RepositoryTopicConnection
  resourcePath: URI
  shortDescriptionHTML: HTML
  squashMergeAllowed: Boolean
  sshUrl: GitSSHRemote
  stargazers: StargazerConnection
  updatedAt: DateTime
  url: URI
  viewerCanAdminister: Boolean
  viewerCanCreateProjects: Boolean
  viewerCanSubscribe: Boolean
  viewerCanUpdateTopics: Boolean
  viewerHasStarred: Boolean
  viewerPermission?: RepositoryPermission
  viewerSubscription: SubscriptionState
  watchers: UserConnection
}

/*
 * The connection type for PullRequest.

 */
export interface PullRequestConnection {
  edges?: PullRequestEdge[]
  nodes?: PullRequest[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of AddPullRequestReviewComment

 */
export interface AddPullRequestReviewCommentPayload {
  clientMutationId?: String
  comment: PullRequestReviewComment
  commentEdge: PullRequestReviewCommentEdge
}

/*
 * Represents a team repository.

 */
export interface TeamRepositoryEdge {
  cursor: String
  node: Repository
  permission: RepositoryPermission
}

/*
 * An edge in a connection.

 */
export interface RepositoryEdge {
  cursor: String
  node?: Repository
}

/*
 * A review object for a given pull request.

 */
export interface PullRequestReview extends Node, Comment, Deletable, Updatable, UpdatableComment, RepositoryNode {
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  comments: PullRequestReviewCommentConnection
  commit?: Commit
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  editor?: Actor
  id: ID_Output
  lastEditedAt?: DateTime
  publishedAt?: DateTime
  pullRequest: PullRequest
  repository: Repository
  resourcePath: URI
  state: PullRequestReviewState
  submittedAt?: DateTime
  updatedAt: DateTime
  url: URI
  userContentEdits?: UserContentEditConnection
  viewerCanDelete: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
}

/*
 * Autogenerated return type of AddReaction

 */
export interface AddReactionPayload {
  clientMutationId?: String
  reaction: Reaction
  subject: Reactable
}

/*
 * A suggestion to review a pull request based on a user's commit history and review comments.

 */
export interface SuggestedReviewer {
  isAuthor: Boolean
  isCommenter: Boolean
  reviewer: User
}

/*
 * A list of repositories owned by the subject.

 */
export interface RepositoryConnection {
  edges?: RepositoryEdge[]
  nodes?: Repository[]
  pageInfo: PageInfo
  totalCount: Int
  totalDiskUsage: Int
}

/*
 * A thread of comments on a commit.

 */
export interface CommitCommentThread extends Node, RepositoryNode {
  comments: CommitCommentConnection
  commit: Commit
  id: ID_Output
  path?: String
  position?: Int
  repository: Repository
}

/*
 * Autogenerated return type of AddStar

 */
export interface AddStarPayload {
  clientMutationId?: String
  starrable: Starrable
}

/*
 * Represents a 'reopened' event on any `Closable`.

 */
export interface ReopenedEvent extends Node {
  actor?: Actor
  closable: Closable
  createdAt: DateTime
  id: ID_Output
}

/*
 * A user is an individual's account on GitHub that owns repositories and can make new content.

 */
export interface User extends Node, Actor, RepositoryOwner, UniformResourceLocatable {
  avatarUrl: URI
  bio?: String
  bioHTML: HTML
  commitComments: CommitCommentConnection
  company?: String
  companyHTML: HTML
  contributedRepositories: RepositoryConnection
  createdAt: DateTime
  databaseId?: Int
  email: String
  followers: FollowerConnection
  following: FollowingConnection
  gist?: Gist
  gistComments: GistCommentConnection
  gists: GistConnection
  id: ID_Output
  isBountyHunter: Boolean
  isCampusExpert: Boolean
  isDeveloperProgramMember: Boolean
  isEmployee: Boolean
  isHireable: Boolean
  isSiteAdmin: Boolean
  isViewer: Boolean
  issueComments: IssueCommentConnection
  issues: IssueConnection
  location?: String
  login: String
  name?: String
  organization?: Organization
  organizations: OrganizationConnection
  pinnedRepositories: RepositoryConnection
  publicKeys: PublicKeyConnection
  pullRequests: PullRequestConnection
  repositories: RepositoryConnection
  repositoriesContributedTo: RepositoryConnection
  repository?: Repository
  resourcePath: URI
  starredRepositories: StarredRepositoryConnection
  updatedAt: DateTime
  url: URI
  viewerCanFollow: Boolean
  viewerIsFollowing: Boolean
  watching: RepositoryConnection
  websiteUrl?: URI
}

/*
 * Represents a 'referenced' event on a given `ReferencedSubject`.

 */
export interface ReferencedEvent extends Node {
  actor?: Actor
  commit?: Commit
  commitRepository: Repository
  createdAt: DateTime
  id: ID_Output
  isCrossReference: Boolean
  isCrossRepository: Boolean
  isDirectReference: Boolean
  subject: ReferencedSubject
}

/*
 * Autogenerated return type of CreateProject

 */
export interface CreateProjectPayload {
  clientMutationId?: String
  project: Project
}

/*
 * Represents an 'unassigned' event on any assignable object.

 */
export interface UnassignedEvent extends Node {
  actor?: Actor
  assignable: Assignable
  createdAt: DateTime
  id: ID_Output
  user?: User
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  cursor: String
  node?: User
}

/*
 * An invitation for a user to be added to a repository.

 */
export interface RepositoryInvitation extends Node {
  id: ID_Output
  invitee: User
  inviter: User
  permission: RepositoryPermission
  repository?: RepositoryInfo
}

/*
 * The connection type for User.

 */
export interface UserConnection {
  edges?: UserEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a 'locked' event on a given issue or pull request.

 */
export interface LockedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  lockable: Lockable
}

/*
 * Autogenerated return type of DeclineTopicSuggestion

 */
export interface DeclineTopicSuggestionPayload {
  clientMutationId?: String
  topic: Topic
}

/*
 * The Code of Conduct for a repository

 */
export interface CodeOfConduct {
  body?: String
  key: String
  name: String
  url?: URI
}

/*
 * An Issue is a place to discuss ideas, enhancements, tasks, and bugs for a project.

 */
export interface Issue extends Node, Assignable, Closable, Comment, Updatable, UpdatableComment, Labelable, Lockable, Reactable, RepositoryNode, Subscribable, UniformResourceLocatable {
  activeLockReason?: LockReason
  assignees: UserConnection
  author?: Actor
  authorAssociation: CommentAuthorAssociation
  body: String
  bodyHTML: HTML
  bodyText: String
  closed: Boolean
  closedAt?: DateTime
  comments: IssueCommentConnection
  createdAt: DateTime
  createdViaEmail: Boolean
  databaseId?: Int
  editor?: Actor
  id: ID_Output
  labels?: LabelConnection
  lastEditedAt?: DateTime
  locked: Boolean
  milestone?: Milestone
  number: Int
  participants: UserConnection
  projectCards: ProjectCardConnection
  publishedAt?: DateTime
  reactionGroups?: ReactionGroup[]
  reactions: ReactionConnection
  repository: Repository
  resourcePath: URI
  state: IssueState
  timeline: IssueTimelineConnection
  title: String
  updatedAt: DateTime
  url: URI
  userContentEdits?: UserContentEditConnection
  viewerCanReact: Boolean
  viewerCanSubscribe: Boolean
  viewerCanUpdate: Boolean
  viewerCannotUpdateReasons: CommentCannotUpdateReason[]
  viewerDidAuthor: Boolean
  viewerSubscription: SubscriptionState
}

/*
 * An edge in a connection.

 */
export interface DeploymentStatusEdge {
  cursor: String
  node?: DeploymentStatus
}

/*
 * Autogenerated return type of DeleteProject

 */
export interface DeleteProjectPayload {
  clientMutationId?: String
  owner: ProjectOwner
}

/*
 * Represents a 'base_ref_force_pushed' event on a given pull request.

 */
export interface BaseRefForcePushedEvent extends Node {
  actor?: Actor
  afterCommit?: Commit
  beforeCommit?: Commit
  createdAt: DateTime
  id: ID_Output
  pullRequest: PullRequest
  ref?: Ref
}

/*
 * Represents a Git blob.

 */
export interface Blob extends Node, GitObject {
  abbreviatedOid: String
  byteSize: Int
  commitResourcePath: URI
  commitUrl: URI
  id: ID_Output
  isBinary: Boolean
  isTruncated: Boolean
  oid: GitObjectID
  repository: Repository
  text?: String
}

/*
 * The connection type for DeployKey.

 */
export interface DeployKeyConnection {
  edges?: DeployKeyEdge[]
  nodes?: DeployKey[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of DeleteProjectCard

 */
export interface DeleteProjectCardPayload {
  clientMutationId?: String
  column: ProjectColumn
  deletedCardId: ID_Output
}

/*
 * An edge in a connection.

 */
export interface DeploymentEdge {
  cursor: String
  node?: Deployment
}

/*
 * A card in a project.

 */
export interface ProjectCard extends Node {
  column?: ProjectColumn
  content?: ProjectCardItem
  createdAt: DateTime
  creator?: Actor
  databaseId?: Int
  id: ID_Output
  note?: String
  project: Project
  projectColumn: ProjectColumn
  resourcePath: URI
  state?: ProjectCardState
  updatedAt: DateTime
  url: URI
}

/*
 * A list of languages associated with the parent.

 */
export interface LanguageConnection {
  edges?: LanguageEdge[]
  nodes?: Language[]
  pageInfo: PageInfo
  totalCount: Int
  totalSize: Int
}

/*
 * Autogenerated return type of DeleteProjectColumn

 */
export interface DeleteProjectColumnPayload {
  clientMutationId?: String
  deletedColumnId: ID_Output
  project: Project
}

/*
 * Represents a range of information from a Git blame.

 */
export interface BlameRange {
  age: Int
  commit: Commit
  endingLine: Int
  startingLine: Int
}

/*
 * An edge in a connection.

 */
export interface ProjectCardEdge {
  cursor: String
  node?: ProjectCard
}

/*
 * Represents a 'moved_columns_in_project' event on a given issue or pull request.

 */
export interface MovedColumnsInProjectEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * Autogenerated return type of DeletePullRequestReview

 */
export interface DeletePullRequestReviewPayload {
  clientMutationId?: String
  pullRequestReview: PullRequestReview
}

/*
 * The connection type for ProtectedBranch.

 */
export interface ProtectedBranchConnection {
  edges?: ProtectedBranchEdge[]
  nodes?: ProtectedBranch[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * The connection type for ProjectCard.

 */
export interface ProjectCardConnection {
  edges?: ProjectCardEdge[]
  nodes?: ProjectCard[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * An edge in a connection.

 */
export interface PushAllowanceEdge {
  cursor: String
  node?: PushAllowance
}

/*
 * Autogenerated return type of DismissPullRequestReview

 */
export interface DismissPullRequestReviewPayload {
  clientMutationId?: String
  pullRequestReview: PullRequestReview
}

/*
 * An edge in a connection.

 */
export interface ReviewDismissalAllowanceEdge {
  cursor: String
  node?: ReviewDismissalAllowance
}

/*
 * A column inside a project.

 */
export interface ProjectColumn extends Node {
  cards: ProjectCardConnection
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
  name: String
  project: Project
  resourcePath: URI
  updatedAt: DateTime
  url: URI
}

/*
 * Represents a Git commit.

 */
export interface Commit extends Node, GitObject, Subscribable {
  abbreviatedOid: String
  additions: Int
  author?: GitActor
  authoredByCommitter: Boolean
  authoredDate: DateTime
  blame: Blame
  changedFiles: Int
  comments: CommitCommentConnection
  commitResourcePath: URI
  commitUrl: URI
  committedDate: DateTime
  committedViaWeb: Boolean
  committer?: GitActor
  deletions: Int
  history: CommitHistoryConnection
  id: ID_Output
  message: String
  messageBody: String
  messageBodyHTML: HTML
  messageHeadline: String
  messageHeadlineHTML: HTML
  oid: GitObjectID
  parents: CommitConnection
  pushedDate?: DateTime
  repository: Repository
  resourcePath: URI
  signature?: GitSignature
  status?: Status
  tarballUrl: URI
  tree: Tree
  treeResourcePath: URI
  treeUrl: URI
  url: URI
  viewerCanSubscribe: Boolean
  viewerSubscription: SubscriptionState
  zipballUrl: URI
}

/*
 * Autogenerated return type of LockLockable

 */
export interface LockLockablePayload {
  clientMutationId?: String
  lockedRecord?: Lockable
}

/*
 * Represents a Milestone object on a given repository.

 */
export interface Milestone extends Node, Closable, UniformResourceLocatable {
  closed: Boolean
  closedAt?: DateTime
  createdAt: DateTime
  creator?: Actor
  description?: String
  dueOn?: DateTime
  id: ID_Output
  issues: IssueConnection
  number: Int
  pullRequests: PullRequestConnection
  repository: Repository
  resourcePath: URI
  state: MilestoneState
  title: String
  updatedAt: DateTime
  url: URI
}

/*
 * An edge in a connection.

 */
export interface ProjectColumnEdge {
  cursor: String
  node?: ProjectColumn
}

/*
 * An edge in a connection.

 */
export interface TeamEdge {
  cursor: String
  node?: Team
}

/*
 * Autogenerated return type of MoveProjectCard

 */
export interface MoveProjectCardPayload {
  cardEdge: ProjectCardEdge
  clientMutationId?: String
}

/*
 * An edge in a connection.

 */
export interface LabelEdge {
  cursor: String
  node?: Label
}

/*
 * The connection type for ProjectColumn.

 */
export interface ProjectColumnConnection {
  edges?: ProjectColumnEdge[]
  nodes?: ProjectColumn[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents a Git tree entry.

 */
export interface TreeEntry {
  mode: Int
  name: String
  object?: GitObject
  oid: GitObjectID
  repository: Repository
  type: String
}

/*
 * Autogenerated return type of MoveProjectColumn

 */
export interface MoveProjectColumnPayload {
  clientMutationId?: String
  columnEdge: ProjectColumnEdge
}

/*
 * An edge in a connection.

 */
export interface PullRequestReviewCommentEdge {
  cursor: String
  node?: PullRequestReviewComment
}

/*
 * Represents a 'base_ref_changed' event on a given issue or pull request.

 */
export interface BaseRefChangedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * Represents a 'closed' event on any `Closable`.

 */
export interface ClosedEvent extends Node {
  actor?: Actor
  closable: Closable
  closer?: Closer
  commit?: Commit
  createdAt: DateTime
  id: ID_Output
}

/*
 * Autogenerated return type of RemoveOutsideCollaborator

 */
export interface RemoveOutsideCollaboratorPayload {
  clientMutationId?: String
  removedUser: User
}

/*
 * Represents a mention made by one issue or pull request to another.

 */
export interface CrossReferencedEvent extends Node, UniformResourceLocatable {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  isCrossRepository: Boolean
  referencedAt: DateTime
  resourcePath: URI
  source: ReferencedSubject
  target: ReferencedSubject
  url: URI
  willCloseTarget: Boolean
}

/*
 * Projects manage issues, pull requests and notes within a project owner.

 */
export interface Project extends Node, Closable, Updatable {
  body?: String
  bodyHTML: HTML
  closed: Boolean
  closedAt?: DateTime
  columns: ProjectColumnConnection
  createdAt: DateTime
  creator?: Actor
  databaseId?: Int
  id: ID_Output
  name: String
  number: Int
  owner: ProjectOwner
  pendingCards: ProjectCardConnection
  resourcePath: URI
  state: ProjectState
  updatedAt: DateTime
  url: URI
  viewerCanUpdate: Boolean
}

/*
 * Represents a 'renamed' event on a given issue or pull request

 */
export interface RenamedTitleEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  currentTitle: String
  id: ID_Output
  previousTitle: String
  subject: RenamedTitleSubject
}

/*
 * Autogenerated return type of RemoveReaction

 */
export interface RemoveReactionPayload {
  clientMutationId?: String
  reaction: Reaction
  subject: Reactable
}

/*
 * Represents a commit status.

 */
export interface Status extends Node {
  commit?: Commit
  context?: StatusContext
  contexts: StatusContext[]
  id: ID_Output
  state: StatusState
}

/*
 * An account on GitHub, with one or more owners, that has repositories, members and teams.

 */
export interface Organization extends Node, Actor, ProjectOwner, RepositoryOwner, UniformResourceLocatable {
  avatarUrl: URI
  databaseId?: Int
  description?: String
  email?: String
  id: ID_Output
  location?: String
  login: String
  members: UserConnection
  name?: String
  newTeamResourcePath: URI
  newTeamUrl: URI
  organizationBillingEmail?: String
  pinnedRepositories: RepositoryConnection
  project?: Project
  projects: ProjectConnection
  projectsResourcePath: URI
  projectsUrl: URI
  repositories: RepositoryConnection
  repository?: Repository
  resourcePath: URI
  samlIdentityProvider?: OrganizationIdentityProvider
  team?: Team
  teams: TeamConnection
  teamsResourcePath: URI
  teamsUrl: URI
  url: URI
  viewerCanAdminister: Boolean
  viewerCanCreateProjects: Boolean
  viewerCanCreateRepositories: Boolean
  viewerCanCreateTeams: Boolean
  viewerIsAMember: Boolean
  websiteUrl?: URI
}

/*
 * Represents an 'review_request_removed' event on a given pull request.

 */
export interface ReviewRequestRemovedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  pullRequest: PullRequest
  requestedReviewer?: RequestedReviewer
  subject?: User
}

/*
 * Autogenerated return type of RemoveStar

 */
export interface RemoveStarPayload {
  clientMutationId?: String
  starrable: Starrable
}

/*
 * The connection type for Commit.

 */
export interface CommitConnection {
  edges?: CommitEdge[]
  nodes?: Commit[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents information about the GitHub instance.

 */
export interface GitHubMetadata {
  gitHubServicesSha: String
  gitIpAddresses?: String[]
  hookIpAddresses?: String[]
  importerIpAddresses?: String[]
  isPasswordAuthenticationVerifiable: Boolean
  pagesIpAddresses?: String[]
}

/*
 * An edge in a connection.

 */
export interface MilestoneEdge {
  cursor: String
  node?: Milestone
}

/*
 * Autogenerated return type of RequestReviews

 */
export interface RequestReviewsPayload {
  clientMutationId?: String
  pullRequest: PullRequest
  requestedReviewersEdge: UserEdge
}

/*
 * A repository protected branch.

 */
export interface ProtectedBranch extends Node {
  creator?: Actor
  hasDismissableStaleReviews: Boolean
  hasRequiredReviews: Boolean
  hasRequiredStatusChecks: Boolean
  hasRestrictedPushes: Boolean
  hasRestrictedReviewDismissals: Boolean
  hasStrictRequiredStatusChecks: Boolean
  id: ID_Output
  isAdminEnforced: Boolean
  name: String
  pushAllowances: PushAllowanceConnection
  repository: Repository
  requiredStatusCheckContexts?: String[]
  reviewDismissalAllowances: ReviewDismissalAllowanceConnection
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  endCursor?: String
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
}

/*
 * Describes a License's conditions, permissions, and limitations

 */
export interface LicenseRule {
  description: String
  key: String
  label: String
}

/*
 * Autogenerated return type of SubmitPullRequestReview

 */
export interface SubmitPullRequestReviewPayload {
  clientMutationId?: String
  pullRequestReview: PullRequestReview
}

/*
 * A request for a user to review a pull request.

 */
export interface ReviewRequest extends Node {
  databaseId?: Int
  id: ID_Output
  pullRequest: PullRequest
  requestedReviewer?: RequestedReviewer
  reviewer?: User
}

/*
 * An edge in a connection.

 */
export interface MarketplaceListingEdge {
  cursor: String
  node?: MarketplaceListing
}

/*
 * The connection type for User.

 */
export interface TeamMemberConnection {
  edges?: TeamMemberEdge[]
  nodes?: User[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Autogenerated return type of UpdateProject

 */
export interface UpdateProjectPayload {
  clientMutationId?: String
  project: Project
}

/*
 * An edge in a connection.

 */
export interface PullRequestTimelineItemEdge {
  cursor: String
  node?: PullRequestTimelineItem
}

/*
 * Look up Marketplace Listings

 */
export interface MarketplaceListingConnection {
  edges?: MarketplaceListingEdge[]
  nodes?: MarketplaceListing[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * Represents an 'unlabeled' event on a given issue or pull request.

 */
export interface UnlabeledEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  label: Label
  labelable: Labelable
}

/*
 * Autogenerated return type of UpdateProjectCard

 */
export interface UpdateProjectCardPayload {
  clientMutationId?: String
  projectCard: ProjectCard
}

/*
 * Represents a 'head_ref_restored' event on a given pull request.

 */
export interface HeadRefRestoredEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  pullRequest: PullRequest
}

/*
 * Represents a 'added_to_project' event on a given issue or pull request.

 */
export interface AddedToProjectEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * Represents a given language found in repositories.

 */
export interface Language extends Node {
  color?: String
  id: ID_Output
  name: String
}

/*
 * Autogenerated return type of UpdateProjectColumn

 */
export interface UpdateProjectColumnPayload {
  clientMutationId?: String
  projectColumn: ProjectColumn
}

/*
 * Represents a 'mentioned' event on a given issue or pull request.

 */
export interface MentionedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  id: ID_Output
}

/*
 * A listing in the GitHub integration marketplace.

 */
export interface MarketplaceListing extends Node {
  companyUrl?: URI
  configurationResourcePath: URI
  configurationUrl: URI
  documentationUrl?: URI
  extendedDescription?: String
  extendedDescriptionHTML: HTML
  fullDescription: String
  fullDescriptionHTML: HTML
  hasApprovalBeenRequested: Boolean
  hasPublishedFreeTrialPlans: Boolean
  hasTermsOfService: Boolean
  howItWorks?: String
  howItWorksHTML: HTML
  id: ID_Output
  installationUrl?: URI
  installedForViewer: Boolean
  isApproved: Boolean
  isDelisted: Boolean
  isDraft: Boolean
  isPaid: Boolean
  isRejected: Boolean
  logoBackgroundColor: String
  logoUrl?: URI
  name: String
  normalizedShortDescription: String
  pricingUrl?: URI
  primaryCategory: MarketplaceCategory
  privacyPolicyUrl: URI
  resourcePath: URI
  screenshotUrls: String[]
  secondaryCategory?: MarketplaceCategory
  shortDescription: String
  slug: String
  statusUrl?: URI
  supportEmail?: String
  supportUrl: URI
  termsOfServiceUrl?: URI
  url: URI
  viewerCanAddPlans: Boolean
  viewerCanApprove: Boolean
  viewerCanDelist: Boolean
  viewerCanEdit: Boolean
  viewerCanEditCategories: Boolean
  viewerCanEditPlans: Boolean
  viewerCanRedraft: Boolean
  viewerCanReject: Boolean
  viewerCanRequestApproval: Boolean
  viewerHasPurchased: Boolean
  viewerHasPurchasedForAllOrganizations: Boolean
  viewerIsListingAdmin: Boolean
}

/*
 * An edge in a connection.

 */
export interface OrganizationInvitationEdge {
  cursor: String
  node?: OrganizationInvitation
}

/*
 * Represents an 'unsubscribed' event on a given `Subscribable`.

 */
export interface UnsubscribedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  id: ID_Output
  subscribable: Subscribable
}

/*
 * A public description of a Marketplace category.

 */
export interface MarketplaceCategory {
  description?: String
  howItWorks?: String
  name: String
  primaryListingCount: Int
  resourcePath: URI
  secondaryListingCount: Int
  slug: String
  url: URI
}

/*
 * Autogenerated return type of UpdatePullRequestReviewComment

 */
export interface UpdatePullRequestReviewCommentPayload {
  clientMutationId?: String
  pullRequestReviewComment: PullRequestReviewComment
}

/*
 * Autogenerated return type of UpdateTopics

 */
export interface UpdateTopicsPayload {
  clientMutationId?: String
  invalidTopicNames?: String[]
  repository: Repository
}

/*
 * Autogenerated return type of UpdatePullRequestReview

 */
export interface UpdatePullRequestReviewPayload {
  clientMutationId?: String
  pullRequestReview: PullRequestReview
}

/*
 * Represents a 'deployed' event on a given pull request.

 */
export interface DeployedEvent extends Node {
  actor?: Actor
  createdAt: DateTime
  databaseId?: Int
  deployment: Deployment
  id: ID_Output
  pullRequest: PullRequest
  ref?: Ref
}

/*
 * The connection type for PullRequestReview.

 */
export interface PullRequestReviewConnection {
  edges?: PullRequestReviewEdge[]
  nodes?: PullRequestReview[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * An edge in a connection.

 */
export interface RefEdge {
  cursor: String
  node?: Ref
}

/*
 * A list of projects associated with the owner.

 */
export interface ProjectConnection {
  edges?: ProjectEdge[]
  nodes?: Project[]
  pageInfo: PageInfo
  totalCount: Int
}

/*
 * A repository deploy key.

 */
export interface DeployKey extends Node {
  createdAt: DateTime
  id: ID_Output
  key: String
  readOnly: Boolean
  title: String
  verified: Boolean
}

/*
Git SSH string
*/
export type GitSSHRemote = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
A Git object ID.
*/
export type GitObjectID = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
An ISO-8601 encoded date string.
*/
export type Date = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
A valid x509 certificate string
*/
export type X509Certificate = string

/*
An ISO-8601 encoded UTC date string.
*/
export type DateTime = Date | string

/*
An ISO-8601 encoded date string. Unlike the DateTime type, GitTimestamp is not converted in UTC.
*/
export type GitTimestamp = string

/*
An RFC 3986, RFC 3987, and RFC 6570 (level 4) compliant URI string.
*/
export type URI = string

/*
A string containing HTML code.
*/
export type HTML = string

/*
 * Types that can be an actor.

 */
export type PushAllowanceActor = User | Team

/*
 * Types that can be inside a Milestone.

 */
export type MilestoneItem = Issue | PullRequest

/*
 * Types that can be an actor.

 */
export type ReviewDismissalAllowanceActor = User | Team

/*
 * An item in an issue timeline

 */
export type IssueTimelineItem = Commit | IssueComment | CrossReferencedEvent | ClosedEvent | ReopenedEvent | SubscribedEvent | UnsubscribedEvent | ReferencedEvent | AssignedEvent | UnassignedEvent | LabeledEvent | UnlabeledEvent | MilestonedEvent | DemilestonedEvent | RenamedTitleEvent | LockedEvent | UnlockedEvent

/*
 * Types that can be requested reviewers.

 */
export type RequestedReviewer = User | Team

/*
 * An item in an pull request timeline

 */
export type PullRequestTimelineItem = Commit | CommitCommentThread | PullRequestReview | PullRequestReviewThread | PullRequestReviewComment | IssueComment | ClosedEvent | ReopenedEvent | SubscribedEvent | UnsubscribedEvent | MergedEvent | ReferencedEvent | CrossReferencedEvent | AssignedEvent | UnassignedEvent | LabeledEvent | UnlabeledEvent | MilestonedEvent | DemilestonedEvent | RenamedTitleEvent | LockedEvent | UnlockedEvent | DeployedEvent | HeadRefDeletedEvent | HeadRefRestoredEvent | HeadRefForcePushedEvent | BaseRefForcePushedEvent | ReviewRequestedEvent | ReviewRequestRemovedEvent | ReviewDismissedEvent

/*
 * The object which triggered a `ClosedEvent`.

 */
export type Closer = Commit | PullRequest

/*
 * Any referencable object

 */
export type ReferencedSubject = Issue | PullRequest

/*
 * Types that can be inside Collection Items.

 */
export type CollectionItemContent = Repository | Organization | User

/*
 * Types that can be inside Project Cards.

 */
export type ProjectCardItem = Issue | PullRequest

/*
 * An object which has a renamable title

 */
export type RenamedTitleSubject = Issue | PullRequest

/*
 * Used for return value of Repository.issueOrPullRequest.

 */
export type IssueOrPullRequest = Issue | PullRequest

/*
 * The results of a search.

 */
export type SearchResultItem = Issue | PullRequest | Repository | User | Organization | MarketplaceListing