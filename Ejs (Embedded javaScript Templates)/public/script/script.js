const btns = document.querySelectorAll("button");

for (click of btns) {
  click.addEventListener("click", () => {
    console.log("button was licked");
  });
}
