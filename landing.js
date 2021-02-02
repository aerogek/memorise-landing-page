const links = document.getElementsByTagName("a");

for(i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
        event.preventDefault();
    })
}

function getCoords(elem) {
    const box = elem.getBoundingClientRect();
    return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
    };
};

const inst = document.getElementById("inst_now");
inst.addEventListener("click", () =>{
    let chrome = document.getElementById("install");
    let chrome_coords = getCoords(chrome);
    scrollTo(chrome_coords);
});