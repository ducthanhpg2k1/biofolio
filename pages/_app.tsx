import 'antd/dist/reset.css';
import '../styles/globals.scss';
import '../public/antd.min.css';

import { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Waterfall } from 'next/font/google';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import NextNProgress from 'nextjs-progressbar';

import ErrorBoundary from '@components/ErrorBoundary';
import { useTest } from '@hooks/test';
import AppLayout from '@layout/AppLayout';

import nextI18nConfig from '../next-i18next.config';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const WaterfallFont = Waterfall({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-waterfall',
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  useTest();

  return (
    <>
      <Head>
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content={'index,follow'} />
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#476055' />
        <meta name='title' content='Biofofio' />
        <meta name='description' content='Biofofio' />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,maximum-scale=2,shrink-to-fit=no'
        />
      </Head>

      <ErrorBoundary>
        <NextNProgress color='#818CF8' options={{ showSpinner: false }} />
        <AppLayout WaterfallFont={WaterfallFont}>
          {getLayout(<Component {...pageProps} />)}
        </AppLayout>
      </ErrorBoundary>
    </>
  );
}

// @ts-ignore
export default appWithTranslation(MyApp, nextI18nConfig);
