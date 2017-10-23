var $list, $myNodelist;


function main() {
    prepareDOMElements();
    addDOMEventListeners();
    countdown();

    // dodawania nowego elementu 

    var add = document.getElementById('addBtn');
    add.onclick = function (event) {
        var inputText = document.getElementById('myInput').value;

        //to jest tworzenie nowego elementu li
        var node = document.createElement("li");
        var textnode = document.createTextNode(inputText);
        node.appendChild(textnode);

        // to jest tworzenie nowego buttona
        var buttonNode = document.createElement("button");
        var textnode1 = document.createTextNode("DELETE");
        buttonNode.appendChild(textnode1);
        node.appendChild(buttonNode);

        // dodawanie dziecka ( li ) do listy ( ul )
        var dodawanie = document.getElementById('myList');
        dodawanie.appendChild(node);

    };
}

function wypisz() {
    console.log('2');
}

//function deleteTask() {
//    console.log('1');
//    var close = document.getElementById('myList');
//    console.log(close);
//    close.onclick = function (event) {
//        
//        console.log(event); //toDo - sprawić żeby usunięty element się usunął 
//    };
//}
//;

//deleteTask(); //wywołanie funkcji//

function checkTask() {
    var check = document.getElementById('myList');
    check.onclick = function (event) {
        console.log(event.target.tagName);
        if (event.target.tagName === 'LI') {
            console.log(event);
            event.target.classList.toggle('checked');
        }
        else if (event.target.className === 'delete') {
            var parentElement = event.target.parentElement;
            parentElement.style.display = 'none';
        }
    };
}
checkTask();



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
    $myNodelist = document.getElementsByTagName("li");
    $list = document.querySelector('ul');
    console.log($myNodelist);
}

function addDOMEventListeners() {
    $list.addEventListener('click', listClickHandler, false);
}

function listClickHandler(event) {
    if (event.target.tagName === 'li') {
        event.target.classList.toggle('checked');
    } else if (event.target.className === 'close') {
        var parentElement = event.target.parentElement;
        parentElement.style.display = 'none';
    }
}
;

$(document).ready(main);