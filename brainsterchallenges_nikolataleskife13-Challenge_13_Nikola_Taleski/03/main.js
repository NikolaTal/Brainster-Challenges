class Email {
  //Constructor
  constructor(fromArg, toArg, subjectArg, messageArg) {
    this.from = fromArg;
    this.to = toArg;
    this.subject = subjectArg;
    this.message = messageArg;
  }

  //A method for displaying the entire message
  showEnteredValues() {
    alert(
      ` From: ${this.from}\n To:${this.to}\n Subject:${this.subject}\n Message:${this.message}`
    );
  }
}

function displayForm() {
    
  let enterFrom = prompt("From:");
  let enterTo = prompt("To:");
  let enterSubject = prompt("Subject:");
  let enterMessage = prompt("Message:");

  const newEmail = new Email(enterFrom, enterTo, enterSubject, enterMessage);

  newEmail.showEnteredValues();

  let selectForm = document.querySelector("#from");
  let selectTo = document.querySelector("#to");
  let selectSubject = document.querySelector("#subject");
  let selectMessage = document.querySelector("#message");

  selectForm.value = newEmail.from;
  selectTo.value = newEmail.to;
  selectSubject.value = newEmail.subject;
  selectMessage.value = newEmail.message;
}

displayForm();
