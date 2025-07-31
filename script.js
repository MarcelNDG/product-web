let menuBtn = document.getElementById("hmbg");
let mobileBtn = document.getElementById("mobileBtn");

let mobileMenu = document.getElementById("mobileMenu");
let body = document.getElementById("body");

const navBar = document.getElementById("mainNavbar");
const stickyOffset = navBar.offsetTop;

console.log(screenX);

/* let myArray = [1,2,3,4,"five"]

anotherArray = [4,5,"six"]

console.log(myArray, anotherArray);

if (myArray[0] < 4) {
    myArray.push("kek")
    anotherArray.push(6)
    console.log("hola");
    myArray.sort(String)
    console.log(myArray, anotherArray);
} else {
    
}*/

menuBtn.addEventListener("click", function click() {
    console.log("holo");
   // mobileMenu.style.display = "flex"; 
    mobileMenu.classList.add("active") 
})

mobileBtn.addEventListener("click", function click() {
    console.log("holo"); 
   // mobileMenu.style.display = "none"
    mobileMenu.classList.remove("active") 
})

function handleScroll(){
    if(window.pageYOffset > stickyOffset){
        navBar.classList.add("sticky");
    }
    else
    {
        navBar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", handleScroll);