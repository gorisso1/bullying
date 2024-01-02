
import '@/styles/globals.css';
import {AppProps} from "next/app";
import {NextComponentType} from "next";



function MyApp({ Component, pageProps }: AppProps & { Component: NextComponentType }) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;