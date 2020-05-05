FROM debian

RUN apt-get update
RUN apt-get upgrade
RUN apt-get install curl unzip -y
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"
ENV PORT="1234"

WORKDIR /usr/src/app
COPY . .

RUN deno cache server.ts

CMD ["deno", "run", "--allow-env", "--allow-net", "server.ts"]