import {AppProps} from "next/app";
import Head from "next/head";
import {ColorScheme, ColorSchemeProvider, MantineProvider} from "@mantine/core";
import {ModalsProvider} from '@mantine/modals';
import {NotificationsProvider} from '@mantine/notifications';
import {createBrowserSupabaseClient} from '@supabase/auth-helpers-nextjs';
import {SessionContextProvider} from '@supabase/auth-helpers-react';
import {theme} from "../theme";
import {useState} from "react";

export default function App(props: AppProps) {
  const {Component, pageProps} = props;
  const [supabase] = useState(() => createBrowserSupabaseClient())
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <>
      <Head>
        <title>Supa-Mantine App</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
              /** Put your mantine theme override here */
              ...theme,
              colorScheme
            }}
          >
            <ModalsProvider>
              <NotificationsProvider>
                <Component {...pageProps} />
              </NotificationsProvider>
            </ModalsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </SessionContextProvider>
    </>
  );
}
