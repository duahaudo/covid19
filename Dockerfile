FROM node:16 as build-env
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx
# RUN ls /usr/src/app/build
RUN ls /usr/share/nginx/html
COPY --from=build-env /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
