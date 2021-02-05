const links = document.getElementsByTagName("a");

for(i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
        event.preventDefault();
    })
}

const install_sec = document.getElementById("install");
const button = document.getElementById("inst_now");

let button_rect = button.getBoundingClientRect();
let install_sec_rect = install_sec.getBoundingClientRect();

let scroll_y = button_rect.y;

function handleScroll(){
    if (scroll_y < (install_sec_rect.bottom + 400)){
       window.scrollTo(0,scroll_y);
       scroll_y += 30;
    } else {
       console.log("end of scroll")
    }
};

button.addEventListener('click', function(){
    scroll_y = button_rect.y;
    let timerID = setInterval(handleScroll, 10);
    setTimeout(() => clearInterval(timerID), 5000)
});