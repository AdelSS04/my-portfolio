import { Component } from '@angular/core';

@Component({
  selector: 'app-proof-bar',
  standalone: true,
  template: `
    <section class="py-10 px-6">
      <div class="container mx-auto max-w-5xl">
        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-[var(--theme-text-secondary)]">
          <span>Live SaaS in Production</span>
          <span class="opacity-30">·</span>
          <span>100K+ App Downloads</span>
          <span class="opacity-30">·</span>
          <span>50K+ Monthly Transactions</span>
          <span class="opacity-30">·</span>
          <span>5+ Years Production Systems</span>
          <span class="opacity-30">·</span>
          <span>Azure Certified (AZ-204)</span>
        </div>
      </div>
    </section>
  `
})
export class ProofBarComponent {}
