import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json';
@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
})
export class QuizzComponent implements OnInit {
  logoUrl: string = '../../../assets/images/logo.png';
  title: string = '';

  questions: any;
  questionSelected: any;
  playerChoice(alias: string) {
    this.answers.push(alias);
    this.nextStep();
  }
  async nextStep() {
    this.questionIndex++;
    if (this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.questions[this.questionIndex];
    } else {
      const finalAnswer: string = await this.checkResult(this.answers);
      this.finished = true;
      this.answerSelected =
        quizz_questions.results[
          finalAnswer as keyof typeof quizz_questions.results
        ];
      console.log(this.answers);
    }
  }

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = true;

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.questionSelected = this.questions[this.questionIndex];

      this.questionIndex = 0;
      this.questionMaxIndex = this.questions.length;
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((acc, cur, i, arr) => {
      if (
        arr.filter((item) => item === acc).length >
        arr.filter((item) => item === cur).length
      ) {
        return acc;
      } else {
        return cur;
      }
    });
    return result;
  }
}
