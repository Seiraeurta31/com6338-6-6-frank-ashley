
//INSTRUCTIONS: 
// 1. When the `button.hamburger-btn` element is clicked on smaller screens, the hamburger menu should open/close. Again, toggling the `show-menu` class on the `.hamburger-menu` element should show/hide the menu.
// 2. Clicking outside of `.hamburger-menu` should close the menu if it is open.
// 3. Clicking inside of `.hamburger-menu` should NOT close the menu.
// 4. Pressing the Escape key when the menu is open should close the menu and focus `button.hamburger-btn`.
// 5. Under all circumstances, when the menu is open, `aria-expanded` should be set to `true` on `button.hamburger-btn`, and set to `false` when the menu is closed.



var hamBtn = document.querySelector(".hamburger-btn")
var hamMenu = document.querySelector(".hamburger-menu")

//user mouse click event listner
hamBtn.addEventListener("click", toggleHamMenu)


//checks if hamburger menu is open or closed, does opposite
function toggleHamMenu(){
    if(hamMenu.classList.contains("show-menu")){
        closeHamMenu()
    }
    else{
        openHamMenu()
    }
}

//close Hamburger Menu
function closeHamMenu(){
    hamMenu.classList.remove("show-menu")
    hamBtn.setAttribute('aria-expanded', false)
}

//open Hamburger Menu
function openHamMenu(){
    hamMenu.classList.add("show-menu")
    hamBtn.setAttribute('aria-expanded', true)
}


//checks if user clicked Escape key
document.onkeyup = function(e){
    if(e.key === 'Escape'){
        closeHamMenu()
        hamBtn.focus()
    }
}

//checks if user clicked inside/outside of Hamburger menu
document.body.onclick = function(e){
    if(hamMenu.contains(e.target) || e.target === hamBtn){
        //if user clicks inside menu (or) 
        //clicks button (which should be handled by toggleHamMenu function)
        return
    }
    //user clicked outside of hamburger menu to close
    closeHamMenu()
}
