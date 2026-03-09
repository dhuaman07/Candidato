import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
selector:'app-resultados',
standalone:true,
templateUrl:'./resultados.html'
})
export class ResultadosComponent {

// score;

constructor(private quiz:QuizService){
// this.score = quiz.getScore();
}

}