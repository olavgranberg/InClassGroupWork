// Variable that pretends the user has been giving a specifik ID
let userId = Math.floor(Math.random() * 4) + 1;


// If sentence that defines the users specific group role with a header and a paragraph
let roleDivH3 = document.getElementById("roleDivHeader");
let roleDivP = document.getElementById("roleDivDescription");
if (userId===1){
  roleDivH3.innerHTML = "References responsible";
  roleDivP.innerHTML = "The job is to ensure that the needed litteratur, references and quotes are added to the project. Making the answers trustworthy and reliable.";
} else if (userId===2){
  roleDivH3.innerHTML = "Analyst";
  roleDivP.innerHTML = "The analysts roles is to note findings and subjects for further discussion during the collaborative open discussions. Furthermore the analysts perspective must be critic and nuanced.";
}else if (userId===3){
  roleDivH3.innerHTML = "Secretary";
  roleDivP.innerHTML = "A secretary is responsible for taking notes of relevant points from the discussion and writing down the answers for the questions. The note-take can only answer the available alphabetic/numeric bullet points referring to the lectors questions.";
}else{
  roleDivH3.innerHTML = "Presenter";
  roleDivP.innerHTML = "A presenters role is to present the groups collaborative outcome/result. He can edit the “presenters textfield” but only add short sentences according to bullet points format";
}



// Variable that defines how many questions/tasks they're answering with a specifik ID


let tasksCount;


// Function with if/else sentence that shows the amount of tasks in taskdiv and answerdiv
function taskCountFunction(tasksCount) {
if (tasksCount===undefined){
  document.getElementById("taskABullet").remove();
  document.getElementById("taskAConteneditable").remove();
  document.getElementById("taskABulletAnswer").remove();
  document.getElementById("taskAConteneditableAnswer").remove();

  document.getElementById("taskBBullet").remove();
  document.getElementById("taskBConteneditable").remove();
  document.getElementById("taskBBulletAnswer").remove();
  document.getElementById("taskBConteneditableAnswer").remove();

  document.getElementById("taskCBullet").remove();
  document.getElementById("taskCConteneditable").remove();
  document.getElementById("taskCBulletAnswer").remove();
  document.getElementById("taskCConteneditableAnswer").remove();

  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("taskDConteneditableAnswer").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("taskEConteneditableAnswer").remove();

} else if (tasksCount===1){

  document.getElementById("taskBBullet").remove();
  document.getElementById("taskBConteneditable").remove();
  document.getElementById("taskBBulletAnswer").remove();
  document.getElementById("taskBConteneditableAnswer").remove();

  document.getElementById("taskCBullet").remove();
  document.getElementById("taskCConteneditable").remove();
  document.getElementById("taskCBulletAnswer").remove();
  document.getElementById("taskCConteneditableAnswer").remove();

  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("taskDConteneditableAnswer").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("taskEConteneditableAnswer").remove();

} else if (tasksCount===2){
  document.getElementById("taskCBullet").remove();
  document.getElementById("taskCConteneditable").remove();
  document.getElementById("taskCBulletAnswer").remove();
  document.getElementById("taskCConteneditableAnswer").remove();

  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("taskDConteneditableAnswer").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("taskEConteneditableAnswer").remove();

} else if (tasksCount===3){
  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("taskDConteneditableAnswer").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("taskEConteneditableAnswer").remove();


} else if (tasksCount===4){
  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("taskEConteneditableAnswer").remove();

} else{
}
return;
}

document.getElementById("button1").addEventListener("click", function(){
tasksCount=1;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
    document.getElementById("workspace").style.visibility = "visible";
});
document.getElementById("button2").addEventListener("click", function(){
tasksCount=2;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
    document.getElementById("workspace").style.visibility = "visible";
});
document.getElementById("button3").addEventListener("click", function(){
tasksCount=3;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
    document.getElementById("workspace").style.visibility = "visible";
});
document.getElementById("button4").addEventListener("click", function(){
tasksCount=4;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("workspace").style.visibility = "visible";
});
document.getElementById("button5").addEventListener("click", function(){
tasksCount=5;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("workspace").style.visibility = "visible";

});




// --------------------- Create a discussion question --------------- //

// Create a "close" button and append it to each list item
var myULLList = document.getElementById("myUL");
var myNodelist = myULLList.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
// Create a "close" button and append it to each list item
var myNodelist = myULLList.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

  // Add a "checked" symbol when clicking on a list item
  var list = document.getElementById('myUL');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value + "?";
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '?') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// --------------------- Create a presenting --------------- //



// Create a "close" button and append it to each list item
var myULLListPresentingDiv = document.getElementById("myULPresentingDiv");
var myNodelistPresentingDiv = myULLListPresentingDiv.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelistPresentingDiv.length; i++) {
  var spanmyNodelistPresentingDiv = document.createElement("SPAN");
  var txtmyNodelistPresentingDiv = document.createTextNode("\u00D7");
  span.className = "closemyNodelistPresentingDiv";
  span.appendChild(txtmyNodelistPresentingDiv);
  myNodelistPresentingDiv[i].appendChild(spanmyNodelistPresentingDiv);
}

// Click on a close button to hide the current list item
var closemyNodelistPresentingDiv = document.getElementsByClassName("closemyNodelistPresentingDiv");
var i;
for (i = 0; i < closemyNodelistPresentingDiv.length; i++) {
  closemyNodelistPresentingDiv[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElementPresentingDiv() {
  var li = document.createElement("li");
  var inputValuemyNodelistPresentingDiv ='• ' + document.getElementById("myInputPresentingDiv").value;
  var t = document.createTextNode(inputValuemyNodelistPresentingDiv);
  li.appendChild(t);
  if (inputValuemyNodelistPresentingDiv === '• ') {
    alert("You must write something!");
  } else {
    document.getElementById("myULPresentingDiv").appendChild(li);
  }
  document.getElementById("myInputPresentingDiv").value = "";

  var spanmyNodelistPresentingDiv = document.createElement("SPAN");
  var txtmyNodelistPresentingDiv = document.createTextNode("\u00D7");
  spanmyNodelistPresentingDiv.className = "closemyNodelistPresentingDiv";
  spanmyNodelistPresentingDiv.appendChild(txtmyNodelistPresentingDiv);
  li.appendChild(spanmyNodelistPresentingDiv);

  for (i = 0; i < closemyNodelistPresentingDiv.length; i++) {
    closemyNodelistPresentingDiv[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}



//------------------------------------ Trafic lifhgt ----------------------------------- //
var green=document.getElementsByClassName("green")[0];
var red=document.getElementsByClassName("red")[0];
var yellow=document.getElementsByClassName("yellow")[0];

document.addEventListener("keyup", function(){
let charCount = document.getElementById('taskAConteneditableAnswer').innerHTML;
console.log(charCount);
if (charCount.length <= 80) {

  green.style.opacity=.2;
  yellow.style.opacity=.2;
  red.style.opacity=1;
}
else if (charCount.length >= 81 && charCount.length < 160) {
  green.style.opacity=.2;
  yellow.style.opacity=1;
  red.style.opacity=.2;
}
else {
  green.style.opacity=1;
  yellow.style.opacity=.2;
  red.style.opacity=.2;
}

});



// ------------------------- QOUTES AND LITTERATURE -------------------------------- //
