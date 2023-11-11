//#region Page Init
const pageInit = () => {
  // 0 - 22
  let randomWordIndex = Math.floor(Math.random() * 23);

  var wordObject = words[randomWordIndex];
  arrofword = wordObject.word;
//#region Rondom Charchter of Word
  var arr = arrofword.split("");
  var i = arr.length,
    j,
    temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  //#endregion
  lblWord.innerHTML = arr.join("");
  lblHint.innerHTML = wordObject.hint;
  closeDialogWon();

  startTimer();
};
//#endregion

//#region Change Timer
const changeTimer = () => {
  let timerValue = parseInt(lblTimer.innerHTML);
  if (timerValue <= 0) {
    clearInterval(myInterval);
    pageInit();
  } else lblTimer.innerHTML = timerValue - 1;
};
//#endregion

//#region Start Timer
const startTimer = () => {
  lblTimer.innerHTML = 30;
  myInterval = setInterval(changeTimer, 1000);
};
//#endregion

//#region Refresh Word
refreshWord.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(myInterval);
  pageInit();
});
//#endregion

//#region invoke and Close Alert Won
const closeDialogWon = () => {
  alertDivWon.style.display = "none";
};
const invokeAlertWon = () => {
  alertDivWon.style.display = "block";
};
//#endregion

//#region invoke and Close Alert loss
const closeDialogLoss = () => {
  alertDivlose.style.display = "none";
};
const invokeAlertLoss = () => {
  alertDivlose.style.display = "block";
};
//#endregion

//#region invoke and Close page Init
const ivokeContant = () => {
  contane.style.display = "block";
};
const closeContant = () => {
  contane.style.display = "none";
};
//#endregion

//#region Check Word
checkWord.addEventListener("click", (e) => {
  e.preventDefault();
  pageInit;
  closeContant();
  closeDialogLoss();
  clearInterval(myInterval);
  let inputword = inputWord.value;
  let lableword = arrofword;
  console.log(lableword);
  if (inputword == lableword.toUpperCase()) {
    invokeAlertWon();
    closeDialogLoss();
    
    
  } else {
    invokeAlertLoss();
  }

  inputWord.value = "";
});
//#endregion

//#region Play More
playMore.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(myInterval);
  pageInit();
  ivokeContant();
});

//#endregion

//#region Colse Alert Won
closeAlertWon.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(myInterval);
  ivokeContant();
  closeDialogWon();
});
//#endregion

//#region tray Agine
trayAgine.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(myInterval);
  startTimer();
  ivokeContant();
  closeDialogLoss();
});
//#endregion

//#region Close Alert Loss
closeAlertLoss.addEventListener("click", (e) => {
  e.preventDefault();
  ivokeContant();
  closeDialogLoss();
});
//#endregion

window.addEventListener("DOMContentLoaded", () => {
  lblWord = document.getElementById("scrambleWord");
  lblHint = document.getElementById("hint");
  lblTimer = document.getElementById("timer");
  BtnRefresh = document.getElementById("refreshWord");
  BtnCheck = document.getElementById("checkWord");
  inputWord = document.getElementById("inputWord");
  BtnplayMore = document.getElementById("playMore");
  alertDivWon = document.getElementById("won");
  alertDivlose = document.getElementById("loss");
  contane = document.getElementById("contan");
  BtnColse = document.getElementById("closeAlertWon");
  BtnCloseAlertLoss = document.getElementById("closeAlertLoss");
  BtnTrayAgine = document.getElementById("trayAgine");
  pageInit();
});
