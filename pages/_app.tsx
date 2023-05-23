import Layout from '../components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { TitleProvider } from '@/context/titleContext'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store, persistor } from '../store'
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (router.pathname === '/shop/checkout') return (
    <ChakraProvider>
      <TitleProvider>
        <Component {...pageProps} />
      </TitleProvider>
    </ChakraProvider>
  )

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <TitleProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </TitleProvider>
        </ChakraProvider>
      </PersistGate>
    </Provider>

  )
}
