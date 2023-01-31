import {createGetInitialProps} from "@mantine/next";
import Document, {Head, Html, Main, NextScript} from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          {/*
            This is where you can add your custom fonts or other stylesheets (IF THIS IS HOW YOU WANT TO ADD CUSTOM FONTS).
            You can add your own custom fonts -- refer to: https://mantine.dev/theming/typography/#load-custom-fonts
          */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
