import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { imgs } from '../src/assets/imgs';
import '../styles/globals.css';
import '../styles/typography.css';

export default function App({ Component, pageProps }){
    return(
        <>
            <Head>
                <link rel="icon" href={imgs.favicon}  type="image/icon type" />
            </Head>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}