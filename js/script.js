

function main() {
    countdown();
    tasks();
    createTask();
}
// dodawania nowego elementu 

function createTask() {
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
        buttonNode.className += "delete";
        buttonNode.appendChild(textnode1);
        node.appendChild(buttonNode);

        // dodawanie dziecka ( li ) do listy ( ul )
        var dodawanie = document.getElementById('myList');
        dodawanie.appendChild(node);

    };
}



function tasks() {
    var check = document.getElementById('myList');
    check.onclick = function (event) {
        console.log(event.target.tagName);
        if (event.target.tagName === 'LI') {
            console.log(event);
            event.target.classList.toggle('checked');
        } else if (event.target.className === 'delete') {
            var parentElement = event.target.parentElement;
            parentElement.style.display = 'none';
        }
    };
}

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

$(document).ready(main);