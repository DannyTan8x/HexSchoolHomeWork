let profileMenu = document.getElementById("profileMenu");
function toggleMenu(){
    profileMenu.classList.toggle("open-menu")
}


let sidebarActivity = document.getElementById("sidebarActivity");
let morelink = document.getElementById("ShowMoreLink");

morelink.onclick = () => {
    sidebarActivity.classList.toggle("open-activity");

    if(sidebarActivity.classList.contains("open-activity")){
        morelink.innerHTML = "Show less <b> - </b>";
    } else{
        morelink.innerHTML = "Show more <b> + </b>";
        
    }
}