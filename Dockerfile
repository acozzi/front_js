FROM nginx:latest

COPY ./ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t nginx-front .
# docker run --name front-js -p 8080:80 nginx-front