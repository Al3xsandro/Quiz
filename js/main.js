/* Start quiz */
function login() {
    /* Courrent Page */
    const name = document.getElementById("name").value;
    document.getElementById("container").innerHTML=`<h3 class="p-3">Hi ${name}, resolve this question..</h3>`;
    request()
}

/*Getting data of api for start quiz */
function request() {
    fetch('https://opentdb.com/api.php?amount=1&category=15&difficulty=easy&type=boolean')
        .then((response) => response.json())
        .then((data) => {
        const questions = data.results;

        const questionDescription = questions[0].question;
        const correctAnswer = questions[0].correct_answer;
        const otherAnswers = questions[0].incorrect_answers;
    
        const answers = [
            `<button onclick="correct()">${correctAnswer}</button>`,
            ...otherAnswers.map(answer => `<button onclick="incorrect()">${answer}</button>`)
        ].join();

        // Template string
        document.getElementById('quiz').innerHTML = `
        <p class="description">${questionDescription}</p>
        <div>
            ${answers}
        </div>`;
        })
    }   
/* Switch click in correct answer */
function correct() {
    localStorage;
    const hits = localStorage.getItem('hits') || '0';
    localStorage.setItem('hits', Number(hits)+1);

    if (hits <= 8){
        /* Show messege on click in correct option */
        document.getElementById('container').innerHTML = `<p style="padding: 8px; text-align: center;">Congrulations, resolve this next question.</p>`
        document.getElementById('quiz').innerHTML = `<button onclick='request()'>Next</button>`
    } else {
        document.getElementById('quiz').innerHTML = `<p style="text-align: center;">Congrulations, you're right all questions!`;
        localStorage.setItem('hits', '0');
    }
    
}
/* Switch click in incorrect answer */
function incorrect() {
    return document.getElementById('quiz').innerHTML = `<a href="index.html" class="description">Ops, try again.</a>`;
} 

/*User menu*/
function menu() {
    $(".container").html();
    $(".container").html(`<p class="p-3">Site developer for github ideas</p>`);
}
