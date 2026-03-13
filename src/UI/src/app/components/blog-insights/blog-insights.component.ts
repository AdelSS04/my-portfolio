import { Component } from '@angular/core';
import { LucideAngularModule, ExternalLink, FileText } from 'lucide-angular';

interface BlogPost {
  title: string;
  description: string;
  url: string;
  category: string;
  readTime?: string;
}

@Component({
  selector: 'app-blog-insights',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="blog" class="py-24 px-6 bg-[var(--theme-background-secondary)]/30">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">Engineering Insights</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-2xl mx-auto">
          I write about architecture, cloud infrastructure, and production engineering. Real systems, real patterns, no fluff.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          @for (post of featuredPosts; track post.url) {
            <a
              [href]="post.url"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-[var(--theme-surface)]/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/40 transition-all duration-300 group hover:transform hover:scale-[1.02] block"
            >
              <div class="flex items-start justify-between mb-3">
                <span class="text-[var(--theme-primary)] text-xs font-medium px-3 py-1 bg-[var(--theme-primary)]/10 rounded-full">
                  {{post.category}}
                </span>
                @if (post.readTime) {
                  <span class="text-[var(--theme-text-secondary)] text-xs">
                    {{post.readTime}}
                  </span>
                }
              </div>

              <h3 class="text-lg font-semibold text-[var(--theme-text)] mb-2 group-hover:text-[var(--theme-primary)] transition-colors line-clamp-2">
                {{post.title}}
              </h3>

              <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed mb-4 line-clamp-3">
                {{post.description}}
              </p>

              <div class="flex items-center gap-2 text-[var(--theme-primary)] text-sm font-medium">
                <span>Read article</span>
                <lucide-icon [img]="ExternalLink" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          }
        </div>

        <div class="text-center">
          <a
            href="https://blog.adellajil.com"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-[var(--theme-surface)]/60 text-[var(--theme-text)] rounded-full border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/50 hover:bg-[var(--theme-surface)]/80 transition-all duration-300 text-sm font-medium"
          >
            <lucide-icon [img]="FileText" class="w-4 h-4" />
            View all articles
            <lucide-icon [img]="ExternalLink" class="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  `
})
export class BlogInsightsComponent {
  readonly ExternalLink = ExternalLink;
  readonly FileText = FileText;

  featuredPosts: BlogPost[] = [
    {
      title: 'Fullstack Deployment: .NET, Angular, Docker, Nginx, SSL & GitHub Actions',
      description: 'Complete production deployment guide from containerization to automated SSL renewal. Real infrastructure for real applications.',
      url: 'https://blog.adellajil.com/blog/fullstack-deployment-net-angular-docker-nginx-ssl-github-actions',
      category: 'DevOps',
      readTime: '12 min'
    },
    {
      title: 'Cosmigrator: Azure Cosmos DB Migrations Done Right',
      description: 'How I built a production-ready migration framework for Cosmos DB with bulk operations, retry logic, and CLI support.',
      url: 'https://blog.adellajil.com/blog/cosmigrator-cosmos-db-migrations',
      category: 'Cloud',
      readTime: '10 min'
    },
    {
      title: 'Azure Infrastructure with Terraform: Production-Ready IaC',
      description: 'Multi-environment Terraform setup for Azure. App Services, databases, Auth0 integration, CI/CD pipelines, and cost optimization.',
      url: 'https://blog.adellajil.com/blog/azure-terraform-infrastructure-guide',
      category: 'Infrastructure',
      readTime: '15 min'
    },
    {
      title: 'Microservices Design Patterns in .NET',
      description: 'Practical patterns for building distributed systems. API Gateway, Service Discovery, Circuit Breaker, and real-world implementations.',
      url: 'https://blog.adellajil.com/blog/microservices-design-patterns-dotnet',
      category: 'Architecture',
      readTime: '18 min'
    },
    {
      title: 'Building Event-Driven Systems with RabbitMQ & .NET',
      description: 'Message queuing patterns for reliable distributed systems. Publisher/subscriber, work queues, and production considerations.',
      url: 'https://blog.adellajil.com/blog/event-driven-rabbitmq-dotnet',
      category: 'Backend',
      readTime: '14 min'
    },
    {
      title: 'Clean Architecture in .NET: Beyond the Buzzword',
      description: 'Implementing maintainable architecture patterns without over-engineering. DDD, CQRS, and practical separation of concerns.',
      url: 'https://blog.adellajil.com/blog/clean-architecture-dotnet-practical',
      category: 'Architecture',
      readTime: '16 min'
    }
  ];
}
