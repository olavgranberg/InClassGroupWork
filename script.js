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
    let usernameHolder = document.getElementById("usernameHolder");
    let myUsername = document.createElement("p");
	myUsername.id = clientId;
	myUsername.setAttribute("style","display:block");
    myUsername.innerText = username;
    usernameHolder.appendChild(myUsername);
});

webstrate.on("clientPart", function(clientId) {
	let partingUser = document.getElementById(clientId);
	console.log(partingUser, clientId)
	partingUser.parentNode.removeChild(partingUser);
});



// ----------------------------- Client ids -------------------
let waitingRoomUpdate = document.getElementById("waitingRoomUpdate");

waitingRoomUpdate.addEventListener('click', function() {

  document.getElementById("workspace").style.visibility = "visible";
  document.getElementById("waitingRoom").style.visibility = "hidden";
});

/*
document.getElementById("waitingRoomList").innerHTML = "";

  var webstrateClients = webstrate.clients;


  for (i = 0; i < webstrateClients.length; i++){
  var arrayText = webstrateClients[i];
  var node = document.createElement("LI");                 // Create a <li> node
  var textnode = document.createTextNode(arrayText);         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("waitingRoomList").appendChild(node);
  }
*/
