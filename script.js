function calculateScore() {
  let pushups = document.getElementById("pushups").value;
  let run = document.getElementById("run").value;

  let score = (pushups * 2) - run;

  document.getElementById("result").innerText =
    "Score: " + score;
}