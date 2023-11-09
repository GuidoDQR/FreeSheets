let groupCell = document.getElementById("group-cell");
let groupRow = document.getElementById("group-row");
let contextMenu = document.getElementById("contextMenu");

let char;
for(let i=0; i<26; i++){
    const newDiv = document.createElement("div");
    char = String.fromCharCode(65+i);
    newDiv.className = "cell";
    newDiv.innerText = char;
    groupRow.appendChild(newDiv);
}

for(let i=1; i<10; i++){
    const newRow = document.createElement("div");
    newRow.id = "group-row";
    groupCell.appendChild(newRow);
    const newDiv = document.createElement("div");
    newDiv.className = "row";
    newDiv.innerText = i.toString();
    newRow.appendChild(newDiv);
    for(let j=0; j<26; j++){
        const newDiv = document.createElement("div");
        newDiv.className = "cell";
        newRow.appendChild(newDiv);
    }
}

// groupCell.addEventListener("mouseover", setMenu);
// groupCell.addEventListener("mouseout", exitMenu);



function hideMenu() {
    contextMenu.style.display = "none";
}

let isActiveMenu = false;

groupCell.oncontextmenu = rightClick;
document.onclick = hideMenu;
document.oncontextmenu = normalClick;

contextMenu.oncontextmenu = rightClick;

console.log(document.oncontextmenu);
console.log(groupCell.oncontextmenu);
// document.oncontextmenu = rightClick;
function setMenu(){
    console.log("entre");
}

function exitMenu(){
    console.log("sali");
}

function normalClick(){
    if(!isActiveMenu){
        hideMenu();
        console.log("pase");
    }
}

function rightClick(e){
    console.log("menu");
    e.preventDefault();
    isActiveMenu = true;  
    var menu = contextMenu;
  
    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
    
}