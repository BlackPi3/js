let books = [];

function addBook() {
    const bookName = document.getElementById("bookName").value;
    const authorName = document.getElementById("authorName").value;
    const bookDescription = document.getElementById("bookDescription").value;
    const pagesNumber = parseInt(document.getElementById("pagesNumber").value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            bookName: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber,
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        window.alert("incorrect inputs");
    }
}

function showBooks() {
    const bookDiv = books.map((book, index) =>
        `<h1>book ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.bookName}</p>
        <p><strong>Book Author: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>Number of pages: </strong>${book.pagesNumber}</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>`
    );
    document.getElementById("books").innerHTML = bookDiv.join("");
}

function editBook(index) {
    const book = books[index];
    document.getElementById("bookName").value = book.bookName;
    // alert(book.authoName)
    document.getElementById("authorName").value = book.authorName;
    document.getElementById("bookDescription").value = book.bookDescription;
    document.getElementById("pagesNumber").value = book.pagesNumber.toString();
    
    books.splice(index, 1);
    showBooks();
}

function deleteBook(index) {
    books.splice(index, 1);
    showBooks();
}

function clearInputs() {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("bookDescription").value = "";
    document.getElementById("pagesNumber").value = "";
}