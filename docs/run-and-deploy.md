---
outline: deep
---

# Running and Deploying

**[Github repository](https:://github.com/teleform-app/teleform)**

The Teleform code is organized as a monorepo, with the following structure:

* `frontend` - frontend app, written in React
* `backend` - backend app, written in Golang
* `docs` - this documentation, written on Vitepress

There is two ways to run, deploy and develop Teleform: as a single service with Docker Compose or as a separate frontend and backend.

## 🐳 With docker-compose (recommended)
Create `env` file in the project root directory with the following content:
```bash
# Bot token from @BotFather
TELEGRAM_BOT_TOKEN=your_token

# Is to skip validation of init_data (useful for testing)
SKIP_INIT_DATA_VALIDATION=false
```

After that, install Docker and use
```bash
docker-compose up --build
```
to run the app. It will be available at `localhost:8080` – both the frontend and backend.

## Deploying

### As a single service (recommended)
Configuration above is already suitable for production. Just do the same steps as for running locally, but on your server.

You may wish to make your app available not only on 8080 port, but in 80 or 443. In this case, you can set up reverse proxy like [nginx](https://nginx.org/en/docs/beginners_guide.html). For example, with such config:
```nginx
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://localhost:8080;
    }
}
```

As an alternative, you can just edit `compose.yml` and change target port.


### Deploying frontend separately