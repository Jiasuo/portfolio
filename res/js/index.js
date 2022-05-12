// Keep track of show-menu state
let showMenu = false;

// get the menu container
const menu = document.getElementById('overlay')
// get the menu icon
const menuIcon = document.getElementById("menu");

// add click listener to the menu icon
menuIcon.addEventListener("click", function(e){
    console.log('Menu icon clicked');
    e.stopPropagation()
    toggleMenu()
});

// click listener to the overlay 
menu.addEventListener("click", function(e){    
    // Only on blank space
    if(e.target !== this) return;
    toggleMenu();
})

// Click listener to the links
for(let i=1; i<=4; i++){
    document.getElementById('menulink' + i).addEventListener('click', toggleMenu)
}

function toggleMenu(){
    showMenu = !showMenu;
    if(showMenu){
        // Change icon to close        
        menuIcon.src="./res/img/close-i40.svg";
    }else{
        menuIcon.src="./res/img/menu-i40.svg";
    }
    // Toggle closed class to the menu container
    menu.classList.toggle('show');
}