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
		chmod -R 755 /var/www/html

COPY	proxy.conf /etc/nginx/proxy.conf
COPY	../frontend/conf/dist /var/www/html/
COPY	../frontend/conf/assets /var/www/html/
COPY	../frontend/conf/src /var/www/html/

CMD		[ "nginx", "-g", "daemon off;" ]
