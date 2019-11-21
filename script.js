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
  document.getElementById("textareaA").remove();

  document.getElementById("taskBBullet").remove();
  document.getElementById("taskBConteneditable").remove();
  document.getElementById("taskBBulletAnswer").remove();
  document.getElementById("textareaB").remove();

  document.getElementById("taskCBullet").remove();
  document.getElementById("taskCConteneditable").remove();
  document.getElementById("taskCBulletAnswer").remove();
  document.getElementById("textareaC").remove();

  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("textareaD").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("textareaE").remove();



} else if (tasksCount===1){

  document.getElementById("taskBBullet").remove();
  document.getElementById("taskBConteneditable").remove();
  document.getElementById("taskBBulletAnswer").remove();
  document.getElementById("textareaB").remove();

  document.getElementById("taskCBullet").remove();
  document.getElementById("taskCConteneditable").remove();
  document.getElementById("taskCBulletAnswer").remove();
  document.getElementById("textareaC").remove();

  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("textareaD").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("textareaE").remove();



} else if (tasksCount===2){
  document.getElementById("taskCBullet").remove();
  document.getElementById("taskCConteneditable").remove();
  document.getElementById("taskCBulletAnswer").remove();
  document.getElementById("textareaC").remove();

  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("textareaD").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("textareaE").remove();

} else if (tasksCount===3){
  document.getElementById("taskDBullet").remove();
  document.getElementById("taskDConteneditable").remove();
  document.getElementById("taskDBulletAnswer").remove();
  document.getElementById("textareaD").remove();

  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("textareaE").remove();


} else if (tasksCount===4){
  document.getElementById("taskEBullet").remove();
  document.getElementById("taskEConteneditable").remove();
  document.getElementById("taskEBulletAnswer").remove();
  document.getElementById("textareaE").remove();
} else{
}
return;
}

// ------------------------- control visbilite of answers boxes and sizes them according to the number of tasks ------------------------
document.getElementById("button1").addEventListener("click", function(){
tasksCount=1;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("waitingRoom").style.visibility = "hidden";
    document.getElementById("workspace").style.visibility = "visible";
      document.getElementById('textareaA').style.height = '350px';


          alert("Your username is" + " " + webstrate.clientId);

});
document.getElementById("button2").addEventListener("click", function(){
tasksCount=2;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("waitingRoom").style.visibility = "hidden";
    document.getElementById("workspace").style.visibility = "visible";
    document.getElementById('textareaA').style.height = '175px';
    document.getElementById('textareaB').style.height = '175px';

    alert("Your username is" + " " + webstrate.clientId);

});
document.getElementById("button3").addEventListener("click", function(){
tasksCount=3;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("waitingRoom").style.visibility = "hidden";
    document.getElementById("workspace").style.visibility = "visible";
    document.getElementById('textareaA').style.height = '100px';
    document.getElementById('textareaB').style.height = '100px';
    document.getElementById('textareaC').style.height = '100px';


    alert("Your username is" + " " + webstrate.clientId);

});
document.getElementById("button4").addEventListener("click", function(){
tasksCount=4;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("waitingRoom").style.visibility = "hidden";
  document.getElementById("workspace").style.visibility = "visible";
  document.getElementById('textareaA').style.height = '75px';
  document.getElementById('textareaB').style.height = '75px';
  document.getElementById('textareaC').style.height = '75px';
  document.getElementById('textareaD').style.height = '75px';


  alert("Your username is" + " " + webstrate.clientId);

});
document.getElementById("button5").addEventListener("click", function(){
tasksCount=5;
  taskCountFunction(tasksCount);
  document.getElementById("taskButtonsDiv").style.visibility = "hidden";
  document.getElementById("waitingRoom").style.visibility = "hidden";
  document.getElementById("workspace").style.visibility = "visible";
  document.getElementById('textareaA').style.height = '55px';
  document.getElementById('textareaB').style.height = '55px';
  document.getElementById('textareaC').style.height = '55px';
  document.getElementById('textareaD').style.height = '55px';
  document.getElementById('textareaE').style.height = '55px';

  alert("Your username is" + " " + webstrate.clientId);


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


//var x = document.getElementById("table"); x.style.display = "none"; //
document.getElementById("buttonBook").addEventListener("click", function () {

  document.getElementById("table").style.visibility = "hidden";
  document.getElementById("buttonBook").style.visibility = "hidden";
  document.getElementById("qoutesAndLitteratureHeader").style.visibility = "hidden";

  document.getElementById("buttonAddWebOrBook").style.visibility = "visible";
    document.getElementById("formElementsQoutesAndLitterature").style.visibility = "visible";
document.getElementById("descriptionsForTableP").style.visibility = "visible";



});


document.getElementById("buttonAddWebOrBook").addEventListener("click", function () {

      document.getElementById("table").style.visibility = "visible";
      document.getElementById("buttonBook").style.visibility = "visible";
      document.getElementById("qoutesAndLitteratureHeader").style.visibility = "visible";
      document.getElementById("buttonAddWebOrBook").style.visibility = "hidden";
      document.getElementById("formElementsQoutesAndLitterature").style.visibility = "hidden";
      document.getElementById("descriptionsForTableP").style.visibility = "hidden";
      var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

      // Insert a row in the table at the last row
      var newRow   = tableRef.insertRow();

      // Insert a cell in the row at index 0
      var newCell  = newRow.insertCell(0);
      var newCellTwo  = newRow.insertCell(1);
        var newCellThree  = newRow.insertCell(2);
          var newCellFour  = newRow.insertCell(3);
            var newCellFive  = newRow.insertCell(4);
            var newCellSix  = newRow.insertCell(5);


var tablePText=document.getElementById('tablePQoute').value;
var tablePTitleText=document.getElementById('tablePTitle').value;
var tablePAuthorText=document.getElementById('tablePAuthor').value;
var tablePPageOrLinkText=document.getElementById('tablePPageOrLink').value;
var tablePQouteYearText=document.getElementById('tablePQouteYear').value;
      // Append a text node to the cell
      var newQoute  = document.createTextNode(tablePText);
      var newTitle = document.createTextNode(tablePTitleText);
      var newAuthor = document.createTextNode(tablePAuthorText);
      var newPageOrLink = document.createTextNode(tablePPageOrLinkText);
      var newYear = document.createTextNode(tablePQouteYearText);
      var deleteButtonRow = document.createElement('BUTTON');
      deleteButtonRow.className += "deleteButtonsInTable";
      deleteButtonRow.innerHTML += "x";



      deleteButtonRow.addEventListener('click', function() {
        var i = deleteButtonRow.parentNode.parentNode.rowIndex;
          document.getElementById("table").deleteRow(i);

}, false);



      newCell.appendChild(newQoute);
      newCellTwo.appendChild(newTitle);
      newCellThree.appendChild(newAuthor);
      newCellFour.appendChild(newPageOrLink);
      newCellFive.appendChild(newYear);
      newCellSix.appendChild(deleteButtonRow);



});

buttonAddWebOrBook.addEventListener('click', function() {
    document.getElementById("referenceForm").reset();
});


let waitingRoomUpdate = document.getElementById("waitingRoomUpdate");

waitingRoomUpdate.addEventListener('click', function() {

  var webstrateClientId = webstrate.clientId;
  var webstrateClients = [];
  webstrateClients.push(webstrate.clients[i]);
  alert(webstrateClients);

  for (i = 0; i < webstrateClients.length; i++){
    alert(webstrateClients.length);
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(webstrateClients[i]);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("waitingRoomList").appendChild(node);
}


/*
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(txt);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("waitingRoomList").appendChild(node);
*/

}, false);
