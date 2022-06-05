//Create question set
class QuestionSet {
    constructor() {
        this.questions = [];
    }
    
    save(question) {
        this.questions.push(question);
    }

    printQuestions(num) {
        let randomisedQuestions = this.questions;
        shuffleArray(randomisedQuestions);
        for (var i = 0; i < num; i++) {
            randomisedQuestions[i].print();
        }
    }
}


//Create question class
class Question {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.choices = [this.answer];
    }

    addChoice(choice) {
        if (this.choices.length < 5) {
            this.choices.push(choice);
        } else {
            console.log("You can't add any more choices!");
        }
    }

    print() {
        console.log(this.question);
        var possibleAnswers = this.choices;
        shuffleArray(possibleAnswers);
        for (var i = 1; i < 5; i++) {
            console.log(`${i}: ${possibleAnswers[i - 1]}`);
        }
        console.log("\n");
    }
}

//shuffle array (helper function)
const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

//create question set and add questions to question set
let re = new QuestionSet();

let q1 = new Question("A theist:", "Believes in God");
q1.addChoice("Doesn't believe in God");
q1.addChoice("Doesn't know whether God exists or not");
q1.addChoice("Thinks God is everywhere");
re.save(q1);

let q2 = new Question("What are the five different types of truth?", "Aesthetic, historical, religious, scientific, moral");
q2.addChoice("Aesthetic, historical, ethical, scientific, technological");
q2.addChoice("Philosophical, moral, religious, scientific, aesthetic");
q2.addChoice("Historical, aethetic, moral, spiritual, scientific");
re.save(q2);

let q3 = new Question("What order does the bible say things were created in?", "Heavens, Earth, sea, atmosphere, land, plants, animals, people");
q3.addChoice("Earth, heavens, atmosphere, people, plants, animals, land, sea");
q3.addChoice("Earth, sea, land, people, animals, plants, atmosphere, heavens");
q3.addChoice("Heavens, Earth, sea, land, people, plants, animals, atmosphere");
re.save(q3);

let q4 = new Question("Many Orthodox Jews:", "Acccept theistic evolution");
q4.addChoice("Don't believe in evolution");
q4.addChoice("Don't believe that God created the world");
q4.addChoice("Don't believe creationism and evolution are compatible");
re.save(q4);

let q5 = new Question("Is science compatible with descriptions of creation found in the Quran?", "Many Muslims think so");
q5.addChoice("No, all Muslims believe science and the Quran are incompatible");
q5.addChoice("There are no descriptions of creation in the Quran");
q5.addChoice("yes, but only science before the 20th century");
re.save(q5);

let q6 = new Question("Which two theories are used to support the Design Argument?", "The thumb theory and the watchmaker theory");
q6.addChoice("The watchmaker theory and the revelation theory");
q6.addChoice("The big bang theory and the watchmaker theory");
q6.addChoice("The thumb theory and the principle of cause and effect");
re.save(q6);

let q7 = new Question("Which religion doesn't believe God created the universe?", "Buddhism");
q7.addChoice("Hinduism");
q7.addChoice("Judaism");
q7.addChoice("Sikhism");
re.save(q7);

let q8 = new Question("The Cosmological Argument says:", "There must have been a First Cause");
q8.addChoice("The universe is too complex to be an accident");
q8.addChoice("Life on Earth is the result of evolution");
q8.addChoice("We were created to have a relationship with God");
re.save(q8);

let q9 = new Question("When did the Roman Catholic Church accept the Big Bang theory?", "1996");
q9.addChoice("1953");
q9.addChoice("2012");
q9.addChoice("1971");
re.save(q9);

let q10 = new Question("When did Charles Darwin publish 'On the Origin of Species'?", "1859");
q10.addChoice("1798");
q10.addChoice("1921");
q10.addChoice("1900");
re.save(q10);

let q11 = new Question("It is possible to believe in God AND the theory of evolution", "True");
q11.addChoice("False");
re.save(q11);

let q12 = new Question("'Stewardship' is the theory that:", "God created us to look after the rest of his creation");
q12.addChoice("God created us so we could have a relationship with Him");
q12.addChoice("God continually watches over our actions");
q12.addChoice("What happens to us after death depends on how we lived");
re.save(q12);

let q13 = new Question("Science explains how we got here but not why we're here", "True");
q13.addChoice("False");

let q14 = new Question("What is a numinous experience?", "An experience inspiring awe and wonder that makes you feel God's presence");
q14.addChoice("A frightening encounter with the devil or the forces of evil");
q14.addChoice("Speaking directly to God or an angel");
q14.addChoice("An experience that makes you question your faith in God");



re.printQuestions(3);



document.addEventListener("DOMContentLoaded", function() {
    //Shuffles the questions and resets the question index
    let qs = re.questions;
    shuffleArray(qs);
    var questionIndex = -1;

    const button = document.getElementById("nextQuestion");

    button.addEventListener("click", function() {
        //updates the question index
        questionIndex ++;

        //Selects the container for the questions and answers
        //If the container is not empty, it empties it 
        let container = document.getElementById("questionBox");
        if (container.hasChildNodes) {
            let containerChildren = container.children;
            for (c of containerChildren) {
                container.removeChild(c);
            }
        }
        
        //checks user isn't at the end of the quiz
        //If user is still mid-quiz, creates new question and answers
        if (questionIndex < qs.length) {
            var newQuestion = qs[questionIndex];
            let questionPanel = document.createElement("div");

            let questionPanelQuestion = document.createElement("h3");
            questionPanelQuestion.innerText = newQuestion.question;
            questionPanel.append(questionPanelQuestion);

            let answers = newQuestion.choices;
            shuffleArray(answers);

            for (var i = 0; i < answers.length; i++) {
                let ans = answers[i];
                let answerPara = document.createElement("p");
                if (ans == newQuestion.answer) {
                    answerPara.classList.add("correctChoice");
                    answerPara.addEventListener("click", function() {
                        this.classList.add("correctClicked");
                    });
                } else {
                    answerPara.classList.add("incorrectChoice");
                    answerPara.addEventListener("click", function() {
                        this.classList.add("incorrectClicked");
                    });
                }
                answerPara.innerText = ans;
                /*if (ans == newQuestion.answer) {
                    answerPara.addEventListener("click", function() {
                        alert("Correct!");
                    });
                } else {
                    answerPara.addEventListener("click", function() {
                        alert("That's not the right answer!");
                    });
                }*/
                questionPanel.append(answerPara);
            }

            container.append(questionPanel);

        } else {
            alert("There are no more questions!\n\nRefresh the page to take the test again.");
        }
    })
})