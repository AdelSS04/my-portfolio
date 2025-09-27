import { Injectable, signal, computed } from '@angular/core';

export interface LoadingStep {
  id: string;
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loadingSteps = signal<LoadingStep[]>([
    { id: 'theme', name: 'Loading theme configuration', completed: false },
    { id: 'assets', name: 'Preparing assets', completed: false },
    { id: 'components', name: 'Initializing components', completed: false },
    { id: 'ready', name: 'Portfolio ready!', completed: false }
  ]);

  // Computed signals
  completedSteps = computed(() => this.loadingSteps().filter(step => step.completed));
  currentStep = computed(() => this.loadingSteps().find(step => !step.completed) || null);
  progress = computed(() => {
    const total = this.loadingSteps().length;
    const completed = this.completedSteps().length;
    return Math.round((completed / total) * 100);
  });
  isComplete = computed(() => this.completedSteps().length === this.loadingSteps().length);

  completeStep(stepId: string): void {
    this.loadingSteps.update(steps =>
      steps.map(step =>
        step.id === stepId ? { ...step, completed: true } : step
      )
    );
  }

  async simulateLoading(): Promise<void> {
    const steps = ['theme', 'assets', 'components', 'ready'];

    for (const stepId of steps) {
      await new Promise(resolve => setTimeout(resolve, stepId === 'theme' ? 300 : 200));
      this.completeStep(stepId);
    }
  }

  resetLoading(): void {
    this.loadingSteps.update(steps =>
      steps.map(step => ({ ...step, completed: false }))
    );
  }
}
