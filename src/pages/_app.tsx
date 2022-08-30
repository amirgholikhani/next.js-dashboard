import { ReactElement } from "react";
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@/createEmotionCache'
import { AppContextProvider } from '@/context/AppProvider'
import LoadingPageWrapper from "@/components/LoadingPageWrapper";
import Layout from "@/components/Layout";
import App from '@/components/App'
import '@/styles/globals.css'
import '@/i18n'
import '@/registrar'
import '@/assets/fonts/WebFonts/css/style.css'

const clientSideEmotionCache = createEmotionCache()

function MyApp(props: AppProps | any) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout || ((page: ReactElement) => (
    <Layout>
      <LoadingPageWrapper>
        {page}
      </LoadingPageWrapper>
    </Layout>
    )
  )

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppContextProvider>
        <App>
          {getLayout(<Component {...pageProps} />)}
        </App>
      </AppContextProvider>
    </CacheProvider>
  )
}

export default MyApp
