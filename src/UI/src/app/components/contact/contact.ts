import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, MapPin, Clock, Github, Linkedin, Loader2 } from 'lucide-angular';

interface SocialLink {
  name: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule],
  providers: [HttpClient],
  template: `
    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">Get In Touch</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Let's discuss how we can work together on your next project
        </p>
        <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--theme-border)]/20">
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6" novalidate>
            <div class="grid md:grid-cols-2 gap-6">
                            <div>
                <label class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  formControlName="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all"
                  placeholder="Your Name"
                  />
                @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                  <div class="text-red-400 text-xs mt-1 animate-slideDown">
                    Name is required (min 2 characters)
                  </div>
                }
              </div>
              <div>
                <label class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  formControlName="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all"
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
              <label class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                formControlName="subject"
                name="subject"
                class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all"
                placeholder="Project Discussion"
                />
            </div>
            <div>
              <label class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                formControlName="message"
                name="message"
                required
                class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all resize-none"
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
              class="w-full px-8 py-4 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white rounded-lg font-medium border border-[var(--theme-border)]/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--theme-primary)]/30 active:scale-[0.98] relative overflow-hidden group theme-glow"
              >
              <span class="relative z-10">
                @if (!isSubmitting()) {
                  <span>Send Message</span>
                }
                @if (isSubmitting() ) {
                  <span class="flex items-center justify-center">
                    <lucide-icon [img]="Loader2" class="w-5 h-5 mr-3 animate-spin" />
                    Sending...
                  </span>
                }
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-[var(--theme-primary)]/20 to-[var(--theme-accent)]/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </button>
          </form>

          <div class="mt-8 pt-8 border-t border-[var(--theme-border)]/20">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[var(--theme-surface)]/60 rounded-full flex items-center justify-center"
                  >
                  <lucide-icon [img]="Mail" class="w-5 h-5 text-[var(--theme-text-secondary)]" />
                </div>
                <p class="text-[var(--theme-text-secondary)] text-sm">Email</p>
                <p class="text-[var(--theme-text)]">contact@adellajil.com</p>
              </div>
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[var(--theme-surface)]/60 rounded-full flex items-center justify-center"
                  >
                  <lucide-icon [img]="MapPin" class="w-5 h-5 text-[var(--theme-text-secondary)]" />
                </div>
                <p class="text-[var(--theme-text-secondary)] text-sm">Location</p>
                <p class="text-[var(--theme-text)]">Quebec, Canada</p>
              </div>
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[var(--theme-surface)]/60 rounded-full flex items-center justify-center"
                  >
                  <lucide-icon [img]="Clock" class="w-5 h-5 text-[var(--theme-text-secondary)]" />
                </div>
                <p class="text-[var(--theme-text-secondary)] text-sm">Response Time</p>
                <p class="text-[var(--theme-text)]">Within 24 hours</p>
              </div>
            </div>

            <div class="mt-8 flex justify-center gap-4">
              @for (social of socialLinks; track social.url) {
                <a
                  [href]="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-12 h-12 bg-[var(--theme-surface)]/60 hover:bg-[var(--theme-surface)]/80 rounded-full flex items-center justify-center text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-all duration-300 border border-[var(--theme-border)]/20 hover:border-[var(--theme-border)]/40"
                  [attr.aria-label]="social.name"
                  >
                  <lucide-icon [img]="getSocialIcon(social.name)" class="w-5 h-5" />
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
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Clock = Clock;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Loader2 = Loader2;

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
      url: 'https://github.com/AdelSS04'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adellajil/'
    },
  ];

  getSocialIcon(name: string): any {
    const iconMap: { [key: string]: any } = {
      'GitHub': this.Github,
      'LinkedIn': this.Linkedin
    };
    return iconMap[name] || this.Mail;
  }

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

