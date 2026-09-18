import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { ArrowDown, ArrowUpRight, Check, ChevronLeft, ChevronRight, Github, Linkedin, Menu, X, LucideAngularModule } from 'lucide-angular';
import { ContactComponent } from '../components/contact/contact';
import { experience, projects, services, stack } from '../portfolio-data';

interface GithubProfile { public_repos: number; followers: number; }
interface ContributionDay { date: string; count: number; level: number; }
interface ContributionResponse { total: Record<string, number>; contributions: ContributionDay[]; }

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LucideAngularModule, ContactComponent],
  styleUrl: '../portfolio-page.css',
  template: `
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header" [class.scrolled]="scrolled()">
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="#home" (click)="closeMenu()"><img src="/logo-adel.webp" alt="" width="28" height="28" decoding="async"> Adel Lajil</a>
        <div class="nav-links">@for (item of nav; track item.id) { <a [href]="'#' + item.id" [class.active]="activeSection() === item.id">{{ item.label }}</a> }</div>
        <details class="nav-more"><summary [class.active]="moreSectionActive()">More</summary><div>@for (item of moreNav; track item.id) { <a [href]="'#' + item.id" [class.active]="activeSection() === item.id">{{ item.label }}</a> }</div></details>
        <a class="nav-contact" href="#contact">Let's talk <lucide-icon [img]="ArrowUpRight" /></a>
        <button class="menu-button" type="button" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-controls="mobile-nav" aria-label="Toggle navigation"><lucide-icon [img]="menuOpen() ? X : Menu" /></button>
      </nav>
      @if (menuOpen()) { <div id="mobile-nav" class="mobile-nav">@for (item of nav; track item.id) { <a [href]="'#' + item.id" (click)="closeMenu()">{{ item.label }}</a> }@for (item of moreNav; track item.id) { <a [href]="'#' + item.id" (click)="closeMenu()">{{ item.label }}</a> }<a href="#contact" (click)="closeMenu()">Let's talk</a></div> }
    </header>

    <main id="main">
      <section id="home" class="hero">
        <div class="hero-glow"></div><div class="hero-grid-lines"></div>
        <p class="hero-status"><span></span> Available for senior engineering roles</p>
        <div class="hero-name" aria-hidden="true"><span>ADEL</span><span>LAJIL</span></div>
        <div class="hero-portrait"><div class="portrait-aura"></div><img src="/me-portrait.webp" alt="Portrait of Adel Lajil" width="900" height="900" fetchpriority="high" decoding="async"></div>
        <div class="hero-content">
          <p class="hero-role">Senior Software Engineer<br><b>.NET · Angular · Azure</b></p>
          <p class="hero-intro">I build reliable SaaS platforms and cloud services that connect industrial devices to the products people use every day.</p>
          <div class="hero-actions"><a class="button button-primary" href="#work">View projects <lucide-icon [img]="ArrowUpRight" /></a><a class="button button-ghost" href="#contact">Start a conversation</a></div>
        </div>
        <dl class="proof-strip"><div><dt>100+</dt><dd>organizations served</dd></div><div><dt>5,000+</dt><dd>devices provisioned</dd></div><div><dt>30%+</dt><dd>Azure cost reduction</dd></div><div><dt>FR · EN · AR</dt><dd>working languages</dd></div></dl>
        <a class="scroll-cue" href="#intro" aria-label="Scroll to introduction"><span>Scroll</span><lucide-icon [img]="ArrowDown" /></a>
      </section>

      <section id="intro" class="intro reveal-section">
        <div class="section intro-layout">
          <div class="intro-heading"><div class="section-kicker">Quick introduction</div><h2>The engineer<br><em>behind the systems.</em></h2><p>A short view of what I care about, what I build, and how I contribute when the software reaches production.</p></div>
          <div class="intro-stage">
            <div class="intro-profile">
              <div class="intro-orbit" aria-hidden="true"><span></span><i></i></div>
              <span class="intro-location">Québec, Canada · Eastern Time</span>
              <p>Senior engineer for products where cloud software meets real operations.</p>
            </div>
            <div class="intro-statement"><span>What I bring</span><p>I turn complicated operational problems into software that teams can understand, operate, and confidently extend.</p><a href="#about">Meet Adel <lucide-icon [img]="ArrowDown" /></a></div>
            <dl><div><dt>Focus</dt><dd>SaaS & industrial IoT</dd></div><div><dt>Core</dt><dd>.NET, Angular & Azure</dd></div><div><dt>Approach</dt><dd>Own problems end to end</dd></div></dl>
          </div>
        </div>
      </section>

      <section id="about" class="section about reveal-section">
        <div class="section-kicker">About</div>
        <h2>Senior engineer who stays<br><em>with the problem.</em></h2>
        <div class="about-spread">
          <div class="about-story">
            <p class="lead">I’m a backend-first full-stack engineer with 6+ years of experience building SaaS products, public-sector applications, and device-cloud systems.</p>
            <p>My day-to-day work spans .NET services, Angular interfaces, Azure infrastructure, and production support. At Evident Industrial, I work across three AKS microservices and maintain provisioning paths used by more than 5,000 connected devices.</p>
            <p>I like owning the full path: understand the workflow, write the ADR, build the change, review it with the team, and stay close when it reaches production.</p>
            <a class="text-link" href="#experience">Read my experience <span>↓</span></a>
            <dl class="about-stats"><div><dt>6+</dt><dd>years building software</dd></div><div><dt>5,000+</dt><dd>devices provisioned</dd></div><div><dt>7</dt><dd>developers led</dd></div><div><dt>30%+</dt><dd>Azure cost reduction</dd></div></dl>
          </div>
          <aside class="about-scope" aria-label="What I do">
            <span class="about-scope-label">What I do</span>
            <ul>
              <li><lucide-icon [img]="Check" /><span>Design multi-tenant .NET services and Angular applications</span></li>
              <li><lucide-icon [img]="Check" /><span>Build REST, gRPC, messaging, and background-job workflows</span></li>
              <li><lucide-icon [img]="Check" /><span>Provision industrial devices with IoT Hub, DPS, and X.509</span></li>
              <li><lucide-icon [img]="Check" /><span>Define Azure infrastructure with Terraform, Helm, and Kubernetes</span></li>
              <li><lucide-icon [img]="Check" /><span>Write ADRs, review code, debug production, and mentor developers</span></li>
            </ul>
            <div class="about-availability"><i></i><span>Based in Québec · Working in English and French</span></div>
          </aside>
        </div>
      </section>

      <section id="work" class="section work reveal-section">
        <div class="section-heading"><div><div class="section-kicker">Selected work</div><h2>Products built for<br><em>real use.</em></h2></div><p>Independent SaaS, platform engineering, enterprise delivery, and open-source tools. These are real products, not placeholder case studies.</p></div>
        <div class="project-carousel">
          <div #projectTrack class="project-track" (scroll)="syncProjectIndex(projectTrack)">
            @for (project of projects; track project.title; let index = $index) {
              <article class="project-card" [class.active]="selectedProject() === index" [class.project-card--featured]="project.featured" tabindex="0" [attr.aria-expanded]="selectedProject() === index" (mouseenter)="selectedProject.set(index)" (focusin)="selectedProject.set(index)" (click)="selectProject(index)">
                <div class="project-media"><img [src]="project.image" [alt]="project.title + ' project preview'" width="1280" height="720" loading="lazy" decoding="async"><div class="project-shade"></div><span>{{ project.featured ? 'Featured · ' + project.category : project.category }}</span></div>
                <div class="project-body"><div class="project-title"><h3>{{ project.title }}</h3><small>{{ project.year }}</small></div><p>{{ project.description }}</p><strong>{{ project.impact }}</strong><div class="tags">@for (tag of project.technologies; track tag) { <span>{{ tag }}</span> }</div><div class="project-links">@if (project.liveUrl) { <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer">Live project ↗</a> }@if (project.githubUrl) { <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer">Source ↗</a> }</div></div>
              </article>
            }
          </div>
          <div class="carousel-controls"><div class="carousel-buttons"><button type="button" (click)="moveProject(-1)" [disabled]="selectedProject() === 0" aria-label="Previous project"><lucide-icon [img]="ChevronLeft" /></button><button type="button" (click)="moveProject(1)" [disabled]="selectedProject() === projects.length - 1" aria-label="Next project"><lucide-icon [img]="ChevronRight" /></button></div><div class="carousel-dots">@for (project of projects; track project.title; let index = $index) { <button type="button" [class.active]="selectedProject() === index" (click)="selectProject(index)" [attr.aria-label]="'Go to ' + project.title"></button> }</div><span>{{ selectedProject() + 1 }} / {{ projects.length }}</span></div>
        </div>
      </section>

      <section id="services" class="section services reveal-section">
        <div class="section-heading"><div><div class="section-kicker">Capability</div><h2>What I can build<br><em>with your team.</em></h2></div><p>Choose an area to see the kind of problems I can take from technical direction through production support.</p></div>
        <div class="capability-shell"><div class="capability-tabs" role="tablist" aria-label="Capabilities">@for (service of services; track service.title; let index = $index) { <button type="button" role="tab" [attr.aria-selected]="selectedService() === index" [class.active]="selectedService() === index" (click)="selectedService.set(index)"><span>{{ (index + 1).toString().padStart(2, '0') }}</span>{{ service.title }}</button> }</div>@if (currentService(); as service) { <div class="capability-panel" role="tabpanel"><div class="capability-copy"><span>{{ service.eyebrow }}</span><h3>{{ service.title }}</h3><p>{{ service.copy }}</p><div class="capability-tools">{{ service.tools }}</div><a href="#contact">Talk about this work <lucide-icon [img]="ArrowUpRight" /></a></div><div class="capability-proof"><ul>@for (benefit of service.benefits; track benefit) { <li><lucide-icon [img]="Check" />{{ benefit }}</li> }</ul><p><small>PROOF FROM MY WORK</small>{{ service.proof }}</p></div><div class="capability-mark" aria-hidden="true">{{ service.title.charAt(0) }}</div></div> }</div>
      </section>

      <section id="stack" class="stack-section reveal-section">
        <div class="section stack-heading"><div><div class="section-kicker">Tech stack</div><h2>The tools I<br><em>ship with.</em></h2></div><p>Depth across application architecture, modern frontend systems, data, cloud delivery, and connected devices.</p></div>
        <div class="marquee" aria-hidden="true"><div><span>.NET</span><i>✦</i><span>Angular</span><i>✦</i><span>Azure</span><i>✦</i><span>PostgreSQL</span><i>✦</i><span>Kubernetes</span><i>✦</i><span>IoT Hub</span><i>✦</i><span>.NET</span><i>✦</i><span>Angular</span><i>✦</i><span>Azure</span><i>✦</i><span>PostgreSQL</span></div></div>
        <div class="marquee marquee-reverse" aria-hidden="true"><div><span>Terraform</span><i>✦</i><span>SignalR</span><i>✦</i><span>Cosmos DB</span><i>✦</i><span>RabbitMQ</span><i>✦</i><span>GitHub Actions</span><i>✦</i><span>Docker</span><i>✦</i><span>Terraform</span><i>✦</i><span>SignalR</span><i>✦</i><span>Cosmos DB</span></div></div>
        <div class="section stack-ledger">@for (group of stack; track group[0]; let index = $index) { <article class="stack-row"><div><span>{{ (index + 1).toString().padStart(2, '0') }}</span><h3>{{ group[0] }}</h3></div><ul>@for (item of group.slice(1); track item) { <li>{{ item }}</li> }</ul></article> }<aside class="stack-cert"><span>Microsoft certified</span><strong>Azure Developer Associate</strong><small>AZ-204 · Earned 2023</small></aside></div>
      </section>

      <section id="experience" class="section experience reveal-section">
        <div class="section-heading"><div><div class="section-kicker">Experience</div><h2>Years inside<br><em>complex systems.</em></h2></div><p>From marketplace backends to public-sector applications and industrial IoT platforms.</p></div>
        <div class="branch-head"><span>HEAD · Present</span><b>Active career branch</b></div>
        <div class="experience-list">@for (item of experience; track item.company; let index = $index) { <article class="experience-card" [class.current]="index === 0"><div class="branch"><span></span></div><div class="experience-index">{{ (index + 1).toString().padStart(2, '0') }}</div><div class="experience-main"><div class="experience-top"><div><small>{{ item.company }}</small><h3>{{ item.role }}</h3></div><div><b>{{ item.period }}</b><span>{{ item.location }}</span></div></div><p class="experience-summary">{{ item.summary }}</p><ul>@for (achievement of item.achievements; track achievement) { <li><span>↳</span>{{ achievement }}</li> }</ul><div class="experience-tech">@for (tech of item.technologies; track tech) { <span>{{ tech }}</span> }</div></div></article> }</div>
      </section>

      <section id="credentials" class="credentials reveal-section"><div class="section credential-layout"><div><div class="section-kicker">Credentials</div><h2>Built on a<br><em>systems mindset.</em></h2><p>Formal engineering training, strengthened by cloud certification and years of production delivery.</p></div><a class="credential-panel" href="/education"><span>Education</span><h3>National Engineering Degree</h3><p>Industrial Systems and Logistics Engineering</p><small>ENICarthage · Graduated 2020</small><b>View education ↗</b></a><a class="credential-panel certification" href="/education"><span>Certification</span><h3>Azure Developer Associate</h3><p>Microsoft AZ-204</p><small>Earned 2023</small><b>View credential ↗</b></a></div></section>

      <section id="process" class="section process reveal-section"><div class="section-heading"><div><div class="section-kicker">How I work</div><h2>Clarity from first<br><em>question to production.</em></h2></div><p>Good delivery is a loop, not a hand-off. I stay close to the problem, the code, and what happens after release.</p></div><div class="process-path"><article><span>Discover</span><h3>Understand the real workflow.</h3><p>Map the people, systems, constraints, and evidence that define success.</p></article><article><span>Decide</span><h3>Make tradeoffs visible.</h3><p>Document architecture decisions and shape the smallest coherent release.</p></article><article><span>Deliver</span><h3>Build in reviewable slices.</h3><p>Pair implementation with tests, observability, and clear technical communication.</p></article><article><span>Operate</span><h3>Learn from production.</h3><p>Support the release, diagnose failures, and feed the learning back into the system.</p></article></div></section>

      <section id="open-source" class="open-source reveal-section"><div class="section open-grid"><div><div class="section-kicker">Open source</div><h2>Public work,<br><em>real activity.</em></h2><p>I publish small .NET libraries when a repeated engineering problem deserves a reusable answer. Most product work stays private, but the public side is active and maintained.</p><a class="button button-ghost github-follow" href="https://github.com/AdelSS04" target="_blank" rel="noopener noreferrer"><lucide-icon [img]="Github" /> <span>View GitHub profile</span><lucide-icon [img]="ArrowUpRight" /></a></div><div class="repo-board"><div class="github-profile"><span class="github-avatar"><lucide-icon [img]="Github"/></span><div><b>&#64;AdelSS04</b><small>{{ githubStats().source }}</small></div><strong>{{ contributionTotal() }} contributions</strong></div>@if (contributionState() === 'ready') { <div class="contribution-scroll"><div class="contribution-grid" [attr.aria-label]="contributionTotal() + ' GitHub contributions in the last year'">@for (day of contributions(); track day.date) { <i [class]="'level-' + day.level" [attr.title]="day.date + ': ' + day.count + ' contributions'"></i> }</div></div><div class="contribution-legend"><span>Less</span>@for (level of contributionLevels; track level) { <i [class]="'level-' + level"></i> }<span>More</span></div> } @else if (contributionState() === 'loading') { <div class="contribution-loading" aria-live="polite">Loading contribution activity…</div> } @else { <div class="contribution-loading">GitHub activity is unavailable right now. <a href="https://github.com/AdelSS04" target="_blank" rel="noopener noreferrer">Open the profile ↗</a></div> }<div class="github-stats"><div><strong>{{ githubStats().repos }}</strong><span>public repositories</span></div><div><strong>{{ githubStats().followers }}</strong><span>followers</span></div><div><strong>C# · TS</strong><span>primary stack</span></div></div><div class="repo-links"><a href="https://github.com/AdelSS04/Spur" target="_blank" rel="noopener noreferrer"><span>Spur</span><small>Explicit Result&lt;T&gt; flows for .NET</small><b>↗</b></a><a href="https://github.com/AdelSS04/Cosmigrator" target="_blank" rel="noopener noreferrer"><span>Cosmigrator</span><small>Versioned Cosmos DB migrations</small><b>↗</b></a></div></div></div></section>

      <section id="writing" class="section writing reveal-section"><div class="section-heading"><div><div class="section-kicker">Writing</div><h2>Notes from<br><em>real software.</em></h2></div><a class="text-link" href="https://blog.adellajil.com" target="_blank" rel="noopener noreferrer">All writing ↗</a></div><div class="writing-grid"><a class="featured-article" href="https://blog.adellajil.com/blog/fullstack-deployment-net-angular-docker-nginx-ssl-github-actions" target="_blank" rel="noopener noreferrer"><span>Featured · DevOps</span><h3>Fullstack Deployment: .NET, Angular, Docker, Nginx, SSL & GitHub Actions</h3><p>A practical walk through the full production path, from application containers to secure routing and automated delivery.</p><small>12 min read <b>↗</b></small></a><div class="article-list"><a href="https://blog.adellajil.com/blog/cosmigrator-cosmos-db-migrations" target="_blank" rel="noopener noreferrer"><span>Cloud · 10 min</span><h3>Cosmigrator: Azure Cosmos DB Migrations Done Right</h3><b>↗</b></a><a href="https://blog.adellajil.com/blog/azure-terraform-infrastructure-guide" target="_blank" rel="noopener noreferrer"><span>Infrastructure · 15 min</span><h3>Azure Infrastructure with Terraform</h3><b>↗</b></a><a href="https://blog.adellajil.com/blog/clean-architecture-dotnet-practical" target="_blank" rel="noopener noreferrer"><span>Architecture · 16 min</span><h3>Clean Architecture in .NET: Beyond the Buzzword</h3><b>↗</b></a></div></div></section>

      <section id="testimonials" class="testimonials reveal-section"><div class="section testimonial-layout"><div><div class="section-kicker">Recommendations</div><h2>What colleagues<br><em>say about the work.</em></h2><p>Direct feedback from people who have worked with me on software teams.</p><div class="recommendation-note"><span>02</span><small>Professional recommendations</small></div></div><div class="quote-stack"><blockquote class="quote-featured"><span class="quote-mark" aria-hidden="true">“</span><p>Not only is he always willing to learn a new skill but also dedicated to mastering it. He is also very helpful and always gives of his time whenever in need.</p><footer><strong>Mariem Gharsallah</strong><span>Technology Consultant · Accenture</span></footer></blockquote><blockquote><span class="quote-mark" aria-hidden="true">“</span><p>A hard worker, passionate and determined software engineer. I recommend him for any software engineering related work.</p><footer><strong>Arsslen Idadi</strong><span>Senior .NET Developer · Software Architect</span></footer></blockquote></div></div></section>

      <section id="faq" class="section faq reveal-section"><div class="section-kicker">FAQ</div><h2>A few useful<br><em>answers.</em></h2><div class="faq-list"><details open><summary>What kind of work do you take on?<span>+</span></summary><p>Senior software engineering roles and product work involving .NET, Angular, Azure, SaaS systems, or connected devices.</p></details><details><summary>Do you work in English or French?<span>+</span></summary><p>Both. I work professionally in French and English; Arabic is my native language.</p></details><details><summary>Are you open to conversations about a project?<span>+</span></summary><p>Yes. Share your current system, the technical constraints, and the outcome you need.</p></details></div></section>
      <app-contact></app-contact>
    </main>
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand"><a href="#home"><img src="/logo-adel.webp" alt="" width="34" height="34" loading="lazy" decoding="async"><strong>Adel Lajil</strong></a><p>Senior software engineer working across .NET, Angular, Azure, and connected-device systems.</p><div class="footer-socials"><a href="https://github.com/AdelSS04" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><lucide-icon [img]="Github" /></a><a href="https://www.linkedin.com/in/adellajil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><lucide-icon [img]="Linkedin" /></a><a href="https://blog.adellajil.com" target="_blank" rel="noopener noreferrer" aria-label="Blog"><lucide-icon [img]="ArrowUpRight" /></a></div></div>
        <div class="footer-column"><h2>Navigate</h2>@for (item of footerNav; track item.id) { <a [href]="'#' + item.id">{{ item.label }}</a> }</div>
        <div class="footer-column"><h2>Selected</h2><a href="#stack">Tech stack</a><a href="#credentials">Credentials</a><a href="#process">How I work</a><a href="#open-source">Open source</a><a href="#testimonials">Recommendations</a></div>
        <div class="footer-contact"><h2>Get in touch</h2><a class="footer-email" href="mailto:contact@adellajil.com"><span>contact&#64;adellajil.com</span><lucide-icon [img]="ArrowUpRight" /></a><p>Québec, Canada · Eastern Time</p><a class="footer-cta" href="#contact">Start a conversation <lucide-icon [img]="ArrowUpRight" /></a></div>
      </div>
      <div class="footer-bottom"><p>© {{ year }} Adel Lajil. Designed and built with Angular.</p><a href="#home">Back to top ↑</a></div>
    </footer>
  `
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly http = inject(HttpClient);
  readonly ArrowDown = ArrowDown; readonly ArrowUpRight = ArrowUpRight; readonly Check = Check; readonly ChevronLeft = ChevronLeft; readonly ChevronRight = ChevronRight; readonly Github = Github; readonly Linkedin = Linkedin; readonly Menu = Menu; readonly X = X;
  readonly projects = projects; readonly services = services; readonly experience = experience; readonly stack = stack; readonly year = new Date().getFullYear();
  readonly nav = [{ id: 'intro', label: 'Intro' }, { id: 'about', label: 'About' }, { id: 'services', label: 'Capability' }, { id: 'work', label: 'Work' }, { id: 'stack', label: 'Stack' }, { id: 'experience', label: 'Experience' }, { id: 'writing', label: 'Writing' }, { id: 'contact', label: 'Contact' }];
  readonly moreNav = [{ id: 'credentials', label: 'Credentials' }, { id: 'process', label: 'How I work' }, { id: 'open-source', label: 'Open source' }, { id: 'testimonials', label: 'Recommendations' }, { id: 'faq', label: 'FAQ' }];
  readonly footerNav = [{ id: 'about', label: 'About' }, { id: 'services', label: 'Capability' }, { id: 'work', label: 'Selected work' }, { id: 'experience', label: 'Experience' }, { id: 'writing', label: 'Writing' }, { id: 'faq', label: 'FAQ' }, { id: 'contact', label: 'Contact' }];
  readonly contributionLevels = [0, 1, 2, 3, 4];
  selectedProject = signal(2); selectedService = signal(0); menuOpen = signal(false); scrolled = signal(false); activeSection = signal('home');
  githubStats = signal({ repos: 9, followers: 0, source: 'Cached public snapshot' });
  contributions = signal<ContributionDay[]>([]);
  contributionState = signal<'loading' | 'ready' | 'error'>('loading');
  contributionTotal = computed(() => this.contributions().reduce((sum, day) => sum + day.count, 0));
  currentService = computed(() => this.services[this.selectedService()]);
  moreSectionActive = computed(() => this.moreNav.some(item => item.id === this.activeSection()));
  private observer?: IntersectionObserver;
  private readonly onScroll = () => { this.scrolled.set(window.scrollY > 12); this.updateActive(); };

  ngOnInit(): void { if (!isPlatformBrowser(this.platformId)) return; window.addEventListener('scroll', this.onScroll, { passive: true }); this.loadGithubData(); }
  ngAfterViewInit(): void { if (!isPlatformBrowser(this.platformId)) return; this.updateActive(); this.observeReveals(); requestAnimationFrame(() => { const track = document.querySelector('.project-track') as HTMLElement | null; const card = track?.children.item(this.selectedProject()) as HTMLElement | null; if (track && card) track.scrollLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2; }); }
  ngOnDestroy(): void { if (isPlatformBrowser(this.platformId)) window.removeEventListener('scroll', this.onScroll); this.observer?.disconnect(); }
  toggleMenu(): void { this.menuOpen.update(value => !value); }
  closeMenu(): void { this.menuOpen.set(false); }
  moveProject(direction: number): void { this.selectProject(Math.max(0, Math.min(this.projects.length - 1, this.selectedProject() + direction))); }
  selectProject(index: number): void { this.selectedProject.set(index); if (!isPlatformBrowser(this.platformId)) return; const track = document.querySelector('.project-track'); const card = track?.children.item(index) as HTMLElement | null; if (!track || !card) return; track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
  syncProjectIndex(track: HTMLElement): void { if (window.matchMedia('(min-width: 901px)').matches) return; const cards = [...track.children] as HTMLElement[]; if (!cards.length) return; const center = track.scrollLeft + track.clientWidth / 2; let closest = 0; cards.forEach((card, index) => { if (Math.abs(card.offsetLeft + card.offsetWidth / 2 - center) < Math.abs(cards[closest].offsetLeft + cards[closest].offsetWidth / 2 - center)) closest = index; }); this.selectedProject.set(closest); }
  private updateActive(): void { const ids = ['home', 'intro', 'about', 'work', 'services', 'stack', 'experience', 'credentials', 'process', 'open-source', 'writing', 'testimonials', 'faq', 'contact']; const found = ids.filter(id => document.getElementById(id)?.getBoundingClientRect().top! < 180).at(-1); if (found) this.activeSection.set(found); }
  private observeReveals(): void {
    const sections = document.querySelectorAll<HTMLElement>('.reveal-section');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach(section => section.classList.add('is-visible'));
      return;
    }
    const revealInViewport = (section: HTMLElement) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * .92 && rect.bottom > 0) section.classList.add('is-visible');
    };
    sections.forEach(revealInViewport);
    this.observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); this.observer?.unobserve(entry.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: .05 });
    sections.forEach(section => { if (!section.classList.contains('is-visible')) this.observer?.observe(section); });
  }
  private loadGithubData(): void {
    const cachedStats = sessionStorage.getItem('adel-github-stats');
    if (cachedStats) this.githubStats.set(JSON.parse(cachedStats));
    else this.http.get<GithubProfile>('https://api.github.com/users/AdelSS04').subscribe({ next: profile => { const value = { repos: profile.public_repos, followers: profile.followers, source: 'Live public profile' }; this.githubStats.set(value); sessionStorage.setItem('adel-github-stats', JSON.stringify(value)); } });

    const cachedContributions = sessionStorage.getItem('adel-github-contributions');
    if (cachedContributions) {
      this.contributions.set(JSON.parse(cachedContributions));
      this.contributionState.set('ready');
      return;
    }

    this.http.get<ContributionResponse>('https://github-contributions-api.jogruber.de/v4/AdelSS04?y=last').subscribe({
      next: response => {
        const days = response.contributions.slice(-371);
        this.contributions.set(days);
        this.contributionState.set(days.length ? 'ready' : 'error');
        if (days.length) sessionStorage.setItem('adel-github-contributions', JSON.stringify(days));
      },
      error: () => this.contributionState.set('error')
    });
  }
}
