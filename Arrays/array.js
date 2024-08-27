var myeggs = ["red" , "yellow" , "pink" , "white", "blue"];
var userInput = (prompt("Enter the color of eggs !"));
var user = userInput.toLowerCase();
if(myeggs.includes(user)){
    alert("True");
}
else{
    alert("False");
}