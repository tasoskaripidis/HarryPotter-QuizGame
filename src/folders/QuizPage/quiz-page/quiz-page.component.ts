import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../service/service.service';
import { Quiz, Answer } from '../../../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  imports: [],
  templateUrl: './quiz-page.component.html',
  styleUrl: './quiz-page.component.css',
})
export class QuizPageComponent implements OnInit {
  constructor(private ser: ServiceService, private route: Router) {
    this.ser.getQuiz();
  }

  theQuiz: Quiz[] = [];
  quizIndex = 0;
  score: number = 0;
  istrue: boolean = true;
  answersAnimation: boolean = false;
  selectedAnswer: boolean | null = null;
  selectedKey: string | null = null;

  ngOnInit(): void {
    this.theQuiz = this.ser.getQuiz();
  }

  get quizGame() {
    return this.theQuiz[this.quizIndex];
  }
  theAnswer(el: boolean, item: string) {
    if (this.selectedKey) return;
    this.selectedKey = item;
    this.selectedAnswer = el;
    if (el) {
      console.log(el);
      this.score++;
    }

    setTimeout(() => {
      this.score;
      this.theQuiz[this.quizIndex++];
      this.answersAnimation = false;
      this.selectedKey = null;
      this.selectedAnswer = null;
      if (this.quizIndex >= this.theQuiz.length) {
        if (this.score <= 5) {
          alert('you are not a real fun,your score is not good');
          this.route.navigateByUrl('');
        }
        if (this.score >= 6 && this.score <= 10) {
          alert('you are on a good way,try more');
          this.route.navigateByUrl('');
        }
        if (this.score >= 11 && this.score <= 15) {
          alert('you are a big fun!!Your score is good');
          this.route.navigateByUrl('');
        }
      }
    }, 2000);

    setTimeout(() => {
      this.answersAnimation = true;
    }, 1500);
  }
}
