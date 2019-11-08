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

// Igen BJarke OMG
function addQuestion(){
    var ul = document.getElementById("dynamic-list");
    var question= document.getElementById("newQuestion");
    var li = document.createElement("li");
    li.setAttribute('id',newQuestion.value);
    li.appendChild(document.createTextNode(question.value));
    ul.appendChild(li);
  }

function removeQuestion(){
  var ul = document.getElementById("dynamic-list");
  var question = document.getElementById("newQuestion");
  var item = document.getElementById(question.value);
  ul.removeChild(item);
}
