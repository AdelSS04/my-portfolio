import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Mail, MapPin, Clock, Github, Linkedin, Loader2 } from 'lucide-angular';
import { LanguageService } from '../../i18n/language.service';

interface SocialLink {
  name: string;
  url: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule],
  template: `
    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">{{ i18n.t('contact.title') }}</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          {{ i18n.t('contact.subtitle') }}
        </p>
        <div class="bg-[var(--theme-surface)] rounded-xl p-8 border border-[var(--theme-border)]/30">
          <p class="sr-only" aria-live="polite">{{ statusMessage() }}</p>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6" novalidate>
            <div class="grid md:grid-cols-2 gap-6">
                            <div>
                <label for="contact-name" class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">{{ i18n.t('contact.nameLabel') }}</label>
                <input
                  id="contact-name" type="text"
                  formControlName="name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all"
                  [placeholder]="i18n.t('contact.namePlaceholder')"
                  />
                @if (contactForm.get('name')?.touched && contactForm.get('name')?.invalid) {
                  <div class="text-red-400 text-xs mt-1 animate-slideDown">
                    {{ i18n.t('contact.nameError') }}
                  </div>
                }
              </div>
              <div>
                <label for="contact-email" class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">{{ i18n.t('contact.emailLabel') }}</label>
                <input
                  id="contact-email" type="email"
                  formControlName="email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all"
                  [placeholder]="i18n.t('contact.emailPlaceholder')"
                  />
                @if (contactForm.get('email')?.touched && contactForm.get('email')?.invalid) {
                  <div class="text-red-400 text-xs mt-1 animate-slideDown">
                    {{ i18n.t('contact.emailError') }}
                  </div>
                }
              </div>
            </div>
            <div>
              <label for="contact-subject" class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">{{ i18n.t('contact.subjectLabel') }}</label>
              <input
                id="contact-subject" type="text"
                formControlName="subject"
                name="subject"
                class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all"
                [placeholder]="i18n.t('contact.subjectPlaceholder')"
                />
            </div>
            <div>
              <label for="contact-message" class="block text-[var(--theme-text-secondary)] mb-2 text-sm font-medium">
                {{ i18n.t('contact.msgLabel') }}
                <span class="text-[var(--theme-text-secondary)]/60 font-normal ml-2">{{ i18n.t('contact.msgHint') }}</span>
              </label>
              <textarea
                id="contact-message" rows="6"
                formControlName="message"
                name="message"
                required
                class="w-full px-4 py-3 bg-[var(--theme-background-secondary)]/80 border border-[var(--theme-border)]/30 rounded-lg text-[var(--theme-text)] placeholder-[var(--theme-text-secondary)]/70 focus:outline-none focus:border-[var(--theme-primary)]/50 focus:bg-[var(--theme-background-secondary)] transition-all resize-none"
                [placeholder]="i18n.t('contact.msgPlaceholder')"
              ></textarea>
              @if (contactForm.get('message')?.touched && contactForm.get('message')?.invalid) {
                <div class="text-red-400 text-xs mt-1 animate-slideDown">
                  {{ i18n.t('contact.msgError') }}
                </div>
              }
            </div>
            <button
              type="submit"
              [disabled]="isSubmitting() || !isFormValid()"
              [class.opacity-50]="isSubmitting() || !isFormValid()"
              [class.cursor-not-allowed]="isSubmitting() || !isFormValid()"
              class="w-full px-8 py-4 bg-[var(--theme-primary)] text-white rounded-lg font-medium transition-colors hover:bg-[var(--theme-primary-dark)] relative overflow-hidden"
              >
              <span class="relative z-10">
                @if (!isSubmitting()) {
                  <span>{{ i18n.t('contact.send') }}</span>
                }
                @if (isSubmitting() ) {
                  <span class="flex items-center justify-center gap-2">
                    <lucide-icon [img]="Loader2" class="w-5 h-5 animate-spin" />
                    {{ i18n.t('contact.sending') }}
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
                <p class="text-[var(--theme-text-secondary)] text-sm">{{ i18n.t('contact.emailTitle') }}</p>
                <p class="text-[var(--theme-text)]">contact@adellajil.com</p>
              </div>
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[var(--theme-surface)]/60 rounded-full flex items-center justify-center"
                  >
                  <lucide-icon [img]="MapPin" class="w-5 h-5 text-[var(--theme-text-secondary)]" />
                </div>
                <p class="text-[var(--theme-text-secondary)] text-sm">{{ i18n.t('contact.locationTitle') }}</p>
                <p class="text-[var(--theme-text)]">{{ i18n.t('contact.locationValue') }}</p>
              </div>
              <div>
                <div
                  class="w-12 h-12 mx-auto mb-3 bg-[var(--theme-surface)]/60 rounded-full flex items-center justify-center"
                  >
                  <lucide-icon [img]="Clock" class="w-5 h-5 text-[var(--theme-text-secondary)]" />
                </div>
                <p class="text-[var(--theme-text-secondary)] text-sm">{{ i18n.t('contact.tzTitle') }}</p>
                <p class="text-[var(--theme-text)]">{{ i18n.t('contact.tzValue') }}</p>
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
  readonly i18n = inject(LanguageService);
  contactForm: FormGroup;
  isSubmitting = signal(false);
  statusMessage = signal('');
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
        next: () => { this.statusMessage.set(this.i18n.t('contact.ok')); this.contactForm.reset(); this.isSubmitting.set(false); },
        error: () => { this.statusMessage.set(this.i18n.t('contact.fail')); this.isSubmitting.set(false); },
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
  isFormValid(): boolean {
    return this.contactForm.valid;
  }
}

