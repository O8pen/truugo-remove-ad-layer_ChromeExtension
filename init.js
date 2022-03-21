let book_text = "";
let book_text_array = book_text.split(" ");

let current_word_count = 1;
let total_word_count = book_text_array.length;

const bigflex = document.querySelector(".MOkH4e.BSw7K.iYelWb.yF6Zo");

const wordContainer = document.createElement("div");
wordContainer.className = `wordContainer`;
document.querySelector(".Oim1sf").appendChild(wordContainer);

const buttonContainer = document.createElement("div");
buttonContainer.className = `buttonContainer`;
document.querySelector(".Oim1sf").appendChild(buttonContainer);

bigflex.insertBefore(buttonContainer, bigflex.children[1]);

function fnAddButtons() {
    var word_display = document.createElement("h1");
    word_display.id = "burak_word_display";
    word_display.appendChild(
        document.createTextNode("Phrase Translate Chrome Extension")
    );
    document.querySelector(".wordContainer").appendChild(word_display);

    var prev_btn = document.createElement("input");
    prev_btn.value = "Prev [<]";
    prev_btn.id = "burak_prev-btn";
    prev_btn.type = "submit";
    document.querySelector(".buttonContainer").appendChild(prev_btn);

    var next_btn = document.createElement("input");
    next_btn.value = "Next [>]";
    next_btn.id = "burak_next-btn";
    next_btn.type = "submit";
    document.querySelector(".buttonContainer").appendChild(next_btn);

    var word_count = document.createElement("h1");
    word_count.id = "burak_word_count";
    word_count.appendChild(
        document.createTextNode(
            current_word_count.toString() + "/" + total_word_count.toString()
        )
    );
    document.querySelector(".buttonContainer").appendChild(word_count);

    var txt_area = document.createElement("textarea");
    txt_area.value = "Book text here..";
    txt_area.id = "burak_txt_area";
    document.querySelector(".buttonContainer").appendChild(txt_area);

    var close_btn = document.createElement("input");
    close_btn.value = "Submit";
    close_btn.id = "burak_submit-btn";
    close_btn.type = "submit";
    document.querySelector(".buttonContainer").appendChild(close_btn);
}

function fnNewText() {
    document
        .getElementById("burak_submit-btn")
        .addEventListener("click", function (event) {
            NewTextOnClick(document.getElementById("burak_txt_area").value);
        });
}
function NewTextOnClick(str) {
    book_text = str;
    book_text_array = book_text.split(" ");
    console.log(book_text);
    console.log(book_text_array.length);

    current_word_count = 1;
    total_word_count = book_text_array.length;
    document.getElementById("burak_word_display").innerHTML =
        book_text_array[current_word_count - 1].toString();

    document.getElementById("burak_word_count").innerHTML =
        current_word_count.toString() + "/" + total_word_count.toString();
}

function fnNextButton() {
    document
        .getElementById("burak_next-btn")
        .addEventListener("click", NextButtonOnClick, false);
}
function NextButtonOnClick() {
    if (current_word_count != total_word_count) {
        current_word_count = current_word_count + 1;
        document.getElementById("burak_word_display").innerHTML =
            book_text_array[current_word_count - 1];

        document.getElementById("burak_word_count").innerHTML =
            current_word_count.toString() + "/" + total_word_count.toString();

        document.querySelector(`.er8xn`).innerHTML =
            book_text_array[current_word_count - 1];

        document.querySelector(`.D5aOJc.vJwDU`).innerHTML =
            book_text_array[current_word_count - 1];

        document.querySelector(`.D5aOJc.Hapztf`).innerHTML =
            book_text_array[current_word_count - 1];

        // listen button
        document.querySelector("[jscontroller=xzbRj]").click();

        // document.querySelector(`.D5aOJc.vJwDU`).submit();
    }
}

function fnPrevButton() {
    document
        .getElementById("burak_prev-btn")
        .addEventListener("click", PrevButtonOnClick, false);
}
function PrevButtonOnClick() {
    if (current_word_count != 1) {
        current_word_count = current_word_count - 1;
        document.getElementById("burak_word_display").innerHTML =
            book_text_array[current_word_count - 1];

        document.getElementById("burak_word_count").innerHTML =
            current_word_count.toString() + "/" + total_word_count.toString();

        document.querySelector(`.er8xn`).innerHTML =
            book_text_array[current_word_count - 1];

        document.querySelector(`.D5aOJc.vJwDU`).innerHTML =
            book_text_array[current_word_count - 1];

        document.querySelector(`.D5aOJc.Hapztf`).innerHTML =
            book_text_array[current_word_count - 1];

        // listen button
        document.querySelector("[jscontroller=xzbRj]").click();

        // document.querySelector(`.D5aOJc.vJwDU`).submit();
    }
}

function fnSetMyKeyDownListener() {
    window.addEventListener("keydown", function (event) {
        MyFunction(event.key);
    });
}
function MyFunction(the_Key) {
    if (the_Key == "5") {
        NextButtonOnClick();
    } else if (the_Key == "4") {
        PrevButtonOnClick();
    } else if (the_Key == "0") {
        // alert("0");
        document
            .getElementsByClassName(
                "VfPpkd-Bz112c-LgbsSe VfPpkd-Bz112c-LgbsSe-OWXEXe-e5LLRc-SxQuSe fzRBVc tmJved SSgGrd m0Qfkd"
            )
            .click();
    } else if (the_Key == "1") {
        // alert("1");
        document.getElementsByClassName("D5aOJc vJwDU").innerHTML = "123";
    } else if (the_Key == "2") {
        alert("2");
    } else if (the_Key == "3") {
        alert("3");
    } else if (the_Key == "6") {
        alert("6");
    }
}

fnAddButtons();
fnNewText();
fnNextButton();
fnPrevButton();
fnSetMyKeyDownListener();
