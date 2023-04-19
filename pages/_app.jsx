import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import '../styles/globals.css';
import LoadingScreen from '../src/components/LoadingScreen';

//fonts
import '@fontsource/inter';
import '@fontsource/cookie';
import '@fontsource/space-mono';

export default function App(props) {
  const { Component, pageProps } = props;

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2100);
  }, []);

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-theme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Rashid Ali</title>
        <meta
          name="description"
          content="Rashid Ali is a software developer who specializes in building exceptional digital experiences that make people's life simple."
        />
        <meta
          property="image"
          content="https://rashidkalwar.github.io/og.png"
        />
        <link
          rel="sitemap"
          type="application/xml"
          href="/sitemap/sitemap-index.xml"
        />
        <meta property="og:title" content="Rashid Ali" />
        <meta
          property="og:description"
          content="Rashid Ali is a software developer who specializes in building exceptional digital experiences that make people's life simple."
        />
        <meta
          property="og:image"
          content="https://rashidkalwar.github.io/og.png"
        />
        <meta property="og:url" content="https://rashidkalwar.github.io/" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@RashidAliKalwar" />
        <meta property="twitter:title" content="Rashid Ali" />
        <meta
          property="twitter:description"
          content="Rashid Ali is a software developer who specializes in building exceptional digital experiences that make people's life simple."
        />
        <meta
          property="twitter:image"
          content="https://rashidkalwar.github.io/og.png"
        />
        <meta
          name="google-site-verification"
          content="i_WG8slZM9qGqg0E6l0NQFJOzzsexjaGj9Z__C17CB0"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme, fontFamily: 'Inter' }}
        >
          <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="light"
          >
            <>
              {loading ? (
                <LoadingScreen />
              ) : (
                <React.Fragment>
                  <Component {...pageProps} />
                </React.Fragment>
              )}
            </>
          </ThemeProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
