// Question and answer stored to show the data in the dyanimic way 
const quizData = [
    {
        Question: "Which is the largest state in India by area?",
        Option: ["Maharashtra", "Uttar Pradesh ", "Rajasthan", "Madhya Pradesh"],
        correct: 2,
    },
    {
        Question: "Who is known as the Missile Man of India?",
        Option: ["Homi J. Bhabha", "A. P. J. Abdul Kalam", "Vikram Sarabhai", "Satish Dhawan "],
        correct: 1,
    },
    {
        Question: "Which Indian city is called the Pink City?",
        Option: ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
        correct: 1,
    },
    {
        Question: "What is the capital of India?",
        Option: ["Hydrabad", "New Delhi ", "Kolkata", "Indore"],
        correct: 1,
    },
    {
        Question: "Who was the first Prime Minister of independent India",
        Option: ["Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose"],
        correct: 2,
    },
    {
        Question: "Where is the Indian Space Research Organisation (ISRO) headquartered",
        Option: ["Hyderabad", "Bengaluru", "Chennai", "New Delhi"],
        correct: 1,
    },
    {
        Question: "Which is the longest river in India",
        Option: ["Ganga", "Brahmaputra", "Yamuna", "Godavari"],
        correct: 0,
    },
    {
        Question: "In which year did India gain independence from British rule",
        Option: ["1945", "1946", "1947", "1948"],
        correct: 2,
    },


];

let answerElm = document.querySelectorAll(".answer");
let questionElm = document.querySelector("#question");
let mainElm = document.querySelector("#main");
let options = document.querySelectorAll(".options");
let submitBtn = document.querySelector("#submit")
let prevBtn = document.querySelector("#prev");
let qesCount = document.querySelector("#qesCount")

// initializtion the vlaue of the currQuestio(index of dataQuiz) for manipulating the data and score also 
let currQestion = 0;
let score = 0;

//  loadQuiz fx  is the mainpulate data in html  
let loadQuiz = () => {
    questionElm.innerText = `${currQestion + 1}.${quizData[currQestion].Question}`;
    let option = quizData[currQestion].Option;
    option.forEach((ele, idx) => (
        options[idx].innerText = ele
    ));

}
loadQuiz();



// to get the index of the checked option for the score incresement 
let getIndexchecked = () => {
    let ans_idx;
    answerElm.forEach((currele, idx) => {
        if (currele.checked) {
            ans_idx = idx
        }
    })
    return ans_idx;
}

//  to unchecked the default checked option 
let changecheck = () => {
    answerElm.forEach(currele => currele.checked = false)
}

// to display the next question  data and increase the score of the game and
submitBtn.addEventListener("click", () => {
    let ansindex = getIndexchecked();
    let corretOption = quizData[currQestion].correct;
    console.log(corretOption)

    if (corretOption == ansindex) {
        score = score + 1;
    }
    currQestion++;
    qesCount.innerText = `Question ${currQestion + 1} of ${quizData.length}`
    if (currQestion < quizData.length) {
        changecheck()
        loadQuiz();
    }
    else {
        mainElm.innerHTML = `
        <div class="text-center">
        <h2 class="text-3xl"> Your Score: ${score}/${quizData.length} Correct Answer</h2>
        <button class="px-10 py-2 bg-teal-600 rounded-2xl mt-8 text-white" onclick="location.reload()">play Again </button>
        </div>
        `
    }
})

qesCount.innerText = `Question ${currQestion + 1} of ${quizData.length}`
