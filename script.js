var inputName = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (inputName.value === "teacherCool101" && inputPass.value === "StupidPassword345") {
    list.push({
      name: inputName.value
    });

    errorDiv.innerHTML = "Success";
  } else {
    if (inputName.value !== "teacherCool101" && inputPass.value === "StupidPassword345") {
      errorDiv.innerHTML = "Username is wrong";
    } else if (inputName.value === "teacherCool101" && inputPass.value !== "StupidPassword345") {
      errorDiv.innerHTML = "Password is wrong";
    } else {
      errorDiv.innerHTML = "Both username and password are wrong";
    }
  }

  console.log(list);
});



function app(){
  nav();
  initRoot();
  homePage();
}

function nav(){
  var navEle = document.createElement("nav");
  var homeButton = document.createElement("button");
  homeButton.innerHTML="Grade View";
  homeButton.addEventListener("click", function(){
    homePage();
  })
  var aboutButton = document.createElement("button");
  aboutButton.innerHTML="Add Grade";
  aboutButton.addEventListener("click", function(){
    aboutPage();
  })
  navEle.appendChild(homeButton);
  navEle.appendChild(aboutButton);
  document.body.appendChild(navEle);
}

function initRoot(){
  var root = document.createElement("div")
  root.classList.add("root");
  root.innerHTML="Stuff"
  document.body.appendChild(root);
}

function homePage(){
  document.body.querySelector(".root").innerHTML="Grade View Page"
}

function aboutPage(){
  document.body.querySelector(".root").innerHTML="Add Grade Page"
}

app();