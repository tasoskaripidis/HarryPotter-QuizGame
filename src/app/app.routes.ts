import { Routes } from '@angular/router';
import { EntrancePageComponent } from '../folders/EntrancePage/entrance-page/entrance-page.component';
import { QuizPageComponent } from '../folders/QuizPage/quiz-page/quiz-page.component';

export const routes: Routes = [
  {
    path: '',
    component: EntrancePageComponent,
  },
  { path: 'quiz', component: QuizPageComponent },
];
