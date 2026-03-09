import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class QuizService {

  private answers: { [index: number]: string } = {};
  currentIndex = 0;

  // Guardar respuesta
  setAnswer(index: number, value: string): void {
    this.answers[index] = value;
    // Avanza automáticamente si hay siguiente pregunta
    if (index >= this.currentIndex) {
      this.currentIndex = index + 1;
    }
  }

  // Leer respuesta por índice (para marcar botón activo en la vista)
  getAnswer(index: number): string {
    return this.answers[index] ?? '';
  }

  // Porcentaje de progreso
  progressPercent(total: number): number {
    const answered = Object.keys(this.answers).length;
    return total > 0 ? Math.round((answered / total) * 100) : 0;
  }

  // Retroceder
  goBack(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  // Guardar borrador (puedes conectar a localStorage o API)
  saveDraft(): void {
    const draft = JSON.stringify(this.answers);
    localStorage.setItem('quiz_draft', draft);
    console.log('Borrador guardado:', this.answers);
  }

  // Cargar borrador guardado
  loadDraft(): void {
    const saved = localStorage.getItem('quiz_draft');
    if (saved) {
      this.answers = JSON.parse(saved);
    }
  }

  // Obtener todas las respuestas (para resultados)
  getAllAnswers(): { [index: number]: string } {
    return { ...this.answers };
  }

  // Limpiar respuestas
  reset(): void {
    this.answers = {};
    this.currentIndex = 0;
  }
}