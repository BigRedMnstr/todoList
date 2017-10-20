var $list, $myNodelist;



function main() {
    prepareDOMElements();
    addDOMEventListeners();
    countdown();
}

function wypisz() {
    console.log('2');
}

function deleteTask() {
    console.log('1');
    var close = document.getElementById('delete');
    close.onClick = function () {
        console.log('3');
    };
};

deleteTask(); //wywołanie funkcji//

function countdown() {
    var today = new Date();

    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var hour = today.getHours();
    if (hour < 10)
        hour = "0" + hour;

    var minute = today.getMinutes();
    if (minute < 10)
        minute = "0" + minute;

    var second = today.getSeconds();
    if (second < 10)
        second = "0" + second;

    document.getElementById("clock").innerHTML =
            day + "/" + month + "/" + year + " | " + hour + ":" + minute + ":" + second;

    setTimeout("countdown()", 1000);
}

function prepareDOMElements() {
    $myNodelist = document.getElementsByTagName("LI");
    $list = document.querySelector('ul');
}

function addDOMEventListeners() {
    $list.addEventListener('click', listClickHandler, false);
}

function listClickHandler(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
    } else if (event.target.className === 'close') {
        var parentElement = event.target.parentElement;
        parentElement.style.display = 'none';
    }
}
;