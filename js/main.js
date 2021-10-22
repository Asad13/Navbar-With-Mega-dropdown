/* ----- Hiding dropdowns when clicked on anywhere on the page  START ----- */

window.addEventListener('click', (event) => {
    if (!(event.target.matches(".dropdown") || event.target.matches(".nav-btn") || event.target.matches(".nav-btn-label") || event.target.matches(".nav-btn-arrow"))) {
        var navBtns = document.querySelectorAll(".nav-btn");
        var dropdowns = document.querySelectorAll(".dropdown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            navBtns[i].checked = false;
            dropdowns[i].style.display = "none";
        }
    }

    /* 
        Rest of the code with closeDropdown() is not required if there is only single dropdown in
         the navigation bar.
    */

    if (event.target.matches('.nav-btn')) {
        if (event.target.checked) {
            if (event.target.matches("#megaBtn")) {
                event.target.nextElementSibling.nextElementSibling.style.display = "flex";
            } else {
                event.target.nextElementSibling.nextElementSibling.style.display = "block";
            }
        } else {
            closeDropdown(event.target.nextElementSibling.nextElementSibling);
            event.target.nextElementSibling.nextElementSibling.style.display = "none";
        }
    } else if (event.target.matches('.nav-btn-label')) {
        if (event.target.previousElementSibling.checked) {
            if (event.target.previousElementSibling.matches("#megaBtn")) {
                event.target.nextElementSibling.style.display = "flex";
            } else {
                event.target.nextElementSibling.style.display = "block";
            }
        } else {
            closeDropdown(event.target.nextElementSibling);
            event.target.nextElementSibling.style.display = "none";
        }
    }

    if (event.target.matches('.nav-btn') || event.target.matches('.nav-btn-label') || event.target.matches('.nav-btn-arrow')) {
        var siblings = event.target.parentElement.parentElement.children;
        var current = event.target.parentElement;
        var i = 0;
        for (i = 0; i < siblings.length; i++) {
            if (!current.isEqualNode(siblings[i])) {
                var elements = siblings[i].children;
                if (elements[1]) {
                    if (elements[1].matches('.nav-btn-label')) {
                        elements[0].checked = false;
                        elements[2].style.display = 'none';
                    }
                }
            }
        }

    }
});

function closeDropdown(container) {
    var elements = container.children;
    var i = 0;
    for (i = 0; i < elements.length; i++) {
        if (elements[i].matches('.dropdown-container')) {
            var children = elements[i].children;
            children[0].checked = false;
            closeDropdown(children[2]);
            children[2].style.display = "none";
        }
    }
}

/* ----- Hiding dropdowns when clicked on anywhere on the page  END ----- */