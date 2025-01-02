FROM node:23-alpine as build

WORKDIR /usr/server

COPY package*.json ./ 


RUN npm i -g serve 

RUN npm i --legacy-peer-deps

COPY . .


RUN npm run build

EXPOSE 5000

FROM nginx:1.25.0-alpine as front

RUN mkdir /usr/share/nginx/react

RUN mkdir /usr/share/nginx/iframe

COPY --from=build /usr/server/nginx /etc/nginx/conf.d

COPY --from=build /usr/server/dist /usr/share/nginx/react

COPY --from=build /usr/server/iframe /usr/share/nginx/iframe

EXPOSE 5000

CMD ["nginx", "-g", "daemon off;"]
