FROM oven/bun:canary-debian

WORKDIR /usr/full-stack-devops/server

COPY package*.json .

RUN bun install

COPY . .

EXPOSE 8080

CMD ["bun","index.ts"]