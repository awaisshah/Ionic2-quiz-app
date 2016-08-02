// import {Component} from "@angular/core";
// import {NavController} from 'ionic-angular';

// import {AddQuizQuestion} from '../addquizquestion/addQuizQuestion';
// @Component({
//   templateUrl: 'build/pages/addquiz/addquiz.html'
//   //providers: [QuizDetailService]
// })

// export class AddQuiz {
//   quizName: string;
//   noOfQuizQuestions: number;
//   constructor(private nav: NavController) {

//   }

//   myQuiz() {
//    // this.quizService.setQuizNames(this.quizName);

//     this.nav.push(AddQuizQuestion, {
//       quizName: this.quizName,
//       quizQuestion: this.noOfQuizQuestions
//     })
//   }
// }

import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {QuizDetailService} from '../../services/quizDetailService';
import {Dashboard} from '../dashboard/dashboard';
import {SignUp} from '../signup/signup';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    templateUrl: 'build/pages/addquiz/addquiz.html'
})

export class AddQuiz {
    
    quizName: string;
    noOfQuizQuestions: number;
    quizQuestion: string;
    options: any[] = [];
    optionsType: string;                                    //options array of each questions
    completeQuizQuestion = { quizName: this.quizName, question: this.quizQuestion, options: this.options, questionType: this.optionsType, rightAnswer: this.rightAnswer };                            //complete QuizQuestion object with question and options 
    optionNumber: number = 1;
    tabs: string = "Quiz Name"
    rightAnswer: string;
    
    quiz: FirebaseListObservable<any>;

    constructor(private nav: NavController, private quizDetailService: QuizDetailService, af: AngularFire) {
        this.options.push({
            option: null
        });
        this.quiz = af.database.list('/quiz');
    }

    addQuizQuestions() {
        this.options.push({
            option: null
        });
        this.optionNumber++;
    }

    submitQuizQuestion() {
        this.completeQuizQuestion = { quizName: this.quizName, question: this.quizQuestion, options: this.options, questionType: this.optionsType, rightAnswer: this.rightAnswer };
        this.quizDetailService.setQuizDetail(this.completeQuizQuestion);    //DataBase
        this.nav.push(Dashboard);
    }

    signUpPage() {
        this.nav.push(SignUp);
    }

}


// this.temp = this.quizDetailService.getQuizNames().then((dat) => {
//             console.log(dat);

//         });