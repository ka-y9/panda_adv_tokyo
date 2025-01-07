# ベースイメージ
FROM node:18-alpine AS base

# 作業ディレクトリ設定
WORKDIR /app

# 依存関係のインストール
COPY package.json package-lock.json ./
RUN npm ci

# ソースコードのコピー
COPY . .

# 環境変数の設定
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Next.jsビルド
RUN npm run build

# 本番環境用のランタイムステージ
FROM node:18-alpine AS runner

WORKDIR /app

# セキュリティとパフォーマンスの最適化
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# ビルド成果物とnode_modulesのコピー
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/next.config.js ./next.config.js
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static

# 必要な環境設定ファイルのコピー
COPY --from=base /app/.env.production ./.env.production

# 多言語対応リソースのコピー
COPY --from=base /app/src/assets/locales ./locales

# ユーザー権限の設定
USER nextjs

# ポート公開
EXPOSE 3000

# 起動コマンド
CMD ["node", "server.js"];