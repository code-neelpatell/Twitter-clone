let navLinks = document.querySelectorAll("nav ul .item")
let targetClass = "selected"

// Nav links selected effect
navLinks[0].classList.add("selected")

navLinks.forEach(item => item.addEventListener("click", () => {
    try {
        document.querySelector("nav ul .item.selected").classList.remove(targetClass)
    } catch { }
    item.classList.add(targetClass)
}))


let writePostElement = document.querySelector("#write-post-body");
let enableELements = document.querySelector("#write-post").querySelectorAll(".reply-access, .attechments .right li")
let actionBtn = document.querySelector("#write-post .btn")
let setDisplay = (displayValue) => enableELements.forEach(item => {
    item.style.display = displayValue;
})

// Default/DOM load operations
actionBtn.disabled = true;
setDisplay("none")

writePostElement.addEventListener("input", (e) => {
    // auto resize increase input height
    e.target.style.height = 'auto';
    e.target.style.height = e.target.scrollHeight + 'px';

    if (e.target.value.trim().length > 0)
        actionBtn.disabled = false;
    else
        actionBtn.disabled = true;

}, false);

writePostElement.addEventListener("focusin", () => {
    // show writing post options
    setDisplay("flex")
})

writePostElement.addEventListener("focusout", (e) => {
    // hide writing post options -- if post don't have any content 
    if (!(e.target.value.trim().length > 0))
        setDisplay("none")
})
