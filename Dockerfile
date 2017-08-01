FROM daocloud.io/php:5.6-apache
RUN apt-get update && apt-get install -y \
        php5-curl
COPY config/php.ini /usr/local/etc/php
COPY / /var/www/html/
