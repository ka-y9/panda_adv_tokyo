import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* マニフェストファイルの読み込み */}
          <link rel="manifest" href="/manifest.json" />
          
          {/* ファビコンの設定 */}
          <link rel="icon" href="/favicon.ico" />
          
          {/* メタタグ */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* PWA対応 */}
          <meta name="theme-color" content="#000000" />
          
          {/* 多言語対応のための言語メタタグ */}
          <meta httpEquiv="content-language" content="ja" />
          
          {/* SEO対応 */}
          <meta name="description" content="Your application description" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;