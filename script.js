function allowDrop(event) {
    event.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //event.target.textContent = data;
    ev.target.appendChild(document.getElementById(data));
}

var toDoListElement = document.querySelector("#toDo ul");
var inputToDo = document.querySelector("#toDo input");
var buttonToDo = document.querySelector("#toDo button");

var doingListElement = document.querySelector("#doing ul");
var inputDoing = document.querySelector("#doing input");
var buttonDoing = document.querySelector("#doing button");

var doneListElement = document.querySelector("#done ul");
var inputDone = document.querySelector("#done input");
var buttonDone = document.querySelector("#done button");

var toDos = ["Aprender Framework", "Fazer café", "Iniciar Projeto"];
var doings = ["Aprendendo HTML", "Aprendendo CSS", "Aprendendo JavaScript", "Pesquisando Sobre Bootstrap"];
var dones = ["Projeto Trello", "Pegar prova de LFC", "Prova de Cálculo", "Prova de Física", "Planejar próximo projeto"];

/*function renderToDos() {
    toDoListElement.innerHTML = "";
    for(item of toDos) {
        var div = document.createElement("div");
        div.setAttribute("class", "tarefas");
        div.setAttribute("draggable", "true");
        div.setAttribute("id", "itens")
        div.setAttribute("ondragstart", "drag(event)")
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));

        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("class", "link");
        link.setAttribute("onclick", `removeToDo(${toDos.indexOf(item)})`);
        link.appendChild(document.createTextNode("X"));

        div.appendChild(li);
        div.appendChild(link)
        toDoListElement.appendChild(div);

    }
}

function renderBloco(lista, local) {
    toDoListElement.innerHTML = "";
    for(item of lista) {
        var div = document.createElement("div");
        div.setAttribute("class", "tarefas");
        div.setAttribute("draggable", "true");
        div.setAttribute("id", "itens")
        div.setAttribute("ondragstart", "drag(event)")
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));

        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("class", "link");
        link.setAttribute("onclick", `removeToDo(${toDos.indexOf(item)})`);
        link.appendChild(document.createTextNode("X"));

        div.appendChild(li);
        div.appendChild(link)
        local.appendChild(div);

    }
}

renderToDos();

function renderDoings() {
    doingListElement.innerHTML="";
    for(item of doings) {
        var div = document.createElement("div");
        div.setAttribute("class", "tarefas");
        div.setAttribute("draggable", "true");
        div.setAttribute("id", "itens")
        div.setAttribute("ondragstart", "drag(event)")

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));

        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("class", "link");
        link.setAttribute("draggable", "true");
        link.setAttribute("onclick", `removeDoing(${doings.indexOf(item)})`);
        link.appendChild(document.createTextNode("X"));

        div.appendChild(li);
        div.appendChild(link)
        doingListElement.appendChild(div);
    }
}

renderDoings();

function renderDones() {
    doneListElement.innerHTML="";
    for(item of dones) {
        var div = document.createElement("div");
        div.setAttribute("class", "tarefas");
        div.setAttribute("draggable", "true");
        div.setAttribute("id", "itens")
        div.setAttribute("ondragstart", "drag(event)")

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));

        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("class", "link");
        link.setAttribute("onclick", `removeDone(${dones.indexOf(item)})`);
        link.appendChild(document.createTextNode("X"));

        div.appendChild(li);
        div.appendChild(link)
        doneListElement.appendChild(div);
    }
}

renderDones();

function addToDo() {
    var toDoText = inputToDo.value;
    toDos.push(toDoText);
    inputToDo.value ="";

    renderToDos();
}

function removeToDo(pos) {
    toDos.splice(pos,1);

    renderToDos();
}

function addDoing() {
    var doingText = inputDoing.value;
    doings.push(doingText);
    inputDoing.value ="";

    renderDoings();
}

function removeDoing(pos) {
    doings.splice(pos,1);

    renderDoings();
}

function addDone() {
    var doneText = inputDone.value;
    dones.push(doneText);
    inputDone.value ="";

    renderDones();
}

function removeDone(pos) {
    dones.splice(pos,1);

    renderDones();
}

*/

function renderToDos(lista,local) {
    local.innerHTML = "";
    for(item of lista) {
        var div = document.createElement("div");
        div.setAttribute("class", "tarefas");
        div.setAttribute("draggable", "true");
        div.setAttribute("id", "itens")
        div.setAttribute("ondragstart", "drag(event)")
        
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(item));

        var link = document.createElement("a");
        link.setAttribute("href", "#");
        link.setAttribute("class", "link");
        link.setAttribute("onclick", `remove(${lista}, ${local}, ${lista.indexOf(item)})`);
        link.appendChild(document.createTextNode("X"));

        div.appendChild(li);
        div.appendChild(link)
        local.appendChild(div);

    }
}

function remove(lista,local,pos) {
    lista.splice(pos,1);
    
    renderToDos(lista,local)
}

renderToDos(toDos, toDoListElement);
renderToDos(doings, doingListElement);
renderToDos(dones, doneListElement);