import "@/styles/global.scss";
import Layout from "@/components/layout/Layout";
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from "@/store/store";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <Layout>
                <Component { ...pageProps }/>
            </Layout>
        </Provider>
    )
}
