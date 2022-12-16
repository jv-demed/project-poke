import Head from 'next/head';
import { imgs } from '../src/assets/imgs';
import '../styles/globals.css';
import '../styles/typography.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <link rel="icon" href={imgs.favicon}  type="image/icon type" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}