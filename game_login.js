var player1=localStorage.getItem("player1_name");
var player2=localStorage.getItem("player2_name");
document.getElementById("player1name").innerHTML=player1;
document.getElementById("player2name").innerHTML=player2;
var player1score = 0;
var player2score = 0;
document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;
document.getElementById("playerquestion").innerHTML="question turn =" +player1;
document.getElementById("playeranswer").innerHTML="answer turn =" +player2;
actual_answer = 0;
function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1)* parseInt(number2);
    
    question_number = "<h4>" + number1 + " X "+ number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class 'btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";


}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "player1"){
            player1score = player1score +1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else{
            player2score = player2score +1;
            document.getElementById("player2score").innerHTML = player2score;
        }
            
    }


        if(question_turn == "player1"){
            question_turn = "player2"
            document.getElementById("playerquestion").innerHTML = "Question Turn - " + player2;
        }
        else{
            question_turn = "player1"
            document.getElementById("playerquestion").innerHTML = "Question Turn - " + player1;
       }

       if(answer_turn == "player1"){
            answer_turn = "player2"
            document.getElementById("playeranswer").innerHTML = "answer Turn - " + player2;
        }
        else{
            answer_turn = "player1"
            document.getElementById("playeranswer").innerHTML = "answer Turn - " + player1;
       }
document.getElementById("output").innerHTML = "";
    
}
