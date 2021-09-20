document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    console.log(isDropdownButton)
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return


    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        console.log(currentDropdown)
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})