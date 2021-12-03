import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html lang="en" dir="ltr">
                <Head>
                    <meta
                        name="description"
                        content="The Healthy Fermentary is the highest quality source of deliverable fermented beverages"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
