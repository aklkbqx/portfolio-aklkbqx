FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile --no-optional

COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "run", "start"]