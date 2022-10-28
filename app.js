const form = document.querySelector(".container");
const verify = document.getElementById("verify");
const help = document.getElementById("help");
const totalDue = document.getElementById("status");
const rfd = document.getElementById("rfd");
const acknowledge = document.getElementById("acknowledge");
const commit = document.getElementById("commit");
const asof = document.getElementById("asof");
const homework = document.getElementById("homework");
const vaig = document.getElementById("vaig");
const notesArea = document.getElementById("notesarea");
const reason = document.getElementById("reason");
const copyNotes = document.getElementById("copyNotes");
const wvNotes = document.getElementById("wvNotes");
const copySuccess = document.querySelector('.copySuccess')
const reset = document.getElementById("reset");


verify.onclick = () => {
  let verifyText = "VERIFIED INTO ACCOUNT// ";
  if (verify.checked == true) {
    notesArea.value += verifyText;
  } else if (verify.checked == false) {
    notesArea.value = notesArea.value.replace(verifyText, "");
  }
};
totalDue.onclick = () => {
  let statusText = "PROVIDED SOA AND TDU// ";
  if (totalDue.checked == true) {
    notesArea.value += statusText;
  } else if (totalDue.checked == false) {
    notesArea.value = notesArea.value.replace(statusText, "");
  }
};
rfd.onclick = () => {
  let rfdText = `ASKED RFD//`;
  if (rfd.checked == true) {
    reason.style.display = "block";
    notesArea.value += rfdText;
  } else if (rfd.checked == false) {
    reason.style.display = "none";
    notesArea.value = notesArea.value.replace(rfdText, "");
  }
};
acknowledge.onclick = () => {
  if (acknowledge.checked == true) {
    notesArea.value += `RFD ${reason.value}// `;
  } else if (acknowledge.checked == false) {
    notesArea.value = notesArea.value.replace(`RFD ${reason.value}// `, "");
  }
};
commit.onclick = () => {
  let commitText = "INQUIRED ABT MOST CM CAN COMMIT TO// ";
  if (commit.checked == true) {
    notesArea.value += commitText;
  } else if (commit.checked == false) {
    notesArea.value = notesArea.value.replace(commitText, "");
  }
};
asof.onclick = () => {
  let asofText = "CM UNABLE TO PAY AT THIS TIME DISCUSSED POSSIBLE ASOF// ";
  if (asof.checked == true) {
    notesArea.value += asofText;
  } else if (asof.checked == false) {
    notesArea.value = notesArea.value.replace(asofText, "");
  }
};
homework.onclick = () => {
  let homeworkText = "PROVIDED HOMEWORK AND INFORMED OF POSSIBLE FOLLOW UPS// ";
  if (homework.checked == true) {
    notesArea.value += homeworkText;
  } else if (homework.checked == false) {
    notesArea.value = notesArea.value.replace(homeworkText, "");
  }
};

vaig.onclick = () => {
  let vaigText = "ACCOUNT VAIGED// ";
  if (vaig.checked == true) {
    notesArea.value += vaigText;
  } else if (vaig.checked == false) {
    notesArea.value = notesArea.value.replace(vaigText, "");
  }
};
copyNotes.onclick = () => {
  notesArea.select(notesArea.value);
  navigator.clipboard.writeText(notesArea.value.toUpperCase());
  reason.style.display = "none";
  copyNotes.style.transform = 'scale(.9)'
  setTimeout(() => {
    copyNotes.style.transform = 'scale(1)'
  },100)
  copySuccess.style.display = 'flex'
  setTimeout(() => {
  copySuccess.style.display = 'none'
  }, 400)
};

reset.onclick = () => {
  reason.style.display = "none";
  reset.style.transform = 'scale(.9)'
  setTimeout(() => {
    reset.style.transform = 'scale(1)'
  },100)
};

wvNotes.onclick = () => {
  navigator.clipboard.writeText('**LS** NML// NO ATTNY PPN')
  wvNotes.style.transform = 'scale(.9)'
  setTimeout(() => {
    wvNotes.style.transform = 'scale(1)'
  },100)
  copySuccess.innerHTML = '<p>✔️ WV Note Coppied Succesfully</p>'
  copySuccess.style.display = 'flex'
  setTimeout(() => {
  copySuccess.style.display = 'none'
  copySuccess.innerHTML = '<p>✔️ Notes Coppied Successfully</p>'
  }, 400)

}
