const copyButton = document.getElementById("copyButton");
const javaCode = document.getElementById("javaCode");

copyButton.addEventListener("click", async function () {
  try {
    await navigator.clipboard.writeText(javaCode.textContent);
    copyButton.textContent = "Copied!";
  } catch (error) {
    copyButton.textContent = "Copy unavailable";
  }

  setTimeout(function () {
    copyButton.textContent = "Copy Code";
  }, 2000);
});

const options = document.querySelectorAll(".option");
const quizResult = document.getElementById("quizResult");

options.forEach(function (option) {
  option.addEventListener("click", function () {
    if (option.dataset.answer === "correct") {
      quizResult.textContent =
        "Correct! extends is used for class inheritance.";
    } else {
      quizResult.textContent = "Not quite. The correct answer is extends.";
    }

    options.forEach(function (button) {
      button.disabled = true;
    });
  });
});
