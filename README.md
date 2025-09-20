
# My Portfolio

A robust, production-grade fullstack portfolio web application featuring an Angular 20+ SSR frontend and a .NET 9 backend, containerized with Docker and deployed using nginx as a reverse proxy with Let's Encrypt SSL support.

---

## 🚀 Features
- ⚡️ Modern Angular SSR frontend (with Tailwind CSS)
- 🟦 .NET 9 REST API backend
- 🐳 Docker Compose for multi-container orchestration
- 🌐 nginx reverse proxy (Dockerized)
- 🔒 Automatic & manual SSL certificate management (Let's Encrypt)
- 🤖 GitHub Actions CI/CD for build and deployment
- 🧩 Modular, component-based UI (About, Projects, Skills, Education, Testimonials, Contact, etc.)

## 🗂️ Project Structure
```text
my-portfolio/
├── src/
│   ├── BE/                # .NET backend source
│   ├── UI/                # Angular frontend source
│   ├── api/               # API entrypoint (if any)
│   └── ...
├── docker-compose.prod.yml
├── nginx.conf
├── renew-certs.sh
├── letsencrypt-certs/     # SSL certs (mounted in prod)
└── .github/workflows/     # CI/CD pipelines
```

## 🛠️ Development
### Prerequisites
- Node.js 20+
- .NET 9 SDK
- Docker & Docker Compose

### Local Development
1. **Clone the repo:**
   ```sh
   git clone https://github.com/AdelSS04/my-portfolio.git
   cd my-portfolio
   ```
2. **Start backend and frontend (dev):**
   ```sh
   cd src/BE && dotnet run
   # In another terminal:
   cd src/UI && npm install && npm run dev:ssr
   ```
3. Visit [`http://localhost:4200`](http://localhost:4200) for the frontend, [`http://localhost:5000`](http://localhost:5000) for the API.

> **Pro Tip:** Use [ngrok](https://ngrok.com/) or [localtunnel](https://theboroer.github.io/localtunnel-www/) to securely share your local site for quick demos.

### Production (Docker)
1. **Build and run all services:**
   ```sh
   docker-compose -f docker-compose.prod.yml up --build
   ```
2. nginx will serve the app on ports 80/443.

> **Pro Tip:** Use `docker-compose down --volumes` to clean up all containers and volumes if you need a fresh start.

## 🔐 SSL Certificates
- Uses Let's Encrypt for HTTPS (manual and automated renewal supported).
- See `renew-certs.sh` for renewal process.
- Certs are mounted into the nginx container for secure serving.

> **Pro Tip:** Schedule a cron job to run `renew-certs.sh` monthly and auto-restart nginx for seamless SSL renewal.

## ⚙️ CI/CD
- GitHub Actions build and push Docker images only when relevant code changes (efficient, cost-saving).
- Automated deployment to VPS via SSH and Docker Compose.
- Deploys only on push to `main` branch and only if backend or frontend changed.

> **Pro Tip:** Use GitHub Environments and branch protection rules for safer production deployments.

## 🧑‍💻 Customization
- Update content in `src/UI/src/app/components/` for About, Projects, Education, etc.
- Add new skills, testimonials, or project cards as needed.
- Easily extend with new Angular components or backend endpoints.

> **Pro Tip:** Keep your secrets (API keys, tokens) out of the repo—use environment variables and GitHub Secrets.

## 🏆 Best Practices
- Use multi-stage Docker builds for smaller, more secure images.
- Keep dependencies up to date (use Dependabot or npm audit).
- Write unit and integration tests for both frontend and backend.
- Monitor your deployed app with tools like UptimeRobot or Grafana.
- Regularly back up your SSL certs and important configs.

## 📸 Screenshots
<!-- Add screenshots or GIFs of your app here -->

## 📄 License
MIT

---
**Author:** Adel Lajil
