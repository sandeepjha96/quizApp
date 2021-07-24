import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {
  title = 'QuizApp1';
  isQuiz1Started: boolean = false;
  isQuiz2Started: boolean =false;
  inputQuestion: number =20;
  inputOperand: number =10;
  inputQuestion2: number =20;
  inputOperand2: number =10;
  score1: number = 0;
  score2: number = 0;
  totalScore: number =0;
  totalQuestion: number =0;
  constructor() {
    
  }
ngOnInit() {
}
 quiz1Started(){
   this.isQuiz1Started= true;
 }
 quiz2Started(){
   this.isQuiz2Started= true;
 }
 scoreQuiz2(data:number){
this.score2 = data;
this.totalScore =this.score1+this.score2;
this.totalQuestion =this.inputQuestion + this.inputQuestion2;


 }
 scoreQuiz1(data:number){
   this.score1 = data;
   this.totalScore =this.score1+this.score2;
   this.totalQuestion =this.inputQuestion+this.inputQuestion2;

     }

}