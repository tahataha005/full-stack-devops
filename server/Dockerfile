FROM oven/bun:canary-debian

WORKDIR /usr/server

COPY bun.lockb .
COPY package*.json .

RUN bun install --frozen-lockfile

COPY . .

EXPOSE 8080

CMD ["bun","index.ts"]