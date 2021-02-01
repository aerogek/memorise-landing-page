const links = document.getElementsByTagName("a");

for(i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
        event.preventDefault();
    })
}