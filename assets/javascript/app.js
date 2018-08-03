// <!-- If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question  do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page). -->
$(document).ready (()=> {
var questions = [
    {
        text: 'Where you from?', 
        choices: ['New York', 'New Jersey', 'Alabama',  'Mississippi'],
        answerIndex: 3
    },
    {
        text: 'Where you at?', 
        choices: ['New York', 'New Jersey', 'Alabama',  'Mississippi'],
        answerIndex: 2
    },
    {
        text: 'Where you going?', 
        choices: ['New York', 'New Jersey', 'Alabama',  'Mississippi'],
        answerIndex: 0
    }
]
var correctTotal = 0;
var incorrectTotal = 0;
var currentQuestion =0;

showQuestion()


function startTimer(){

}
function showQuestion(){
    var question = questions[currentQuestion]
    $('#question-text').text(question.text)
    //use a for loop to loop to choices through this question.
    //for each choice make one of these a : then new line
//     <div>
//     <input type="radio" id="huey" name="drone" checked />
//     <label for="huey">Huey</label>
// </div>
}
});