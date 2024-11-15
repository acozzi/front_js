FROM nginx:latest

COPY ./ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]

# docker build -t nginx-front .
# docker run --name front-js -p 8080:80 nginx-front
# docker run --name front-js -p 8081:80 -v PWD:/usr/share/nginx/html nginx-front

