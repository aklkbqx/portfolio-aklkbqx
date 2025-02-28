FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install

COPY . .
RUN bun run build

EXPOSE 80
CMD ["bun", "run", "start"]
