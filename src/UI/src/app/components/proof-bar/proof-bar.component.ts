import { Component } from '@angular/core';

@Component({
  selector: 'app-proof-bar',
  standalone: true,
  template: `
    <section class="py-10 px-6">
      <div class="container mx-auto max-w-5xl">
        <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm text-[var(--theme-text-secondary)]">
          <span>Slotafy: live restaurant SaaS</span>
          <span class="opacity-30">·</span>
          <span>EvidentConnect: 100+ organizations</span>
          <span class="opacity-30">·</span>
          <span>Device provisioning: 5,000+ devices</span>
          <span class="opacity-30">·</span>
          <span>Podyam: 7 developers led</span>
          <span class="opacity-30">·</span>
          <span>AZ-204 earned in 2023</span>
        </div>
      </div>
    </section>
  `
})
export class ProofBarComponent {}
