```yaml
src:
  build:
    next.config.js:
      content: |-
        /** @type {import('next').NextConfig} */
        const nextConfig = {
          reactStrictMode: true,
          i18n: {
            locales: ['ja', 'en'],
            defaultLocale: 'ja'
          },
          webpack: (config) => {
            config.module.rules.push({
              test: /\.(mp3|wav|ogg)$/,
              use: {
                loader: 'file-loader',
                options: {
                  publicPath: '/_next/static/sounds',
                  outputPath: 'static