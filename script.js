// Variable that pretends the user has been giving a specifik ID
let userId = Math.floor(Math.random() * 4) + 1;




// ------------------------------ getusername function ----------------------
webstrate.on("loaded", function(webstrateId, clientId, user) {

  let username = user.userId;
  let usernameHolder = document.getElementById("usernameHolderList");
  if (username != "anonymous:") {
    let myUsername = document.createElement("li");
    myUsername.id = clientId;
    myUsername.setAttribute("style", "display:block");
    myUsername.innerText = username;
    usernameHolder.appendChild(myUsername);
  } else {

    return;
  }

});


webstrate.on("clientPart", function(clientId) {

  let username = webstrate.user.userId;
  if (username != "anonymous:") {
    let partingUser = document.getElementById(clientId);
    console.log(partingUser, clientId);
    partingUser.parentNode.removeChild(partingUser);
  } else {
    return;
  }

});

webstrate.on("clientPart", function(clientId) {
  let lis = document.getElementById("usernameHolderList").getElementsByTagName("li");
  if (lis.length == 2) {
    document.getElementById("delegateRoles").style.visibility = "visible";
  } else {
    document.getElementById("delegateRoles").style.visibility = "hidden";
  }
});



webstrate.on("loaded", function(webstrateId, clientId, user) {
  let lis = document.getElementById("usernameHolderList").getElementsByTagName("li");

  if (lis.length == 2) {
    document.getElementById("delegateRoles").style.visibility = "visible";
  } else {
    document.getElementById("delegateRoles").style.visibility = "hidden";
  }
});


document.getElementById("delegateRoles").addEventListener("click", function() {
  var ul = document.querySelector('ul');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }

  let analystIsDelegatedTo = document.querySelectorAll('li')[0];
  let referenceIsDelegatedTo = document.querySelectorAll('li')[1];
  let presenterIsDelegatedTo = document.querySelectorAll('li')[0];
  let answerIsDelegatedTo = document.querySelectorAll('li')[1];

  document.getElementById("presenterRoleTitle").innerHTML = presenterIsDelegatedTo.innerHTML;
  document.getElementById("analystRoleTitle").innerHTML = analystIsDelegatedTo.innerHTML;
  document.getElementById("referenceRoleTitle").innerHTML = referenceIsDelegatedTo.innerHTML;
  document.getElementById("answerRoleTitle").innerHTML = answerIsDelegatedTo.innerHTML;

  document.getElementById("delegateRoles").style.visibility = "hidden";

  document.getElementById("referenceRoleUnderstood").style.visibility = "visible";
  document.getElementById("answerRoleUnderstood").style.visibility = "visible";
  document.getElementById("presenterRoleUnderstood").style.visibility = "visible";
  document.getElementById("analystRoleUnderstood").style.visibility = "visible";

});


function showStartButtonWhenReady() {
  if (document.getElementById("referenceRoleUnderstood").style.visibility == "hidden" &&
    document.getElementById("analystRoleUnderstood").style.visibility == "hidden" &&
    document.getElementById("answerRoleUnderstood").style.visibility == "hidden" &&
    document.getElementById("presenterRoleUnderstood").style.visibility == "hidden") {
    document.getElementById("Start").style.visibility = "visible";
  } else {
    return;
  }

}


document.getElementById("referenceRoleUnderstood").addEventListener("click", function(user) {

  let referenceIsDelegatedTo = document.querySelectorAll('li')[1].innerHTML;
  let username = webstrate.user.userId;
  if (username == referenceIsDelegatedTo) {
    let iframeReference = document.createElement("iframe");
    let iframeReferenceSrc = "https://webstrates.cs.au.dk/kais2019inclassgroupworkreference/?copy" + "&" + username;
    iframeReference.setAttribute("src", iframeReferenceSrc);
    iframeReference.setAttribute("id", "iframeReference");
    document.getElementById("workspace").appendChild(iframeReference);

    document.getElementById("referenceRoleUnderstood").style.visibility = "hidden";
    showStartButtonWhenReady()

  } else {
    alert("This role is assigned to " + referenceIsDelegatedTo);
  }

});

document.getElementById("answerRoleUnderstood").addEventListener("click", function(user) {

  let answerIsDelegatedTo = document.querySelectorAll('li')[1].innerHTML;

  let username = webstrate.user.userId;
  if (username == answerIsDelegatedTo) {
    let iframeAnswer = document.createElement("iframe");
    let iframeAnswerSrc = "https://webstrates.cs.au.dk/kais2019inclassgroupworkanswers/?copy" + "&" + username;
    iframeAnswer.setAttribute("src", iframeAnswerSrc);
    iframeAnswer.setAttribute("id", "iframeAnswer");
    document.getElementById("workspace").appendChild(iframeAnswer);


    document.getElementById("answerRoleUnderstood").style.visibility = "hidden";
    showStartButtonWhenReady()
  } else {
    alert("This role is assigned to " + answerIsDelegatedTo);
  }

});

document.getElementById("presenterRoleUnderstood").addEventListener("click", function(user) {
  let presenterIsDelegatedTo = document.querySelectorAll('li')[0].innerHTML;


  let username = webstrate.user.userId;
  if (username == presenterIsDelegatedTo) {
    let iframePresenter = document.createElement("iframe");
    let iframePresenterSrc = "https://webstrates.cs.au.dk/kais2019inclassgroupworkpresenter/?copy" + "&" + username;
    iframePresenter.setAttribute("src", iframePresenterSrc);
    iframePresenter.setAttribute("id", "iframePresenter");
    document.getElementById("workspace").appendChild(iframePresenter);

    document.getElementById("presenterRoleUnderstood").style.visibility = "hidden";
    showStartButtonWhenReady()
  } else {
    alert("This role is assigned to " + presenterIsDelegatedTo);
  }

});

document.getElementById("analystRoleUnderstood").addEventListener("click", function(user) {

  let analystIsDelegatedTo = document.querySelectorAll('li')[0].innerHTML;

  let username = webstrate.user.userId;
  if (username == analystIsDelegatedTo) {
    let iframeAnalyst = document.createElement("iframe");
    let iframeAnalystSrc = "https://webstrates.cs.au.dk/kais2019inclassgroupworkanalyst/?copy" + "&" + username;
    iframeAnalyst.setAttribute("src", iframeAnalystSrc);
    iframeAnalyst.setAttribute("id", "iframeAnalyst");
    document.getElementById("workspace").appendChild(iframeAnalyst);

    document.getElementById("analystRoleUnderstood").style.visibility = "hidden";
    showStartButtonWhenReady()

  } else {
    alert("This role is assigned to " + analystIsDelegatedTo);
  }
});




document.getElementById("Start").addEventListener("click", function() {

  // ----------------------- hide waitingroom and show workspace ---------------------------------

  document.getElementById("hideThis").style.visibility = "hidden";
  document.getElementById("waitingRoom").style.visibility = "hidden";
  document.getElementById("workspace").style.visibility = "visible";
  document.getElementById("PresentationOfWorkSpace").style.visibility = "hidden";


  // ------------------------ Makes sure, that every iframe is synchronized ---------------------
  let iframeAnswerUpdated = document.getElementById('iframeAnswer').contentDocument.location;
  document.getElementById('iframeAnswer').setAttribute("src", iframeAnswerUpdated);


  let iframeReferenceUpdated = document.getElementById('iframeReference').contentDocument.location;
  document.getElementById('iframeReference').setAttribute("src", iframeReferenceUpdated);

  let iframeAnalystUpdated = document.getElementById('iframeAnalyst').contentDocument.location;
  document.getElementById('iframeAnalyst').setAttribute("src", iframeAnalystUpdated);


  let iframePresenterUpdated = document.getElementById('iframePresenter').contentDocument.location;
  document.getElementById('iframePresenter').setAttribute("src", iframePresenterUpdated);


});


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



/*
// ----------------------------- Client ids -------------------
  document.getElementById("waitingRoomUpdate").addEventListener("click", function() {


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









  document.getElementById("referenceRoleUnderstood").addEventListener("click", function() {

    let iframeReferenceUpdated = document.getElementById('iframeReference').contentDocument.location;


              document.getElementById('iframeReference').setAttribute("src", iframeReferenceUpdated + "?username=" + webstrate.user.userId);

  });

  document.getElementById("answerRoleUnderstood").addEventListener("click", function() {


    let iframeAnswerUpdated = document.getElementById('iframeAnswer').contentDocument.location;

        document.getElementById('iframeAnswer').setAttribute("src", iframeAnswerUpdated + "?username=" + webstrate.user.userId);

  });

  document.getElementById("presenterRoleUnderstood").addEventListener("click", function() {



    let iframePresenterUpdated = document.getElementById('iframePresenter').contentDocument.location;

      document.getElementById('iframePresenter').setAttribute("src", iframePresenterUpdated + "?" + webstrate.user.userId);

  });

  document.getElementById("analystRoleUnderstood").addEventListener("click", function() {

    let iframeAnalystUpdated = document.getElementById('iframeAnalyst').contentDocument.location;
  document.getElementById('iframeAnalyst').setAttribute("src", iframeAnalystUpdated + "?=" + webstrate.user.userId);


// alert(window.location.search);

  });

*/
