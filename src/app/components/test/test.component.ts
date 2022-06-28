import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //Declarmos los atributos del componente.
  public question: string;
  public answers: any[]; //Declaramos un array pero sin indicar el tipo concreto de datos que almacenará
  public answerCorrect:boolean;
  public answerChoosed:boolean;

  constructor() { 
    this.question = '¿Cuál es la capital de España?';
    this.answers = [
      {
        'answer':'Zaragoza',
        'correct':false
      },
      {
        'answer':'Madrid',
        'correct': true
      },
      {
        'answer':'Barcelona',
        'correct': false
      },
      {
        'answer':'León',
        'correct': false
      }
    ];
    this.answerCorrect = false;
    this.answerChoosed = false;
  }

  /*
  Cargará todo antes de entrar y ejecutar lo que se encuentra dentro del ngOnInit
  */
  ngOnInit() {
  }

  checkAnswerIndex(index){
    this.answerCorrect = this.answers[index].correct;
    this.answerChoosed = true;
  }

  /*Comprobamos que el cuestionario es viable y que tiene solución*/
  checkAnswersQuestion(){

    if(!this.question){
      return false;
    }

    if(!this.answers && Array.isArray(this.answers)){
      return false;
    }else{
      if (!(this.answers.length >= 2 && this.answers.length <= 4)) {
        return false;
      }
      const correctAnswers = this.answers.filter(answer => answer.correct);

      if (correctAnswers.length !== 1) {
        return false
      }
    }
    return true;
  }
  
}
