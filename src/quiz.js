class Quiz {

    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining = timeRemaining;
        this.correctAnswers =0;
        this.currentQuestionIndex=0;
        console.log(this.questions)
    }

    getQuestion(){
        return  this.questions[this.currentQuestionIndex];
    }

    moveToNextQuestion(){
        this.currentQuestionIndex++;
    }

    shuffleQuestions(){
        for (let i = this.questions.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = this.questions[i];
            this.questions[i] = this.questions[j];
            this.questions[j] = temp;
        }
    }

    checkAnswer(answer){
        if (this.answer === this.questions.answer){
            this.correctAnswers++
        }
    }

    hasEnded(){
        if (this.currentQuestionIndex >= this.questions.length){
            return true;
        }
        else{
            return false;
        }  
    }

    filterQuestionsByDifficulty(difficulty){
        let preguntasArr=[]
        if(typeof difficulty==="number" && (difficulty<4&&difficulty>0)){
           let preguntasArr=this.questions.filter((cadaPregunta)=>{   
            console.log(cadaPregunta.difficulty+" test: "+difficulty)         
                if(cadaPregunta.difficulty>difficulty){
                    return -1
                }else if(cadaPregunta.difficulty<difficulty){
                    return 1
                }else{
                    return 0
                }
            })
        }            
       return preguntasArr
    }

//PROBANDO//
//PROBANDO 3
    // 2. getQuestion()
    
    // 3. moveToNextQuestion()

    // 4. shuffleQuestions()

    // 5. checkAnswer(answer)

    // 6. hasEnded()
}