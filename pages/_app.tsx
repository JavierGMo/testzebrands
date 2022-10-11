import 'bulma/css/bulma.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { store } from 'store'
import { Provider } from 'react-redux'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
