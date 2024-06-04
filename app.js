class Book{
    constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}}

class UI{
    constructor(title, author, isbn){
        UI.prototype.addstack = function (book) {
            const booklist = document.querySelector("#book-list");
            // tr element 
            const tr = document.createElement("tr");
            tr.innerHTML = `<th scope="row">${this.title}</th>
            <td>${this.author}</td>
            <td>${this.isbn}</td>
            <td class="delete" style="cursor: pointer;">X</td>`
    
            booklist.appendChild(tr);
        }
        UI.prototype.showAlert = (message, classn) => {
            const div = document.createElement("div");
            div.className = `alert ${classn}`;
            div.innerText = message;
            const insertalert = document.querySelector(".app-alert");
            insertalert.appendChild(div);
    
            setTimeout(() => {
                div.remove();
            }, 2500)
            // console.log(div);
        }
        UI.prototype.clearFields = function () {
            document.querySelector("#title").value = "";
            document.querySelector("#author").value = "";
            document.querySelector("#isbn").value = "";
        }
        UI.prototype.deleteFields = function (e) {
            if (e.className === "delete") {
                e.parentElement.remove();
    
            }
        }
    }
}

// add tasks 
document.getElementById("book-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;
    const book = new Book(title, author, isbn);
    const ui = new UI();
    if (title === "" || author === "" || isbn === "") {
        ui.showAlert("Please, fill all the fields", "alert-danger")
    } else {
        ui.addstack(book);
        ui.showAlert("The book has been stored successfully ", "alert-success");
        ui.clearFields();
    }
})
// delete tasks 
document.querySelector("#book-list").addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.className = "delete") {
        const ui = new UI();
        ui.deleteFields(e.target);
        ui.showAlert("The book has been deleted successfully ", "alert-success");

    }
})