import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        // locale is in ctx.locale

        return {...initialProps, locale: 'fa'}
    }
   
    render = () => (
        <Html dir={this.props.locale === 'fa' ? 'rtl': 'ltr'} >
            <Head>
                <link
                    rel="preload"
                    href="/fonts/IRANSans/IRANSansWeb.ttf"
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href="/fonts/IRANSans/IRANSansWeb_Medium.ttf"
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href="/fonts/IRANSans/IRANSansWeb_Bold.ttf"
                    as="font"
                    crossOrigin=""
                />

                <link
                    rel="preload"
                    href="/fonts/IRANSans/IRANSansWeb_UltraLight.ttf"
                    as="font"
                    crossOrigin=""
                />

            </Head>    
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument