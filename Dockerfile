FROM daocloud.io/php:5.6-apache
RUN apt-get install -y php5-curl
COPY . /var/www/html
WORKDIR /var/www/html
