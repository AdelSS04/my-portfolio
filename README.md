# My Portfolio 🚀

# My ## 🚀 Modern Angular Features

> Full-stack developer portfolio showcasing modern Angular architecture and .NET backend with complete production infrastructure- ⚡️ **Angular 18+ with Zoneless Architecture** - Maximum performance with `provideZonelessChangeDetection()`

- 🎯 **Pure Signals Architecture** - All components use input signals, computed signals, and effects

## 🚀 Modern Angular Features- 🔄 **New Control Flow Syntax** - Modern `@if/@for` instead of deprecated `*ngIf/*ngFor`

- 🎨 **Dynamic Theme System** - Real-time theme switching with CSS variables and signal-based state management

- ⚡️ **Angular 18+ with Zoneless Architecture** - Maximum performance with `provideZonelessChangeDetection()`- 🧩 **Standalone Components** - Tree-shakeable, modular architecture

- 🎯 **Pure Signals Architecture** - All components use input signals, computed signals, and effects- 📱 **SSR Optimized** - Server-side rendering for better SEO and performance

- 🔄 **New Control Flow Syntax** - Modern `@if/@for` instead of deprecated `*ngIf/*ngFor`- ♿️ **Accessibility First** - ARIA labels, keyboard navigation, and screen reader support

- 🎨 **Dynamic Theme System** - Real-time theme switching with CSS variables and signal-based state management- 🎭 **Glass Morphism UI** - Modern design with backdrop blur effects and theme-aware styling

- 🧩 **Standalone Components** - Tree-shakeable, modular architecture

- 📱 **SSR Optimized** - Server-side rendering for better SEO and performance## 🏗️ Production Infrastructure

- ♿️ **Accessibility First** - ARIA labels, keyboard navigation, and screen reader support- 🟦 **.NET 9 REST API** backend with robust architecture

- 🎭 **Glass Morphism UI** - Modern design with backdrop blur effects and theme-aware styling- 🐳 **Docker Compose** for multi-container orchestration

- 🌐 **nginx reverse proxy** (Dockerized) with custom configuration

## 🏗️ Production Infrastructure- 🔒 **Let's Encrypt SSL** - Automatic & manual certificate management

- 🤖 **GitHub Actions CI/CD** - Automated build and deployment pipelines

- 🟦 **.NET 9 REST API** backend with robust architecture- 📊 **Smart change detection** - Only rebuild when frontend/backend changes

- 🐳 **Docker Compose** for multi-container orchestration- 🚀 **VPS deployment** via SSH with zero-downtime updates

- 🌐 **nginx reverse proxy** (Dockerized) with custom configuration- 🔧 **Production monitoring** and container health checks

- 🔒 **Let's Encrypt SSL** - Automatic & manual certificate management- 📋 **SSL renewal automation** with `renew-certs.sh` script

- 🤖 **GitHub Actions CI/CD** - Automated build and deployment pipelines- 🗃️ **Volume persistence** for certificates and application data

- 📊 **Smart change detection** - Only rebuild when frontend/backend changes

- 🚀 **VPS deployment** via SSH with zero-downtime updatesA cutting-edge, production-grade fullstack portfolio web application featuring a modern Angular 18+ SSR frontend with **Zoneless Change Detection** and **Signals Architecture**, paired with a .NET 9 backend, containerized with Docker and deployed using nginx as a reverse proxy with Let's Encrypt SSL support.

- 🔧 **Production monitoring** and container health checks

- 📋 **SSL renewal automation** with `renew-certs.sh` script---

- 🗃️ **Volume persistence** for certificates and application data

## 🚀 Modern Angular Features

### Modern Angular Patterns- ⚡️ **Angular 18+ with Zoneless Architecture** - Maximum performance with `provideZonelessChangeDetection()`

- 🎯 **Pure Signals Architecture** - All components use input signals, computed signals, and effects

- **Input Signals**: `project = input.required<Project>()` instead of `@Input`- � **New Control Flow Syntax** - Modern `@if/@for` instead of deprecated `*ngIf/*ngFor`

- **Computed Signals**: `filteredProjects = computed(() => {...})` for reactive data- 🎨 **Dynamic Theme System** - Real-time theme switching with CSS variables and signal-based state management

- **Effects**: `effect(() => {...})` for side effects and DOM manipulation- 🧩 **Standalone Components** - Tree-shakeable, modular architecture

- **Control Flow**: `@if (condition) {...}` and `@for (item of items; track item.id) {...}`- 📱 **SSR Optimized** - Server-side rendering for better SEO and performance

- **Zoneless**: No Zone.js dependency for better performance and cleaner async handling- ♿️ **Accessibility First** - ARIA labels, keyboard navigation, and screen reader support

- 🎭 **Glass Morphism UI** - Modern design with backdrop blur effects and theme-aware styling

### Architecture Benefits

## � Technical Highlights

- 🔥 **Better Performance** - Zoneless change detection reduces overhead

- 🎯 **Type Safety** - Full TypeScript with strict mode### Modern Angular Patterns

- 🧹 **Cleaner Code** - Signals eliminate complex lifecycle management- **Input Signals**: `project = input.required<Project>()` instead of `@Input`

- 📱 **Reactive UI** - Automatic updates with computed signals- **Computed Properties**: `filteredProjects = computed(() => ...)`  

- **Effects**: `effect(() => { ... })` for side effects and lifecycle management

## 🗂️ Project Structure- **Signal State Management**: Theme service with reactive color computations

- **New Control Flow**: `@if (condition)` and `@for (item of items; track item)`

```text

my-portfolio/### Architecture Benefits

├── src/- 🔥 **Better Performance** - Zoneless change detection reduces overhead

│   ├── BE/                    # .NET 9 Backend API- 🎯 **Type Safety** - Full TypeScript integration with signal types

│   │   ├── Controllers/       # REST endpoints- � **Easier Testing** - Simpler component testing without zone.js

│   │   ├── Dockerfile         # Backend container- 🔄 **Reactive by Design** - Automatic UI updates with signal changes

│   │   └── Program.cs         # Entry point- 📦 **Smaller Bundle Size** - Tree-shakeable standalone components

│   └── UI/                    # Angular Frontend

│       ├── src/app/          # Angular application## 🗂️ Project Structure

│       │   ├── components/   # Standalone components```text

│       │   └── services/     # Signal-based servicesmy-portfolio/

│       ├── Dockerfile        # Frontend container├── src/

│       └── package.json      # Dependencies│   ├── BE/                # .NET 9 backend

├── docker-compose.yml        # Development containers│   │   ├── Controllers/   # API controllers

├── docker-compose.prod.yml   # Production containers│   │   ├── Program.cs     # Application entry point

├── nginx.conf               # Reverse proxy config│   │   └── Dockerfile     # Backend container

├── renew-certs.sh          # SSL renewal script│   ├── UI/                # Angular 18+ frontend

└── README.md               # This file│   │   ├── src/app/

```│   │   │   ├── components/    # Signal-based standalone components

│   │   │   │   ├── navbar/    # Navigation with theme switcher

## 🛠️ Getting Started│   │   │   │   ├── hero/      # Landing section with animations

│   │   │   │   ├── about/     # About section with input signals

### Prerequisites│   │   │   │   ├── projects/  # Project grid with filtering

│   │   │   │   ├── project-card/  # Individual project cards

- Node.js 20+│   │   │   │   ├── testimonials/  # Carousel with effects

- .NET 9 SDK│   │   │   │   └── theme-switcher/  # Dynamic theme switching

- Docker & Docker Compose│   │   │   ├── services/      # Signal-based services

- Git│   │   │   │   ├── theme.service.ts    # Theme management with signals

│   │   │   │   └── loader.service.ts   # Loading state management

### Local Development│   │   │   ├── app.config.ts  # Zoneless configuration

│   │   │   └── app.ts         # Main app component with signals

1. **Clone the repo:**│   │   ├── tailwind.config.js # Theme-aware Tailwind configuration

   ```sh│   │   └── Dockerfile         # Frontend container

   git clone https://github.com/adellajil/my-portfolio.git├── docker-compose.prod.yml

   cd my-portfolio├── nginx.conf

   ```├── renew-certs.sh

└── .github/workflows/         # CI/CD pipelines

2. **Install frontend dependencies:**```

   ```sh

   cd src/UI## 🛠️ Development

   npm install

   ```### Prerequisites

- Node.js 20+

3. **Start development servers:**- .NET 9 SDK

   ```sh- Docker & Docker Compose

   # Angular dev server (with SSR)- Modern browser supporting ES2022+

   npm run dev

   ### Local Development

   # .NET API (separate terminal)1. **Clone the repo:**

   cd ../BE   ```sh

   dotnet run   git clone https://github.com/AdelSS04/my-portfolio.git

   ```   cd my-portfolio

   ```

4. **Or use Docker for full stack:**

   ```sh2. **Start backend:**

   docker-compose up --build   ```sh

   ```   cd src/BE

   dotnet restore

### Key Development Commands   dotnet run

   ```

```sh

# Frontend3. **Start frontend with SSR:**

npm run build:ssr        # Build for production with SSR   ```sh

npm run serve:ssr        # Serve SSR build locally   cd src/UI

npm run dev             # Development server   npm install

npm run test            # Run tests   npm run dev:ssr    # Development with SSR

   # or

# Backend   npm start          # Standard development mode

dotnet build            # Build .NET project   ```

dotnet test            # Run backend tests

dotnet publish         # Publish for production4. **Access the application:**

   - Frontend: [`http://localhost:4200`](http://localhost:4200)

# Docker   - Backend API: [`http://localhost:5000`](http://localhost:5000)

docker-compose up      # Start all services

docker-compose down    # Stop all services### Key Development Commands

docker-compose logs    # View logs```sh

```# Build for production

npm run build

## 🚀 Production Deployment

# Run with SSR

### Docker Production Stacknpm run serve:ssr



The production environment uses:# Lint and format

npm run lint

- **Frontend**: Angular SSR in nginx containernpm run format

- **Backend**: .NET 9 API in optimized container

- **Reverse Proxy**: nginx with SSL termination# Test

- **SSL**: Let's Encrypt certificates with auto-renewalnpm test

- **CI/CD**: GitHub Actions for automated deployment```



### Deployment Commands## 🎨 Theme System



```shThe portfolio features a sophisticated theme system built with Angular signals:

# Build and deploy production

docker-compose -f docker-compose.prod.yml up -d --build### Available Themes

- **Ocean Dark** (Default) - Deep blues and cyans

# SSL certificate management- **Sunset** - Warm oranges and reds  

./renew-certs.sh                    # Renew certificates- **Forest** - Natural greens

docker-compose restart nginx        # Reload nginx with new certs- **Royal** - Rich purples and golds

- **Monochrome** - Classic black and white

# Monitoring

docker-compose logs -f              # Follow logs### Theme Architecture

docker-compose ps                   # Check container status```typescript

```// Signal-based theme service

export class ThemeService {

### SSL Certificate Setup  currentTheme = signal<Theme>('ocean-dark');

  

1. **Initial setup:**  // Computed theme properties

   ```sh  getCurrentColors = computed(() => {

   # Create certificate directories    const theme = this.currentTheme();

   mkdir -p certbot/www certbot/conf    return this.themes[theme];

  });

   # Get initial certificates  

   docker-compose run --rm certbot certonly \  // Effect for DOM updates

     --webroot --webroot-path=/var/www/certbot \  private updateThemeEffect = effect(() => {

     --email your-email@domain.com \    this.updateCSSVariables();

     --agree-tos --no-eff-email \    this.updateLocalStorage();

     -d yourdomain.com  });

   ```}

```

2. **Auto-renewal:**

   - Certificates auto-renew via `renew-certs.sh`## 🧩 Component Architecture

   - Cron job runs script monthly

   - nginx reloads automatically after renewalAll components follow modern Angular patterns:



### GitHub Actions CI/CD### Example: Project Card Component

```typescript

The repository includes automated workflows for:@Component({

  selector: 'app-project-card',

- **Frontend changes**: Build and deploy Angular app  standalone: true,

- **Backend changes**: Build and deploy .NET API    template: `

- **Smart detection**: Only rebuild changed services    <div class="project-card">

- **Zero downtime**: Rolling updates with health checks      @if (project().featured) {

- **SSL monitoring**: Certificate expiry notifications        <span class="featured-badge">⭐ Featured</span>

      }

## 🎨 Theme System      

      @for (tech of project().technologies; track tech) {

The portfolio includes a complete theme system with:        <span class="tech-tag">{{ tech }}</span>

      }

- **Signal-based state**: `ThemeService` uses signals for reactive theme management    </div>

- **CSS Variables**: Dynamic theme switching without page reload  `

- **Persistent storage**: User preferences saved to localStorage})

- **System preference**: Respects OS dark/light mode preferenceexport class ProjectCardComponent {

- **Smooth transitions**: Animated theme changes  // Input signal instead of @Input

  project = input.required<Project>();

### Theme Implementation  

  // Computed properties

```typescript  hasLinks = computed(() => 

// ThemeService with signals    !!(this.project().githubUrl || this.project().liveUrl)

currentTheme = signal<'light' | 'dark'>('light');  );

getCurrentColors = computed(() => {}

  return this.currentTheme() === 'light' ? lightTheme : darkTheme;```

});

### Signal Benefits in Action

// Automatic CSS variable updates- **Automatic Updates**: Changes to theme signals instantly update all components

effect(() => {- **Performance**: Only affected components re-render

  const colors = this.getCurrentColors();- **Type Safety**: Full TypeScript support with signal types

  Object.entries(colors).forEach(([key, value]) => {- **Debugging**: Better dev tools support for signal inspection

    document.documentElement.style.setProperty(`--${key}`, value);

  });## 🔐 Production Deployment

});

```### Docker Production Build

```sh

## 📊 Performance Optimizations# Build and deploy all services

docker-compose -f docker-compose.prod.yml up --build -d

- **Zoneless Angular**: No Zone.js for better performance

- **Signal-based reactivity**: Precise change detection# View logs

- **Tree-shaking**: Minimal bundle size with standalone componentsdocker-compose -f docker-compose.prod.yml logs -f

- **SSR**: Server-side rendering for faster initial load

- **Docker multi-stage**: Optimized production images# Scale services

- **nginx caching**: Static asset caching and compressiondocker-compose -f docker-compose.prod.yml up --scale frontend=2

- **CDN ready**: Configured for CDN deployment```



## 🤝 Contributing### SSL & Security

- **Let's Encrypt SSL** - Automatic HTTPS certificates

1. Fork the repository- **nginx Security Headers** - HSTS, CSP, X-Frame-Options

2. Create a feature branch: `git checkout -b feature-name`- **Docker Security** - Non-root containers, minimal attack surface

3. Commit changes: `git commit -m 'Add feature'`

4. Push to branch: `git push origin feature-name````sh

5. Open a Pull Request# Renew SSL certificates

./renew-certs.sh

## 📄 License

# Check certificate expiry

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.openssl x509 -in letsencrypt-certs/live/yourdomain.com/cert.pem -text -noout

```

## 🔗 Links

## ⚙️ CI/CD Pipeline

- **Live Demo**: [https://adellajil.com](https://adellajil.com)

- **Blog**: [https://blog.adellajil.com](https://blog.adellajil.com)GitHub Actions with smart change detection:

- **LinkedIn**: [Adel Lajil](https://linkedin.com/in/adel-lajil)

- **GitHub**: [@adellajil](https://github.com/adellajil)```yaml

# Only rebuild when relevant files change

---- name: Check for changes

  uses: dorny/paths-filter@v2

Made with ❤️ using Angular 18+ Signals, .NET 9, Docker, and modern web technologies  with:
    filters: |
      frontend: 'src/UI/**'
      backend: 'src/BE/**'
      
# Build only changed services
- name: Build Frontend
  if: steps.changes.outputs.frontend == 'true'
  run: docker build -t portfolio-frontend ./src/UI
```

## 🧪 Testing Strategy

### Frontend Testing
```sh
# Unit tests for components with signals
npm run test

# E2E tests
npm run e2e

# Lighthouse CI for performance
npm run lighthouse
```

### Backend Testing
```sh
cd src/BE
dotnet test
```

## 📊 Performance Features

- **Zoneless Change Detection** - ~30% performance improvement
- **Standalone Components** - Smaller bundle sizes
- **Signal-based Updates** - Precise change tracking
- **SSR** - Faster initial page loads
- **Lazy Loading** - Components loaded on demand
- **Image Optimization** - WebP with fallbacks

## 🎯 Browser Support

- **Modern Browsers**: Chrome 88+, Firefox 78+, Safari 14+, Edge 88+
- **Signals Support**: Native ES2022+ features
- **Graceful Degradation**: Progressive enhancement approach

## 🧑‍💻 Customization Guide

### Adding New Themes
```typescript
// In theme.service.ts
export const themes = {
  'your-theme': {
    primary: '#your-color',
    accent: '#your-accent',
    // ... other colors
  }
};
```

### Creating Signal Components
```typescript
@Component({
  standalone: true,
  template: `
    @if (isVisible()) {
      <div>{{ computedValue() }}</div>
    }
  `
})
export class MyComponent {
  // Input signals
  data = input.required<Data>();
  
  // Computed signals
  computedValue = computed(() => 
    this.data().value.toUpperCase()
  );
  
  // Local signals
  isVisible = signal(true);
  
  // Effects
  constructor() {
    effect(() => {
      console.log('Data changed:', this.data());
    });
  }
}
```

## 🏆 Best Practices Implemented

### Angular Signals
- ✅ Input signals for all component inputs
- ✅ Computed signals for derived state
- ✅ Effects for side effects and lifecycle
- ✅ Signal-based services for state management

### Modern Patterns
- ✅ Zoneless change detection for performance
- ✅ Standalone components for modularity
- ✅ New control flow syntax (`@if/@for`)
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier for code quality

### Architecture
- ✅ Separation of concerns
- ✅ Reactive patterns throughout
- ✅ Type-safe APIs
- ✅ Accessibility compliance
- ✅ Progressive enhancement

## 📸 Screenshots
![Portfolio Screenshot](https://via.placeholder.com/800x400/1e1e1e/ffffff?text=Modern+Angular+Portfolio)

## 🚀 Live Demo
Visit the live portfolio: [https://portfolio.adellajil.com](https://portfolio.adellajil.com)

## 📄 License
MIT

---

**Built with ❤️ using Angular 18+ Signals & .NET 9**  
**Author:** [Adel Lajil](https://github.com/AdelSS04)
