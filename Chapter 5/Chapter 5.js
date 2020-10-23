var item1;
var item2;
var item3;

document.getElementById("changeList").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new Second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
}

function updateList() {
    document.getElementById("firstthing").innerHTML = item1;
    document.getElementById("Secondthing").innerHTML = item2;
    document.getElementById("thirdthing").innerHTML = item3;
}