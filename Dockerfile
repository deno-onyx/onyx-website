FROM hayd/alpine-deno:1.4.6

WORKDIR /usr/app

COPY . /usr/app

EXPOSE 8080

CMD [ "run", "--unstable", "--allow-net", "--allow-env", "--allow-read", "--allow-write", "--allow-plugin", "server/server.tsx" ] 

# deno run --unstable --allow-net --allow-env --allow-read --allow-write --allow-plugin server/server.tsx