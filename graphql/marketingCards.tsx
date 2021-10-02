import { Maybe, Scalars, UploadFile } from "generated/apolloComponents";
import gql from "graphql-tag";

export type MarketingCards = {
    __typename?: "MarketingCards";
    id: Scalars["ID"];
    created_at: Scalars["DateTime"];
    updated_at: Scalars["DateTime"];
    header: Scalars["String"];
    description: Scalars["String"];
    image?: UploadFile;
    published_at?: Maybe<Scalars["DateTime"]>;
};

export const marketingCardsQuery = gql`
    query MarketingCardsQuery {
        marketingCards {
            __typename
            id
            created_at
            updated_at
            header
            description
            image {
                url
                id
            }
            published_at
        }
    }
`;
