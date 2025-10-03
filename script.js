let logBox = document.getElementById("logBox");
let logCount = 0;

function logMessage(msg) {
  logCount++;
  logBox.innerText = `${logCount}. ${msg}\n` + logBox.innerText;
}

function changeBalance() {
  let account = parseInt(document.getElementById("accountBalance").value);
  let cash = parseInt(document.getElementById("cashBalance").value);
  logMessage(`Current account balance: ${account}, Current cash balance: ${cash}`);
}

function proceed() {
  let account = parseInt(document.getElementById("accountBalance").value);
  let cash = parseInt(document.getElementById("cashBalance").value);
  let operation = document.getElementById("operation").value;
  let amount = parseInt(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    logMessage("Invalid amount entered.");
    return;
  }

  if (operation === "deposit") {
    if (cash >= amount) {
      account += amount;
      cash -= amount;
      document.getElementById("accountBalance").value = account;
      document.getElementById("cashBalance").value = cash;
      logMessage(`Current account balance: ${account}, Current cash balance: ${cash}`);
    } else {
      logMessage("Couldn't deposit entered balance. (Insufficient cash balance)");
    }
  } else if (operation === "withdraw") {
    if (account >= amount) {
      account -= amount;
      cash += amount;
      document.getElementById("accountBalance").value = account;
      document.getElementById("cashBalance").value = cash;
      logMessage(`Current account balance: ${account}, Current cash balance: ${cash}`);
    } else {
      logMessage("Couldn't withdraw entered balance. (Insufficient account balance)");
    }
  }
}

function convertCurrency() {
  let input = parseFloat(document.getElementById("inputBalance").value);
  let currency = document.getElementById("currency").value;
  let output = 0;

  if (isNaN(input)) {
    logMessage("Invalid currency input.");
    return;
  }

  if (currency === "USD") {
    output = input * 36;
  } else if (currency === "THB") {
    output = input / 36;
  }

  document.getElementById("outputBalance").value = output.toFixed(2);
}
