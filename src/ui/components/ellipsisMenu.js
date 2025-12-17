
document.addEventListener('click', e => {
    const trigger = e.target.closest('.menu-trigger');
 
    if (trigger) {
        e.preventDefault();

        // Close any other menu that is appearing on the screen rn which is not a direct sibling of the ellipsis
        document.querySelectorAll('.card-menu-dropdown')
        .forEach(menu => {
            if (menu !== trigger.nextElementSibling) {
                menu.style.display = 'none'
            }
        })

        // Toggle between display flex & display hidden whenever the event fires
        const dropdown = trigger.nextElementSibling; 
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex'; 

    } else {
        // Closes every menu when clicked anywhere on the body 
        document.querySelectorAll('.card-menu-dropdown')
            .forEach(menu => {
            menu.style.display = 'none';
        })
    }
    }
)

