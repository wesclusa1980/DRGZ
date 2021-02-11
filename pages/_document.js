import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://unpkg.com/feather-icons"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>feather.replace()</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
