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
re.save(q13);

let q14 = new Question("What is a numinous experience?", "An experience inspiring awe and wonder that makes you feel God's presence");
q14.addChoice("A frightening encounter with the devil or the forces of evil");
q14.addChoice("Speaking directly to God or an angel");
q14.addChoice("An experience that makes you question your faith in God");
re.save(q14);

let q15 = new Question("What can be messages from God or a feeling that God is present?", "Revelation");
q15.addChoice("Prophecy");
q15.addChoice("Possession");
q15.addChoice("Conversion");
re.save(q15);

let q16 = new Question("Visions, prophesying, speaking in tongues and dreams are possible examples of:", "Messages from God");
q16.addChoice("Mental illness");
q16.addChoice("Drug use");
re.save(q16);

let q17 = new Question("Which of these is NOT considered a miracle?", "The Bible");
q17.addChoice("The Quran");
q17.addChoice("The fall of the walls of Jericho");
q17.addChoice("Jesus walking on water");
re.save(q17);

let q18 = new Question("Jesus was born in a stable where?", "Bethlehem");
q18.addChoice("Jerusalem");
q18.addChoice("Mecca");
q18.addChoice("Egypt");
re.save(q18);

let q19 = new Question("Jesus appears in the Quran", "True");
q19.addChoice("False");
re.save(q19);

let q20 = new Question("Who was born first?", "Moses");
q20.addChoice("Jesus");
q20.addChoice("Mohammed");
q20.addChoice("The Buddha");
re.save(q20);

let q21 = new Question("Moses leading the Jews out of Egypt is known as the:", "Exodus");
q21.addChoice("Odyssey");
q21.addChoice("Covenant");
q21.addChoice("Passover");
re.save(q21);

let q22 = new Question("Where was Muhammed born?", "Mecca");
q22.addChoice("Jersualem");
q22.addChoice("Medinah");
q22.addChoice("Bethlehem");
re.save(q22);

let q23 = new Question("Muslims do what during Ramadan:", "Fast");
q23.addChoice("Dance");
q23.addChoice("Pray ten times a day");
q23.addChoice("Travel to Mecca");
re.save(q23);

let q24 = new Question("Muslims believe Muhammed was the last messenger of God", "True");
q24.addChoice("False");
re.save(q24);

let q25 = new Question("Jerusalem is the capital of which modern-day country?", "Israel");
q25.addChoice("Egypt");
q25.addChoice("Lebanon");
q25.addChoice("Saudi Arabia");
re.save(q25);

let q26 = new Question("What is the second most important text for Muslims?", "The Hadith");
q26.addChoice("The Tahwid");
q26.addChoice("The Sunnah");
q26.addChoice("The Torah");
re.save(q26);

let q27 = new Question("What is the Sunnah?", "The way of life set out by Muhammed");
q27.addChoice("The first mosque ever built");
q27.addChoice("The Muslim practice of giving money to charity");
q27.addChoice("The second most important text in Islam");
re.save(q27);

let q28 = new Question("Siddhartha Gautama is best known as:", "the Buddha");
q28.addChoice("Guru Nanak");
q28.addChoice("Guru Purnima");
q28.addChoice("Vyasa");
re.save(q28);

let q29 = new Question("The Buddha's father was a powerful king", "True");
q29.addChoice("False");

let q30 = new Question("Before he was born, the Buddha's mother dreamed a white elephant entered her side", "True");
q30.addChoice("False");

let q31 = new Question("Aged 29 the Buddha saw an old man, a sick man, a corpse and a poor monk and realised:", "That suffering exists");
q31.addChoice("That poverty exists")
q31.addChoice("That sickness exists");
q31.addChoice("That evil exists");
re.save(q31);




document.addEventListener("DOMContentLoaded", function() {
    //Shuffles the questions and resets the question index
    const container = document.getElementById("questionBox");
    const nextButton = document.getElementById("nextQuestion");
    const startButton = document.getElementById("startButton");
    var questionIndex = 0;
    let qs = re.questions;
    shuffleArray(qs);

    function printQ() {
        //Displays questions and answers
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
            questionPanel.append(answerPara);
        }
        container.append(questionPanel);
    }

    function clearContainer(item) {
        if (item.hasChildNodes) {
            let itemChildren = item.children;
            for (c of itemChildren) {
                item.removeChild(c);
            }
        }
    }


    startButton.addEventListener("click", function() {
        clearContainer(container);
        printQ();
        nextButton.style.display = "block";
    })

    nextButton.addEventListener("click", function() {
        questionIndex ++;
        clearContainer(container);
        if (questionIndex < qs.length) {
            printQ();
        } else {
            alert("There are no more questions!\n\nRefresh the page to take the test again.");
        }
    });

})