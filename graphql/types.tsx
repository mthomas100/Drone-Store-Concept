import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {};
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
    __typename?: "AdminUser";
    id: Scalars["ID"];
    username?: Maybe<Scalars["String"]>;
    firstname: Scalars["String"];
    lastname: Scalars["String"];
};

export type ComponentComponentsSpecification = {
    __typename?: "ComponentComponentsSpecification";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    spec: Scalars["String"];
    description: Scalars["String"];
};

export type ComponentComponentsSpecificationInput = {
    spec: Scalars["String"];
    description: Scalars["String"];
};

export type ComponentComponentsTextDarkness = {
    __typename?: "ComponentComponentsTextDarkness";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    darkness?: Maybe<Enum_Componentcomponentstextdarkness_Darkness>;
};

export type ComponentComponentsTextDarknessInput = {
    darkness?: Maybe<Enum_Componentcomponentstextdarkness_Darkness>;
};

export enum Enum_Componentcomponentstextdarkness_Darkness {
    Light = "light",
    Medium = "medium",
    Dark = "dark",
}

export type FileInfoInput = {
    name?: Maybe<Scalars["String"]>;
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
};

export type FileInput = {
    name: Scalars["String"];
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    formats?: Maybe<Scalars["JSON"]>;
    hash: Scalars["String"];
    ext?: Maybe<Scalars["String"]>;
    mime: Scalars["String"];
    size: Scalars["Float"];
    url: Scalars["String"];
    previewUrl?: Maybe<Scalars["String"]>;
    provider: Scalars["String"];
    provider_metadata?: Maybe<Scalars["JSON"]>;
    related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type Hero = {
    __typename?: "Hero";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    header: Scalars["String"];
    description: Scalars["String"];
    buttonText: Scalars["String"];
    image?: Maybe<UploadFile>;
    published_at?: Maybe<Scalars["DateTime"]>;
};

export type HeroInput = {
    header: Scalars["String"];
    description: Scalars["String"];
    buttonText: Scalars["String"];
    image?: Maybe<Scalars["ID"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type I18NLocale = {
    __typename?: "I18NLocale";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
};

export type InputId = {
    id: Scalars["ID"];
};

export type LocaleInput = {
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type MarketingCard = {
    __typename?: "MarketingCard";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    header: Scalars["String"];
    description: Scalars["String"];
    image?: Maybe<UploadFile>;
    headerDarkness?: Maybe<ComponentComponentsTextDarkness>;
    descriptionDarkness?: Maybe<ComponentComponentsTextDarkness>;
};

export type MarketingCardAggregator = {
    __typename?: "MarketingCardAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type MarketingCardConnection = {
    __typename?: "MarketingCardConnection";
    values?: Maybe<Array<Maybe<MarketingCard>>>;
    groupBy?: Maybe<MarketingCardGroupBy>;
    aggregate?: Maybe<MarketingCardAggregator>;
};

export type MarketingCardConnectionCreatedAt = {
    __typename?: "MarketingCardConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionDescription = {
    __typename?: "MarketingCardConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionDescriptionDarkness = {
    __typename?: "MarketingCardConnectionDescriptionDarkness";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionHeader = {
    __typename?: "MarketingCardConnectionHeader";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionHeaderDarkness = {
    __typename?: "MarketingCardConnectionHeaderDarkness";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionId = {
    __typename?: "MarketingCardConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionImage = {
    __typename?: "MarketingCardConnectionImage";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionUpdatedAt = {
    __typename?: "MarketingCardConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnection_Id = {
    __typename?: "MarketingCardConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardGroupBy = {
    __typename?: "MarketingCardGroupBy";
    id?: Maybe<Array<Maybe<MarketingCardConnectionId>>>;
    _id?: Maybe<Array<Maybe<MarketingCardConnection_Id>>>;
    createdAt?: Maybe<Array<Maybe<MarketingCardConnectionCreatedAt>>>;
    updatedAt?: Maybe<Array<Maybe<MarketingCardConnectionUpdatedAt>>>;
    header?: Maybe<Array<Maybe<MarketingCardConnectionHeader>>>;
    description?: Maybe<Array<Maybe<MarketingCardConnectionDescription>>>;
    image?: Maybe<Array<Maybe<MarketingCardConnectionImage>>>;
    headerDarkness?: Maybe<Array<Maybe<MarketingCardConnectionHeaderDarkness>>>;
    descriptionDarkness?: Maybe<
        Array<Maybe<MarketingCardConnectionDescriptionDarkness>>
    >;
};

export type MarketingCardInput = {
    header: Scalars["String"];
    description: Scalars["String"];
    image?: Maybe<Scalars["ID"]>;
    headerDarkness?: Maybe<ComponentComponentsTextDarknessInput>;
    descriptionDarkness?: Maybe<ComponentComponentsTextDarknessInput>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type Morph =
    | UsersPermissionsMe
    | UsersPermissionsMeRole
    | UsersPermissionsLoginPayload
    | UserPermissionsPasswordPayload
    | Hero
    | UpdateHeroPayload
    | DeleteHeroPayload
    | MarketingCard
    | MarketingCardConnection
    | MarketingCardAggregator
    | MarketingCardGroupBy
    | MarketingCardConnectionId
    | MarketingCardConnection_Id
    | MarketingCardConnectionCreatedAt
    | MarketingCardConnectionUpdatedAt
    | MarketingCardConnectionHeader
    | MarketingCardConnectionDescription
    | MarketingCardConnectionImage
    | MarketingCardConnectionHeaderDarkness
    | MarketingCardConnectionDescriptionDarkness
    | CreateMarketingCardPayload
    | UpdateMarketingCardPayload
    | DeleteMarketingCardPayload
    | Product
    | ProductConnection
    | ProductAggregator
    | ProductGroupBy
    | ProductConnectionId
    | ProductConnection_Id
    | ProductConnectionCreatedAt
    | ProductConnectionUpdatedAt
    | ProductConnectionName
    | ProductConnectionDescription
    | ProductConnectionImage
    | ProductConnectionSlug
    | CreateProductPayload
    | UpdateProductPayload
    | DeleteProductPayload
    | SellingPoint
    | UpdateSellingPointPayload
    | DeleteSellingPointPayload
    | Testimonial
    | TestimonialConnection
    | TestimonialAggregator
    | TestimonialGroupBy
    | TestimonialConnectionId
    | TestimonialConnection_Id
    | TestimonialConnectionCreatedAt
    | TestimonialConnectionUpdatedAt
    | TestimonialConnectionName
    | TestimonialConnectionTitle
    | TestimonialConnectionImage
    | TestimonialConnectionTestimonial
    | CreateTestimonialPayload
    | UpdateTestimonialPayload
    | DeleteTestimonialPayload
    | I18NLocale
    | UploadFile
    | UploadFileConnection
    | UploadFileAggregator
    | UploadFileAggregatorSum
    | UploadFileAggregatorAvg
    | UploadFileAggregatorMin
    | UploadFileAggregatorMax
    | UploadFileGroupBy
    | UploadFileConnectionId
    | UploadFileConnection_Id
    | UploadFileConnectionCreatedAt
    | UploadFileConnectionUpdatedAt
    | UploadFileConnectionName
    | UploadFileConnectionAlternativeText
    | UploadFileConnectionCaption
    | UploadFileConnectionWidth
    | UploadFileConnectionHeight
    | UploadFileConnectionFormats
    | UploadFileConnectionHash
    | UploadFileConnectionExt
    | UploadFileConnectionMime
    | UploadFileConnectionSize
    | UploadFileConnectionUrl
    | UploadFileConnectionPreviewUrl
    | UploadFileConnectionProvider
    | UploadFileConnectionProvider_Metadata
    | DeleteFilePayload
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsRoleConnection
    | UsersPermissionsRoleAggregator
    | UsersPermissionsRoleGroupBy
    | UsersPermissionsRoleConnectionId
    | UsersPermissionsRoleConnection_Id
    | UsersPermissionsRoleConnectionName
    | UsersPermissionsRoleConnectionDescription
    | UsersPermissionsRoleConnectionType
    | CreateRolePayload
    | UpdateRolePayload
    | DeleteRolePayload
    | UsersPermissionsUser
    | UsersPermissionsUserConnection
    | UsersPermissionsUserAggregator
    | UsersPermissionsUserGroupBy
    | UsersPermissionsUserConnectionId
    | UsersPermissionsUserConnection_Id
    | UsersPermissionsUserConnectionCreatedAt
    | UsersPermissionsUserConnectionUpdatedAt
    | UsersPermissionsUserConnectionUsername
    | UsersPermissionsUserConnectionEmail
    | UsersPermissionsUserConnectionProvider
    | UsersPermissionsUserConnectionConfirmed
    | UsersPermissionsUserConnectionBlocked
    | UsersPermissionsUserConnectionRole
    | CreateUserPayload
    | UpdateUserPayload
    | DeleteUserPayload
    | ComponentComponentsSpecification
    | ComponentComponentsTextDarkness;

export type Mutation = {
    __typename?: "Mutation";
    updateHero?: Maybe<UpdateHeroPayload>;
    deleteHero?: Maybe<DeleteHeroPayload>;
    createMarketingCard?: Maybe<CreateMarketingCardPayload>;
    updateMarketingCard?: Maybe<UpdateMarketingCardPayload>;
    deleteMarketingCard?: Maybe<DeleteMarketingCardPayload>;
    createProduct?: Maybe<CreateProductPayload>;
    updateProduct?: Maybe<UpdateProductPayload>;
    deleteProduct?: Maybe<DeleteProductPayload>;
    updateSellingPoint?: Maybe<UpdateSellingPointPayload>;
    deleteSellingPoint?: Maybe<DeleteSellingPointPayload>;
    createTestimonial?: Maybe<CreateTestimonialPayload>;
    updateTestimonial?: Maybe<UpdateTestimonialPayload>;
    deleteTestimonial?: Maybe<DeleteTestimonialPayload>;
    /** Delete one file */
    deleteFile?: Maybe<DeleteFilePayload>;
    /** Create a new role */
    createRole?: Maybe<CreateRolePayload>;
    /** Update an existing role */
    updateRole?: Maybe<UpdateRolePayload>;
    /** Delete an existing role */
    deleteRole?: Maybe<DeleteRolePayload>;
    /** Create a new user */
    createUser?: Maybe<CreateUserPayload>;
    /** Update an existing user */
    updateUser?: Maybe<UpdateUserPayload>;
    /** Delete an existing user */
    deleteUser?: Maybe<DeleteUserPayload>;
    upload: UploadFile;
    multipleUpload: Array<Maybe<UploadFile>>;
    updateFileInfo: UploadFile;
    login: UsersPermissionsLoginPayload;
    register: UsersPermissionsLoginPayload;
    forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
    resetPassword?: Maybe<UsersPermissionsLoginPayload>;
    emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationUpdateHeroArgs = {
    input?: Maybe<UpdateHeroInput>;
};

export type MutationCreateMarketingCardArgs = {
    input?: Maybe<CreateMarketingCardInput>;
};

export type MutationUpdateMarketingCardArgs = {
    input?: Maybe<UpdateMarketingCardInput>;
};

export type MutationDeleteMarketingCardArgs = {
    input?: Maybe<DeleteMarketingCardInput>;
};

export type MutationCreateProductArgs = {
    input?: Maybe<CreateProductInput>;
};

export type MutationUpdateProductArgs = {
    input?: Maybe<UpdateProductInput>;
};

export type MutationDeleteProductArgs = {
    input?: Maybe<DeleteProductInput>;
};

export type MutationUpdateSellingPointArgs = {
    input?: Maybe<UpdateSellingPointInput>;
};

export type MutationCreateTestimonialArgs = {
    input?: Maybe<CreateTestimonialInput>;
};

export type MutationUpdateTestimonialArgs = {
    input?: Maybe<UpdateTestimonialInput>;
};

export type MutationDeleteTestimonialArgs = {
    input?: Maybe<DeleteTestimonialInput>;
};

export type MutationDeleteFileArgs = {
    input?: Maybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
    input?: Maybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
    input?: Maybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
    input?: Maybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
    input?: Maybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
    input?: Maybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
    input?: Maybe<DeleteUserInput>;
};

export type MutationUploadArgs = {
    refId?: Maybe<Scalars["ID"]>;
    ref?: Maybe<Scalars["String"]>;
    field?: Maybe<Scalars["String"]>;
    source?: Maybe<Scalars["String"]>;
    info?: Maybe<FileInfoInput>;
    file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
    refId?: Maybe<Scalars["ID"]>;
    ref?: Maybe<Scalars["String"]>;
    field?: Maybe<Scalars["String"]>;
    source?: Maybe<Scalars["String"]>;
    files: Array<Maybe<Scalars["Upload"]>>;
};

export type MutationUpdateFileInfoArgs = {
    id: Scalars["ID"];
    info: FileInfoInput;
};

export type MutationLoginArgs = {
    input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
    input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
    email: Scalars["String"];
};

export type MutationResetPasswordArgs = {
    password: Scalars["String"];
    passwordConfirmation: Scalars["String"];
    code: Scalars["String"];
};

export type MutationEmailConfirmationArgs = {
    confirmation: Scalars["String"];
};

export type Product = {
    __typename?: "Product";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    name: Scalars["String"];
    description: Scalars["String"];
    image?: Maybe<UploadFile>;
    slug: Scalars["String"];
};

export type ProductAggregator = {
    __typename?: "ProductAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type ProductConnection = {
    __typename?: "ProductConnection";
    values?: Maybe<Array<Maybe<Product>>>;
    groupBy?: Maybe<ProductGroupBy>;
    aggregate?: Maybe<ProductAggregator>;
};

export type ProductConnectionCreatedAt = {
    __typename?: "ProductConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionDescription = {
    __typename?: "ProductConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionId = {
    __typename?: "ProductConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionImage = {
    __typename?: "ProductConnectionImage";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionName = {
    __typename?: "ProductConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionSlug = {
    __typename?: "ProductConnectionSlug";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdatedAt = {
    __typename?: "ProductConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnection_Id = {
    __typename?: "ProductConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductGroupBy = {
    __typename?: "ProductGroupBy";
    id?: Maybe<Array<Maybe<ProductConnectionId>>>;
    _id?: Maybe<Array<Maybe<ProductConnection_Id>>>;
    createdAt?: Maybe<Array<Maybe<ProductConnectionCreatedAt>>>;
    updatedAt?: Maybe<Array<Maybe<ProductConnectionUpdatedAt>>>;
    name?: Maybe<Array<Maybe<ProductConnectionName>>>;
    description?: Maybe<Array<Maybe<ProductConnectionDescription>>>;
    image?: Maybe<Array<Maybe<ProductConnectionImage>>>;
    slug?: Maybe<Array<Maybe<ProductConnectionSlug>>>;
};

export type ProductInput = {
    name: Scalars["String"];
    description: Scalars["String"];
    image?: Maybe<Scalars["ID"]>;
    slug: Scalars["String"];
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export enum PublicationState {
    Live = "LIVE",
    Preview = "PREVIEW",
}

export type Query = {
    __typename?: "Query";
    hero?: Maybe<Hero>;
    marketingCard?: Maybe<MarketingCard>;
    marketingCards?: Maybe<Array<Maybe<MarketingCard>>>;
    marketingCardsConnection?: Maybe<MarketingCardConnection>;
    product?: Maybe<Product>;
    products?: Maybe<Array<Maybe<Product>>>;
    productsConnection?: Maybe<ProductConnection>;
    sellingPoint?: Maybe<SellingPoint>;
    testimonial?: Maybe<Testimonial>;
    testimonials?: Maybe<Array<Maybe<Testimonial>>>;
    testimonialsConnection?: Maybe<TestimonialConnection>;
    files?: Maybe<Array<Maybe<UploadFile>>>;
    filesConnection?: Maybe<UploadFileConnection>;
    role?: Maybe<UsersPermissionsRole>;
    /** Retrieve all the existing roles. You can't apply filters on this query. */
    roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
    rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
    user?: Maybe<UsersPermissionsUser>;
    users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
    usersConnection?: Maybe<UsersPermissionsUserConnection>;
    me?: Maybe<UsersPermissionsMe>;
};

export type QueryHeroArgs = {
    publicationState?: Maybe<PublicationState>;
};

export type QueryMarketingCardArgs = {
    id: Scalars["ID"];
    publicationState?: Maybe<PublicationState>;
};

export type QueryMarketingCardsArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
    publicationState?: Maybe<PublicationState>;
};

export type QueryMarketingCardsConnectionArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type QueryProductArgs = {
    id: Scalars["ID"];
    publicationState?: Maybe<PublicationState>;
};

export type QueryProductsArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
    publicationState?: Maybe<PublicationState>;
};

export type QueryProductsConnectionArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type QuerySellingPointArgs = {
    publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialArgs = {
    id: Scalars["ID"];
    publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialsArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
    publicationState?: Maybe<PublicationState>;
};

export type QueryTestimonialsConnectionArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
    publicationState?: Maybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type QueryRoleArgs = {
    id: Scalars["ID"];
    publicationState?: Maybe<PublicationState>;
};

export type QueryRolesArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
    publicationState?: Maybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
    id: Scalars["ID"];
    publicationState?: Maybe<PublicationState>;
};

export type QueryUsersArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
    publicationState?: Maybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type RoleInput = {
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type SellingPoint = {
    __typename?: "SellingPoint";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    header: Scalars["String"];
    description: Scalars["String"];
    specifications?: Maybe<Array<Maybe<ComponentComponentsSpecification>>>;
    image?: Maybe<UploadFile>;
};

export type SellingPointInput = {
    header: Scalars["String"];
    description: Scalars["String"];
    specifications?: Maybe<Array<ComponentComponentsSpecificationInput>>;
    image?: Maybe<Scalars["ID"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type Testimonial = {
    __typename?: "Testimonial";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    name: Scalars["String"];
    title: Scalars["String"];
    image?: Maybe<UploadFile>;
    testimonial: Scalars["String"];
};

export type TestimonialAggregator = {
    __typename?: "TestimonialAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type TestimonialConnection = {
    __typename?: "TestimonialConnection";
    values?: Maybe<Array<Maybe<Testimonial>>>;
    groupBy?: Maybe<TestimonialGroupBy>;
    aggregate?: Maybe<TestimonialAggregator>;
};

export type TestimonialConnectionCreatedAt = {
    __typename?: "TestimonialConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionId = {
    __typename?: "TestimonialConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionImage = {
    __typename?: "TestimonialConnectionImage";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionName = {
    __typename?: "TestimonialConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionTestimonial = {
    __typename?: "TestimonialConnectionTestimonial";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionTitle = {
    __typename?: "TestimonialConnectionTitle";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionUpdatedAt = {
    __typename?: "TestimonialConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnection_Id = {
    __typename?: "TestimonialConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialGroupBy = {
    __typename?: "TestimonialGroupBy";
    id?: Maybe<Array<Maybe<TestimonialConnectionId>>>;
    _id?: Maybe<Array<Maybe<TestimonialConnection_Id>>>;
    createdAt?: Maybe<Array<Maybe<TestimonialConnectionCreatedAt>>>;
    updatedAt?: Maybe<Array<Maybe<TestimonialConnectionUpdatedAt>>>;
    name?: Maybe<Array<Maybe<TestimonialConnectionName>>>;
    title?: Maybe<Array<Maybe<TestimonialConnectionTitle>>>;
    image?: Maybe<Array<Maybe<TestimonialConnectionImage>>>;
    testimonial?: Maybe<Array<Maybe<TestimonialConnectionTestimonial>>>;
};

export type TestimonialInput = {
    name: Scalars["String"];
    title: Scalars["String"];
    image?: Maybe<Scalars["ID"]>;
    testimonial: Scalars["String"];
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type UploadFile = {
    __typename?: "UploadFile";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    name: Scalars["String"];
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    formats?: Maybe<Scalars["JSON"]>;
    hash: Scalars["String"];
    ext?: Maybe<Scalars["String"]>;
    mime: Scalars["String"];
    size: Scalars["Float"];
    url: Scalars["String"];
    previewUrl?: Maybe<Scalars["String"]>;
    provider: Scalars["String"];
    provider_metadata?: Maybe<Scalars["JSON"]>;
    related?: Maybe<Array<Maybe<Morph>>>;
};

export type UploadFileRelatedArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type UploadFileAggregator = {
    __typename?: "UploadFileAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
    sum?: Maybe<UploadFileAggregatorSum>;
    avg?: Maybe<UploadFileAggregatorAvg>;
    min?: Maybe<UploadFileAggregatorMin>;
    max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorAvg = {
    __typename?: "UploadFileAggregatorAvg";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMax = {
    __typename?: "UploadFileAggregatorMax";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorMin = {
    __typename?: "UploadFileAggregatorMin";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorSum = {
    __typename?: "UploadFileAggregatorSum";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileConnection = {
    __typename?: "UploadFileConnection";
    values?: Maybe<Array<Maybe<UploadFile>>>;
    groupBy?: Maybe<UploadFileGroupBy>;
    aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileConnectionAlternativeText = {
    __typename?: "UploadFileConnectionAlternativeText";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
    __typename?: "UploadFileConnectionCaption";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
    __typename?: "UploadFileConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
    __typename?: "UploadFileConnectionExt";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
    __typename?: "UploadFileConnectionFormats";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
    __typename?: "UploadFileConnectionHash";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
    __typename?: "UploadFileConnectionHeight";
    key?: Maybe<Scalars["Int"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionId = {
    __typename?: "UploadFileConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
    __typename?: "UploadFileConnectionMime";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
    __typename?: "UploadFileConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
    __typename?: "UploadFileConnectionPreviewUrl";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
    __typename?: "UploadFileConnectionProvider";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
    __typename?: "UploadFileConnectionProvider_metadata";
    key?: Maybe<Scalars["JSON"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
    __typename?: "UploadFileConnectionSize";
    key?: Maybe<Scalars["Float"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
    __typename?: "UploadFileConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
    __typename?: "UploadFileConnectionUrl";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
    __typename?: "UploadFileConnectionWidth";
    key?: Maybe<Scalars["Int"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
    __typename?: "UploadFileConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileGroupBy = {
    __typename?: "UploadFileGroupBy";
    id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
    _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
    createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
    updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
    name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
    alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
    caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
    width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
    height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
    formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
    hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
    ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
    mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
    size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
    url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
    previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
    provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
    provider_metadata?: Maybe<
        Array<Maybe<UploadFileConnectionProvider_Metadata>>
    >;
};

export type UserInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    provider?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    resetPasswordToken?: Maybe<Scalars["String"]>;
    confirmationToken?: Maybe<Scalars["String"]>;
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<Scalars["ID"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type UserPermissionsPasswordPayload = {
    __typename?: "UserPermissionsPasswordPayload";
    ok: Scalars["Boolean"];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars["String"];
    password: Scalars["String"];
    provider?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
    __typename?: "UsersPermissionsLoginPayload";
    jwt?: Maybe<Scalars["String"]>;
    user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
    __typename?: "UsersPermissionsMe";
    id: Scalars["ID"];
    username: Scalars["String"];
    email: Scalars["String"];
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
    __typename?: "UsersPermissionsMeRole";
    id: Scalars["ID"];
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
};

export type UsersPermissionsPermission = {
    __typename?: "UsersPermissionsPermission";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    type: Scalars["String"];
    controller: Scalars["String"];
    action: Scalars["String"];
    enabled: Scalars["Boolean"];
    policy?: Maybe<Scalars["String"]>;
    role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRegisterInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
};

export type UsersPermissionsRole = {
    __typename?: "UsersPermissionsRole";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    name: Scalars["String"];
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
    users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsRolePermissionsArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
    sort?: Maybe<Scalars["String"]>;
    limit?: Maybe<Scalars["Int"]>;
    start?: Maybe<Scalars["Int"]>;
    where?: Maybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleAggregator = {
    __typename?: "UsersPermissionsRoleAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsRoleConnection = {
    __typename?: "UsersPermissionsRoleConnection";
    values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
    groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
    aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleConnectionDescription = {
    __typename?: "UsersPermissionsRoleConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionId = {
    __typename?: "UsersPermissionsRoleConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
    __typename?: "UsersPermissionsRoleConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
    __typename?: "UsersPermissionsRoleConnectionType";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
    __typename?: "UsersPermissionsRoleConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleGroupBy = {
    __typename?: "UsersPermissionsRoleGroupBy";
    id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
    _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
    name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
    description?: Maybe<
        Array<Maybe<UsersPermissionsRoleConnectionDescription>>
    >;
    type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
    __typename?: "UsersPermissionsUser";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    username: Scalars["String"];
    email: Scalars["String"];
    provider?: Maybe<Scalars["String"]>;
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserAggregator = {
    __typename?: "UsersPermissionsUserAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
};

export type UsersPermissionsUserConnection = {
    __typename?: "UsersPermissionsUserConnection";
    values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
    groupBy?: Maybe<UsersPermissionsUserGroupBy>;
    aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserConnectionBlocked = {
    __typename?: "UsersPermissionsUserConnectionBlocked";
    key?: Maybe<Scalars["Boolean"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
    __typename?: "UsersPermissionsUserConnectionConfirmed";
    key?: Maybe<Scalars["Boolean"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
    __typename?: "UsersPermissionsUserConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
    __typename?: "UsersPermissionsUserConnectionEmail";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionId = {
    __typename?: "UsersPermissionsUserConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
    __typename?: "UsersPermissionsUserConnectionProvider";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
    __typename?: "UsersPermissionsUserConnectionRole";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
    __typename?: "UsersPermissionsUserConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
    __typename?: "UsersPermissionsUserConnectionUsername";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
    __typename?: "UsersPermissionsUserConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserGroupBy = {
    __typename?: "UsersPermissionsUserGroupBy";
    id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
    _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
    createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
    updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
    username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
    email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
    provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
    confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
    blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
    role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type CreateMarketingCardInput = {
    data?: Maybe<MarketingCardInput>;
};

export type CreateMarketingCardPayload = {
    __typename?: "createMarketingCardPayload";
    marketingCard?: Maybe<MarketingCard>;
};

export type CreateProductInput = {
    data?: Maybe<ProductInput>;
};

export type CreateProductPayload = {
    __typename?: "createProductPayload";
    product?: Maybe<Product>;
};

export type CreateRoleInput = {
    data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
    __typename?: "createRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type CreateTestimonialInput = {
    data?: Maybe<TestimonialInput>;
};

export type CreateTestimonialPayload = {
    __typename?: "createTestimonialPayload";
    testimonial?: Maybe<Testimonial>;
};

export type CreateUserInput = {
    data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
    __typename?: "createUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type DeleteFileInput = {
    where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
    __typename?: "deleteFilePayload";
    file?: Maybe<UploadFile>;
};

export type DeleteHeroPayload = {
    __typename?: "deleteHeroPayload";
    hero?: Maybe<Hero>;
};

export type DeleteMarketingCardInput = {
    where?: Maybe<InputId>;
};

export type DeleteMarketingCardPayload = {
    __typename?: "deleteMarketingCardPayload";
    marketingCard?: Maybe<MarketingCard>;
};

export type DeleteProductInput = {
    where?: Maybe<InputId>;
};

export type DeleteProductPayload = {
    __typename?: "deleteProductPayload";
    product?: Maybe<Product>;
};

export type DeleteRoleInput = {
    where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
    __typename?: "deleteRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type DeleteSellingPointPayload = {
    __typename?: "deleteSellingPointPayload";
    sellingPoint?: Maybe<SellingPoint>;
};

export type DeleteTestimonialInput = {
    where?: Maybe<InputId>;
};

export type DeleteTestimonialPayload = {
    __typename?: "deleteTestimonialPayload";
    testimonial?: Maybe<Testimonial>;
};

export type DeleteUserInput = {
    where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
    __typename?: "deleteUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type EditComponentComponentsSpecificationInput = {
    id?: Maybe<Scalars["ID"]>;
    spec?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type EditComponentComponentsTextDarknessInput = {
    id?: Maybe<Scalars["ID"]>;
    darkness?: Maybe<Enum_Componentcomponentstextdarkness_Darkness>;
};

export type EditFileInput = {
    name?: Maybe<Scalars["String"]>;
    alternativeText?: Maybe<Scalars["String"]>;
    caption?: Maybe<Scalars["String"]>;
    width?: Maybe<Scalars["Int"]>;
    height?: Maybe<Scalars["Int"]>;
    formats?: Maybe<Scalars["JSON"]>;
    hash?: Maybe<Scalars["String"]>;
    ext?: Maybe<Scalars["String"]>;
    mime?: Maybe<Scalars["String"]>;
    size?: Maybe<Scalars["Float"]>;
    url?: Maybe<Scalars["String"]>;
    previewUrl?: Maybe<Scalars["String"]>;
    provider?: Maybe<Scalars["String"]>;
    provider_metadata?: Maybe<Scalars["JSON"]>;
    related?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditHeroInput = {
    header?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    buttonText?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["ID"]>;
    published_at?: Maybe<Scalars["DateTime"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
    name?: Maybe<Scalars["String"]>;
    code?: Maybe<Scalars["String"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditMarketingCardInput = {
    header?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["ID"]>;
    headerDarkness?: Maybe<EditComponentComponentsTextDarknessInput>;
    descriptionDarkness?: Maybe<EditComponentComponentsTextDarknessInput>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditProductInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["ID"]>;
    slug?: Maybe<Scalars["String"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditRoleInput = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    permissions?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    users?: Maybe<Array<Maybe<Scalars["ID"]>>>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditSellingPointInput = {
    header?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    specifications?: Maybe<
        Array<Maybe<EditComponentComponentsSpecificationInput>>
    >;
    image?: Maybe<Scalars["ID"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditTestimonialInput = {
    name?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    image?: Maybe<Scalars["ID"]>;
    testimonial?: Maybe<Scalars["String"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type EditUserInput = {
    username?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    provider?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    resetPasswordToken?: Maybe<Scalars["String"]>;
    confirmationToken?: Maybe<Scalars["String"]>;
    confirmed?: Maybe<Scalars["Boolean"]>;
    blocked?: Maybe<Scalars["Boolean"]>;
    role?: Maybe<Scalars["ID"]>;
    created_by?: Maybe<Scalars["ID"]>;
    updated_by?: Maybe<Scalars["ID"]>;
};

export type UpdateHeroInput = {
    data?: Maybe<EditHeroInput>;
};

export type UpdateHeroPayload = {
    __typename?: "updateHeroPayload";
    hero?: Maybe<Hero>;
};

export type UpdateMarketingCardInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditMarketingCardInput>;
};

export type UpdateMarketingCardPayload = {
    __typename?: "updateMarketingCardPayload";
    marketingCard?: Maybe<MarketingCard>;
};

export type UpdateProductInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditProductInput>;
};

export type UpdateProductPayload = {
    __typename?: "updateProductPayload";
    product?: Maybe<Product>;
};

export type UpdateRoleInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
    __typename?: "updateRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type UpdateSellingPointInput = {
    data?: Maybe<EditSellingPointInput>;
};

export type UpdateSellingPointPayload = {
    __typename?: "updateSellingPointPayload";
    sellingPoint?: Maybe<SellingPoint>;
};

export type UpdateTestimonialInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditTestimonialInput>;
};

export type UpdateTestimonialPayload = {
    __typename?: "updateTestimonialPayload";
    testimonial?: Maybe<Testimonial>;
};

export type UpdateUserInput = {
    where?: Maybe<InputId>;
    data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
    __typename?: "updateUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type FragmentImageFragment = { __typename?: "UploadFile" } & Pick<
    UploadFile,
    | "id"
    | "createdAt"
    | "updatedAt"
    | "name"
    | "alternativeText"
    | "caption"
    | "width"
    | "height"
    | "formats"
    | "hash"
    | "ext"
    | "mime"
    | "size"
    | "url"
>;

export type FragmentTextDarknessFragment = {
    __typename: "ComponentComponentsTextDarkness";
} & Pick<ComponentComponentsTextDarkness, "id" | "_id" | "darkness">;

export type Marketing_Cards_QueryQueryVariables = Exact<{
    [key: string]: never;
}>;

export type Marketing_Cards_QueryQuery = { __typename?: "Query" } & {
    marketingCards?: Maybe<
        Array<
            Maybe<
                { __typename: "MarketingCard" } & Pick<
                    MarketingCard,
                    | "id"
                    | "_id"
                    | "createdAt"
                    | "updatedAt"
                    | "header"
                    | "description"
                > & {
                        headerDarkness?: Maybe<
                            {
                                __typename?: "ComponentComponentsTextDarkness";
                            } & FragmentTextDarknessFragment
                        >;
                        descriptionDarkness?: Maybe<
                            {
                                __typename?: "ComponentComponentsTextDarkness";
                            } & FragmentTextDarknessFragment
                        >;
                        image?: Maybe<
                            {
                                __typename?: "UploadFile";
                            } & FragmentImageFragment
                        >;
                    }
            >
        >
    >;
};

export type Products_QueryQueryVariables = Exact<{
    slug?: Maybe<Scalars["String"]>;
}>;

export type Products_QueryQuery = { __typename?: "Query" } & {
    products?: Maybe<
        Array<
            Maybe<
                { __typename: "Product" } & Pick<
                    Product,
                    | "id"
                    | "_id"
                    | "createdAt"
                    | "updatedAt"
                    | "name"
                    | "description"
                    | "slug"
                > & {
                        image?: Maybe<
                            {
                                __typename?: "UploadFile";
                            } & FragmentImageFragment
                        >;
                    }
            >
        >
    >;
};

export type Selling_Point_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Selling_Point_QueryQuery = { __typename?: "Query" } & {
    sellingPoint?: Maybe<
        { __typename: "SellingPoint" } & Pick<
            SellingPoint,
            "id" | "_id" | "createdAt" | "updatedAt" | "header" | "description"
        > & {
                specifications?: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename: "ComponentComponentsSpecification";
                            } & Pick<
                                ComponentComponentsSpecification,
                                "id" | "_id" | "spec" | "description"
                            >
                        >
                    >
                >;
            }
    >;
};

export type Testimonials_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Testimonials_QueryQuery = { __typename?: "Query" } & {
    testimonials?: Maybe<
        Array<
            Maybe<
                { __typename: "Testimonial" } & Pick<
                    Testimonial,
                    | "id"
                    | "_id"
                    | "createdAt"
                    | "updatedAt"
                    | "name"
                    | "title"
                    | "testimonial"
                > & {
                        image?: Maybe<
                            {
                                __typename?: "UploadFile";
                            } & FragmentImageFragment
                        >;
                    }
            >
        >
    >;
};

export type Hero_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Hero_QueryQuery = { __typename?: "Query" } & {
    hero?: Maybe<
        { __typename: "Hero" } & Pick<
            Hero,
            | "id"
            | "_id"
            | "createdAt"
            | "updatedAt"
            | "header"
            | "description"
            | "buttonText"
            | "published_at"
        > & {
                image?: Maybe<
                    { __typename?: "UploadFile" } & FragmentImageFragment
                >;
            }
    >;
};

export const FragmentImageFragmentDoc = gql`
    fragment fragmentImage on UploadFile {
        id
        createdAt
        updatedAt
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        mime
        size
        url
    }
`;
export const FragmentTextDarknessFragmentDoc = gql`
    fragment fragmentTextDarkness on ComponentComponentsTextDarkness {
        __typename
        id
        _id
        darkness
    }
`;
export const Marketing_Cards_QueryDocument = gql`
    query MARKETING_CARDS_QUERY {
        marketingCards {
            __typename
            id
            _id
            createdAt
            updatedAt
            header
            headerDarkness {
                ...fragmentTextDarkness
            }
            description
            descriptionDarkness {
                ...fragmentTextDarkness
            }
            image {
                ...fragmentImage
            }
        }
    }
    ${FragmentTextDarknessFragmentDoc}
    ${FragmentImageFragmentDoc}
`;

/**
 * __useMarketing_Cards_QueryQuery__
 *
 * To run a query within a React component, call `useMarketing_Cards_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMarketing_Cards_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMarketing_Cards_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMarketing_Cards_QueryQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Marketing_Cards_QueryQuery,
        Marketing_Cards_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        Marketing_Cards_QueryQuery,
        Marketing_Cards_QueryQueryVariables
    >(Marketing_Cards_QueryDocument, options);
}
export function useMarketing_Cards_QueryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Marketing_Cards_QueryQuery,
        Marketing_Cards_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        Marketing_Cards_QueryQuery,
        Marketing_Cards_QueryQueryVariables
    >(Marketing_Cards_QueryDocument, options);
}
export type Marketing_Cards_QueryQueryHookResult = ReturnType<
    typeof useMarketing_Cards_QueryQuery
>;
export type Marketing_Cards_QueryLazyQueryHookResult = ReturnType<
    typeof useMarketing_Cards_QueryLazyQuery
>;
export type Marketing_Cards_QueryQueryResult = Apollo.QueryResult<
    Marketing_Cards_QueryQuery,
    Marketing_Cards_QueryQueryVariables
>;
export const Products_QueryDocument = gql`
    query PRODUCTS_QUERY($slug: String) {
        products(where: { slug: $slug }) {
            __typename
            id
            _id
            createdAt
            updatedAt
            name
            description
            image {
                ...fragmentImage
            }
            slug
        }
    }
    ${FragmentImageFragmentDoc}
`;

/**
 * __useProducts_QueryQuery__
 *
 * To run a query within a React component, call `useProducts_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useProducts_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProducts_QueryQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useProducts_QueryQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Products_QueryQuery,
        Products_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<Products_QueryQuery, Products_QueryQueryVariables>(
        Products_QueryDocument,
        options,
    );
}
export function useProducts_QueryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Products_QueryQuery,
        Products_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        Products_QueryQuery,
        Products_QueryQueryVariables
    >(Products_QueryDocument, options);
}
export type Products_QueryQueryHookResult = ReturnType<
    typeof useProducts_QueryQuery
>;
export type Products_QueryLazyQueryHookResult = ReturnType<
    typeof useProducts_QueryLazyQuery
>;
export type Products_QueryQueryResult = Apollo.QueryResult<
    Products_QueryQuery,
    Products_QueryQueryVariables
>;
export const Selling_Point_QueryDocument = gql`
    query SELLING_POINT_QUERY {
        sellingPoint {
            __typename
            id
            _id
            createdAt
            updatedAt
            header
            description
            specifications {
                __typename
                id
                _id
                spec
                description
            }
        }
    }
`;

/**
 * __useSelling_Point_QueryQuery__
 *
 * To run a query within a React component, call `useSelling_Point_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelling_Point_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelling_Point_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelling_Point_QueryQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Selling_Point_QueryQuery,
        Selling_Point_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        Selling_Point_QueryQuery,
        Selling_Point_QueryQueryVariables
    >(Selling_Point_QueryDocument, options);
}
export function useSelling_Point_QueryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Selling_Point_QueryQuery,
        Selling_Point_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        Selling_Point_QueryQuery,
        Selling_Point_QueryQueryVariables
    >(Selling_Point_QueryDocument, options);
}
export type Selling_Point_QueryQueryHookResult = ReturnType<
    typeof useSelling_Point_QueryQuery
>;
export type Selling_Point_QueryLazyQueryHookResult = ReturnType<
    typeof useSelling_Point_QueryLazyQuery
>;
export type Selling_Point_QueryQueryResult = Apollo.QueryResult<
    Selling_Point_QueryQuery,
    Selling_Point_QueryQueryVariables
>;
export const Testimonials_QueryDocument = gql`
    query TESTIMONIALS_QUERY {
        testimonials {
            __typename
            id
            _id
            createdAt
            updatedAt
            name
            title
            image {
                ...fragmentImage
            }
            testimonial
        }
    }
    ${FragmentImageFragmentDoc}
`;

/**
 * __useTestimonials_QueryQuery__
 *
 * To run a query within a React component, call `useTestimonials_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestimonials_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestimonials_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useTestimonials_QueryQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Testimonials_QueryQuery,
        Testimonials_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<
        Testimonials_QueryQuery,
        Testimonials_QueryQueryVariables
    >(Testimonials_QueryDocument, options);
}
export function useTestimonials_QueryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Testimonials_QueryQuery,
        Testimonials_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<
        Testimonials_QueryQuery,
        Testimonials_QueryQueryVariables
    >(Testimonials_QueryDocument, options);
}
export type Testimonials_QueryQueryHookResult = ReturnType<
    typeof useTestimonials_QueryQuery
>;
export type Testimonials_QueryLazyQueryHookResult = ReturnType<
    typeof useTestimonials_QueryLazyQuery
>;
export type Testimonials_QueryQueryResult = Apollo.QueryResult<
    Testimonials_QueryQuery,
    Testimonials_QueryQueryVariables
>;
export const Hero_QueryDocument = gql`
    query HERO_QUERY {
        hero {
            __typename
            id
            _id
            createdAt
            updatedAt
            header
            description
            buttonText
            published_at
            image {
                ...fragmentImage
            }
        }
    }
    ${FragmentImageFragmentDoc}
`;

/**
 * __useHero_QueryQuery__
 *
 * To run a query within a React component, call `useHero_QueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHero_QueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHero_QueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHero_QueryQuery(
    baseOptions?: Apollo.QueryHookOptions<
        Hero_QueryQuery,
        Hero_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery<Hero_QueryQuery, Hero_QueryQueryVariables>(
        Hero_QueryDocument,
        options,
    );
}
export function useHero_QueryLazyQuery(
    baseOptions?: Apollo.LazyQueryHookOptions<
        Hero_QueryQuery,
        Hero_QueryQueryVariables
    >,
) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery<Hero_QueryQuery, Hero_QueryQueryVariables>(
        Hero_QueryDocument,
        options,
    );
}
export type Hero_QueryQueryHookResult = ReturnType<typeof useHero_QueryQuery>;
export type Hero_QueryLazyQueryHookResult = ReturnType<
    typeof useHero_QueryLazyQuery
>;
export type Hero_QueryQueryResult = Apollo.QueryResult<
    Hero_QueryQuery,
    Hero_QueryQueryVariables
>;
