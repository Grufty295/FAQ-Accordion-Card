document.querySelectorAll("article").forEach((question) => {
  question.addEventListener("click", toggleSelected);
});

function toggleSelected(e) {
  if (e.path[1].className == "card-body-question") {
    const selectedQuestion = document.querySelector(".selected");
    if (selectedQuestion != null) {
      disableQuestion(selectedQuestion);
    }
    enableQuestion(e.path[1]);
  } else {
    disableQuestion(e.path[1]);
  }
}

function disableQuestion(question) {
  question.classList.remove("selected");
}

function enableQuestion(question) {
  question.classList.add("selected");
}
