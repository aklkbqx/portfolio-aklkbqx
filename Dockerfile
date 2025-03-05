FROM oven/bun:latest AS deps
WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

FROM oven/bun:latest AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN bun run build

FROM oven/bun:latest AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN bun install --production

EXPOSE 3000

CMD ["bun", "start"]