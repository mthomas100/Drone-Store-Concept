import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type FileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type MarketingCardInput = {
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  header: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type MarketingCards = {
  __typename?: 'MarketingCards';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  header: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type MarketingCardsAggregator = {
  __typename?: 'MarketingCardsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MarketingCardsConnection = {
  __typename?: 'MarketingCardsConnection';
  aggregate?: Maybe<MarketingCardsAggregator>;
  groupBy?: Maybe<MarketingCardsGroupBy>;
  values?: Maybe<Array<Maybe<MarketingCards>>>;
};

export type MarketingCardsConnectionCreated_At = {
  __typename?: 'MarketingCardsConnectionCreated_at';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MarketingCardsConnectionDescription = {
  __typename?: 'MarketingCardsConnectionDescription';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MarketingCardsConnectionHeader = {
  __typename?: 'MarketingCardsConnectionHeader';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type MarketingCardsConnectionId = {
  __typename?: 'MarketingCardsConnectionId';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MarketingCardsConnectionImage = {
  __typename?: 'MarketingCardsConnectionImage';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type MarketingCardsConnectionPublished_At = {
  __typename?: 'MarketingCardsConnectionPublished_at';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MarketingCardsConnectionUpdated_At = {
  __typename?: 'MarketingCardsConnectionUpdated_at';
  connection?: Maybe<MarketingCardsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type MarketingCardsGroupBy = {
  __typename?: 'MarketingCardsGroupBy';
  created_at?: Maybe<Array<Maybe<MarketingCardsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<MarketingCardsConnectionDescription>>>;
  header?: Maybe<Array<Maybe<MarketingCardsConnectionHeader>>>;
  id?: Maybe<Array<Maybe<MarketingCardsConnectionId>>>;
  image?: Maybe<Array<Maybe<MarketingCardsConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<MarketingCardsConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<MarketingCardsConnectionUpdated_At>>>;
};

export type Morph = I18NLocale | MarketingCards | MarketingCardsAggregator | MarketingCardsConnection | MarketingCardsConnectionCreated_At | MarketingCardsConnectionDescription | MarketingCardsConnectionHeader | MarketingCardsConnectionId | MarketingCardsConnectionImage | MarketingCardsConnectionPublished_At | MarketingCardsConnectionUpdated_At | MarketingCardsGroupBy | Products | ProductsAggregator | ProductsConnection | ProductsConnectionCreated_At | ProductsConnectionDescription | ProductsConnectionId | ProductsConnectionImage | ProductsConnectionName | ProductsConnectionPublished_At | ProductsConnectionUpdated_At | ProductsGroupBy | Testimonials | TestimonialsAggregator | TestimonialsConnection | TestimonialsConnectionCreated_At | TestimonialsConnectionId | TestimonialsConnectionName | TestimonialsConnectionPublished_At | TestimonialsConnectionTestimonial | TestimonialsConnectionTitle | TestimonialsConnectionUpdated_At | TestimonialsGroupBy | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateMarketingCardPayload | CreateProductPayload | CreateRolePayload | CreateTestimonialPayload | CreateUserPayload | DeleteFilePayload | DeleteMarketingCardPayload | DeleteProductPayload | DeleteRolePayload | DeleteTestimonialPayload | DeleteUserPayload | UpdateMarketingCardPayload | UpdateProductPayload | UpdateRolePayload | UpdateTestimonialPayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createMarketingCard?: Maybe<CreateMarketingCardPayload>;
  createProduct?: Maybe<CreateProductPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  createTestimonial?: Maybe<CreateTestimonialPayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteMarketingCard?: Maybe<DeleteMarketingCardPayload>;
  deleteProduct?: Maybe<DeleteProductPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteTestimonial?: Maybe<DeleteTestimonialPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFile;
  updateMarketingCard?: Maybe<UpdateMarketingCardPayload>;
  updateProduct?: Maybe<UpdateProductPayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  updateTestimonial?: Maybe<UpdateTestimonialPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateMarketingCardArgs = {
  input?: Maybe<CreateMarketingCardInput>;
};


export type MutationCreateProductArgs = {
  input?: Maybe<CreateProductInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationCreateTestimonialArgs = {
  input?: Maybe<CreateTestimonialInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationDeleteMarketingCardArgs = {
  input?: Maybe<DeleteMarketingCardInput>;
};


export type MutationDeleteProductArgs = {
  input?: Maybe<DeleteProductInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationDeleteTestimonialArgs = {
  input?: Maybe<DeleteTestimonialInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateMarketingCardArgs = {
  input?: Maybe<UpdateMarketingCardInput>;
};


export type MutationUpdateProductArgs = {
  input?: Maybe<UpdateProductInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationUpdateTestimonialArgs = {
  input?: Maybe<UpdateTestimonialInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<FileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type ProductInput = {
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Products = {
  __typename?: 'Products';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type ProductsAggregator = {
  __typename?: 'ProductsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  aggregate?: Maybe<ProductsAggregator>;
  groupBy?: Maybe<ProductsGroupBy>;
  values?: Maybe<Array<Maybe<Products>>>;
};

export type ProductsConnectionCreated_At = {
  __typename?: 'ProductsConnectionCreated_at';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductsConnectionDescription = {
  __typename?: 'ProductsConnectionDescription';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductsConnectionId = {
  __typename?: 'ProductsConnectionId';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductsConnectionImage = {
  __typename?: 'ProductsConnectionImage';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type ProductsConnectionName = {
  __typename?: 'ProductsConnectionName';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type ProductsConnectionPublished_At = {
  __typename?: 'ProductsConnectionPublished_at';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductsConnectionUpdated_At = {
  __typename?: 'ProductsConnectionUpdated_at';
  connection?: Maybe<ProductsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type ProductsGroupBy = {
  __typename?: 'ProductsGroupBy';
  created_at?: Maybe<Array<Maybe<ProductsConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<ProductsConnectionDescription>>>;
  id?: Maybe<Array<Maybe<ProductsConnectionId>>>;
  image?: Maybe<Array<Maybe<ProductsConnectionImage>>>;
  name?: Maybe<Array<Maybe<ProductsConnectionName>>>;
  published_at?: Maybe<Array<Maybe<ProductsConnectionPublished_At>>>;
  updated_at?: Maybe<Array<Maybe<ProductsConnectionUpdated_At>>>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  marketingCard?: Maybe<MarketingCards>;
  marketingCards?: Maybe<Array<Maybe<MarketingCards>>>;
  marketingCardsConnection?: Maybe<MarketingCardsConnection>;
  me?: Maybe<UsersPermissionsMe>;
  product?: Maybe<Products>;
  products?: Maybe<Array<Maybe<Products>>>;
  productsConnection?: Maybe<ProductsConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  testimonial?: Maybe<Testimonials>;
  testimonials?: Maybe<Array<Maybe<Testimonials>>>;
  testimonialsConnection?: Maybe<TestimonialsConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMarketingCardArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMarketingCardsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMarketingCardsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProductsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTestimonialArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryTestimonialsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryTestimonialsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<PublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type TestimonialInput = {
  created_by?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  testimonial: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type Testimonials = {
  __typename?: 'Testimonials';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  testimonial: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type TestimonialsAggregator = {
  __typename?: 'TestimonialsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type TestimonialsConnection = {
  __typename?: 'TestimonialsConnection';
  aggregate?: Maybe<TestimonialsAggregator>;
  groupBy?: Maybe<TestimonialsGroupBy>;
  values?: Maybe<Array<Maybe<Testimonials>>>;
};

export type TestimonialsConnectionCreated_At = {
  __typename?: 'TestimonialsConnectionCreated_at';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TestimonialsConnectionId = {
  __typename?: 'TestimonialsConnectionId';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type TestimonialsConnectionName = {
  __typename?: 'TestimonialsConnectionName';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TestimonialsConnectionPublished_At = {
  __typename?: 'TestimonialsConnectionPublished_at';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TestimonialsConnectionTestimonial = {
  __typename?: 'TestimonialsConnectionTestimonial';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TestimonialsConnectionTitle = {
  __typename?: 'TestimonialsConnectionTitle';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type TestimonialsConnectionUpdated_At = {
  __typename?: 'TestimonialsConnectionUpdated_at';
  connection?: Maybe<TestimonialsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type TestimonialsGroupBy = {
  __typename?: 'TestimonialsGroupBy';
  created_at?: Maybe<Array<Maybe<TestimonialsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<TestimonialsConnectionId>>>;
  name?: Maybe<Array<Maybe<TestimonialsConnectionName>>>;
  published_at?: Maybe<Array<Maybe<TestimonialsConnectionPublished_At>>>;
  testimonial?: Maybe<Array<Maybe<TestimonialsConnectionTestimonial>>>;
  title?: Maybe<Array<Maybe<TestimonialsConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<TestimonialsConnectionUpdated_At>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateMarketingCardInput = {
  data?: Maybe<MarketingCardInput>;
};

export type CreateMarketingCardPayload = {
  __typename?: 'createMarketingCardPayload';
  marketingCard?: Maybe<MarketingCards>;
};

export type CreateProductInput = {
  data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
  __typename?: 'createProductPayload';
  product?: Maybe<Products>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateTestimonialInput = {
  data?: Maybe<TestimonialInput>;
};

export type CreateTestimonialPayload = {
  __typename?: 'createTestimonialPayload';
  testimonial?: Maybe<Testimonials>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteMarketingCardInput = {
  where?: Maybe<InputId>;
};

export type DeleteMarketingCardPayload = {
  __typename?: 'deleteMarketingCardPayload';
  marketingCard?: Maybe<MarketingCards>;
};

export type DeleteProductInput = {
  where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
  __typename?: 'deleteProductPayload';
  product?: Maybe<Products>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteTestimonialInput = {
  where?: Maybe<InputId>;
};

export type DeleteTestimonialPayload = {
  __typename?: 'deleteTestimonialPayload';
  testimonial?: Maybe<Testimonials>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type EditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMarketingCardInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  header?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProductInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditTestimonialInput = {
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  testimonial?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type UpdateMarketingCardInput = {
  data?: Maybe<EditMarketingCardInput>;
  where?: Maybe<InputId>;
};

export type UpdateMarketingCardPayload = {
  __typename?: 'updateMarketingCardPayload';
  marketingCard?: Maybe<MarketingCards>;
};

export type UpdateProductInput = {
  data?: Maybe<EditProductInput>;
  where?: Maybe<InputId>;
};

export type UpdateProductPayload = {
  __typename?: 'updateProductPayload';
  product?: Maybe<Products>;
};

export type UpdateRoleInput = {
  data?: Maybe<EditRoleInput>;
  where?: Maybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateTestimonialInput = {
  data?: Maybe<EditTestimonialInput>;
  where?: Maybe<InputId>;
};

export type UpdateTestimonialPayload = {
  __typename?: 'updateTestimonialPayload';
  testimonial?: Maybe<Testimonials>;
};

export type UpdateUserInput = {
  data?: Maybe<EditUserInput>;
  where?: Maybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { __typename?: 'Query', marketingCards?: Array<{ __typename?: 'MarketingCards', header: string, description: string, image?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined };


export const Document = gql`
    {
  marketingCards {
    header
    description
    image {
      url
    }
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Query, QueryVariables>(Document, options);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, options);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;