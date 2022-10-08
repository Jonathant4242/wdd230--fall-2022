// button on/off
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


// save for later.
//     document.getElementById("primaryNav").classList.toggle("open");
// }
// const x = document.getElementById("hamburgerBtn");
// x.onclick = toggleMenu();