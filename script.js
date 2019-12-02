// Variable that pretends the user has been giving a specifik ID
let userId = Math.floor(Math.random() * 4) + 1;


// If sentence that defines the users specific group role with a header and a paragraph

/*
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

*/


// ------------------------------ getusername function ----------------------
webstrate.on("loaded", function(webstrateId, clientId, user) {

 	let username = user.userId;
    let usernameHolder = document.getElementById("usernameHolderList");
    let myUsername = document.createElement("li");
	myUsername.id = clientId;
	myUsername.setAttribute("style","display:block");
    myUsername.innerText = username;
    usernameHolder.appendChild(myUsername);

});


webstrate.on("clientPart", function(clientId) {
  let partingUser = document.getElementById(clientId);
	console.log(partingUser, clientId);
	partingUser.parentNode.removeChild(partingUser);
});





// ----------------------------- Client ids -------------------
  document.getElementById("waitingRoomUpdate").addEventListener("click", function() {

// ----------------------- hide waitingroom and show workspace ----




  document.getElementById("waitingRoom").style.visibility = "hidden";
  document.getElementById("workspace").style.visibility = "visible";

//--------------------------- create iframes -------------------------

 let workspaceDiv = document.getElementById("workspace");

 let iframeAnswer = document.createElement("iframe");
 iframeAnswer.setAttribute("src", "https://webstrates.cs.au.dk/kais2019inclassgroupworkanswers/?copy");
 iframeAnswer.setAttribute("id", "iframeAnswer");
 workspaceDiv.appendChild(iframeAnswer);

 let iframePresenter = document.createElement("iframe");
 iframePresenter.setAttribute("src", "https://webstrates.cs.au.dk/kais2019inclassgroupworkpresenter/?copy");
 iframePresenter.setAttribute("id", "iframePresenter");
 workspaceDiv.appendChild(iframePresenter);



 let iframeAnalyst = document.createElement("iframe");
 iframeAnalyst.setAttribute("src", "https://webstrates.cs.au.dk/kais2019inclassgroupworkanalyst/?copy");
 iframeAnalyst.setAttribute("id", "iframeAnalyst");
 workspaceDiv.appendChild(iframeAnalyst);



 let iframeReference = document.createElement("iframe");
 iframeReference.setAttribute("src", "https://webstrates.cs.au.dk/kais2019inclassgroupworkreference/?copy");
 iframeReference.setAttribute("id", "iframeReference");
 workspaceDiv.appendChild(iframeReference);


});


  document.getElementById("testButton").addEventListener("click", function() {

alert(document.getElementById('iframeAnalyst').contentDocument.location);
alert(document.getElementById('iframeAnalyst').src);
});
