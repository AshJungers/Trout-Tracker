// el = element

// adding increments
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1; //instead of writing count = count + 1 (and writing count twice), you can just do count += 1 - it added the current value (count) + 1
  countEl.textContent = count;
}

//save all previous entries

let saveEl = document.getElementById("save-el");

function save() {
  let totalEntry = " " + count + " - ";
  saveEl.textContent += totalEntry; //use += because we want to use what was in their previously (previous entry in HTML page)
  //used .textContent b/c .innerText only shows human-readable elements (not the spacing)

  //when we click on SAVE button - we want value to go back to 0
  //when textContent is set to 0, need to send count (line 4) back to 0
  countEl.textContent = 0;
  count = 0;
}
