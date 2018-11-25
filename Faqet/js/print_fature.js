function printElement() {
    var elem=document.getElementById("printThis")
    var domClone = elem.cloneNode(true);
    
    var $printSection = document.getElementById("myFature");
    
    if (!$printSection) {
        var $printSection = document.createElement("div");
        $printSection.id = "myFature";
        document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = "";
    $printSection.appendChild(domClone);
    window.print();
}