// footer.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="py-8 px-6 border-t border-white/5 bg-[#112230]/50 backdrop-blur-sm">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="text-gray-500">© {{currentYear}} {{name}}. All rights reserved.</p>
          </div>
          <div class="flex items-center gap-6">
            <a href="#home" class="text-gray-500 hover:text-white transition-colors">Home</a>
            <a href="#about" class="text-gray-500 hover:text-white transition-colors">About</a>
            <a href="#projects" class="text-gray-500 hover:text-white transition-colors">Projects</a>
            <a href="#contact" class="text-gray-500 hover:text-white transition-colors">Contact</a>
          </div>
          <div class="flex items-center gap-2 text-gray-500">
            <span>Built with</span>
            <span class="text-red-500">❤️</span>
            <span>using Angular & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  @Input() name: string = 'Your Name';
  currentYear: number = new Date().getFullYear();
}
