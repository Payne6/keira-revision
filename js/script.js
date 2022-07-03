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
q5.addChoice("Yes, but only science before the 20th century");
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

let q32 = new Question("According to Buddha the Middle Way is:", "Living in neither poverty nor luxury");
q32.addChoice("Giving some of your money (but not all of it) to those in need");
q32.addChoice("Lowering your consumption of meat without giving it up completely");
q32.addChoice("Not giving in to anger or despair");
re.save(q32);

let q33 = new Question("What does 'Buddha' mean?", "The one who is awake");
q33.addChoice("The holy one");
q33.addChoice("Shining lord");
q33.addChoice("The highest");
re.save(q33);

let q34 = new Question("When the Buddha reached enlightenment, he:", "Understood reality, overcame desire and knew he was free from the cycle of rebirth");
q34.addChoice("Gave up all pleasures completely and ate so little food he nearly died");
q34.addChoice("Realised that suffering existed and went out into the world to find out how to cope with it");
q34.addChoice("Studied meditation under two holy men");
re.save(q34);

let q35 = new Question("How many Buddhist precepts are there?", "Ten");
q35.addChoice("Five");
q35.addChoice("Eight");
q35.addChoice("Seven");
re.save(q35);

let q36 = new Question("When was Guru Nanak born?", "1469");
q36.addChoice("1534");
q36.addChoice("1397");
q36.addChoice("1722");
re.save(q36);

let q37 = new Question("Guru Nanak disappeared for three days when he was:", "Bathing in a river");
q37.addChoice("Walking through a forest");
q37.addChoice("Sleeping in a field");
q37.addChoice("Fetching water from a well");
re.save(q37);

let q38 = new Question("What does Sikh mean in Sanskrit?", "Disciple");
q38.addChoice("One who is awake");
q38.addChoice("Follower of God");
q38.addChoice("Holy warrior");
re.save(q38);

let q39 = new Question("Muslims and Hindus both placed flowers by Guru Nanak's body. Why?", "To decide whether he would be buried or cremated");
q39.addChoice("So that his body would remain holy after death");
q39.addChoice("Because he was loved by both Muslims and Hindus");
q39.addChoice("Because Guru Nanak taught that flowers were sacred");
re.save(q39);

let q40 = new Question("What is Guru Nanak Gurpurab?", "A celebration of Guru Nanak's birthday");
q40.addChoice("The Sikh holy book");
q40.addChoice("A sweet food served to visitors to a Gurdwara");
q40.addChoice("A Sikh harvest festival");
re.save(q40);

let q41 = new Question("What is the Guru Granth Sahib?", "The Sikh holy book");
q41.addChoice("The Sikh way of life");
q41.addChoice("Guru Nanak's birthplace");
q41.addChoice("A financial donation to a Gurdwara");
re.save(q41);

let q42 = new Question("According to Guru Nanak, everyone is equal in God's eyes", "True");
q42.addChoice("False");
re.save(q42);

let q43 = new Question("How many gurus came after Guru Nanak?", "Nine");
q43.addChoice("Ten");
q43.addChoice("Seven");
q43.addChoice("Four");

let q44 = new Question("What is the lyot?", "The divine light passed from guru to guru");
q44.addChoice("The Sikh holy book");
q44.addChoice("The celebration of guru Nanak's birthday");
q44.addChoice("The custom of separating men and women in the temple");
re.save(q44);

let q45 = new Question("After Guru Nanak, how many other gurus were there?", "Ten");
q45.addChoice("Nine");
q45.addChoice("Eleven");
q45.addChoice("Six");
re.save(q45);

let q46 = new Question("Guru Angad was the second Guru and wrote down Guru Nanak's teachings. What does he represent?", "Obedience");
q46.addChoice("Equality");
q46.addChoice("Purity");
q46.addChoice("Tranquility");
re.save(q46);

let q47 = new Question("Which guru built the holy Sikh city of Amritsar (inluding the Golden Temple)?", "Guru Ram Das");
q47.addChoice("Guru Nanak");
q47.addChoice("Guru Gobind Singh");
q47.addChoice("Guru Amar Das");
re.save(q47);

let q48 = new Question("How did Vyasa learn the Vedas?", "He was taught by Hindu gurus who lived in the forests");
q48.addChoice("He was taught them by his parents, Parashara and Satyavati");
q48.addChoice("He he found them in a field one day and took them home with him");
q48.addChoice("When he was ten God recited the Vedas to him in a dream");
re.save(q48);

let q49 = new Question("How many parts did Vyasa split the Vedas into?", "Four");
q49.addChoice("Seven");
q49.addChoice("Ten");
q49.addChoice("Twelve");
re.save(q49);

let q50 = new Question("It is believed that Vyasa wrote the Mahabharata", "True");
q50.addChoice("False");
re.save(q50);

let q51 = new Question("Guru Purnima is", "A festival celebrating Vyasa's birthday");
q51.addChoice("A festival celebrating Guru Nanak's birthday");
q51.addChoice("A festival celebrating the construction of the Golden Temple");
q51.addChoice("A festival celebrating the lives of the gurus");
re.save(q51);

let q52 = new Question("The meaning of dharma is", "Duty");
q52.addChoice("Rebirth");
q52.addChoice("Suffering");
q52.addChoice("Purity");
re.save(q52);

let q53 = new Question("Moksha is", "Unity with Brahman");
q53.addChoice("A son's duty to his family");
q53.addChoice("The Hindu god of death");
q53.addChoice("The soul");
re.save(q53);

let q54 = new Question("If God is personal then ??? is possible through ???", "A relationship, prayer");
q54.addChoice("Punishment, divine justice");
q54.addChoice("His forgiveness, love");
q54.addChoice("Happiness, faith");
re.save(q54);

let q55 = new Question("If God is impersonal, God is seen as a kind of", "Force");
q55.addChoice("Person");
q55.addChoice("Belief");
q55.addChoice("Problem");
re.save(q55);

let q56 = new Question("An immanent god is ??? and ???", "Present in the world, takes an active role in humanity");
q56.addChoice("Separate from the world, doesn't interfere in human history");
q56.addChoice("Present in the world, doesn't interfere with human history");
q56.addChoice("Separate from the world, takes an active role in humanity");
re.save(q56);

let q57 = new Question("A transcendent god is ??? and ???", "Separate from the world, doesn't interfere in human history");
q57.addChoice("Present in the world, takes an active role in humanity");
q57.addChoice("Present in the world, doesn't interfere with human history");
q57.addChoice("Separate from the world, takes an active role in humanity");
re.save(q57);

let q58 = new Question("Belief in more than one god is:", "Polytheism");
q58.addChoice("Monotheism");
re.save(q58);

let q59 = new Question("Omnipotent means:", "All-powerful");
q59.addChoice("All-knowing");
q59.addChoice("Everywhere");
re.save(q59);

let q60 = new Question("Omniscient means:", "All-knowing");
q60.addChoice("All-powerful");
q60.addChoice("Everywhere");
re.save(q60);

let q61 = new Question("Omnipresent means:", "Everywhere");
q61.addChoice("All-knowing");
q61.addChoice("All-powerful");
re.save(q61);

let q62 = new Question("For many Christians, God the father is:", "The God of the Old Testament");
q62.addChoice("The same as the Hindu god Brahman");
q62.addChoice("The God of the Quran");
q62.addChoice("Moses");
re.save(q62);

let q63 = new Question("Christians believe the Holy Spirit is:", "The presence of God in the world");
q63.addChoice("The blood of Jesus");
q63.addChoice("The voice of God");
q63.addChoice("The light passed from guru to guru");
re.save(q63);

let q64 = new Question("'Allah' is the Arabic word for", "God");
q64.addChoice("Peace");
q64.addChoice("The prophet");
q64.addChoice("Obedience");
re.save(q64);

let q65 = new Question("'Islam' means: ", "Submission or surrender to Allah");
q65.addChoice("Submission or surrender to Muhammad");
q65.addChoice("Rejection or destruction of evil");
q65.addChoice("Loyalty or devotion to faith");
re.save(q65);

let q66 = new Question("How many names are there for Allah in the Qur'an?", "99");
q66.addChoice("33");
q66.addChoice("3");
q66.addChoice("109");
re.save(q66);

let q67 = new Question("What is a surah?", "A chapter of the Qur'an");
q67.addChoice("An evil spirit");
q67.addChoice("A festival");
q67.addChoice("A name for Allah");
re.save(q67);

let q68 = new Question("What is Tawhid?", "The belief in the oneness of Allah");
q68.addChoice("A name for Allah meaning 'The Creator'");
q68.addChoice("The practice of giving money to charity");
q68.addChoice("A name for Allah meaning 'The Real Truth");
re.save(q68);

let q69 = new Question("Allah is considered to be both transcendent and immanent", "True");
q69.addChoice("False");
re.save(q69);

let q70 = new Question("How many prophets are mentioned in the Qur'an?", "25");
q70.addChoice("50");
q70.addChoice("5");
q70.addChoice("99");
re.save(q70);

let q71 = new Question("The five pillars of Islam are:", "Shahadah, Salat, Zakat, Sawm, Hajj");
q71.addChoice("Zakat, Sawm, Hajj, Tawhid, Surah");
q71.addChoice("Shahadah, Iblis, Zakat, Sawm, Hajj");
q71.addChoice("Salat, Shahadah, Hajj, Hadith, Rak'ah");
re.save(q71);

let q72 = new Question("Shahadah is", "A recited statement that Allah is the only God and Muhammed is his messenger");
q72.addChoice("Praying to Allah five times a day");
q72.addChoice("Fasting during the month of Ramadan");
q72.addChoice("A pilgrimage to Makkah");
re.save(q72);

let q73 = new Question("Salat is", "Praying to Allah five times a day");
q73.addChoice("A recited statement that Allah is the only God and Muhammed is his messenger");
q73.addChoice("Giving money to charity to help the poor");
q73.addChoice("Fasting during the month of Ramadan");
re.save(q73);

let q74 = new Question("Zakat is", "Giving money to charity to help the poor");
q74.addChoice("Praying to Allah five times a day");
q74.addChoice("A recited statement that Allah is the only God and Muhammed is his messenger");
q74.addChoice("A pilgrimage to Makkah");
re.save(q74);

let q75 = new Question("Sawm is", "Fasting during the month of Ramadan");
q75.addChoice("Praying to Allah five times a day");
q75.addChoice("A recited statement that Allah is the only God and Muhammed is his messenger");
q75.addChoice("A pilgrimage to Makkah");
re.save(q75);

let q76 = new Question("Hajj is", "A pilgrimage to Makkah");
q76.addChoice("Praying to Allah five times a day");
q76.addChoice("Fasting during the month of Ramadan");
q76.addChoice("Giving money to charity to help the poor");
re.save(q76);

let q77 = new Question("Sikhs believe in one God", "True");
q77.addChoice("False");
re.save(q77);

let q78 = new Question("Sikhs have one name for God", "False");
q78.addChoice("True");
re.save(q78);

let q79 = new Question("'Waheguru' means:", "Wonderful Lord");
q79.addChoice("True Name");
q79.addChoice("Eternal One");
q79.addChoice("The One who is awake");
re.save(q79);

let q80 = new Question("The Mool Mantar is", "A list of the most important qualities of Waheguru");
q80.addChoice("The name of the Golden Temple in Amritsar");
q80.addChoice("The Sikh holy book");
q80.addChoice("A celebration of Guru Nanak's birthday");
re.save(q80);

let q81 = new Question("Hindus believe there is one supreme God called Brahman", "True");
q81.addChoice("False");
re.save(q81);

let q82 = new Question("Brahma is", "The creator");
q82.addChoice("The preserver");
q82.addChoice("The destroyer");
re.save(q82);

let q83 = new Question("Vishnu is", "The preserver");
q83.addChoice("The creator");
q83.addChoice("The destroyer");
re.save(q83);

let q84 = new Question("Shiva is", "The destroyer");
q84.addChoice("The creator");
q84.addChoice("The preserver");
re.save(q84);

let q85 = new Question("The Trimurti is:", "The three main aspects of Brahman");
q85.addChoice("The three main aspects of Allah");
q85.addChoice("The third book of the Vedas");
q85.addChoice("The moment of creation of the universe");
re.save(q85);

let q86 = new Question("An avatar is", "An incarnation of a god");
q86.addChoice("A soul that has reached the highest stage of enlightenment");
q86.addChoice("A prayer to Brahman");
q86.addChoice("A hindu temple");
re.save(q86);

let q87 = new Question("Krishna is a ??? of ???", "Avatar, Vishnu");
q87.addChoice("Avatar, Shiva");
q87.addChoice("Member, the Trimurti");
q87.addChoice("Enemy, Brahman");
re.save(q87);

let q88 = new Question("Written after Muhammad's name, 'pbuh' means:", "Peace be upon him");
q88.addChoice("Praise be upon him");
q88.addChoice("Perfection be upon him");
re.save(q88);

let q89 = new Question("What is a verse of the Qur'an called?", "An ayah");
q89.addChoice("A Caliph");
q89.addChoice("A zakat");
q89.addChoice("A Sunnah");
re.save(q89);

let q90 = new Question("In the Sunni tradition, religious leaders are known as what?", "Imams");
q90.addChoice("Mujtahid");
re.save(q90);

let q91 = new Question("In the Shi'ah tradition, religious leaders are known as what?", "Mujtahid");
q91.addChoice("Imaams");
re.save(q91);

let q92 = new Question("The Qur'an is only considered to be in its true form in Arabic.", "True");
q92.addChoice("False");
re.save(q92);

let q93 = new Question("??? form around 85% of Muslims worldwide?", "Sunnis");
q93.addChoice("Shi'a");
re.save(q93);

let q94 = new Question("The distinction between Sunni and Shi'a arose because they disagreed about", "Who should lead Muslims after Muhammad's death");
q94.addChoice("The true nature of God");
q94.addChoice("Whether Muhammad's birthplace was Makkah or Medinah");
q94.addChoice("How often Muslims should pray each day.");
re.save(q94);

let q95 = new Question("in the Sunni tradition, how many articles of faith are there?", "Six");
q95.addChoice("Four");
q95.addChoice("Seven");
q95.addChoice("Ten");
re.save(q95);

let q96 = new Question("Shi'a tradition rests on the ??? Usul ad-Din, meaning ???", "Five, Principles of faith");
q96.addChoice("Four, Principles of faith");
q96.addChoice("Five, Articles of truth");
q96.addChoice("Four, Articles of truth");
re.save(q96);

let q97 = new Question("According to Shi'a Muslims, Muhammad identified ??? as his successor", "Ali");
q97.addChoice("Abu Bakr");
q97.addChoice("Musa");
q97.addChoice("Khadija");
re.save(q97);

let q98 = new Question("According to Shi'a Muslims, how many Imams have there been?", "Twelve");
q98.addChoice("Four");
q98.addChoice("Fifteen");
q98.addChoice("Five");
re.save(q98);

let q99 = new Question("Shi'a Muslims believe humans have free will and there is no such thing as predestination", "True");
q99.addChoice("False");
re.save(q99);

let q100 = new Question("Tawhid is the belief that:", "Allah is The One God and He alone created the Earth and sustains it");
q100.addChoice("The God of the Jews is the God of the old Testament");
q100.addChoice("That the Promised Land is in Jersualem");
q100.addChoice("That Brahman has three main aspects");
re.save(q100);





document.addEventListener("DOMContentLoaded", function() {
    // VARIABLES
    const mainBox = document.getElementById("questionContainer");
    const container = document.getElementById("questionBox");
    const nextButton = document.getElementById("nextQuestion");
    const startButton = document.getElementById("startButton");
    const progressBar = document.getElementsByClassName("progressBar")[0];
    const progressMade = document.getElementsByClassName("progressMade")[0];
    var questionIndex = 0;
    var correct = 0;
    var answered = false;
    var answeredIncorrectly = [];
    //Shuffles the questions
    var qs = shuffleQuestions(re.questions, 15);
    let quizLength = qs.length;


    //FUNCTIONS
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
                    this.innerText = "Correct";
                });
            } else {
                answerPara.classList.add("incorrectChoice");
                answerPara.addEventListener("click", function() {
                    this.classList.add("incorrectClicked");
                    this.innerText = "Sorry, that's not right";
                    for (q of re.questions) {
                        if (q.question == questionPanelQuestion.innerText) {
                            answeredIncorrectly.push(q);
                        } 
                    }
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

    function calculateProgress(answered, questions) {
        let percentAnswered = Math.floor(answered / questions * 100);
        return percentAnswered;
    }

    function printIncorrectAnswers(containerElement) {
        containerElement.classList.add("incorrectContainer");

        let heading = document.createElement("h3");
        heading.innerText = "You answered the following questions incorrectly";
        containerElement.append(heading);

        var uniqueIncorrectAnswers = new Set(answeredIncorrectly);

        for (q of uniqueIncorrectAnswers.values()) {
            let incorrectAnsPara = document.createElement("h4");
            incorrectAnsPara.innerText = q.question;
            containerElement.append(incorrectAnsPara);
            let incorrectAnsParaCorrectAns = document.createElement("p");
            incorrectAnsParaCorrectAns.innerText = "Correct answer: " + q.answer + "\n";
            containerElement.append(incorrectAnsParaCorrectAns);
        }
    }

    function shuffleQuestions(questionsArray, numToAnswer) {
        let questions = questionsArray;
        shuffleArray(questions);
        return questions.slice(0, numToAnswer);
    }


    // EVENT LISTENERS
    startButton.addEventListener("click", function() {
        clearContainer(container);
        printQ();
        progressBar.style.display = "block";
        nextButton.style.display = "block";
    });

    nextButton.addEventListener("click", function() {
        answered = false;
        questionIndex ++;
        clearContainer(container);
        if (questionIndex < qs.length) {
            printQ();
            progressMade.style.width = `${calculateProgress(questionIndex, quizLength)}%`;
        } else {
            alert("There are no more questions!\n\nRefresh the page to take the test again.");
            clearContainer(mainBox);
            printIncorrectAnswers(mainBox);
            progressMade.style.width = `${calculateProgress(questionIndex, quizLength)}%`;
        }
    });

})