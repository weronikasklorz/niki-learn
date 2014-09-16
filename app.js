(function () {

    var task = [
        {
            id: 0,
            question: 'Match colors:',
            answers: [
                {number: 1, adres: 'red.jpg', correctAnswer: 'red'},
                {number: 2, adres: 'blue.jpg', correctAnswer: 'blue'},
                {number: 3, adres: 'green.jpg', correctAnswer: 'green'}
            ]
        },
        {
            id: 1,
            question: 'True or false?',
            answers: [
                {number: 1, text: 'Ada is ugly boy?', correctAnswer: 'no'},
                {number: 2, text: 'Ada is pretty girl?', correctAnswer: 'no'},
                {number: 3, text: 'Ada is sexy boy?', correctAnswer: 'yes'}
            ]
        },
        {
            odpowiedzi:[
                 {text: 'yes', isHighlighted:false},
                 {text: 'no',  isHighlighted:false}
                ]
}

    ]

    var pytania = [

        { pyt: 'dlaczego jesteś debilem?'},
        { pyt: 'dlaczego nie?' },
        { pyt: 'o co kaman?' }

    ]

    var app = angular.module('NikiLearn', []);

    app.controller('NikiLearnController', function () {
        this.task = task;
        this.pytania = pytania;
        this.nr = 0;
        this.changeNr = function(nr){
            this.resetHighlighting();

            if(nr<=1){
                this.nr++;
            }
            else {
                this.koniec='koniec';
            }
        }
        this.x=0;
        this.change = function (){
            this.x='bbb';
        }
        this.check1 = function(a,b){
            if(b==a){
                this.x++;
            }
        }
        //this.isHighlighted = false;

        this.chooseAnswer = function (odp) {
            this.choosenWord=odp.text;
            this.setHighlighting(odp);
        }

        this.setHighlighting = function (odp) {
            this.resetHighlighting();
            odp.isHighlighted = true;
        }

        this.resetHighlighting = function () {
            task[2].odpowiedzi[0].isHighlighted = false;
            task[2].odpowiedzi[1].isHighlighted = false;
            }






        this.visible = false;
        this.ok1 = false;
        this.notok1 = false;
        this.ok2 = false;
        this.notok2 = false;
        this.ok3 = false;
        this.notok3 = false;
        this.answerColor = {'background': 'white'};
        this.correct = {'background': 'greenyellow', 'border':'none', 'color': 'white'};
        this.incorrect = {'background': 'orangered', 'border':'none', 'color': 'white'};
        this.check = function (id, ans1, ans2, ans3) {
            this.score = 0;
            this.visible = true;
            if (ans1 == this.task[id].answers[0].correctAnswer) {
                this.score++;
                this.answerColor1 = this.correct;
                this.ok1 = true;
            }
            else {
                this.answerColor1 = this.incorrect;
                this.notok1 = true;
            }
            if (ans2 == this.task[id].answers[1].correctAnswer) {
                this.score++;
                this.answerColor2 = this.correct;
                this.ok2 = true;
            }
            else {
                this.answerColor2 = this.incorrect;
                this.notok2 = true;
            }
            if (ans3 == this.task[id].answers[2].correctAnswer) {
                this.score++;
                this.answerColor3 = this.correct;
                this.ok3 = true;
            }
            else {
                this.answerColor3 = this.incorrect;
                this.notok3 = true;
            }
            return score;
        }

    });

})();

