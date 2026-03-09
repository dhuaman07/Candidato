import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { QUESTIONS } from '../../data/questions.data';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-cuestionario',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: 'cuestionario.html',
  styleUrls: ['cuestionario.css']
})
export class CuestionarioComponent {

  questions = QUESTIONS;

  constructor(private quiz: QuizService, private router: Router) {}

  answer(i: number, value: string): void {
    this.quiz.setAnswer(i, value);
  }

  getAnswer(i: number): string {
    return this.quiz.getAnswer(i);
  }

  get progressPercent(): number {
    return this.quiz.progressPercent(this.questions.length);
  }

  get currentIndex(): number {
    return this.quiz.currentIndex;
  }

  goBack(): void {
    this.router.navigate(['/']);
    this.quiz.goBack();
  }

  saveDraft(): void {
    this.quiz.saveDraft();
  }
}