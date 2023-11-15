let groupCell = document.getElementById("group-cell");
let groupRow = document.getElementsByClassName("group-row");
let contextMenu = document.getElementById("contextMenu");
let input = document.getElementById("textInput");
let cell;

createGrid();

function createGrid(){
    let char;
    for(let i=0; i<26; i++){
        const newDiv = document.createElement("div");
        char = String.fromCharCode(65+i);
        newDiv.className = "cell";
        newDiv.innerText = char;
        groupRow[0].appendChild(newDiv);
    }
    
    for(let i=1; i<10; i++){
        
        //atributes
        const idAttribute = document.createAttribute("id");

        const forAttribute = document.createAttribute("for");
        forAttribute.value = "textInput";
        const rowAttribute = document.createAttribute("row");
        rowAttribute.value = i;
    
        const columnAttribute = document.createAttribute("col");
    
        const newGroupRow = document.createElement("div");
        newGroupRow.className = "group-row";
        groupCell.appendChild(newGroupRow);
    
        const newDiv = document.createElement("div");
        newDiv.className = "row";
        newDiv.setAttributeNode(rowAttribute);
        newDiv.innerText = i.toString();
        newGroupRow.appendChild(newDiv);
    
        for(let j=0; j<26; j++){
            
            const newDiv = document.createElement("div");
            newDiv.className = "cell";
            idAttribute.value = i + String.fromCharCode(65+j);
            columnAttribute.value = String.fromCharCode(65+j);
            newDiv.setAttributeNode(idAttribute.cloneNode());
            newDiv.setAttributeNode(rowAttribute.cloneNode());
            newDiv.setAttributeNode(columnAttribute.cloneNode());
            newDiv.setAttributeNode(forAttribute.cloneNode());
            newGroupRow.appendChild(newDiv);
        }
    }
    
    cell = document.getElementById("1A");
    // input.id = cell.id;
    console.log(cell.textContent);
}

// groupCell.addEventListener("mouseover", setMenu);
// groupCell.addEventListener("mouseout", exitMenu);
groupCell.addEventListener("click", getElementByClick);
document.addEventListener("keyup", write);

function write(){
    console.log("pase");
    cell.textContent = input.value;
}

function getElementByClick(e){
    cell = e.target || e.srcElement;  
    console.log(cell);
    let cellClicked = document.createElement("span");
    cell.appendChild(cellClicked);
    // cell.textContent = "hola";
    input.value = cell.textContent;
    // console.log(cell.textContent);
    console.log(input.textContent);
}

function clickCell(){
    console.log("click");
}

function hideMenu() {
    contextMenu.style.display = "none";
}

let isActiveMenu = false;

groupCell.oncontextmenu = rightClick;
document.onclick = hideMenu;
document.oncontextmenu = normalClick;

contextMenu.oncontextmenu = rightClick;

// console.log(document.oncontextmenu);
// console.log(groupCell.oncontextmenu);

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