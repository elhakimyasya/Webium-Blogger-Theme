import Dropdown from "./components/dropdown";


function initDropdown() {
    document.querySelectorAll('[data-dropdown-toggle]').forEach(triggerEl => {
        const targetEl = document.getElementById(triggerEl.getAttribute('data-dropdown-toggle'))
        const placement = triggerEl.getAttribute('data-dropdown-placement')

        new Dropdown(targetEl, triggerEl, {
            placement: placement
        })
    })
}

if (document.readyState !== 'loading') {
    // DOMContentLoaded event were already fired. Perform explicit initialization now
    initDropdown()
} else {
    // DOMContentLoaded event not yet fired, attach initialization process to it
    document.addEventListener('DOMContentLoaded', initDropdown)
}