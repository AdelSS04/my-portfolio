// contact.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SocialLink {
  name: string;
  url: string;
  iconPath: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Get In Touch</h2>
        <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Let's discuss how we can work together on your next project
        </p>
        <div class="bg-[#112231]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
          <form (ngSubmit)="onSubmit()" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-300 mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  [(ngModel)]="formData.name"
                  name="name"
                  required
                  class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all"
                  placeholder="Your Name"
                >
              </div>
              <div>
                <label class="block text-gray-300 mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  [(ngModel)]="formData.email"
                  name="email"
                  required
                  class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all"
                  placeholder="your@email.com"
                >
              </div>
            </div>
            <div>
              <label class="block text-gray-300 mb-2 text-sm font-medium">Subject</label>
              <input
                type="text"
                [(ngModel)]="formData.subject"
                name="subject"
                class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all"
                placeholder="Project Discussion"
              >
            </div>
            <div>
              <label class="block text-gray-300 mb-2 text-sm font-medium">Message</label>
              <textarea
                rows="5"
                [(ngModel)]="formData.message"
                name="message"
                required
                class="w-full px-4 py-3 bg-[#1e1e1e]/50 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-[#1e1e1e]/70 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="w-full px-8 py-4 bg-gradient-to-r from-[#122331] to-[#122433] text-white rounded-lg hover:shadow-lg hover:scale-[1.01] transition-all duration-300 font-medium border border-white/10"
            >
              Send Message
            </button>
          </form>

          <div class="mt-8 pt-8 border-t border-white/10">
            <div class="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-[#122331]/50 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <p class="text-gray-500 text-sm">Email</p>
                <p class="text-white">contact@example.com</p>
              </div>
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-[#122331]/50 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <p class="text-gray-500 text-sm">Location</p>
                <p class="text-white">Tunis, Tunisia</p>
              </div>
              <div>
                <div class="w-12 h-12 mx-auto mb-3 bg-[#122331]/50 rounded-full flex items-center justify-center">
                  <svg class="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <p class="text-gray-500 text-sm">Response Time</p>
                <p class="text-white">Within 24 hours</p>
              </div>
            </div>

            <div class="mt-8 flex justify-center gap-4">
              <a
                *ngFor="let social of socialLinks"
                [href]="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-[#122331]/50 hover:bg-[#122433]/70 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20"
                [attr.aria-label]="social.name"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path [attr.d]="social.iconPath"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      iconPath: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      iconPath: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
    }
  ];

  onSubmit(): void {
    if (this.formData.name && this.formData.email && this.formData.message) {
      console.log('Form submitted:', this.formData);
      alert('Message sent successfully!');
      this.resetForm();
    }
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}
