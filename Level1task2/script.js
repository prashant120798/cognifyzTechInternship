// a basic button that changes its color when clicked using JavaScript.

const btn =document.querySelector('.btn');

 btn.addEventListener('click',()=>{
    btn.style.backgroundColor='#ffac09';
    btn.style.boxShadow='0 0 40px #ffac09';
 });

 document.getElementById("colorChangeButton").addEventListener("click",function(){
    changeContentBackgroundColor();
 });

 function changeContentBackgroundColor() {
    var content=document.querySelector('.content');
    var randomColor="#" + ((1<<24)*Math.random() | 0).toString(16);
    content.style.backgroundColor=randomColor
 }

//an alert box that displays a greeting message based on the current time using JavaScript
 const greetings=["Good Morning","Good Afternoon","Good Evening"];
 const currentHour=new Date().getHours();


 let index=currentHour >=12 && currentHour <17 ? 1 :currentHour >=17 ? 2:0;

 alert(greetings[index]);




//a basic calculator that adds two numbers together and displays the result using JavaScript.

function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").textContent = "Result: " + sum;
}




 