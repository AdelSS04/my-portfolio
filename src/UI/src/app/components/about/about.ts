// about.component.ts
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">About Me</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12">Passionate about creating impactful solutions</p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--theme-border)]/20">
            <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-4 flex items-center gap-2">
              <span class="text-2xl">👨‍💻</span> Professional Profile
            </h3>
            <p class="text-[var(--theme-text-secondary)] leading-relaxed mb-4">
              {{aboutText}}
            </p>
            <p class="text-[var(--theme-text-secondary)] leading-relaxed">
              {{additionalInfo}}
            </p>
          </div>

          <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--theme-border)]/20">
            <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-4 flex items-center gap-2">
              <span class="text-2xl">📊</span> Quick Facts
            </h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between py-3 border-b border-[var(--theme-border)]/20">
                <span class="text-[var(--theme-text-secondary)]">Experience</span>
                <span class="text-[var(--theme-text)] font-semibold">5+ Years</span>
              </div>
              <div class="flex items-center justify-between py-3 border-b border-[var(--theme-border)]/20">
                <span class="text-[var(--theme-text-secondary)]">Projects Completed</span>
                <span class="text-[var(--theme-text)] font-semibold">8+</span>
              </div>
              <div class="flex items-center justify-between py-3 border-b border-[var(--theme-border)]/20">
                <span class="text-[var(--theme-text-secondary)]">Technologies</span>
                <span class="text-[var(--theme-text)] font-semibold">20+</span>
              </div>
              <div class="flex items-center justify-between py-3 border-b border-[var(--theme-border)]/20">
                <span class="text-[var(--theme-text-secondary)]">Certifications</span>
                <span class="text-[var(--theme-text)] font-semibold">Azure AZ-204</span>
              </div>
              <div class="flex items-center justify-between py-3">
                <span class="text-[var(--theme-text-secondary)]">Specialization</span>
                <span class="text-[var(--theme-text)] font-semibold">.NET & Angular</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <div class="bg-[var(--theme-surface)]/50 backdrop-blur-sm rounded-xl p-6 border border-[var(--theme-border)]/20 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full flex items-center justify-center">
              <span class="text-2xl">🎯</span>
            </div>
            <h4 class="text-[var(--theme-text)] font-semibold mb-2">Quality First</h4>
            <p class="text-[var(--theme-text-secondary)] text-sm">Writing clean, maintainable code that stands the test of time</p>
          </div>
          <div class="bg-[var(--theme-surface)]/50 backdrop-blur-sm rounded-xl p-6 border border-[var(--theme-border)]/20 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full flex items-center justify-center">
              <span class="text-2xl">🚀</span>
            </div>
            <h4 class="text-[var(--theme-text)] font-semibold mb-2">Performance</h4>
            <p class="text-[var(--theme-text-secondary)] text-sm">Optimizing for speed and scalability in every project</p>
          </div>
          <div class="bg-[var(--theme-surface)]/50 backdrop-blur-sm rounded-xl p-6 border border-[var(--theme-border)]/20 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full flex items-center justify-center">
              <span class="text-2xl">💡</span>
            </div>
            <h4 class="text-[var(--theme-text)] font-semibold mb-2">Innovation</h4>
            <p class="text-[var(--theme-text-secondary)] text-sm">Always learning and adopting new technologies</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  @Input() aboutText: string = `I'm a passionate Senior Full Stack Developer with expertise in .NET and Angular.
    Azure AZ-204 certified with extensive experience in building scalable cloud applications.`;

  @Input() additionalInfo: string = `Specializing in enterprise-level applications with a focus on clean architecture,
    microservices, and cloud-native solutions using Azure services.`;
}
