import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { signal } from '@angular/core';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

interface SocialLink {
  name: string;
  url: string;
  iconPath: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [HttpClient],
  template: `
    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Get In Touch</h2>
        <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Let's discuss how we can work together on your next project
        </p>
        <div class="bg-[#112231]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6" novalidate>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  formControlName="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all"
                  placeholder="Your Name"
                  />
                @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                  <div class="text-red-400 text-xs mt-1 animate-slideDown">
                    Name is required (min 2 characters)
                  </div>
                }
              </div>
              <div>
                <label class="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  formControlName="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all"
                  placeholder="your@email.com"
                  />
                @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                  <div class="text-red-400 text-xs mt-1 animate-slideDown">
                    Valid email is required
                  </div>
                }
              </div>
            </div>
            <div>
              <label class="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                formControlName="subject"
                name="subject"
                class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all"
                placeholder="Project Discussion"
                />
            </div>
            <div>
              <label class="block text-gray-300 mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                formControlName="message"
                name="message"
                required
                class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
              @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
                <div class="text-red-400 text-xs mt-1 animate-slideDown">
                  Message is required (min 10 characters)
                </div>
              }
            </div>
            <button
              type="submit"
              [disabled]="isSubmitting() || !isFormValid()"
              [class.opacity-50]="isSubmitting() || !isFormValid()"
              [class.cursor-not-allowed]="isSubmitting() || !isFormValid()"
              class="w-full px-8 py-4 bg-gradient-to-r from-[#122331] to-[#122433] text-white rounded-lg font-medium border border-white/10 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/20 active:scale-[0.98] relative overflow-hidden group"
              >
              <span class="relative z-10">
                @if (!isSubmitting()) {
                  <span>Send Message</span>
                }
                @if (isSubmitting() ) {
                  <span class="flex items-center justify-center">
                    <svg class="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                }
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
          </form>

          <div class="mt-8 pt-8 border-t border-white/10">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[#122331]/50 rounded-full flex items-center justify-center"
                  >
                  <svg
                    class="w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                  </svg>
                </div>
                <p class="text-gray-500 text-sm">Email</p>
                <p class="text-white">contact@adellajil.com</p>
              </div>
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[#122331]/50 rounded-full flex items-center justify-center"
                  >
                  <svg
                    class="w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                  </svg>
                </div>
                <p class="text-gray-500 text-sm">Location</p>
                <p class="text-white">Quebec, Canada</p>
              </div>
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[#122331]/50 rounded-full flex items-center justify-center"
                  >
                  <svg
                    class="w-5 h-5 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                  </svg>
                </div>
                <p class="text-gray-500 text-sm">Response Time</p>
                <p class="text-white">Within 24 hours</p>
              </div>
            </div>

            <div class="mt-8 flex justify-center gap-4">
              @for (social of socialLinks; track social.url) {
                <a
                  [href]="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-[#122331]/50 hover:bg-[#122433]/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                  [attr.aria-label]="social.name"
                  >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path [attr.d]="social.iconPath" />
                  </svg>
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
    `,
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/AdelSS04',
      iconPath:
        'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adellajil/',
      iconPath:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    },
  ];

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      const formData = this.contactForm.value;
      this.http.post('https://formspree.io/f/mrbangek', formData).subscribe({
        next: () => alert('Message sent!'),
        error: () => alert('Error sending message'),
        complete: () => {this.contactForm.reset(); this.isSubmitting.set(false);},
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
  isFormValid(): boolean {
    return this.contactForm.valid;
  }
}

