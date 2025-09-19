// testimonials.component.ts
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';


interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  date: string;
  linkedIn?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  template: `
    <section id="testimonials" class="py-20 px-6 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#112230]/20 to-transparent"></div>

      <div class="container mx-auto max-w-6xl relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Testimonials</h2>
        <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          What colleagues and clients say about working with me
        </p>

        <!-- Slider Container -->
        <div class="relative">
          <!-- Main Slider -->
          <div class="overflow-hidden rounded-2xl"
            (touchstart)="onTouchStart($event)"
            (touchmove)="onTouchMove($event)"
            (touchend)="onTouchEnd()"
            (mouseenter)="stopAutoPlay()"
            (mouseleave)="startAutoPlay()">
            <div class="flex transition-transform duration-500 ease-in-out"
              [style.transform]="'translateX(-' + (currentIndex * 100) + '%)'">

              <!-- Testimonial Cards -->
              @for (testimonial of testimonials; track testimonial) {
                <div
                  class="w-full flex-shrink-0 px-4">
                  <div class="bg-[#112231]/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-all duration-300">
                    <!-- Quote Icon -->
                    <div class="flex justify-center mb-6">
                      <div class="w-16 h-16 bg-gradient-to-br from-[#122331] to-[#122433] rounded-full flex items-center justify-center">
                        <svg class="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                      </div>
                    </div>
                    <!-- Testimonial Content -->
                    <div class="max-w-3xl mx-auto text-center">
                      <!-- Rating Stars -->
                      <div class="flex justify-center mb-6">
                        @for (star of [1,2,3,4,5]; track star) {
                          <span
                            [class.text-yellow-400]="star <= testimonial.rating"
                            [class.text-gray-600]="star > testimonial.rating"
                            class="text-xl">
                            ★
                          </span>
                        }
                      </div>
                      <!-- Testimonial Text -->
                      <p class="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                        "{{testimonial.text}}"
                      </p>
                      <!-- Author Info -->
                      <div class="flex flex-col items-center">
                        <!-- Author Image -->
                        <div class="w-20 h-20 rounded-full bg-gradient-to-br from-[#122331] to-[#122433] flex items-center justify-center mb-4 border-2 border-white/10">
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
                        <!-- Author Details -->
                        <div>
                          <h4 class="text-white font-semibold text-lg">{{testimonial.name}}</h4>
                          <p class="text-gray-400 text-sm">{{testimonial.position}}</p>
                          <p class="text-gray-500 text-sm">{{testimonial.company}}</p>
                          <p class="text-gray-600 text-xs mt-2">{{testimonial.date}}</p>
                          <!-- LinkedIn Link -->
                          @if (testimonial.linkedIn) {
                            <a
                              [href]="testimonial.linkedIn"
                              target="_blank"
                              rel="noopener noreferrer"
                              class="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors mt-3 text-sm">
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

          <!-- Navigation Arrows -->
          <button
            (click)="prevSlide()"
            class="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95"
            [disabled]="isTransitioning"
            >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            (click)="nextSlide()"
            class="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/10 hover:scale-110 active:scale-95"
            [disabled]="isTransitioning"
            >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Dots Navigation -->
          <div class="flex justify-center gap-2 mt-8">
            @for (testimonial of testimonials; track testimonial; let i = $index) {
              <button
                (click)="goToSlide(i)"
                [class.bg-blue-400]="i === currentIndex"
                [class.bg-white/30]="i !== currentIndex"
                [class.w-12]="i === currentIndex"
                [class.w-2]="i !== currentIndex"
                class="h-2 rounded-full transition-all duration-300 hover:bg-white/50"
                [disabled]="isTransitioning"
              ></button>
            }
          </div>
        </div>

        <!-- Additional Info -->
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">{{testimonials.length}}+</div>
            <div class="text-gray-500 text-sm">Happy Clients</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">4.9/5</div>
            <div class="text-gray-500 text-sm">Average Rating</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">100%</div>
            <div class="text-gray-500 text-sm">Recommendation</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-white mb-1">4+</div>
            <div class="text-gray-500 text-sm">Years of Trust</div>
          </div>
        </div>
      </div>
    </section>
    `,
  styles: [`
    :host {
      display: block;
    }

    /* Smooth transitions */
    .transition-transform {
      transition-property: transform;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Disable text selection on navigation elements */
    button {
      user-select: none;
    }

    /* Custom scrollbar for testimonial text if needed */
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
export class TestimonialsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  isTransitioning = false;
  autoPlayInterval: any;
  touchStartX = 0;
  touchEndX = 0;

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Mariem Gharsallah',
      position: 'Technology Consultant | SAP S/4HANA | Data-Driven Decision-Making',
      company: 'Accenture',
      rating: 5,
      text: 'I have studied with Adel for two years. He\'s a very talented student. He\'s ambitious and diligent. Not only is he always willing to learn a new skill but also dedicated to mastering it. He is also compassionate and very helpful. He always gives of his time whenever in need.',
      date: 'May 2019',
      linkedIn: 'https://www.linkedin.com/in/mariemgharsallah/'
    },
    {
      id: 2,
      name: 'Arsslen Idadi ',
      position: 'Senior .NET Developer - Software Architect | M.S.Eng',
      company: 'Nmédia',
      rating: 5,
      text: 'I worked with Adel in several project, and I found him to be a hard worker, passionate and determined software engineer. I recommend him for any software engineering related position.',
      date: 'June 2024',
      linkedIn: 'https://www.linkedin.com/in/arsslen-idadi/'
    }
  ];

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  nextSlide(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  prevSlide(): void {
    if (this.isTransitioning) return;

    this.isTransitioning = true;
    this.currentIndex = this.currentIndex === 0
      ? this.testimonials.length - 1
      : this.currentIndex - 1;

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentIndex) return;

    this.isTransitioning = true;
    this.currentIndex = index;

    // Reset auto-play when user manually navigates
    this.stopAutoPlay();
    this.startAutoPlay();

    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  // Touch/Swipe support for mobile
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
        // Swiped left - go to next slide
        this.nextSlide();
      } else {
        // Swiped right - go to previous slide
        this.prevSlide();
      }

      // Reset auto-play after swipe
      this.stopAutoPlay();
      this.startAutoPlay();
    }
  }

  // Keyboard navigation
  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    // Only handle keyboard events when testimonials section is in view
    const testimonialsSection = document.getElementById('testimonials');
    if (!testimonialsSection) return;

    const rect = testimonialsSection.getBoundingClientRect();
    const inView = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (inView) {
      if (event.key === 'ArrowLeft') {
        this.prevSlide();
        this.stopAutoPlay();
        this.startAutoPlay();
      } else if (event.key === 'ArrowRight') {
        this.nextSlide();
        this.stopAutoPlay();
        this.startAutoPlay();
      }
    }
  }
}
