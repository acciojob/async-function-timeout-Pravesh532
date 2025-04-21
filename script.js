function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // ✅ fixed typo: setTimeOut → setTimeout
}

async function displayMessage() {
  const mssg = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value); // ✅ ensure delay is a number
  const output = document.createElement('div');
  const body = document.body; // ✅ define body so you can append to it

  if (!mssg || isNaN(delay) || delay < 0) {
    output.textContent = "Please enter valid text and delay";
    body.appendChild(output);
    return;
  }

  await wait(delay); // ✅ delay is now a number
  output.textContent = mssg;
  body.appendChild(output); // ✅ fixed typo: appendchild → appendChild
}

document.getElementById("btn").addEventListener('click', displayMessage); // ✅ "btn" should be a string
