FROM oven/bun:canary-debian

WORKDIR /server

COPY ./server/bun.lockb .
COPY ./server/package*.json .

RUN bun install --frozen-lockfile

COPY ./server .

EXPOSE 8080

CMD ["bun","index.ts"]