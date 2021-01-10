import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
 
    render = () => (
        <Html dir='rtl' lang='en' >
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
            <body style={{overflowX: "hidden"}}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default MyDocument