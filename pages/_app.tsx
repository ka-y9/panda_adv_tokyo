import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { IntlProvider } from 'react-intl'
import { QueryClient, QueryClientProvider } from 'react-query'

// グローバルスタイル
import '../styles/globals.css'

// 多言語対応
import ja from '../locales/ja.json'
import en from '../locales/en.json'

// コンポーネント
import HTMLHead from '../components/html-head'

// 環境設定
const queryClient = new QueryClient()
const messages = {
  ja,
  en
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const { locale = 'ja' } = router

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProvider 
        messages={messages[locale as keyof typeof messages]} 
        locale={locale} 
        defaultLocale="ja"
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Head>
            <HTMLHead />
            <link rel="manifest" href="/manifest.json" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    </QueryClientProvider>
  )
}

export default MyApp;