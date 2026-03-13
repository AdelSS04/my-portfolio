import { Component } from '@angular/core';

@Component({
  selector: 'app-proof-bar',
  standalone: true,
  template: `
    <section class="py-8 px-6 border-y border-[var(--theme-border)]/10">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-[var(--theme-text-secondary)]">
          <span class="font-medium">🚀 Live SaaS in Production</span>
          <span class="hidden sm:inline text-[var(--theme-border)]/40">·</span>
          <span class="font-medium">📊 100K+ App Downloads</span>
          <span class="hidden sm:inline text-[var(--theme-border)]/40">·</span>
          <span class="font-medium">💳 50K+ Monthly Transactions</span>
          <span class="hidden sm:inline text-[var(--theme-border)]/40">·</span>
          <span class="font-medium">⚡ 5+ Years Production Systems</span>
          <span class="hidden sm:inline text-[var(--theme-border)]/40">·</span>
          <span class="font-medium">☁️ Azure Certified (AZ-204)</span>
        </div>
      </div>
    </section>
  `
})
export class ProofBarComponent {}
