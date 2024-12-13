
var book_arr = [];
class Book {
    constructor(name, _author, _year) {
        this.name = name;
        this.author = _author;
        this.year = _year;
    }

}

var add_book_inputs = document.querySelectorAll('input[name="add_input"]');
var add_book_button = document.getElementById("button-add-book");

add_book_button.addEventListener("click", function () { add_book(add_book_inputs[0].value, add_book_inputs[1].value, add_book_inputs[2].value) });

function add_book(name, author, year) {
    if (name !== "" && author !== "" && year !== "" && !isNaN(year)) {
        const book = new Book(name, author, year);
        book_arr.push(book);
        if (confirm("Adding " + name + " by " + author + " release year " + year + "?")) {
            alert("Added!")
            for (let i = 0; i < 3; i++) {
                document.querySelectorAll('input[name="add_input"]')[i].value = "";
            }
        }


    }
    else if (isNaN(year)) {
        alert("enter a valid year")
    }
    else {
        alert("enter all requirements please")
    }

}

var show_books_button = document.getElementById("button-show-books");
show_books_button.addEventListener("click", function () { show_books(book_arr) });

function show_books(book_array) {
    let text = "all our books: \n"
    book_array.forEach(book => {
        text += book.name + " by " + book.author + "\n";
    });
    alert(text);
}



var searched_author = document.getElementsByClassName("search-author-input");
var search_by_author_button = document.getElementById("search_by_author_button");

search_by_author_button.addEventListener("click", function () {
    show_book_by_author(book_arr, searched_author[0].value)

});



function show_book_by_author(book_array, _author) {
    let found_text = "books by " + _author + ": \n";

    for (let i = 0; i < book_array.length; i++) {
        if (book_array[i].author === _author) {
            found_text += book_array[i].name + "\n";
        }

    }
    alert(found_text);
}