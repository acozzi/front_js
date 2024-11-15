FROM nginx:latest

COPY ./ /usr/share/nginx/html

EXPOSE 8080

CMD ["sh", "-c", "nginx -g 'daemon off;' -p $PORT"]

# docker build -t nginx-front .
# docker run --name front-js -p 8080:80 nginx-front
# docker run --name front-js -p 8081:80 -v PWD:/usr/share/nginx/html nginx-front