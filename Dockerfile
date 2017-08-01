FROM daocloud.io/php:5.6-apache
RUN apt-get update && apt-get install -y php5-curl php5-gd
COPY . /var/www
WORKDIR /var/www
