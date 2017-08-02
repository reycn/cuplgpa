FROM daocloud.io/php:5.6-apache
COPY / /var/www/html/
RUN chmod 755 /var/www/html/get.php
