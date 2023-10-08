---
outline: deep
---

# Running and Deploying

**[GitHub repository](https://github.com/teleform-app/teleform)**

The Teleform code is organized as a monorepo, with the following structure:

* [`frontend`](https://github.com/teleform-app/teleform/tree/main/frontend) - frontend app, written in React
* [`backend`](https://github.com/teleform-app/teleform/tree/main/backend) - backend app, written in Golang
* [`docs`](https://github.com/teleform-app/teleform/tree/main/docs) - this documentation, written on Vitepress

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

This configuration is already suitable for production. Just do the same steps as for running locally, but on your server.

You may wish to make your app available not only on 8080 port, but in 80 or 443. In this case, you can set up reverse proxy like [nginx](https://nginx.org/en/docs/beginners_guide.html). For example, with such config:

```nginx
events {}

http {
    server {
        listen 80;
        server_name your-domain.com;

        location / {
            proxy_pass http://localhost:8080;
        }
    }
}
```

As an alternative, you can just edit `compose.yml` and change target port.


### Running frontend separately

1. Install Node.js 18 or higher.
2. Change working directory to `frontend` (`cd frontend`)
3. Run `npm install`, then `npm run dev` to run the app locally.
4. Run `npm run build` to build the app for production. The result will be in `frontend/dist` directory.
5. Run `npm run serve` to serve the app locally at `localhost:3000`.

### Running backend separately

1. Create `env` file as described above.
2. Install Golang 1.18 or higher.
3. Change working directory to `backend` (`cd backend`)
4. Place frontend build from `frontend/dist` to `backend/frontend-build` directory (it is served from the backend app).
5. Run `go run main.go` to run the app locally.

