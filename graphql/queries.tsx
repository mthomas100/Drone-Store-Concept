import gql from "graphql-tag";

//FRAGMENTS
const FRAGMENT_IMAGE = gql`
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

const FRAGMENT_TEXT_DARKNESS = gql`
    fragment fragmentTextDarkness on ComponentComponentsTextDarkness {
        __typename
        id
        _id
        darkness
    }
`;

//QUERIES

export const MARKETING_CARDS_QUERY = gql`
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
    ${FRAGMENT_IMAGE}
    ${FRAGMENT_TEXT_DARKNESS}
`;

export const PRODUCTS_QUERY = gql`
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
    ${FRAGMENT_IMAGE}
`;

export const SELLING_POINT_QUERY = gql`
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
            image {
                ...fragmentImage
            }
        }
    }
    ${FRAGMENT_IMAGE}
`;

export const TESTIMONIALS_QUERY = gql`
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
    ${FRAGMENT_IMAGE}
`;

export const HERO_QUERY = gql`
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
    ${FRAGMENT_IMAGE}
`;
