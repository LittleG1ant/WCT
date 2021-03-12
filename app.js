/**What do I need to grab from DOM?
 * Time
 * Button that starts the time
 * Point for Evader
 * Btn from evader
 * Btn from tag
 */






// HTML Elements
var elTime, elStart_Btn, elEvader_point, elEvader_Btn, elChaser_Btn;
var box2_Background, box3_Background, box4_Background, time_Card_Bg, elStartBtn;
var chaserBtn = document.querySelector(".chaser-card");
var athletesReady = document.getElementById("athletes-ready");
var buzzer = document.getElementById("buzzer");


// Grab id from html and store it to variable
elTime = document.querySelector(".time");
elStart_Btn = document.querySelector(".time-btn");
elEvader_Btn = document.querySelector(".evader-card");
elEvader_point = document.querySelector(".point");
elChaser_Btn = document.querySelector(".btn-tag");
box2_Background = document.querySelector(".box2");
box3_Background = document.querySelector(".box3");
box4_Background = document.querySelector(".box4");
time_Card_Bg = document.querySelector(".time-card");
elStartBtn = document.querySelector(".start-time");

//Events
//Create an event for start-button
var num = 5;
var myVar;
var evader_Point = 0;


elStart_Btn.addEventListener("click", () => {
    num = 6;
    myVar = setInterval(resetTimer, 1000);
    //Change the BG back to its original color
    box2_Background.style.backgroundColor = "#4c4343";
    box3_Background.style.backgroundColor = "#4c4343";
    box4_Background.style.backgroundColor = "#4c4343";
    time_Card_Bg.style.background = "#4c4343"
    time_Card_Bg.style.boxShadow = "inset 11px 11px 16px #453d3d, inset -11px -11px 16px #534949";
    elStartBtn.style.backgroundColor = "#4c4343";
    elStartBtn.style.boxShadow = "inset 11px 11px 16px #413939, inset 11px 11px 16px #574d4d";

});

elEvader_Btn.addEventListener("click", () => {
    console.log("Hello, jorn!");
    clearInterval(myVar);
    box2_Background.style.backgroundColor = "#4c4343";
    box3_Background.style.backgroundColor = "#4c4343";
    box4_Background.style.backgroundColor = "#4c4343";
    time_Card_Bg.style.background = "#4c4343"
    time_Card_Bg.style.boxShadow = "inset 11px 11px 16px #453d3d, inset -11px -11px 16px #534949";
    elStartBtn.style.backgroundColor = "#4c4343";
    elStartBtn.style.boxShadow = "inset 11px 11px 16px #413939, inset 11px 11px 16px #574d4d";

    scoreControl()
    console.log("Hello, jorn!");

});

//Create an event to stop time
chaserBtn.addEventListener("click", () => {
    clearInterval(myVar);
    evader_Point = 0;

    var points = evader_Point.toString();
    elEvader_point.innerText = points;

    var n = num.toString();
    elTime.innerText = n;

    // Change BG Color to red after tag
    box2_Background.style.backgroundColor = "#c86a6a";
    box3_Background.style.backgroundColor = "#c86a6a";
    box4_Background.style.backgroundColor = "#c86a6a";
    time_Card_Bg.style.backgroundColor = " #c86a6a";
    time_Card_Bg.style.boxShadow = "inset 11px 11px 16px #b66060";
    time_Card_Bg.style.boxShadow = "inset 11px 11px 16px #b66060";
    elStartBtn.style.backgroundColor = "#c86a6a"
    //elStartBtn.style.boxShadow = "inset 11px 11px 16px #b66060, inset 11px 11px 16px #b66060";
    //Audio of buzzer
    buzzer.play();


});

//Create an event to reset the num
elReset.addEventListener("click", () => {
    clearInterval(myVar);//Stops the timer
    num = 0;//Reset timer to 0 and display it to page
    var n = num.toString();
    elTime.innerText = n;
    document.getElementById("team1-score").style.boxShadow = "0px 0px 15px 6px #16bdf0";


});

//Functions
function startTimer() {
    num += 1;
    var n = num.toString();
    elTime.innerText = n;
    if (n == '20') {
        clearInterval(myVar);
        //Change the color of BG to green
        box2_Background.style.backgroundColor = "#6ac882";
        box3_Background.style.backgroundColor = "#6ac882";
        box4_Background.style.backgroundColor = "#6ac882";
        time_Card_Bg.style.backgroundColor = "#6ac882";
        time_Card_Bg.style.boxShadow = "inset 11px 11px 16px #5aaa6f, inset -11px -11px 16px #7ae696";
        elStartBtn.style.backgroundColor = "#6ac882";
        elStartBtn.style.boxShadow = "inset 11px 11px 16px #5aaa6f, inset 11px 11px 16px #7ae696";
        buzzer.play();
    }
    console.log(num);
}



function scoreControl() {
    evader_Point += 1;
    var points = evader_Point.toString();
    elEvader_point.innerText = points;

    num = 5;
    //Reset timer to 0 and display it to page
    console.log(num);
    var n = num.toString();
    elTime.innerText = n;
    myVar = setInterval(resetTimer, 1000);
}
console.log(ScoreControl());


function resetTimer() {

    num--;
    //Reset timer to 0 and display it to page
    console.log(num);
    var n = num.toString();
    elTime.innerText = n;
    if (n == '0') {
        clearInterval(myVar);
        box2_Background.style.backgroundColor = "#4c4343";
        box3_Background.style.backgroundColor = "#4c4343";
        box4_Background.style.backgroundColor = "#4c4343";
        time_Card_Bg.style.background = "#4c4343"
        time_Card_Bg.style.boxShadow = "inset 11px 11px 16px #453d3d, inset -11px -11px 16px #534949";
        elStartBtn.style.backgroundColor = "#4c4343";
        elStartBtn.style.boxShadow = "inset 11px 11px 16px #413939, inset 11px 11px 16px #574d4d";
        myVar = setInterval(startTimer, 1000);
    };

    if(n == '2'){
        athletesReady.play();
    };




}



elTeam1.innerText = teams[Math.floor(Math.random() * 5) + 1].name;
elTeam2.innerText = teams[Math.floor(Math.random() * 5) + 1].name;
