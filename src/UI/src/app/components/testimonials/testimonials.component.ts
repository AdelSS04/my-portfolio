import { Component, signal, effect } from '@angular/core';
import { LucideAngularModule, Quote, ChevronLeft, ChevronRight } from 'lucide-angular';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image?: string;
  text: string;
  linkedIn?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="testimonials" class="py-20 px-6 relative overflow-hidden">

      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--theme-background-secondary)]/20 to-transparent"></div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">What People Say</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          From engineers and collaborators I've worked with.
        </p>


        <div class="relative">

          <div class="overflow-hidden rounded-2xl"
            (touchstart)="onTouchStart($event)"
            (touchmove)="onTouchMove($event)"
            (touchend)="onTouchEnd()"
            (mouseenter)="stopAutoPlay()"
            (mouseleave)="startAutoPlay()">
            <div class="flex transition-transform duration-500 ease-in-out"
              [style.transform]="'translateX(-' + (currentIndex() * 100) + '%)'">


              @for (testimonial of testimonials; track testimonial) {
                <div
                  class="w-full flex-shrink-0 px-4">
                  <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[var(--theme-border)]/20 hover:border-[var(--theme-border)]/30 transition-all duration-300">

                    <div class="flex justify-center mb-6">
                      <div class="w-16 h-16 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full flex items-center justify-center">
                        <lucide-icon [img]="Quote" class="w-8 h-8 text-white/80" />
                      </div>
                    </div>

                    <div class="max-w-3xl mx-auto text-center">

                      <p class="text-[var(--theme-text-secondary)] text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{{testimonial.text}}"
                      </p>

                      <div class="flex flex-col items-center">

                        <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center mb-4 border-2 border-[var(--theme-border)]/30">
                          @if (!testimonial.image) {
                            <span class="text-2xl text-white font-bold">
                              {{testimonial.name.charAt(0)}}
                            </span>
                          }
                          @if (testimonial.image) {
                            <img
                              [src]="testimonial.image"
                              [alt]="testimonial.name"
                              class="w-full h-full rounded-full object-cover">
                          }
                        </div>

                        <div>
                          <h4 class="text-[var(--theme-text)] font-semibold text-lg">{{testimonial.name}}</h4>
                          <p class="text-[var(--theme-text-secondary)] text-sm">{{testimonial.position}}</p>
                          <p class="text-[var(--theme-text-secondary)]/70 text-sm">{{testimonial.company}}</p>

                          @if (testimonial.linkedIn) {
                            <a
                              [href]="testimonial.linkedIn"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="inline-flex items-center gap-1 text-[var(--theme-primary)] hover:text-[var(--theme-accent)] transition-colors mt-3 text-sm">
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                              View Profile
                            </a>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>


          <button
            (click)="prevSlide()"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--theme-surface)]/60 hover:bg-[var(--theme-surface)]/80 rounded-full flex items-center justify-center text-[var(--theme-text)] transition-all duration-300 backdrop-blur-sm border border-[var(--theme-border)]/30 hover:scale-110 active:scale-95 hover:border-[var(--theme-primary)]/50"
            [disabled]="isTransitioning()"
            >
            <lucide-icon [img]="ChevronLeft" class="w-6 h-6" />
          </button>

          <button
            (click)="nextSlide()"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[var(--theme-surface)]/60 hover:bg-[var(--theme-surface)]/80 rounded-full flex items-center justify-center text-[var(--theme-text)] transition-all duration-300 backdrop-blur-sm border border-[var(--theme-border)]/30 hover:scale-110 active:scale-95 hover:border-[var(--theme-primary)]/50"
            [disabled]="isTransitioning()"
            >
            <lucide-icon [img]="ChevronRight" class="w-6 h-6" />
          </button>


          <div class="flex justify-center gap-2 mt-8">
            @for (testimonial of testimonials; track testimonial; let i = $index) {
              <button
                (click)="goToSlide(i)"
                [class.bg-[var(--theme-primary)]]="i === currentIndex()"
                [class.bg-[var(--theme-surface)]/40]="i !== currentIndex()"
                [class.w-12]="i === currentIndex()"
                [class.w-2]="i !== currentIndex()"
                class="h-2 rounded-full transition-all duration-300 hover:bg-[var(--theme-surface)]/60"
                [disabled]="isTransitioning()"
              ></button>
            }
          </div>
        </div>


      </div>
    </section>
    `,
  styles: [`
    :host {
      display: block;
    }

    .transition-transform {
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    button {
      user-select: none;
    }

    .testimonial-text {
      max-height: 200px;
      overflow-y: auto;
    }

    .testimonial-text::-webkit-scrollbar {
      width: 4px;
    }

    .testimonial-text::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 2px;
    }
  `]
})
export class TestimonialsComponent {
  currentIndex = signal(0);
  isTransitioning = signal(false);
  autoPlayInterval: any;
  touchStartX = 0;
  touchEndX = 0;
  readonly Quote = Quote;
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mariem Gharsallah',
      position: 'Technology Consultant | SAP S/4HANA',
      company: 'Accenture',
      text: 'Not only is he always willing to learn a new skill but also dedicated to mastering it. He is also very helpful and always gives of his time whenever in need.',
      linkedIn: 'https://www.linkedin.com/in/mariemgharsallah/'
    },
    {
      id: 2,
      name: 'Arsslen Idadi',
      position: 'Senior .NET Developer - Software Architect',
      company: 'Nm\u00e9dia',
      text: 'I worked with Adel on several projects. A hard worker, passionate and determined software engineer. I recommend him for any software engineering related work.',
      linkedIn: 'https://www.linkedin.com/in/arsslen-idadi/'
    }
  ];

  constructor() {
    effect(() => {
      this.startAutoPlay();
      return () => {
        this.stopAutoPlay();
      };
    }, { allowSignalWrites: true });
    effect(() => {
      const handleKeyboard = (event: KeyboardEvent) => {
        const testimonialsSection = document.getElementById('testimonials');
        if (!testimonialsSection) return;

        const rect = testimonialsSection.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (inView) {
          if (event.key === 'ArrowLeft') {
            this.prevSlide();
          } else if (event.key === 'ArrowRight') {
            this.nextSlide();
          }
        }
      };

      if (typeof window !== 'undefined') {
        window.addEventListener('keydown', handleKeyboard);
        return () => {
          window.removeEventListener('keydown', handleKeyboard);
        };
      }
      return undefined;
    });
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.set((this.currentIndex() + 1) % this.testimonials.length);

    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 500);
  }

  prevSlide(): void {
    if (this.isTransitioning()) return;

    this.isTransitioning.set(true);
    this.currentIndex.set(this.currentIndex() === 0
      ? this.testimonials.length - 1
      : this.currentIndex() - 1);

    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 500);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning() || index === this.currentIndex()) return;

    this.isTransitioning.set(true);
    this.currentIndex.set(index);
    this.stopAutoPlay();
    this.startAutoPlay();

    setTimeout(() => {
      this.isTransitioning.set(false);
    }, 500);
  }
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(): void {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        this.nextSlide();
      } else {
        this.prevSlide();
      }
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }
}
