export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** A time string with format: HH:mm:ss.SSS */
    Time: any;
    /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** The `Long` scalar type represents 52-bit integers */
    Long: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export type FileInfoInput = {
    name?: InputMaybe<Scalars["String"]>;
    alternativeText?: InputMaybe<Scalars["String"]>;
    caption?: InputMaybe<Scalars["String"]>;
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

export type UsersPermissionsRegisterInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    password: Scalars["String"];
};

export type UsersPermissionsLoginInput = {
    identifier: Scalars["String"];
    password: Scalars["String"];
    provider?: InputMaybe<Scalars["String"]>;
};

export type UsersPermissionsLoginPayload = {
    __typename?: "UsersPermissionsLoginPayload";
    jwt?: Maybe<Scalars["String"]>;
    user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
    __typename?: "UserPermissionsPasswordPayload";
    ok: Scalars["Boolean"];
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
    published_at?: Maybe<Scalars["DateTime"]>;
};

export type HeroInput = {
    header: Scalars["String"];
    description: Scalars["String"];
    buttonText: Scalars["String"];
    published_at?: InputMaybe<Scalars["DateTime"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditHeroInput = {
    header?: InputMaybe<Scalars["String"]>;
    description?: InputMaybe<Scalars["String"]>;
    buttonText?: InputMaybe<Scalars["String"]>;
    published_at?: InputMaybe<Scalars["DateTime"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type UpdateHeroInput = {
    data?: InputMaybe<EditHeroInput>;
};

export type UpdateHeroPayload = {
    __typename?: "updateHeroPayload";
    hero?: Maybe<Hero>;
};

export type DeleteHeroPayload = {
    __typename?: "deleteHeroPayload";
    hero?: Maybe<Hero>;
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

export type MarketingCardConnection = {
    __typename?: "MarketingCardConnection";
    values?: Maybe<Array<Maybe<MarketingCard>>>;
    groupBy?: Maybe<MarketingCardGroupBy>;
    aggregate?: Maybe<MarketingCardAggregator>;
};

export type MarketingCardAggregator = {
    __typename?: "MarketingCardAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
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

export type MarketingCardConnectionId = {
    __typename?: "MarketingCardConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnection_Id = {
    __typename?: "MarketingCardConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionCreatedAt = {
    __typename?: "MarketingCardConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionUpdatedAt = {
    __typename?: "MarketingCardConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionHeader = {
    __typename?: "MarketingCardConnectionHeader";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionDescription = {
    __typename?: "MarketingCardConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionImage = {
    __typename?: "MarketingCardConnectionImage";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionHeaderDarkness = {
    __typename?: "MarketingCardConnectionHeaderDarkness";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardConnectionDescriptionDarkness = {
    __typename?: "MarketingCardConnectionDescriptionDarkness";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<MarketingCardConnection>;
};

export type MarketingCardInput = {
    header: Scalars["String"];
    description: Scalars["String"];
    image?: InputMaybe<Scalars["ID"]>;
    headerDarkness?: InputMaybe<ComponentComponentsTextDarknessInput>;
    descriptionDarkness?: InputMaybe<ComponentComponentsTextDarknessInput>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditMarketingCardInput = {
    header?: InputMaybe<Scalars["String"]>;
    description?: InputMaybe<Scalars["String"]>;
    image?: InputMaybe<Scalars["ID"]>;
    headerDarkness?: InputMaybe<EditComponentComponentsTextDarknessInput>;
    descriptionDarkness?: InputMaybe<EditComponentComponentsTextDarknessInput>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type CreateMarketingCardInput = {
    data?: InputMaybe<MarketingCardInput>;
};

export type CreateMarketingCardPayload = {
    __typename?: "createMarketingCardPayload";
    marketingCard?: Maybe<MarketingCard>;
};

export type UpdateMarketingCardInput = {
    where?: InputMaybe<InputId>;
    data?: InputMaybe<EditMarketingCardInput>;
};

export type UpdateMarketingCardPayload = {
    __typename?: "updateMarketingCardPayload";
    marketingCard?: Maybe<MarketingCard>;
};

export type DeleteMarketingCardInput = {
    where?: InputMaybe<InputId>;
};

export type DeleteMarketingCardPayload = {
    __typename?: "deleteMarketingCardPayload";
    marketingCard?: Maybe<MarketingCard>;
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

export type ProductConnection = {
    __typename?: "ProductConnection";
    values?: Maybe<Array<Maybe<Product>>>;
    groupBy?: Maybe<ProductGroupBy>;
    aggregate?: Maybe<ProductAggregator>;
};

export type ProductAggregator = {
    __typename?: "ProductAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
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

export type ProductConnectionId = {
    __typename?: "ProductConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnection_Id = {
    __typename?: "ProductConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionCreatedAt = {
    __typename?: "ProductConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionUpdatedAt = {
    __typename?: "ProductConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionName = {
    __typename?: "ProductConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionDescription = {
    __typename?: "ProductConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionImage = {
    __typename?: "ProductConnectionImage";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductConnectionSlug = {
    __typename?: "ProductConnectionSlug";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<ProductConnection>;
};

export type ProductInput = {
    name: Scalars["String"];
    description: Scalars["String"];
    image?: InputMaybe<Scalars["ID"]>;
    slug: Scalars["String"];
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditProductInput = {
    name?: InputMaybe<Scalars["String"]>;
    description?: InputMaybe<Scalars["String"]>;
    image?: InputMaybe<Scalars["ID"]>;
    slug?: InputMaybe<Scalars["String"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type CreateProductInput = {
    data?: InputMaybe<ProductInput>;
};

export type CreateProductPayload = {
    __typename?: "createProductPayload";
    product?: Maybe<Product>;
};

export type UpdateProductInput = {
    where?: InputMaybe<InputId>;
    data?: InputMaybe<EditProductInput>;
};

export type UpdateProductPayload = {
    __typename?: "updateProductPayload";
    product?: Maybe<Product>;
};

export type DeleteProductInput = {
    where?: InputMaybe<InputId>;
};

export type DeleteProductPayload = {
    __typename?: "deleteProductPayload";
    product?: Maybe<Product>;
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
};

export type SellingPointInput = {
    header: Scalars["String"];
    description: Scalars["String"];
    specifications?: InputMaybe<Array<ComponentComponentsSpecificationInput>>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditSellingPointInput = {
    header?: InputMaybe<Scalars["String"]>;
    description?: InputMaybe<Scalars["String"]>;
    specifications?: InputMaybe<
        Array<InputMaybe<EditComponentComponentsSpecificationInput>>
    >;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type UpdateSellingPointInput = {
    data?: InputMaybe<EditSellingPointInput>;
};

export type UpdateSellingPointPayload = {
    __typename?: "updateSellingPointPayload";
    sellingPoint?: Maybe<SellingPoint>;
};

export type DeleteSellingPointPayload = {
    __typename?: "deleteSellingPointPayload";
    sellingPoint?: Maybe<SellingPoint>;
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

export type TestimonialConnection = {
    __typename?: "TestimonialConnection";
    values?: Maybe<Array<Maybe<Testimonial>>>;
    groupBy?: Maybe<TestimonialGroupBy>;
    aggregate?: Maybe<TestimonialAggregator>;
};

export type TestimonialAggregator = {
    __typename?: "TestimonialAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
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

export type TestimonialConnectionId = {
    __typename?: "TestimonialConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnection_Id = {
    __typename?: "TestimonialConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionCreatedAt = {
    __typename?: "TestimonialConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionUpdatedAt = {
    __typename?: "TestimonialConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionName = {
    __typename?: "TestimonialConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionTitle = {
    __typename?: "TestimonialConnectionTitle";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionImage = {
    __typename?: "TestimonialConnectionImage";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialConnectionTestimonial = {
    __typename?: "TestimonialConnectionTestimonial";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<TestimonialConnection>;
};

export type TestimonialInput = {
    name: Scalars["String"];
    title: Scalars["String"];
    image?: InputMaybe<Scalars["ID"]>;
    testimonial: Scalars["String"];
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditTestimonialInput = {
    name?: InputMaybe<Scalars["String"]>;
    title?: InputMaybe<Scalars["String"]>;
    image?: InputMaybe<Scalars["ID"]>;
    testimonial?: InputMaybe<Scalars["String"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type CreateTestimonialInput = {
    data?: InputMaybe<TestimonialInput>;
};

export type CreateTestimonialPayload = {
    __typename?: "createTestimonialPayload";
    testimonial?: Maybe<Testimonial>;
};

export type UpdateTestimonialInput = {
    where?: InputMaybe<InputId>;
    data?: InputMaybe<EditTestimonialInput>;
};

export type UpdateTestimonialPayload = {
    __typename?: "updateTestimonialPayload";
    testimonial?: Maybe<Testimonial>;
};

export type DeleteTestimonialInput = {
    where?: InputMaybe<InputId>;
};

export type DeleteTestimonialPayload = {
    __typename?: "deleteTestimonialPayload";
    testimonial?: Maybe<Testimonial>;
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

export type LocaleInput = {
    name?: InputMaybe<Scalars["String"]>;
    code?: InputMaybe<Scalars["String"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditLocaleInput = {
    name?: InputMaybe<Scalars["String"]>;
    code?: InputMaybe<Scalars["String"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
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
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type UploadFileConnection = {
    __typename?: "UploadFileConnection";
    values?: Maybe<Array<Maybe<UploadFile>>>;
    groupBy?: Maybe<UploadFileGroupBy>;
    aggregate?: Maybe<UploadFileAggregator>;
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

export type UploadFileAggregatorSum = {
    __typename?: "UploadFileAggregatorSum";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
};

export type UploadFileAggregatorAvg = {
    __typename?: "UploadFileAggregatorAvg";
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

export type UploadFileAggregatorMax = {
    __typename?: "UploadFileAggregatorMax";
    width?: Maybe<Scalars["Float"]>;
    height?: Maybe<Scalars["Float"]>;
    size?: Maybe<Scalars["Float"]>;
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

export type UploadFileConnectionId = {
    __typename?: "UploadFileConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
    __typename?: "UploadFileConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
    __typename?: "UploadFileConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
    __typename?: "UploadFileConnectionUpdatedAt";
    key?: Maybe<Scalars["DateTime"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
    __typename?: "UploadFileConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
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

export type UploadFileConnectionWidth = {
    __typename?: "UploadFileConnectionWidth";
    key?: Maybe<Scalars["Int"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
    __typename?: "UploadFileConnectionHeight";
    key?: Maybe<Scalars["Int"]>;
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

export type UploadFileConnectionExt = {
    __typename?: "UploadFileConnectionExt";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
    __typename?: "UploadFileConnectionMime";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
    __typename?: "UploadFileConnectionSize";
    key?: Maybe<Scalars["Float"]>;
    connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
    __typename?: "UploadFileConnectionUrl";
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

export type FileInput = {
    name: Scalars["String"];
    alternativeText?: InputMaybe<Scalars["String"]>;
    caption?: InputMaybe<Scalars["String"]>;
    width?: InputMaybe<Scalars["Int"]>;
    height?: InputMaybe<Scalars["Int"]>;
    formats?: InputMaybe<Scalars["JSON"]>;
    hash: Scalars["String"];
    ext?: InputMaybe<Scalars["String"]>;
    mime: Scalars["String"];
    size: Scalars["Float"];
    url: Scalars["String"];
    previewUrl?: InputMaybe<Scalars["String"]>;
    provider: Scalars["String"];
    provider_metadata?: InputMaybe<Scalars["JSON"]>;
    related?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditFileInput = {
    name?: InputMaybe<Scalars["String"]>;
    alternativeText?: InputMaybe<Scalars["String"]>;
    caption?: InputMaybe<Scalars["String"]>;
    width?: InputMaybe<Scalars["Int"]>;
    height?: InputMaybe<Scalars["Int"]>;
    formats?: InputMaybe<Scalars["JSON"]>;
    hash?: InputMaybe<Scalars["String"]>;
    ext?: InputMaybe<Scalars["String"]>;
    mime?: InputMaybe<Scalars["String"]>;
    size?: InputMaybe<Scalars["Float"]>;
    url?: InputMaybe<Scalars["String"]>;
    previewUrl?: InputMaybe<Scalars["String"]>;
    provider?: InputMaybe<Scalars["String"]>;
    provider_metadata?: InputMaybe<Scalars["JSON"]>;
    related?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type DeleteFileInput = {
    where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
    __typename?: "deleteFilePayload";
    file?: Maybe<UploadFile>;
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
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleUsersArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type UsersPermissionsRoleConnection = {
    __typename?: "UsersPermissionsRoleConnection";
    values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
    groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
    aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
    __typename?: "UsersPermissionsRoleAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
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

export type UsersPermissionsRoleConnectionId = {
    __typename?: "UsersPermissionsRoleConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
    __typename?: "UsersPermissionsRoleConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
    __typename?: "UsersPermissionsRoleConnectionName";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
    __typename?: "UsersPermissionsRoleConnectionDescription";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
    __typename?: "UsersPermissionsRoleConnectionType";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
    name: Scalars["String"];
    description?: InputMaybe<Scalars["String"]>;
    type?: InputMaybe<Scalars["String"]>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditRoleInput = {
    name?: InputMaybe<Scalars["String"]>;
    description?: InputMaybe<Scalars["String"]>;
    type?: InputMaybe<Scalars["String"]>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    users?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type CreateRoleInput = {
    data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
    __typename?: "createRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
    where?: InputMaybe<InputId>;
    data?: InputMaybe<EditRoleInput>;
};

export type UpdateRolePayload = {
    __typename?: "updateRolePayload";
    role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
    where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
    __typename?: "deleteRolePayload";
    role?: Maybe<UsersPermissionsRole>;
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

export type UsersPermissionsUserConnection = {
    __typename?: "UsersPermissionsUserConnection";
    values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
    groupBy?: Maybe<UsersPermissionsUserGroupBy>;
    aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
    __typename?: "UsersPermissionsUserAggregator";
    count?: Maybe<Scalars["Int"]>;
    totalCount?: Maybe<Scalars["Int"]>;
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

export type UsersPermissionsUserConnectionId = {
    __typename?: "UsersPermissionsUserConnectionId";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
    __typename?: "UsersPermissionsUserConnection_id";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
    __typename?: "UsersPermissionsUserConnectionCreatedAt";
    key?: Maybe<Scalars["DateTime"]>;
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

export type UsersPermissionsUserConnectionEmail = {
    __typename?: "UsersPermissionsUserConnectionEmail";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
    __typename?: "UsersPermissionsUserConnectionProvider";
    key?: Maybe<Scalars["String"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
    __typename?: "UsersPermissionsUserConnectionConfirmed";
    key?: Maybe<Scalars["Boolean"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
    __typename?: "UsersPermissionsUserConnectionBlocked";
    key?: Maybe<Scalars["Boolean"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
    __typename?: "UsersPermissionsUserConnectionRole";
    key?: Maybe<Scalars["ID"]>;
    connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
    username: Scalars["String"];
    email: Scalars["String"];
    provider?: InputMaybe<Scalars["String"]>;
    password?: InputMaybe<Scalars["String"]>;
    resetPasswordToken?: InputMaybe<Scalars["String"]>;
    confirmationToken?: InputMaybe<Scalars["String"]>;
    confirmed?: InputMaybe<Scalars["Boolean"]>;
    blocked?: InputMaybe<Scalars["Boolean"]>;
    role?: InputMaybe<Scalars["ID"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type EditUserInput = {
    username?: InputMaybe<Scalars["String"]>;
    email?: InputMaybe<Scalars["String"]>;
    provider?: InputMaybe<Scalars["String"]>;
    password?: InputMaybe<Scalars["String"]>;
    resetPasswordToken?: InputMaybe<Scalars["String"]>;
    confirmationToken?: InputMaybe<Scalars["String"]>;
    confirmed?: InputMaybe<Scalars["Boolean"]>;
    blocked?: InputMaybe<Scalars["Boolean"]>;
    role?: InputMaybe<Scalars["ID"]>;
    created_by?: InputMaybe<Scalars["ID"]>;
    updated_by?: InputMaybe<Scalars["ID"]>;
};

export type CreateUserInput = {
    data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
    __typename?: "createUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
    where?: InputMaybe<InputId>;
    data?: InputMaybe<EditUserInput>;
};

export type UpdateUserPayload = {
    __typename?: "updateUserPayload";
    user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
    where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
    __typename?: "deleteUserPayload";
    user?: Maybe<UsersPermissionsUser>;
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

export type EditComponentComponentsSpecificationInput = {
    id?: InputMaybe<Scalars["ID"]>;
    spec?: InputMaybe<Scalars["String"]>;
    description?: InputMaybe<Scalars["String"]>;
};

export enum Enum_Componentcomponentstextdarkness_Darkness {
    Light = "light",
    Medium = "medium",
    Dark = "dark",
}

export type ComponentComponentsTextDarkness = {
    __typename?: "ComponentComponentsTextDarkness";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    darkness?: Maybe<Enum_Componentcomponentstextdarkness_Darkness>;
};

export type ComponentComponentsTextDarknessInput = {
    darkness?: InputMaybe<Enum_Componentcomponentstextdarkness_Darkness>;
};

export type EditComponentComponentsTextDarknessInput = {
    id?: InputMaybe<Scalars["ID"]>;
    darkness?: InputMaybe<Enum_Componentcomponentstextdarkness_Darkness>;
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

export type InputId = {
    id: Scalars["ID"];
};

export enum PublicationState {
    Live = "LIVE",
    Preview = "PREVIEW",
}

export type AdminUser = {
    __typename?: "AdminUser";
    id: Scalars["ID"];
    username?: Maybe<Scalars["String"]>;
    firstname: Scalars["String"];
    lastname: Scalars["String"];
};

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
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryMarketingCardArgs = {
    id: Scalars["ID"];
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryMarketingCardsArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryMarketingCardsConnectionArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryProductArgs = {
    id: Scalars["ID"];
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryProductsArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryProductsConnectionArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type QuerySellingPointArgs = {
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryTestimonialArgs = {
    id: Scalars["ID"];
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryTestimonialsArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryTestimonialsConnectionArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryFilesArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryFilesConnectionArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryRoleArgs = {
    id: Scalars["ID"];
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryRolesArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryRolesConnectionArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

export type QueryUserArgs = {
    id: Scalars["ID"];
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryUsersArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
    publicationState?: InputMaybe<PublicationState>;
};

export type QueryUsersConnectionArgs = {
    sort?: InputMaybe<Scalars["String"]>;
    limit?: InputMaybe<Scalars["Int"]>;
    start?: InputMaybe<Scalars["Int"]>;
    where?: InputMaybe<Scalars["JSON"]>;
};

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
    input?: InputMaybe<UpdateHeroInput>;
};

export type MutationCreateMarketingCardArgs = {
    input?: InputMaybe<CreateMarketingCardInput>;
};

export type MutationUpdateMarketingCardArgs = {
    input?: InputMaybe<UpdateMarketingCardInput>;
};

export type MutationDeleteMarketingCardArgs = {
    input?: InputMaybe<DeleteMarketingCardInput>;
};

export type MutationCreateProductArgs = {
    input?: InputMaybe<CreateProductInput>;
};

export type MutationUpdateProductArgs = {
    input?: InputMaybe<UpdateProductInput>;
};

export type MutationDeleteProductArgs = {
    input?: InputMaybe<DeleteProductInput>;
};

export type MutationUpdateSellingPointArgs = {
    input?: InputMaybe<UpdateSellingPointInput>;
};

export type MutationCreateTestimonialArgs = {
    input?: InputMaybe<CreateTestimonialInput>;
};

export type MutationUpdateTestimonialArgs = {
    input?: InputMaybe<UpdateTestimonialInput>;
};

export type MutationDeleteTestimonialArgs = {
    input?: InputMaybe<DeleteTestimonialInput>;
};

export type MutationDeleteFileArgs = {
    input?: InputMaybe<DeleteFileInput>;
};

export type MutationCreateRoleArgs = {
    input?: InputMaybe<CreateRoleInput>;
};

export type MutationUpdateRoleArgs = {
    input?: InputMaybe<UpdateRoleInput>;
};

export type MutationDeleteRoleArgs = {
    input?: InputMaybe<DeleteRoleInput>;
};

export type MutationCreateUserArgs = {
    input?: InputMaybe<CreateUserInput>;
};

export type MutationUpdateUserArgs = {
    input?: InputMaybe<UpdateUserInput>;
};

export type MutationDeleteUserArgs = {
    input?: InputMaybe<DeleteUserInput>;
};

export type MutationUploadArgs = {
    refId?: InputMaybe<Scalars["ID"]>;
    ref?: InputMaybe<Scalars["String"]>;
    field?: InputMaybe<Scalars["String"]>;
    source?: InputMaybe<Scalars["String"]>;
    info?: InputMaybe<FileInfoInput>;
    file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
    refId?: InputMaybe<Scalars["ID"]>;
    ref?: InputMaybe<Scalars["String"]>;
    field?: InputMaybe<Scalars["String"]>;
    source?: InputMaybe<Scalars["String"]>;
    files: Array<InputMaybe<Scalars["Upload"]>>;
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
