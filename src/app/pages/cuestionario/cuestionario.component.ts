import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { QUESTIONS } from '../../data/questions.data';
import { QuizService } from '../../services/quiz.service';
import Swal from 'sweetalert2';

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

  onSubmit() : void {

    Swal.fire({
    title: '¡Gracias por completar el cuestionario!',
    html: `
      <p style="font-size: 1rem; color: #444;">
        Has identificado las cualidades que debe tener un buen líder.
        <br><br>
        <strong>Jacqueline Santos</strong> representa los valores que tú mismo elegiste:
        preparación, honestidad y compromiso real con la región.
        <br><br>
        <span style="font-size: 1.1rem; font-weight: bold; color: #2c7be5;">
          En estas elecciones, tu voto hace la diferencia. 
          <br>Vota por el cambio que merece tu comunidad.
        </span>
      </p>
    `,
    imageUrl: 'assets/images/candidato.jpg', // 👈 opcional, pon su foto
    imageWidth: 120,
    imageHeight: 120,
    imageAlt: 'Jacqueline Santos',
    confirmButtonText: '¡Voy a votar por el cambio! 🗳️',
    confirmButtonColor: '#2c7be5',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      this.router.navigate(['/perfil']);
    }
  });
  }
}