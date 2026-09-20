import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { ArrowDown, ArrowUpRight, Check, ChevronLeft, ChevronRight, Github, Linkedin, Menu, X, LucideAngularModule } from 'lucide-angular';
import { ContactComponent } from '../components/contact/contact';
import { portfolioContent } from '../portfolio-data';
import { LanguageService } from '../i18n/language.service';

interface GithubProfile { public_repos: number; followers: number; }
interface ContributionDay { date: string; count: number; level: number; }
interface ContributionResponse { total: Record<string, number>; contributions: ContributionDay[]; }

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [LucideAngularModule, ContactComponent],
  styleUrl: '../portfolio-page.css',
  template: `
    <a class="skip-link" href="#main">{{ i18n.t('nav.skip') }}</a>
    <header class="site-header" [class.scrolled]="scrolled()">
      <nav class="nav-shell" [attr.aria-label]="i18n.t('nav.primaryAria')">
        <a class="brand" href="#home" (click)="closeMenu()"><img src="/logo-adel.webp" alt="" width="28" height="28" decoding="async"> Adel Lajil</a>
        <div class="nav-links">@for (item of nav(); track item.id) { <a [href]="'#' + item.id" [class.active]="activeSection() === item.id">{{ item.label }}</a> }</div>
        <details class="nav-more"><summary [class.active]="moreSectionActive()">{{ i18n.t('nav.more') }}</summary><div>@for (item of moreNav(); track item.id) { <a [href]="'#' + item.id" [class.active]="activeSection() === item.id">{{ item.label }}</a> }</div></details>
        <details class="nav-more nav-lang" #langMenu><summary>{{ i18n.lang().toUpperCase() }}</summary><div><button type="button" [class.active]="i18n.lang() === 'en'" (click)="i18n.setLang('en'); langMenu.open = false">English</button><button type="button" [class.active]="i18n.lang() === 'fr'" (click)="i18n.setLang('fr'); langMenu.open = false">Français</button></div></details>
        <a class="nav-contact" href="#contact">{{ i18n.t('nav.talk') }} <lucide-icon [img]="ArrowUpRight" /></a>
        <button class="menu-button" type="button" (click)="toggleMenu()" [attr.aria-expanded]="menuOpen()" aria-controls="mobile-nav" [attr.aria-label]="i18n.t('nav.toggleAria')"><lucide-icon [img]="menuOpen() ? X : Menu" /></button>
      </nav>
      @if (menuOpen()) { <div id="mobile-nav" class="mobile-nav">@for (item of nav(); track item.id) { <a [href]="'#' + item.id" (click)="closeMenu()">{{ item.label }}</a> }@for (item of moreNav(); track item.id) { <a [href]="'#' + item.id" (click)="closeMenu()">{{ item.label }}</a> }<a href="#home" (click)="$event.preventDefault(); i18n.setLang('en'); closeMenu()">English</a><a href="#home" (click)="$event.preventDefault(); i18n.setLang('fr'); closeMenu()">Français</a><a href="#contact" (click)="closeMenu()">{{ i18n.t('nav.talk') }}</a></div> }
    </header>

    <main id="main">
      <section id="home" class="hero">
        <div class="hero-glow"></div><div class="hero-grid-lines"></div>
        <p class="hero-status"><span></span> {{ i18n.t('hero.status') }}</p>
        <div class="hero-name" aria-hidden="true"><span>ADEL</span><span>LAJIL</span></div>
        <div class="hero-portrait"><div class="portrait-aura"></div><img src="/me-portrait.webp" alt="Portrait of Adel Lajil" width="900" height="900" fetchpriority="high" decoding="async"></div>
        <div class="hero-content">
          <p class="hero-role">{{ i18n.t('hero.role') }}<br><b>.NET · Angular · Azure</b></p>
          <p class="hero-intro">{{ i18n.t('hero.intro') }}</p>
          <div class="hero-actions"><a class="button button-primary" href="#work">{{ i18n.t('hero.ctaProjects') }} <lucide-icon [img]="ArrowUpRight" /></a><a class="button button-ghost" href="#contact">{{ i18n.t('hero.ctaContact') }} <lucide-icon [img]="ArrowUpRight" /></a></div>
        </div>
        <dl class="proof-strip">@for (item of i18n.t('hero.proof'); track item.l) { <div><dt>{{ item.v }}</dt><dd>{{ item.l }}</dd></div> }</dl>
        <a class="scroll-cue" href="#intro" [attr.aria-label]="i18n.t('hero.scrollAria')"><span>{{ i18n.t('hero.scrollLabel') }}</span><lucide-icon [img]="ArrowDown" /></a>
      </section>

      <section id="intro" class="intro reveal-section">
        <div class="section intro-layout">
          <div class="intro-heading"><div class="section-kicker">{{ i18n.t('intro.kicker') }}</div><h2>{{ i18n.t('intro.headingA') }}<br><em>{{ i18n.t('intro.headingB') }}</em></h2><p>{{ i18n.t('intro.copy') }}</p></div>
          <div class="intro-stage">
            <div class="intro-profile">
              <div class="intro-orbit" aria-hidden="true"><img src="/me-portrait.webp" width="900" height="900" alt=""><span></span><i></i></div>
              <span class="intro-location">{{ i18n.t('intro.location') }}</span>
              <p>{{ i18n.t('intro.tagline') }}</p>
            </div>
            <div class="intro-statement"><span>{{ i18n.t('intro.bringKicker') }}</span><p>{{ i18n.t('intro.bringCopy') }}</p><a href="#about">{{ i18n.t('intro.meet') }} <lucide-icon [img]="ArrowDown" /></a></div>
            <dl>@for (item of i18n.t('intro.focus'); track item.label) { <div><dt>{{ item.label }}</dt><dd>{{ item.value }}</dd></div> }</dl>
          </div>
        </div>
      </section>

      <section id="about" class="section about reveal-section">
        <div class="section-kicker">{{ i18n.t('about.kicker') }}</div>
        <h2>{{ i18n.t('about.headingA') }}<br><em>{{ i18n.t('about.headingB') }}</em></h2>
        <div class="about-spread">
          <div class="about-story">
            <p class="lead">{{ i18n.t('about.lead') }}</p>
            <p>{{ i18n.t('about.p2') }}</p>
            <p>{{ i18n.t('about.p3') }}</p>
            <a class="text-link" href="#experience">{{ i18n.t('about.readExp') }} <span>↓</span></a>
            <dl class="about-stats">@for (item of i18n.t('about.stats'); track item.l) { <div><dt>{{ item.v }}</dt><dd>{{ item.l }}</dd></div> }</dl>
          </div>
          <aside class="about-scope" aria-label="What I do">
            <span class="about-scope-label">{{ i18n.t('about.scopeLabel') }}</span>
            <ul>@for (item of i18n.t('about.scope'); track item) { <li><lucide-icon [img]="Check" /><span>{{ item }}</span></li> }</ul>
            <div class="about-availability"><i></i><span>{{ i18n.t('about.availability') }}</span></div>
          </aside>
        </div>
      </section>

      <section id="work" class="section work reveal-section">
        <div class="section-heading"><div><div class="section-kicker">{{ i18n.t('work.kicker') }}</div><h2>{{ i18n.t('work.headingA') }}<br><em>{{ i18n.t('work.headingB') }}</em></h2></div><p>{{ i18n.t('work.copy') }}</p></div>
        <div class="project-carousel">
          <div #projectTrack class="project-track" (scroll)="syncProjectIndex(projectTrack)">
            @for (project of content().projects; track project.title; let index = $index) {
              <article class="project-card" [class.active]="selectedProject() === index" [class.project-card--featured]="project.featured" tabindex="0" [attr.aria-expanded]="selectedProject() === index" (mouseenter)="selectedProject.set(index)" (focusin)="selectedProject.set(index)" (click)="selectProject(index)">
                <div class="project-media"><img [src]="projectImage(project.image, index)" [alt]="project.title + ' project preview'" width="1280" height="720" loading="lazy" decoding="async"><div class="project-shade"></div><span>{{ project.featured ? i18n.t('work.featured') + ' · ' + project.category : project.category }}</span></div>
                <div class="project-body"><div class="project-title"><h3>{{ project.title }}</h3><small>{{ project.year }}</small></div><p>{{ project.description }}</p><strong>{{ project.impact }}</strong><div class="tags">@for (tag of project.technologies; track tag) { <span>{{ tag }}</span> }</div><div class="project-links">@if (project.liveUrl) { <a [href]="project.liveUrl" target="_blank" rel="noopener noreferrer"><span>{{ i18n.t('work.liveLabel') }}</span><lucide-icon [img]="ArrowUpRight" /></a> }@if (project.githubUrl) { <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer"><span>{{ i18n.t('work.sourceLabel') }}</span><lucide-icon [img]="Github" /></a> }</div></div>
              </article>
            }
          </div>
          <div class="carousel-controls"><div class="carousel-buttons"><button type="button" (click)="moveProject(-1)" [disabled]="selectedProject() === 0" [attr.aria-label]="i18n.t('work.prevAria')"><lucide-icon [img]="ChevronLeft" /></button><button type="button" (click)="moveProject(1)" [disabled]="selectedProject() === content().projects.length - 1" [attr.aria-label]="i18n.t('work.nextAria')"><lucide-icon [img]="ChevronRight" /></button></div><div class="carousel-dots">@for (project of content().projects; track project.title; let index = $index) { <button type="button" [class.active]="selectedProject() === index" (click)="selectProject(index)" [attr.aria-label]="i18n.t('work.goTo') + project.title"></button> }</div><span>{{ selectedProject() + 1 }} / {{ content().projects.length }}</span></div>
        </div>
      </section>

      <section id="services" class="section services reveal-section">
        <div class="section-heading"><div><div class="section-kicker">{{ i18n.t('services.kicker') }}</div><h2>{{ i18n.t('services.headingA') }}<br><em>{{ i18n.t('services.headingB') }}</em></h2></div><p>{{ i18n.t('services.copy') }}</p></div>
        <div class="capability-shell"><div class="capability-tabs" role="tablist" [attr.aria-label]="i18n.t('services.tabsAria')">@for (service of content().services; track service.title; let index = $index) { <button type="button" role="tab" [attr.aria-selected]="selectedService() === index" [class.active]="selectedService() === index" (click)="selectedService.set(index)">{{ service.title }}</button> }</div>@for (service of [currentService()]; track service.title) { <div class="capability-panel" role="tabpanel"><div class="capability-copy"><span>{{ service.eyebrow }}</span><h3>{{ service.title }}</h3><p>{{ service.copy }}</p><div class="capability-tools">{{ service.tools }}</div><a href="#contact">{{ i18n.t('services.talkWork') }} <lucide-icon [img]="ArrowUpRight" /></a></div><div class="capability-proof"><ul>@for (benefit of service.benefits; track benefit) { <li>{{ benefit }}</li> }</ul><p><small>{{ i18n.t('services.proofLabel') }}</small>{{ service.proof }}</p></div><div class="capability-mark" aria-hidden="true">{{ service.title.charAt(0) }}</div></div> }</div>
      </section>

      <section id="stack" class="stack-section reveal-section">
        <div class="section stack-heading"><div><div class="section-kicker">{{ i18n.t('stack.kicker') }}</div><h2>{{ i18n.t('stack.headingA') }}<br><em>{{ i18n.t('stack.headingB') }}</em></h2></div><p>{{ i18n.t('stack.copy') }}</p></div>
        <div class="marquee" aria-hidden="true"><div><span>.NET</span><i>✦</i><span>Angular</span><i>✦</i><span>Azure</span><i>✦</i><span>PostgreSQL</span><i>✦</i><span>Kubernetes</span><i>✦</i><span>IoT Hub</span><i>✦</i><span>.NET</span><i>✦</i><span>Angular</span><i>✦</i><span>Azure</span><i>✦</i><span>PostgreSQL</span></div></div>
        <div class="marquee marquee-reverse" aria-hidden="true"><div><span>Terraform</span><i>✦</i><span>SignalR</span><i>✦</i><span>Cosmos DB</span><i>✦</i><span>RabbitMQ</span><i>✦</i><span>GitHub Actions</span><i>✦</i><span>Docker</span><i>✦</i><span>Terraform</span><i>✦</i><span>SignalR</span><i>✦</i><span>Cosmos DB</span></div></div>
        <div class="section stack-ledger">@for (group of content().stack; track group[0]; let index = $index) { <article class="stack-row"><div><span>{{ (index + 1).toString().padStart(2, '0') }}</span><h3>{{ group[0] }}</h3></div><ul>@for (item of group.slice(1); track item) { <li>{{ item }}</li> }</ul></article> }<aside class="stack-cert"><span>{{ i18n.t('stack.certKicker') }}</span><strong>{{ i18n.t('stack.certTitle') }}</strong><small>{{ i18n.t('stack.certSub') }}</small></aside></div>
      </section>

      <section id="experience" class="section experience reveal-section">
        <div class="section-heading"><div><div class="section-kicker">{{ i18n.t('experience.kicker') }}</div><h2>{{ i18n.t('experience.headingA') }}<br><em>{{ i18n.t('experience.headingB') }}</em></h2></div><p>{{ i18n.t('experience.copy') }}</p></div>
        <div class="branch-head"><span>{{ i18n.t('experience.headPresent') }}</span><b>{{ i18n.t('experience.headActive') }}</b></div>
        <div class="experience-list">@for (item of content().experience; track item.company; let index = $index) { <article class="experience-card" [class.current]="index === 0"><div class="branch"><span></span></div><div class="experience-index">{{ (index + 1).toString().padStart(2, '0') }}</div><div class="experience-main"><div class="experience-top"><div><small>{{ item.company }}</small><h3>{{ item.role }}</h3></div><div><b>{{ item.period }}</b><span>{{ item.location }}</span></div></div><p class="experience-summary">{{ item.summary }}</p><ul>@for (achievement of item.achievements; track achievement) { <li><span>↳</span>{{ achievement }}</li> }</ul><div class="experience-tech">@for (tech of item.technologies; track tech) { <span>{{ tech }}</span> }</div></div></article> }</div>
        <aside class="experience-lab"><div><span>{{ i18n.t('experience.labKicker') }}</span><h3>{{ i18n.t('experience.labTitle') }}</h3><p>{{ i18n.t('experience.labCopy') }}</p></div><ul>@for (s of i18n.t('experience.labSteps'); track s.b) { <li><b>{{ s.b }}</b><span>{{ s.s }}</span></li> }</ul><a href="#work" (click)="selectProject(2)">{{ i18n.t('experience.labLink') }} <lucide-icon [img]="ArrowUpRight" /></a></aside>
      </section>

      <section id="credentials" class="credentials reveal-section"><div class="section credential-layout"><div><div class="section-kicker">{{ i18n.t('credentials.kicker') }}</div><h2>{{ i18n.t('credentials.headingA') }}<br><em>{{ i18n.t('credentials.headingB') }}</em></h2><p>{{ i18n.t('credentials.copy') }}</p></div><a class="credential-panel" href="/education"><span>{{ i18n.t('credentials.eduKicker') }}</span><h3>{{ i18n.t('credentials.eduTitle') }}</h3><p>{{ i18n.t('credentials.eduField') }}</p><small>{{ i18n.t('credentials.eduSub') }}</small><b>{{ i18n.t('credentials.eduLink') }}</b></a><a class="credential-panel certification" href="/education"><span>{{ i18n.t('credentials.certKicker') }}</span><h3>{{ i18n.t('credentials.certTitle') }}</h3><p>{{ i18n.t('credentials.certField') }}</p><small>{{ i18n.t('credentials.certSub') }}</small><b>{{ i18n.t('credentials.certLink') }}</b></a></div></section>

      <section id="process" class="section process reveal-section"><div class="section-heading"><div><div class="section-kicker">{{ i18n.t('process.kicker') }}</div><h2>{{ i18n.t('process.headingA') }}<br><em>{{ i18n.t('process.headingB') }}</em></h2></div><p>{{ i18n.t('process.copy') }}</p></div><div class="process-path">@for (step of i18n.t('process.steps'); track step.tag) { <article><span>{{ step.tag }}</span><h3>{{ step.title }}</h3><p>{{ step.copy }}</p></article> }</div></section>

      <section id="open-source" class="open-source reveal-section"><div class="section open-grid"><div><div class="section-kicker">{{ i18n.t('opensource.kicker') }}</div><h2>{{ i18n.t('opensource.headingA') }}<br><em>{{ i18n.t('opensource.headingB') }}</em></h2><p>{{ i18n.t('opensource.copy') }}</p><a class="button button-ghost github-follow" href="https://github.com/AdelSS04" target="_blank" rel="noopener noreferrer"><lucide-icon [img]="Github" /> <span>{{ i18n.t('opensource.viewProfile') }}</span><lucide-icon [img]="ArrowUpRight" /></a></div><div class="repo-board"><div class="github-profile"><span class="github-avatar"><lucide-icon [img]="Github"/></span><div><b>&#64;AdelSS04</b><small>{{ i18n.t('opensource.' + githubStats().source) }}</small></div><strong>{{ contributionTotal() }} contributions</strong></div>@if (contributionState() === 'ready') { <div class="contribution-scroll"><div class="contribution-grid" [attr.aria-label]="contributionTotal() + i18n.t('opensource.contribAriaSuffix')">@for (day of contributions(); track day.date) { <i [class]="'level-' + day.level" [attr.title]="day.date + ': ' + day.count + ' contributions'"></i> }</div></div><div class="contribution-legend"><span>{{ i18n.t('opensource.less') }}</span>@for (level of contributionLevels; track level) { <i [class]="'level-' + level"></i> }<span>{{ i18n.t('opensource.more') }}</span></div> } @else if (contributionState() === 'loading') { <div class="contribution-loading" aria-live="polite">{{ i18n.t('opensource.loading') }}</div> } @else { <div class="contribution-loading">{{ i18n.t('opensource.unavailable') }} <a href="https://github.com/AdelSS04" target="_blank" rel="noopener noreferrer">{{ i18n.t('opensource.openProfile') }}</a></div> }<div class="github-stats"><div><strong>{{ githubStats().repos }}</strong><span>{{ i18n.t('opensource.reposLabel') }}</span></div><div><strong>{{ githubStats().followers }}</strong><span>{{ i18n.t('opensource.followersLabel') }}</span></div><div><strong>C# · TS</strong><span>{{ i18n.t('opensource.stackLabel') }}</span></div></div><div class="repo-links">@for (repo of i18n.t('opensource.repos'); track repo.name) { <a [href]="repo.url" target="_blank" rel="noopener noreferrer"><span>{{ repo.name }}</span><small>{{ repo.desc }}</small><b>↗</b></a> }</div></div></div></section>

      <section id="writing" class="section writing reveal-section"><div class="section-heading"><div><div class="section-kicker">{{ i18n.t('writing.kicker') }}</div><h2>{{ i18n.t('writing.headingA') }}<br><em>{{ i18n.t('writing.headingB') }}</em></h2></div><a class="text-link" href="https://blog.adellajil.com" target="_blank" rel="noopener noreferrer">{{ i18n.t('writing.allLink') }} <lucide-icon [img]="ArrowUpRight" /></a></div><div class="writing-grid"><a class="featured-article" href="https://blog.adellajil.com/blog/why-i-started-treating-my-homelab-like-a-small-platform/" target="_blank" rel="noopener noreferrer"><span>{{ i18n.t('writing.featuredTag') }}</span><h3>Why I Started Treating My Homelab Like a Small Platform</h3><p>{{ i18n.t('writing.featuredDesc') }}</p><small>{{ i18n.t('writing.featuredRead') }} <b>↗</b></small></a><div class="article-list">@for (a of i18n.t('writing.articles'); track a.title) { <a [href]="a.url" target="_blank" rel="noopener noreferrer"><span>{{ a.tag }} · {{ a.read }}</span><h3>{{ a.title }}</h3><b>↗</b></a> }</div></div></section>

      <section id="testimonials" class="testimonials reveal-section"><div class="section testimonial-layout"><div><div class="section-kicker">{{ i18n.t('testimonials.kicker') }}</div><h2>{{ i18n.t('testimonials.headingA') }}<br><em>{{ i18n.t('testimonials.headingB') }}</em></h2><p>{{ i18n.t('testimonials.copy') }}</p><div class="recommendation-note"><span>{{ recommendations().length.toString().padStart(2, '0') }}</span><small>{{ i18n.t('testimonials.countLabel') }}</small></div></div><div class="quote-stack">@for (recommendation of recommendations(); track recommendation.name; let index = $index) { <blockquote [class.quote-featured]="index === 0"><span class="quote-mark" aria-hidden="true">“</span><p>{{ recommendation.quote }}</p><footer><strong>{{ recommendation.name }}</strong><span>{{ recommendation.role }}</span></footer></blockquote> }</div></div></section>

      <section id="freelance" class="section freelance reveal-section">
        <div class="section-heading"><div><div class="section-kicker">{{ i18n.t('freelance.kicker') }}</div><h2>{{ i18n.t('freelance.headingA') }}<br><em>{{ i18n.t('freelance.headingB') }}</em></h2></div><p>{{ i18n.t('freelance.copy') }}</p></div>
        <div class="process-path freelance-cards">@for (card of i18n.t('freelance.cards'); track card.title) { <article><h3>{{ card.title }}</h3><p>{{ card.copy }}</p><div class="tags">@for (tag of card.tags; track tag) { <span>{{ tag }}</span> }</div></article> }</div>
        <div class="process-path">@for (step of i18n.t('freelance.steps'); track step.tag) { <article><span>{{ step.tag }}</span><h3>{{ step.title }}</h3><p>{{ step.copy }}</p></article> }</div>
        <div class="freelance-cta"><a class="button button-primary" href="#contact">{{ i18n.t('freelance.cta') }} <lucide-icon [img]="ArrowUpRight" /></a><p>{{ i18n.t('freelance.note') }}</p></div>
      </section>
      <section id="faq" class="section faq reveal-section"><div class="section-kicker">{{ i18n.t('faq.kicker') }}</div><h2>{{ i18n.t('faq.headingA') }}<br><em>{{ i18n.t('faq.headingB') }}</em></h2><div class="faq-list">@for (item of i18n.t('faq.items'); track item.q; let i = $index) { <details [open]="i === 0"><summary>{{ item.q }}<span>+</span></summary><p>{{ item.a }}</p></details> }</div></section>
      <app-contact></app-contact>
    </main>
    <footer class="site-footer">
      <div class="footer-main">
        <div class="footer-brand"><a href="#home"><img src="/logo-adel.webp" alt="" width="34" height="34" loading="lazy" decoding="async"><strong>Adel Lajil</strong></a><p>{{ i18n.t('footer.brandCopy') }}</p><div class="footer-socials"><a href="https://github.com/AdelSS04" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><lucide-icon [img]="Github" /></a><a href="https://www.linkedin.com/in/adellajil/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><lucide-icon [img]="Linkedin" /></a><a href="https://blog.adellajil.com" target="_blank" rel="noopener noreferrer" aria-label="Blog"><lucide-icon [img]="ArrowUpRight" /></a></div></div>
        <div class="footer-column"><h2>{{ i18n.t('footer.navTitle') }}</h2>@for (item of footerNav(); track item.id) { <a [href]="'#' + item.id">{{ item.label }}</a> }</div>
        <div class="footer-column"><h2>{{ i18n.t('footer.selTitle') }}</h2>@for (link of i18n.t('footer.selLinks'); track link.href) { <a [href]="link.href">{{ link.label }}</a> }</div>
        <div class="footer-contact"><h2>{{ i18n.t('footer.touchTitle') }}</h2><a class="footer-email" href="mailto:contact@adellajil.com"><span>contact&#64;adellajil.com</span><lucide-icon [img]="ArrowUpRight" /></a><p>{{ i18n.t('footer.location') }}</p><a class="footer-cta" href="#contact">{{ i18n.t('footer.cta') }} <lucide-icon [img]="ArrowUpRight" /></a></div>
      </div>
      <div class="footer-bottom"><p>© {{ year }} Adel Lajil. {{ i18n.t('footer.rightsSuffix') }}</p><a href="#home">{{ i18n.t('footer.backTop') }}</a></div>
    </footer>
  `
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly http = inject(HttpClient);
  readonly i18n = inject(LanguageService);
  readonly ArrowDown = ArrowDown; readonly ArrowUpRight = ArrowUpRight; readonly Check = Check; readonly ChevronLeft = ChevronLeft; readonly ChevronRight = ChevronRight; readonly Github = Github; readonly Linkedin = Linkedin; readonly Menu = Menu; readonly X = X;
  readonly content = computed(() => portfolioContent[this.i18n.lang()]); readonly year = new Date().getFullYear();
  readonly nav = computed(() => this.i18n.t('nav.items') as { id: string; label: string }[]);
  readonly moreNav = computed(() => this.i18n.t('nav.moreItems') as { id: string; label: string }[]);
  readonly footerNav = computed(() => this.i18n.t('footer.nav') as { id: string; label: string }[]);
  readonly contributionLevels = [0, 1, 2, 3, 4];
  readonly recommendations = computed(() => this.i18n.t('testimonials.items') as { name: string; role: string; quote: string }[]);
  selectedProject = signal(2); selectedService = signal(0); menuOpen = signal(false); scrolled = signal(false); activeSection = signal('home');
  githubStats = signal({ repos: 9, followers: 0, source: 'snapshot' as 'snapshot' | 'live' });
  contributions = signal<ContributionDay[]>([]);
  contributionState = signal<'loading' | 'ready' | 'error'>('loading');
  contributionTotal = computed(() => this.contributions().reduce((sum, day) => sum + day.count, 0));
  currentService = computed(() => this.content().services[this.selectedService()]);
  moreSectionActive = computed(() => this.moreNav().some(item => item.id === this.activeSection()));
  private observer?: IntersectionObserver;
  private readonly onScroll = () => { this.scrolled.set(window.scrollY > 12); this.updateActive(); };

  ngOnInit(): void { if (!isPlatformBrowser(this.platformId)) return; window.addEventListener('scroll', this.onScroll, { passive: true }); this.loadGithubData(); }
  ngAfterViewInit(): void { if (!isPlatformBrowser(this.platformId)) return; this.updateActive(); this.observeReveals(); requestAnimationFrame(() => { const track = document.querySelector('.project-track') as HTMLElement | null; const card = track?.children.item(this.selectedProject()) as HTMLElement | null; if (track && card) track.scrollLeft = card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2; }); }
  ngOnDestroy(): void { if (isPlatformBrowser(this.platformId)) window.removeEventListener('scroll', this.onScroll); this.observer?.disconnect(); }
  toggleMenu(): void { this.menuOpen.update(value => !value); }
  closeMenu(): void { this.menuOpen.set(false); }
  moveProject(direction: number): void { this.selectProject(Math.max(0, Math.min(this.content().projects.length - 1, this.selectedProject() + direction))); }
  selectProject(index: number): void { this.selectedProject.set(index); if (!isPlatformBrowser(this.platformId)) return; const track = document.querySelector('.project-track'); const card = track?.children.item(index) as HTMLElement | null; if (!track || !card) return; track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }); }
  projectImage(image: string, index: number): string { return this.selectedProject() === index ? image : image.replace(/\.(webp|svg)$/, '-thumb.webp'); }
  syncProjectIndex(track: HTMLElement): void { if (window.matchMedia('(min-width: 901px)').matches) return; const cards = [...track.children] as HTMLElement[]; if (!cards.length) return; const center = track.scrollLeft + track.clientWidth / 2; let closest = 0; cards.forEach((card, index) => { if (Math.abs(card.offsetLeft + card.offsetWidth / 2 - center) < Math.abs(cards[closest].offsetLeft + cards[closest].offsetWidth / 2 - center)) closest = index; }); this.selectedProject.set(closest); }
  private updateActive(): void { const ids = ['home', 'intro', 'about', 'work', 'services', 'stack', 'experience', 'credentials', 'process', 'open-source', 'writing', 'testimonials', 'faq', 'freelance', 'contact']; const found = ids.filter(id => document.getElementById(id)?.getBoundingClientRect().top! < 180).at(-1); if (found) this.activeSection.set(found); }
  private observeReveals(): void {
    const sections = document.querySelectorAll<HTMLElement>('.reveal-section');
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      sections.forEach(section => section.classList.add('is-visible'));
      return;
    }
    const itemSelector = [
      '.section-kicker', '.section-heading > div', '.section-heading > p',
      '.intro-profile > *', '.intro-statement > *', '.intro-stage dl > div',
      '.about-story > *', '.about-scope', '.about-stats > div',
      '.stack-row', '.stack-cert',
      '.experience-card', '.experience-lab > *', '.credential-card',
      '.process-path article', '.github-profile',
      '.featured-article', '.quote-stack blockquote',
      '.faq-item', '.contact-copy > *', '.contact-form > *'
    ].join(',');
    const items: HTMLElement[] = [];
    sections.forEach(section => {
      section.querySelectorAll<HTMLElement>(itemSelector).forEach((item, index) => {
        item.classList.add('motion-piece', 'motion-ready');
        item.style.setProperty('--reveal-order', String(index % 7));
        items.push(item);
      });
      section.classList.add('is-visible');
    });
    const revealInViewport = (item: HTMLElement) => {
      const rect = item.getBoundingClientRect();
      const visible = rect.top < window.innerHeight * .8 && rect.bottom > window.innerHeight * .08;
      item.classList.toggle('is-in-view', visible);
      item.classList.toggle('exited-above', !visible && rect.top < 0);
    };
    items.forEach(revealInViewport);
    this.observer = new IntersectionObserver(entries => entries.forEach(entry => {
      const item = entry.target as HTMLElement;
      item.classList.toggle('is-in-view', entry.isIntersecting);
      item.classList.toggle('exited-above', !entry.isIntersecting && entry.boundingClientRect.top < 0);
    }), { rootMargin: '-6% 0px -22% 0px', threshold: .15 });
    items.forEach(item => this.observer?.observe(item));
  }
  private loadGithubData(): void {
    const cachedStats = sessionStorage.getItem('adel-github-stats');
    if (cachedStats) { const p = JSON.parse(cachedStats); this.githubStats.set({ repos: p.repos ?? 9, followers: p.followers ?? 0, source: p.source === 'live' ? 'live' : 'snapshot' }); }
    else this.http.get<GithubProfile>('https://api.github.com/users/AdelSS04').subscribe({ next: profile => { const value = { repos: profile.public_repos, followers: profile.followers, source: 'live' as const }; this.githubStats.set(value); sessionStorage.setItem('adel-github-stats', JSON.stringify(value)); } });

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
