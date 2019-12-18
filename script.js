
// Function that fetch username and provider from the parsed URL and defines the webstrates' permissions
webstrate.on('loaded', () => {
    let usernameAndProviderString = window.location.search;
    let usernameString = usernameAndProviderString.split("%")[0].substring(1);
    let providerString = usernameAndProviderString.split("%")[1].substring(2).slice(0,-1);


    document.documentElement.setAttribute('data-auth', JSON.stringify([
        {username: usernameString, provider: providerString, permissions: "rw"},
        {"username": "anonymous", "provider": "", "permissions": "r"}
      ])
    );

});


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

// Remove clients from our client list, that leaves the website
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

// Function that count the non-anonymous client list length when users leave the website
webstrate.on("clientPart", function(clientId) {
  let lis = document.getElementById("usernameHolderList").getElementsByTagName("li");
  if (lis.length == 1) {
    document.getElementById("delegateRoles").style.visibility = "visible";
  } else {
    document.getElementById("delegateRoles").style.visibility = "hidden";
  }
});


// Function that count the non-anonymous client list length when users enters the website

webstrate.on("loaded", function(webstrateId, clientId, user) {
  let lis = document.getElementById("usernameHolderList").getElementsByTagName("li");

  if (lis.length == 1) {
    document.getElementById("delegateRoles").style.visibility = "visible";
  } else {
    document.getElementById("delegateRoles").style.visibility = "hidden";
  }
});

// Shuffle the client list, delegate roles to the users and show the "I've understood my role" buttons
document.getElementById("delegateRoles").addEventListener("click", function() {
  var ul = document.querySelector('ul');
  for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
  }

  let analystIsDelegatedTo = document.querySelectorAll('li')[0];
  let referenceIsDelegatedTo = document.querySelectorAll('li')[0];
  let presenterIsDelegatedTo = document.querySelectorAll('li')[0];
  let answerIsDelegatedTo = document.querySelectorAll('li')[0];

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

// Function that checks if all the delegate roles buttons has been clicked
function showStartButtonWhenReady() {
  if (document.getElementById("referenceRoleUnderstood").style.visibility == "hidden" &&
    document.getElementById("analystRoleUnderstood").style.visibility == "hidden" &&
    document.getElementById("answerRoleUnderstood").style.visibility == "hidden" &&
    document.getElementById("presenterRoleUnderstood").style.visibility == "hidden") {

// If delegate roles button has been clicked, show start button
    document.getElementById("Start").style.visibility = "visible";
  } else {
    return;
  }

}


// 4 functions which created iframes with username specific urls for each role

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

  let answerIsDelegatedTo = document.querySelectorAll('li')[3].innerHTML;

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
  let presenterIsDelegatedTo = document.querySelectorAll('li')[2].innerHTML;


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



// When 4 clients is online and the roles has been delegated, update iframe URLS with user specific data and enter workspace
document.getElementById("Start").addEventListener("click", function() {

  // ----------------------- hide waitingroom and show workspace ---------------------------------

  document.getElementById("roleDescriptions").style.visibility = "hidden";
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
