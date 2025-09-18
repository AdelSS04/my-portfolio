// about.component.ts
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">About Me</h2>
        <p class="text-gray-400 text-center mb-12">Passionate about creating impactful solutions</p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-[#112231]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span class="text-2xl">👨‍💻</span> Professional Profile
            </h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{aboutText}}
            </p>
            <p class="text-gray-300 leading-relaxed">
              {{additionalInfo}}
            </p>
          </div>

          <div class="bg-[#112231]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
            <h3 class="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <span class="text-2xl">📊</span> Quick Facts
            </h3>
            <div class="space-y-4">
              <div class="flex items-center justify-between py-3 border-b border-white/10">
                <span class="text-gray-400">Experience</span>
                <span class="text-white font-semibold">5+ Years</span>
              </div>
              <div class="flex items-center justify-between py-3 border-b border-white/10">
                <span class="text-gray-400">Projects Completed</span>
                <span class="text-white font-semibold">50+</span>
              </div>
              <div class="flex items-center justify-between py-3 border-b border-white/10">
                <span class="text-gray-400">Technologies</span>
                <span class="text-white font-semibold">20+</span>
              </div>
              <div class="flex items-center justify-between py-3 border-b border-white/10">
                <span class="text-gray-400">Certifications</span>
                <span class="text-white font-semibold">Azure AZ-204</span>
              </div>
              <div class="flex items-center justify-between py-3">
                <span class="text-gray-400">Specialization</span>
                <span class="text-white font-semibold">.NET & Angular</span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 grid md:grid-cols-3 gap-6">
          <div class="bg-[#122331]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#122331] to-[#122433] rounded-full flex items-center justify-center">
              <span class="text-2xl">🎯</span>
            </div>
            <h4 class="text-white font-semibold mb-2">Quality First</h4>
            <p class="text-gray-400 text-sm">Writing clean, maintainable code that stands the test of time</p>
          </div>
          <div class="bg-[#122331]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#122331] to-[#122433] rounded-full flex items-center justify-center">
              <span class="text-2xl">🚀</span>
            </div>
            <h4 class="text-white font-semibold mb-2">Performance</h4>
            <p class="text-gray-400 text-sm">Optimizing for speed and scalability in every project</p>
          </div>
          <div class="bg-[#122331]/30 backdrop-blur-sm rounded-xl p-6 border border-white/5 text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#122331] to-[#122433] rounded-full flex items-center justify-center">
              <span class="text-2xl">💡</span>
            </div>
            <h4 class="text-white font-semibold mb-2">Innovation</h4>
            <p class="text-gray-400 text-sm">Always learning and adopting new technologies</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  @Input() aboutText: string = `I'm a passionate Senior Full Stack Developer with expertise in .NET and Angular.
    Azure AZ-204 certified with extensive experience in building scalable cloud applications.`;

  @Input() additionalInfo: string = `Specializing in enterprise-level applications with a focus on clean architecture,
    microservices, and cloud-native solutions using Azure services.`;
}
