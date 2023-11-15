document.addEventListener("DOMContentLoaded", function () {
  // Function to handle "Add Another Match" button click
  function addMatch() {
    // Clone the first match node
    const matchNode = document.querySelector(".match");
    const newMatch = matchNode.cloneNode(true);

    // Reset values and IDs for the cloned match
    newMatch.querySelector(".lws-matchName").textContent =
      "Match " + (document.querySelectorAll(".match").length + 1);
    newMatch.querySelector(".lws-increment").value = "";
    newMatch.querySelector(".lws-decrement").value = "";
    newMatch.querySelector(".lws-singleResult").textContent = "0";

    // Add the cloned match to the container
    document.querySelector(".all-matches").appendChild(newMatch);

    // Attach event listeners for the new match
    attachEventListeners(newMatch);
  }

  // Function to handle delete button click
  function deleteMatch(matchNode) {
    matchNode.remove();
  }

  // Function to handle increment and decrement changes
  function updateScore(matchNode) {
    const incrementValue =
      parseInt(matchNode.querySelector(".lws-increment").value) || 0;
    const decrementValue =
      parseInt(matchNode.querySelector(".lws-decrement").value) || 0;

    const currentScore =
      parseInt(matchNode.querySelector(".lws-singleResult").textContent) || 0;
    const newScore = currentScore + incrementValue - decrementValue;

    matchNode.querySelector(".lws-singleResult").textContent = newScore;
  }

  // Function to attach event listeners for a match
  function attachEventListeners(matchNode) {
    matchNode
      .querySelector(".lws-delete")
      .addEventListener("click", function () {
        deleteMatch(matchNode);
      });

    matchNode
      .querySelector(".incrementForm")
      .addEventListener("input", function () {
        updateScore(matchNode);
      });

    matchNode
      .querySelector(".decrementForm")
      .addEventListener("input", function () {
        updateScore(matchNode);
      });
  }

  // Attach event listener for "Add Another Match" button
  document
    .querySelector(".lws-addMatch")
    .addEventListener("click", function () {
      addMatch();
    });

  // Attach event listeners for the initial match
  attachEventListeners(document.querySelector(".match"));
});
