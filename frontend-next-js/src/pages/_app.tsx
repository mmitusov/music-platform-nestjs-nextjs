import "@/styles/global.scss";
import Layout from "@/components/layout/Layout";
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Layout>
            <Component { ...pageProps }/>
        </Layout>
    )
}
