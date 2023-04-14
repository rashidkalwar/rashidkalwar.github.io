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
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, maximum-scale=1.0, user-scalable=no"
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
