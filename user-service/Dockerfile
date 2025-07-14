FROM	debian:latest

# Installer les dependances et Node JS
RUN		apt update -y && \
		apt upgrade -y && \
		apt install -y curl gnupg && \
		curl -fsSL https://deb.nodesource.com/setup_22.x | bash - && \
		apt install -y nodejs && \
		rm -rf /var/lib/apt/lists/*

WORKDIR /user-service

# Copier tout le dossier conf
COPY conf/ .

# Installer les dépendances Node
RUN npm install

# Builder Tailwind (depuis package.json)
RUN npm run build

# Expose un port
EXPOSE 3000

CMD ["node", "dist/index.js"]
