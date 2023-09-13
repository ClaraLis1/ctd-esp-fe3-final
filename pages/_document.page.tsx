import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html style={{height: '100%'}}>
            <Head>
                {/* <link
                    href="https://fonts.googleapis.com/css2?family=Roboto"
                    rel="stylesheet"
                /> */}
                
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Roboto&display=swap" rel="stylesheet"></link>
            </Head>
            <body style={{height: '100%'}}>
            <Main />
            <NextScript />
            </body>

        </Html>
    )
}