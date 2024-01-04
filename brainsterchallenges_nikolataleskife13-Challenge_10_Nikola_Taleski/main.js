const peopleName = prompt("Please enter the name of the elector");

const people = [
  ["Orce", true, 5],
  ["Viktorija", false],
  ["Martina", true, 3],
  ["Vlatko", false],
  ["Elena", true, 2],
  ["Monika", true, 4],
];

let findPerson = null;
for (let i = 0; i < people.length; i++) {
  if (people[i][0] === peopleName) {
    findPerson = people[i];
    break;
  }
}

if (findPerson) {
  const [name, hasVoted, grade] = findPerson;

  const nameTd = document.createElement("td");
  nameTd.textContent = name;
  document.body.appendChild(nameTd);

  const hasVotedTd = document.createElement("td");
  if (hasVoted) {
    hasVotedTd.textContent = "Voted";
  } else {
    hasVotedTd.textContent = "Did not vote";
  }
  document.body.appendChild(hasVotedTd);

  if (hasVoted) {
    const gradeTd = document.createElement("td");
    gradeTd.textContent = grade;
    document.body.appendChild(gradeTd);
  }
} else {
  const notFoundElement = document.createElement("td");
  notFoundElement.textContent = "Elector not found, please enter a valid name";
  document.body.appendChild(notFoundElement);
}
