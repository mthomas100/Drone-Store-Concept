import { Maybe, Scalars, UploadFile } from "generated/apolloComponents";
import gql from "graphql-tag";

// export type MarketingCardsTypes = {
//     __typename?: "MarketingCards";
//     id: Scalars["ID"];
//     created_at: Scalars["DateTime"];
//     updated_at: Scalars["DateTime"];
//     header: Scalars["String"];
//     description: Scalars["String"];
//     image?: Maybe<
//         { __typename?: "UploadFile" } & Pick<UploadFile, "id" | "url">
//     >;
//     headerColor?: Maybe<Scalars["String"]>;
//     descriptionColor?: Maybe<Scalars["String"]>;
//     published_at?: Maybe<Scalars["DateTime"]>;
// };

export type MarketingCardTypes = {
    __typename?: "MarketingCard";
    id: Scalars["ID"];
    _id: Scalars["ID"];
    createdAt: Scalars["DateTime"];
    updatedAt: Scalars["DateTime"];
    header: Scalars["String"];
    description: Scalars["String"];
    image?: Maybe<UploadFile>;
    headerColor: Scalars["String"];
    descriptionColor: Scalars["String"];
};

export const MARKETING_CARDS_QUERY = gql`
    query MARKETING_CARDS_QUERY {
        marketingCards {
            __typename
            id
            _id
            createdAt
            updatedAt
            header
            description
            image
            headerColor
            descriptionColor
        }
    }
`;

export type ProductsTypes = {
    __typename?: "Products";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    name: Scalars["String"];
    description: Scalars["String"];
    image?: Maybe<
        { __typename?: "UploadFile" } & Pick<UploadFile, "id" | "url">
    >;
    published_at?: Maybe<Scalars["DateTime"]>;
};

export const PRODUCTS_QUERY = gql`
    query PRODUCTS_QUERY {
        products {
            __typename
            id
            created_at
            updated_at
            name
            description
            image {
                url
                id
            }
            published_at
        }
    }
`;

export type SellingPointsTypes = {
    __typename?: "SellingPoints";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    header: Scalars["String"];
    description: Scalars["String"];
    specifications?: Maybe<
        Array<
            Maybe<{
                __typename?: "ComponentSpecificationSpecification";
                id: Scalars["ID"];
                header: Scalars["String"];
                description: Scalars["String"];
            }>
        >
    >;
    image?: Maybe<
        { __typename?: "UploadFile" } & Pick<UploadFile, "id" | "url">
    >;
    published_at?: Maybe<Scalars["DateTime"]>;
};

export const SELLING_POINT_QUERY = gql`
    query SELLING_POINT_QUERY {
        sellingPoint {
            __typename
            id
            created_at
            updated_at
            header
            description
            specifications {
                id
                header
                description
            }
            image {
                url
                id
            }
            published_at
        }
    }
`;

export type TestimonialsTypes = {
    __typename?: "Testimonials";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    testimonial: Scalars["String"];
    name: Scalars["String"];
    title: Scalars["String"];
    image?: Maybe<
        { __typename?: "UploadFile" } & Pick<UploadFile, "id" | "url">
    >;
    published_at?: Maybe<Scalars["DateTime"]>;
};

export const TESTIMONIALS_QUERY = gql`
    query TESTIMONIALS_QUERY {
        testimonials {
            __typename
            id
            created_at
            updated_at
            testimonial
            name
            title
            image {
                url
                id
            }
            published_at
        }
    }
`;
