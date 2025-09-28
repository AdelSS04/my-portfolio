# My Portfolio 🚀

_A cutting-edge, production-grade full-stack portfolio web application featuring an Angular 18+ SSR frontend with Zoneless Change Detection and Signals Architecture, paired with a .NET 9 backend, containerized with Docker and deployed via Nginx with Let’s Encrypt SSL support._

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
- [Production Deployment](#production-deployment)
- [Theme System](#theme-system)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Links](#links)

---

## Features

- 🚀 **Angular 18+ Zoneless** Change Detection via `provideZonelessChangeDetection()`
- 🎯 **Signals Architecture** (input, computed, effects)
- 🔄 **New Control-Flow Syntax** (`@if/@for` replacing `*ngIf/*ngFor`)
- 🎨 **Dynamic Theme System** using CSS variables + signals
- 🧩 **Standalone Components** for tree-shaking
- 📱 **SSR-Optimized** for SEO & performance
- ♿️ **Accessibility First** (ARIA, keyboard nav)
- 🐳 **Docker Compose** multi-container orchestration
- 🌐 **Nginx Reverse Proxy** with Let’s Encrypt SSL
- 🤖 **GitHub Actions CI/CD**
- 🔋 **Smart Change Detection** rebuilds only what changed

---

## Project Structure

```text
my-portfolio/
├── docker-compose.yml
├── docker-compose.prod.yml
├── nginx.conf
├── renew-certs.sh
├── README.md
└── src/
    ├── BE/
    │   ├── Controllers/
    │   ├── Program.cs
    │   ├── appsettings.json
    │   └── Dockerfile
    └── UI/
        ├── src/
        ├── Dockerfile
        └── package.json
.github/
└── workflows/
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- .NET 9 SDK
- Docker & Docker Compose
- Git

### Installation

```bash
git clone https://github.com/AdelSS04/my-portfolio.git
cd my-portfolio
```

#### Frontend Setup

```bash
cd src/UI
npm install
```

#### Backend Setup

```bash
cd src/BE
dotnet restore
```

---

## Development

### Run Locally

Open **two** terminals:

#### Frontend Development

```bash
cd src/UI
npm run dev
```

#### Backend Development

```bash
cd src/BE
dotnet run
```

Or use Docker all-in-one:

```bash
docker-compose up --build
```

---

## Production Deployment

```bash
docker-compose -f docker-compose.prod.yml up -d --build
```

---

## Theme System

Supported themes (switch at runtime via the UI):

- **Ocean Dark** (default)
- **Sunset**
- **Forest**
- **Royal**
- **Monochrome**

### Renew SSL certificates

```bash
./renew-certs.sh
docker-compose restart nginx
```

---

## Testing

### Frontend Testing

```bash
cd src/UI
npm run test
npm run e2e
npm run lighthouse
```

### Backend Testing

```bash
cd src/BE
dotnet test
```

---

## Contributing

1. Fork the repo  
2. Create feature branch: `git checkout -b feature-name`  
3. Commit your changes: `git commit -m "Add feature"`  
4. Push branch: `git push origin feature-name`  
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Links

- **Live Demo**: [https://portfolio.adellajil.com](https://portfolio.adellajil.com)
- **Blog**: [https://blog.adellajil.com](https://blog.adellajil.com)
- **LinkedIn**: [Adel Lajil](https://linkedin.com/in/adel-lajil)
- **GitHub**: [@adellajil](https://github.com/adellajil)

---

**Built with ❤️ using Angular 18+ Signals & .NET 9**  
**Author:** [Adel Lajil](https://github.com/AdelSS04)
