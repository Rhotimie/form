var count = 0; // To count blank fields.
function validation(event) {
var	acceptance = document.getElementsByName('agreement');
var criminal = document.getElementsByName('charge');
var eligibility = document.getElementsByName('gov_egt');
var recruit = document.getElementsByName('rec_unit');
var c_status = document.getElementsByName('cstatus');
var radio_check = document.getElementsByName('gender'); // Fetching radio button by name.
var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.
var text_area = document.getElementsByTagName('textarea');
// Validating radio button.
if (radio_check[0].checked === false && radio_check[1].checked === false) {
var y = 0;
} else {
	if (c_status[0].checked === false && c_status[1].checked === false) {
var y = 0;
} else {
	if (recruit[0].checked === false && recruit[1].checked === false) {
var y = 0;
} else {
	if (criminal[0].checked === false && criminal[1].checked === false) {
var y = 0;
} else {
	if (eligibility[0].checked === false && eligibility[1].checked === false) {
var y = 0;
} else {
	if (apply[0].checked === false && apply[1].checked === false) {
var y = 0;
} else {
	if (charge[0].checked === false && charge[1].checked === false) {
var y = 0;
} else {
	if (agreement[0].checked === false && agreement[1].checked === false) {
var y = 0;
} else {
	var y = 1;
}
}
}
}
}
}
}
}

function previewFile(){
             var preview = document.querySelector('img'); //selects the query named img
             var file    = document.querySelector('input[type=file]').files[0]; //sames as here
             var reader  = new FileReader();

             reader.onloadend = function () {
             preview.src = reader.result; };
       

             if (file) {
             reader.readAsDataURL(file); //reads the data as a URL

             } else {
             preview.src = "";
             }
         }

           previewFile();

    function previewFile(){
             var preview = document.querySelector('sign'); //selects the query named img
             var file    = document.querySelector('input[type=file]').files[0]; //sames as here
             var reader  = new FileReader();

             reader.onloadend = function () {
             preview.src = reader.result; };
       

             if (file) {
             reader.readAsDataURL(file); //reads the data as a URL
             } else {
             preview.src = "";
             }
         }

           previewFile();

// if (c_status[0].checked === false && radio_check[1].checked === false) {
// var y = 0;
// } else {
// var y = 1;
// }
// For loop to count blank inputs.
for (var i = input_field.length; i > count; i--) {
if (input_field[i - 1].value === '' || text_area.value === '') {
count = count + 1;
} else {
count = 0;
}
}
if (count !== 0 || y === 0) {
alert("*All Fields are mandatory*"); // Notifying validation
event.preventDefault();
} else {
return true;
}
}
/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step1() {
document.getElementById("first").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.backgroundColor = "#fff";
// document.getElementById("active1").style.Color = "gray";
document.getElementById("active1").style.backgroundColor = "pink";
}
// Function that executes on click of first previous button.
function prev_step1() {
document.getElementById("first").style.display = "block";
document.getElementById("second").style.display = "none";
document.getElementById("active1").style.backgroundColor = "#fff";
// document.getElementById("active2").style.color = "gray";
document.getElementById("active2").style.backgroundColor = "pink";
}
// Function that executes on click of second next button.
function next_step2() {
document.getElementById("second").style.display = "none";
document.getElementById("third").style.display = "block";
document.getElementById("active3").style.backgroundColor = "#fff";
// document.getElementById("active2").style.color = "gray";
document.getElementById("active2").style.backgroundColor = "pink";
}
// Function that executes on click of second previous button.
function prev_step2() {
document.getElementById("third").style.display = "none";
document.getElementById("second").style.display = "block";
document.getElementById("active2").style.backgroundColor = "#fff";
// document.getElementById("active3").style.color = "gray";
document.getElementById("active3").style.backgroundColor = "pink";
}
// Function that executes on click of third next button.
function next_step3() {
document.getElementById("third").style.display = "none";
document.getElementById("fourth").style.display = "block";
document.getElementById("active4").style.backgroundColor = "#fff";
// document.getElementById("active3").style.color = "gray";
document.getElementById("active3").style.backgroundColor = "pink";
}
// Function that executes on click of third previous button.
function prev_step3() {
document.getElementById("fourth").style.display = "none";
document.getElementById("third").style.display = "block";
document.getElementById("active3").style.backgroundColor = "#fff";
// document.getElementById("active4").style.color = "gray";
document.getElementById("active4").style.backgroundColor = "pink";
}

function NavGuide_One() {
    document.getElementById("first").style.display="block";
    document.getElementById("second").style.display ="none";
    document.getElementById("third").style.display="none";
    document.getElementById("fourth").style.display="none";
    document.getElementById("active1").style.backgroundColor="#fff";
    document.getElementById("active2").style.backgroundColor="pink";
    document.getElementById("active3").style.backgroundColor="pink";
    document.getElementById("active4").style.backgroundColor="pink";
}

 function NavGuide_Two() {
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display ="block";
    document.getElementById("third").style.display="none";
    document.getElementById("fourth").style.display="none";
    document.getElementById("active1").style.backgroundColor="pink";
    document.getElementById("active2").style.backgroundColor="#fff";
    document.getElementById("active3").style.backgroundColor="pink";
    document.getElementById("active4").style.backgroundColor="pink";
}
function NavGuide_Three() {
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display ="none";
    document.getElementById("third").style.display="block";
    document.getElementById("fourth").style.display="none";
    document.getElementById("active1").style.backgroundColor="pink";
    document.getElementById("active2").style.backgroundColor="pink";
    document.getElementById("active3").style.backgroundColor="#fff";
    document.getElementById("active4").style.backgroundColor="pink";
}

function NavGuide_Four() {
    document.getElementById("first").style.display="none";
    document.getElementById("second").style.display ="none";
    document.getElementById("third").style.display="none";
    document.getElementById("fourth").style.display="block";
    document.getElementById("active1").style.backgroundColor="pink";
    document.getElementById("active2").style.backgroundColor="pink";
    document.getElementById("active3").style.backgroundColor="pink";
    document.getElementById("active4").style.backgroundColor="#fff";
}

