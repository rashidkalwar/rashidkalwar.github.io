import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";

//fonts
import "@fontsource/inter";
import "@fontsource/cookie";
import "@fontsource/space-mono";

export default function App(props) {
  const { Component, pageProps } = props;

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-theme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme, fontFamily: "Inter" }}
        >
          <ThemeProvider
            enableSystem={true}
            attribute="class"
            defaultTheme="light"
          >
            <Component {...pageProps} />
          </ThemeProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
