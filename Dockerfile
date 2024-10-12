FROM nginx:latest

# Uso copy cuando quiera desplegar el contenedor y mount para desarrollar
#COPY ./ /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# docker build -t nginx-front .
# docker run --name front-js -p 8080:80 nginx-front
# docker run --name front-js -p 8081:80 -v PWD:/usr/share/nginx/html nginx-front