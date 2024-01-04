const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: 304,
    onPage: 30,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    maxPages: 185,
    onPage: 185,
  },
  {
    title: "50 Shades of Grey",
    author: "E.L. James",
    maxPages: 514,
    onPage: 0,
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: 1072,
    onPage: 372,
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    maxPages: 104,
    onPage: 104,
  },
];


let data = document.querySelector("#data");
let status = document.querySelector("#status");
let tBody = document.querySelector("#tBody");
let form = document.querySelector("#form");
let button = document.querySelector("#btn");


function booksAndAuthors() {
  books.forEach((book) => {
    let bookAndAuthor = `${book.title} by ${book.author}`;
    let dataLi = document.createElement("li");
    dataLi.textContent = bookAndAuthor;
    data.appendChild(dataLi);

    let statusLi = document.createElement("li");
    if (book.maxPages === book.onPage) {
      statusLi.textContent = `You aready have read ${book.title} by ${book.author}`;
      statusLi.style.color = "green";
      status.appendChild(statusLi);
    } else {
      statusLi.textContent = `You still need to read ${book.title} by ${book.author}`;
      statusLi.style.color = "red";
      status.appendChild(statusLi);
    }


    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.maxPages}</td>
          <td>${book.onPage}</td>
          <td style="color: white"><div class="myProgress"><div class="myBar" style= "width:${(
            (book.onPage / book.maxPages) *
            100
          ).toFixed(2)}%">${((book.onPage / book.maxPages) * 100).toFixed(
      2
    )}%</div></div></td>`;

    tBody.appendChild(newRow);
  });
}

booksAndAuthors();



function addNewBook(event) {
  event.preventDefault();

  let titleValue = document.querySelector("#title").value;
  let authorValue = document.querySelector("#author").value;
  let maxPageValue = document.querySelector("#maxPage").value;
  let onPageValue = document.querySelector("#onPage").value;

  let addBook = {
    title: titleValue,
    author: authorValue,
    maxPages: maxPageValue,
    onPage: onPageValue,
  };

  books.push(addBook);

  data.innerHTML = "";
  status.innerHTML = "";
  tBody.innerHTML = "";

  booksAndAuthors();

  form.reset();
}

button.addEventListener("click", addNewBook);
