// Open sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

// Close sidebar
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

// List
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    };
}
// Add a "checked" symbol when clicking on a list item
var tick = document.querySelector("#myUL");
tick.addEventListener(
    "click",
    function (ev) {
        if (ev.target.tagName === "LI") {
            ev.target.classList.toggle("checked");
        }
    },
    false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var emriP = document.getElementById("productName").value;
    var t = document.createTextNode(emriP);
    var em = document.createElement("p");
    em.classList.add('the_emri');
    em.appendChild(t);
    var sasiaP = document.getElementById("productQuantity").value;
    var u = document.createTextNode(sasiaP);
    var a = document.createElement("input");
    a.setAttribute("type", "number");
  /*  a.setAttribute('readonly', false); */
    a.classList.add('the_sasia');
    a.value = sasiaP;
    li.appendChild(em);
    li.appendChild(a);
    
    var total = document.createElement("input");
    total.setAttribute("type", "number");
    total.setAttribute('readonly', false);
    total.classList.add('the_total');
    total.value=450;

    
    li.appendChild(total);

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        };
    }
}

// Hide modal when 'Go' button pressed
function buttonClose() {
    document.getElementById("id01").style.display = "none";
}

// Press enter to save note
var input = document.getElementById("id01");
input.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
        document.getElementById("inputValue").value = "";
    }
});

// Search filter
function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Click to hide panel
function hidePanel() {
    var x = document.getElementById("yellowPanel");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// Drag and drop list items
dragula([document.getElementById("myUL")]);

dragula([document.getElementById("myUL")], {
    removeOnSpill: true
});
