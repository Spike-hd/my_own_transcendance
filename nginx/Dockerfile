FROM	debian:latest

RUN		apt update -y && \
		apt upgrade -y && \
		apt install -y openssl nginx vim curl && \
		mkdir -p /etc/nginx/ssl && \
		openssl req -x509 -nodes -days 365 \
		-newkey rsa:2048 \
		-keyout /etc/nginx/ssl/inception.key \
		-out /etc/nginx/ssl/inception.crt \
		-subj "/C=FR/ST=Occitanie/L=Perpignan/O=42/OU=42/CN=pong.fr" && \
		mkdir -p /var/run/nginx && \
		chmod -R 755 /var/www/html && \
		mkdir /var/www/html/dist && \
		mkdir /var/www/html/assets && \
		mkdir /var/www/html/src

COPY	nginx/proxy.conf /etc/nginx/proxy.conf
COPY	frontend/conf/dist /var/www/html/dist
COPY	frontend/conf/assets /var/www/html/assets
COPY	frontend/conf/src /var/www/html/src

CMD		[ "nginx", "-g", "daemon off;" ]
