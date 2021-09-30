import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { StyledThemeProvider } from "@definitions/styled-components";
import { initializeApollo } from "@services/graphql";
import { ApolloProvider } from "@apollo/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { Page } from "components";
import { LayoutStateProvider } from "lib/layoutState";
import { DataStateProvider } from "lib/dataState";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    const apolloClient = initializeApollo();
    const queryClient = new QueryClient();
    return (
        <StyledThemeProvider>
            <ApolloProvider client={apolloClient}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <DataStateProvider>
                            <LayoutStateProvider>
                                <Page>
                                    <Component {...pageProps} />
                                </Page>
                            </LayoutStateProvider>
                        </DataStateProvider>
                    </Hydrate>
                </QueryClientProvider>
            </ApolloProvider>
        </StyledThemeProvider>
    );
}

export default MyApp;
