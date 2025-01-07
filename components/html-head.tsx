import Head from 'next/head';
import { FC } from 'react';

interface HtmlHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const HtmlHead: FC<HtmlHeadProps> = ({
  title = 'デフォルトタイトル',
  description = 'デフォルト説明文',
  keywords = 'デフォルト,キーワード',
  ogImage = '/default-og-image.png'
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* レスポンシブ対応 */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* ファビコン */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* PWAマニフェスト */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* OGP設定 */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      
      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" href="/favicon.ico" />
      
      {/* テーマカラー */}
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default HtmlHead;

<HtmlHead 
  title="ページタイトル" 
  description="ページ説明" 
  keywords="キーワード1,キーワード2"
  ogImage="/custom-og-image.png"
/>;