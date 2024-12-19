// Enable nested dropdown functionality
document.querySelectorAll('.dropdown-submenu > a').forEach(function (submenuLink) {
    submenuLink.addEventListener('click', function (e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;

        // Toggle the submenu visibility
        if (submenu) {
            submenu.classList.toggle('show');
        }

        // Close other open submenus
        document.querySelectorAll('.dropdown-submenu .dropdown-menu').forEach(function (otherSubmenu) {
            if (otherSubmenu !== submenu) {
                otherSubmenu.classList.remove('show');
            }
        });
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', function (e) {
    // Check if the click was outside any dropdown
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
            menu.classList.remove('show');
        });
    }
});

// Prevent submenu from closing when clicking on an item inside a nested submenu
document.querySelectorAll('.dropdown-menu .dropdown-item').forEach(function (menuItem) {
    menuItem.addEventListener('click', function (e) {
        // This ensures clicking on the item inside the submenu doesn't close the menu
        e.stopPropagation();
    });
});
