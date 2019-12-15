var global = [];
var count = 1;
var t, l, num;
var num,num2,num3,name;
var idTag;


//value to store the details of each screens
var screen_ip_address1 = '', screen_ip_address2 = '', screen_width1 = 0, screen_width2 = 0, 
    screen_height1 = 0, screen_height2 = 0, screen_diagonal1 = 0,  screen_diagonal2 = 0,
    screen_name1 = '', screen_name2 = '';

//value to store the initial points of each screens
var x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0;


//function onClick()
function onClick() {
    idTag = "mydiv" + count;
    count++;
    var node = document.createElement("LI");
    var child = document.createElement("DIV");
    var textNode = document.createTextNode(idTag);
    child.setAttribute("id", "mydivheader" + idTag);
    node.setAttribute("id", idTag);
    child.appendChild(textNode);
    node.appendChild(child);
    document.getElementById("crop").appendChild(node);


    var numpx = document.getElementById("width").value * 37.79;
    var num2px = document.getElementById("height").value * 37.79;
    var num3px = document.getElementById("diagonal").value * 37.79;
    var name = document.getElementById("nametext").value;

    screen_ip_address = document.getElementById("ip_address").value;
    screen_width = document.getElementById("width").value;
    screen_height = document.getElementById("height").value;
    screen_diagonal = document.getElementById("diagonal").value;
    screen_name = document.getElementById("nametext").value;

    document.getElementById(idTag).style.width = numpx / 10 + "px";
    document.getElementById(idTag).style.height = num2px / 10 + "px";
    document.getElementById(idTag).style.display = "block";
    console.log("tag", document.getElementById(idTag));
    
    global.push(document.getElementById(idTag).style);
    console.log(global);
    dragElement(document.getElementById(idTag));


    if(idTag=="mydiv1"){
        alert(idTag + screen_ip_address + screen_width + screen_height + screen_diagonal + screen_name);
        screen_ip_address1 = screen_ip_address;
        screen_width1 = screen_width;
        screen_height1 = screen_height;
        screen_diagonal1 = screen_diagonal;
        screen_name1 = screen_name;
    }
    if(idTag=="mydiv2"){
        alert(idTag + screen_ip_address + screen_width + screen_height + screen_diagonal + screen_name);
        screen_ip_address2 = screen_ip_address;
        screen_width2 = screen_width;
        screen_height2 = screen_height;
        screen_diagonal2 = screen_diagonal;
        screen_name2 = screen_name;
    }
    /*var tag = document.getElementById(idTag);
    tag.addEventListener('dblclick', function (e) {
        alert("IP_Address: " + screen_ip_address +"\n" + "Screen Name: " + " " + screen_name + "\n" + "Screen Width: " + screen_width + " " + "Centimeter" + "\n" + "Screen Height: " + screen_height + " Centimeter" + 
             "\n" + "Diagonal: " + " " + screen_diagonal + " " + "Centimeter" + "\n");
    });*/
}

//Make the DIV element draggagle:
dragElement(document.getElementById(idTag));

function dragElement(elmnt) {
    //var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header" + idTag)) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(elmnt.id + "header" + idTag).onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
        
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        //pos3 = e.clientX;
        //pos4 = e.clientY;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

        t = (((elmnt.offsetTop - pos2 - 138) * 2160) / 450);
        l = (((elmnt.offsetLeft - pos1 - 271) * 3840) / 800);
        name = document.getElementById("nametext").value;
        //document.getElementById("mydivheader" + elmnt.id).innerHTML = "x: " + t + " \n" + "y: " + l + " \n ";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
        if(elmnt.id == "mydiv1"){
            x1 = l;
            y1 = t;
            alert(elmnt.id + "\n" + "X: " + l + "\n" + "Y: " + t + "\n" + "Screen Name: "  + screen_name1  + "\n" + "Ip_Address " + screen_ip_address1 +
            "\n" + "Width: " + screen_width1 + "\n" + "Height: " + screen_height1 + "\n" + "Diagonal: " + screen_diagonal1);
        }
        else if(elmnt.id == "mydiv2"){
            x2 = l;
            y2 = t;
            alert(elmnt.id + "\n" + "X: " + l + "\n" + "Y: " + t  + "\n" + "Screen Name: "  + screen_name2  + "\n" + "Ip_Address " + screen_ip_address2 +
            "\n" + "Width: " + screen_width2 + "\n" + "Height: " + screen_height2 + "\n" + "Diagonal: " + screen_diagonal2);
        }
    }
}
/*function printScreenDetail(){
    console.log("HEllo");
}
module.exports.print = printScreenDetail();*/