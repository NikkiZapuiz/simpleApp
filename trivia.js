const questionAndAnswer = [
    {
        question: 'What is the result of the following expression: 10 + "5"?',
        answer: '105',
    },
    {
        question: 'How do you declare a variable in JavaScript ES6?',
        answer:  'let and const',
    },
    {
        question: 'How do you select an element with the class name "example" in CSS?',
        answer: '.example'
    },
    {
        question: ' What is the attribute used to provide alternative text for an image in HTML?',
        answer: 'alt'
    },
    {
        question: ' With, Arr [2, 15, 18, 20, 35]. What index is 20?',
        answer: '3'
    },

];



const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

const showQuestion = () => {

        if (currentQuestionIndex < questionAndAnswer.length) {
            questionElement.textContent = questionAndAnswer[currentQuestionIndex].question;
            questionElement.style.fontWeight = 'bold';
            questionElement.style.fontSize = 'large';

        } else {
            questionElement.textContent = "Congratulations!";
        }

        
        answerElement.value = "";

};
 //initial call to start 
showQuestion();
    //button onclick function
const submitAnswer = () => {
    const userAnswer = answerElement.value
    const correctAnswer = questionAndAnswer[currentQuestionIndex].answer

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
        score++;
        resultElement.style.color = 'green';
        scoreElement.style.color = 'green';
    } else {
        resultElement.textContent = "Wrong!";
        resultElement.style.color = 'Red';
        scoreElement.style.color = 'gray';
    }
        
    currentQuestionIndex++;
    scoreElement.textContent = `Score: ${score}`;
    showQuestion();
};


