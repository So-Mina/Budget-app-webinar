// document.getElementById('')
// document.querySelector('')

// total balance
const balanceElement = document.getElementById("balance");

// value input
const valueInputElement = document.querySelector("input");

// income / expense
const selectElement = document.querySelector("select");

// add button
const additionButtonElement = document.querySelector("footer button");

// entry list
const entryListElement = document.querySelector("section ul");

/* */
/* console.log(balanceElement);
console.log(valueInputElement);
console.log(selectElement);
console.log(additionButtonElement);
console.log(entryListElement); */
/* */

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = amount + "$";

  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";

  const listEntryOperator = document.createElement("span");
  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);

  entryListElement.appendChild(listEntry);
}

/* */

function updateBalance() {
  let total = 0;

  for (let items of entryListElement.children) {
    console.log(items);
    const valueElement = items.querySelector("strong");
    const operationElement = items.querySelector("span");

    const value = parseInt(valueElement.innerText);
    const operation = operationElement.innerText;

    if (operation === "+") {
      total = total + value;
    } else if (operation === "-") {
      total = total - value;
    }
  }

  balanceElement.innerText = total + `$`;
}

/* */

additionButtonElement.onclick = function () {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);

  valueInputElement.value = " ";

  updateBalance();
};
