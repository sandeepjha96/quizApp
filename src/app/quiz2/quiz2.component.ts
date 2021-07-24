import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quiz } from '../quiz/Interfaces/quiz';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.css']
})
export class Quiz2Component implements OnInit {
  operator1: number =1;
  operator2: number =1;
  operand:any ;
  operandText: string ='';
  operandArray: string[] =[];
  currentQuestion: number =1;
   quiz1Completed: boolean = false;
   quizDetail: Quiz[]=[];
   quizOperand:any;
   inputValue: string = '';
   disableNext: boolean =false;
   disableSubmit: boolean =true;
   disableReset: boolean = true;
   score1: number = 0;
   time: number =0;
   timeID: any;
   inputQuestions: number =20;
   inputOperands: number =10;
   @Input('inputQuestion') inputQuestion: number  = 20;
   @Input('inputOperand') inputOperand: number  = 10;
   @Output() sc1 = new EventEmitter<number>();

 
   constructor() { }
 
   ngOnInit(): void {
     this.inputQuestions = this.inputQuestion;
     this.inputOperands = this.inputOperand;
     this.operandArray =['*','+','-','/'];
     this.generateQuestions();
   }
   generateQuestions(): void {
  this.operator1 = Math.floor(Math.random() * (this.inputOperand)) + 1;
  this.operator2 = Math.floor(Math.random() * (this.inputOperand)) + 1;
  let ind =Math.floor(Math.random() * (3 - 0 + 1)) + 0;;
  this.operand = this.operandArray[ind];
 this.findQuestionOperand(this.operand);
 this.timeID = setInterval(() => {
   this.time++;
   if(this.time===20){
     this.nextClicked(this.inputValue);
 this.time = 0;
   }
 }, 1000);
   
 }
 clearIntervals() {
 clearInterval(this.timeID);
 this.time =0;
 }
 findQuestionOperand(c:string) {
 
   switch(c){
     case '+': 
     this.operandText ='Add';
     break;
     case '-': 
     this.operandText ='Subtract';
     break;
     case '*': 
     this.operandText ='Multiply';
     break;
     case '/': 
     this.operandText ='Divide';
     break;
     default:
       this.operandText ='';
 
       break;
 
   }
 }
 nextClicked(value?: any) {
   this.clearIntervals();
   if(this.currentQuestion===this.inputQuestion-1){
     this.disableNext =true;
     this.disableSubmit =false;
   }
   let userans=1;
   if(this.operand==='*'){
     userans = this.operator1*this.operator2;
   } 
   if(this.operand==='+'){
     userans = this.operator1+this.operator2;
   } 
   if(this.operand==='-'){
     userans = this.operator1-this.operator2;
   } 
   if(this.operand==='/'){
     userans = this.operator1/this.operator2;
   } 
   let cans = false; ;
 
   if(value==userans){
 cans =true;
 this.score1++;
   }
 this.quizDetail.push({
   question: 'Find'+' '+ this.operandText+' '+ 'of'+' '+this.operator1+' and '+this.operator2,
   userAnswer: userans,
   systemAnswer: value,
   isCorrect: cans,
   questionNumber:   this.currentQuestion 
 });
 if(this.currentQuestion<this.inputQuestion){
   this.currentQuestion ++;
 
 
 this.generateQuestions();
 this.inputValue = '';
 
 }
 else {
   this.clearIntervals();
 
   this.setTableData();
   this.disableSubmit =true;
 this.disableReset =false;
 }
 this.time = 0;
 }
 setTableData() {
 this.quiz1Completed =true;
 this.sc1.emit(this.score1);

 }
  reset() {
    this.currentQuestion = 1;
    this.quizDetail =[];
    this.disableReset =true;
    this.disableSubmit = true;
    this.disableNext = false;
 this.quiz1Completed =false;
 this.score1=0;
 this.generateQuestions();
  }
 }