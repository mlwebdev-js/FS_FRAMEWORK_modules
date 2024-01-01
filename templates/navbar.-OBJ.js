// js/navbar-OBJ.js
import Utility from '../js/DOMUtility/Utility.js';
import PageManager from '../js/DOMUtility/PageManager.js';
import Controller from '../js/DOMUtility/Controller.js';
// import FormModel from '../js/FormUtility/FormModel.js';  // Corrected import

export default class NavBar {
    constructor() {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);  // Assuming Controller needs Utility
        this.pageManager = new PageManager(this.controller);
        // this.formModel = new FormModel('nav-ul');  // Assuming FormModel needs a container ID

        this.navData = [ // Moved navData inside constructor
            {
                tagName: 'li',
                content: 'Contact',
                attributes: { 
                    id: 'contact-link', 
                    class: 'nav-item'
                }
            },
            {
                tagName: 'li',
                content: 'About',
                attributes: { 
                    id: 'about-link', 
                    class: 'nav-item'
                }
            }
        ];
    }

    initializeNavBar() {
        this.pageManager.createDynamicLayout(this.navData);
        this.utility.setAttributes(this.utility.fs('#nav-bar'), { id: 'nav-bar', class: 'nav-bar' });
        // this.formModel.renderForm(); // Assuming FormModel has a renderForm method
    }
}

// Usage of NavBar
document.addEventListener('DOMContentLoaded', () => {
    const navBar = new NavBar();
    navBar.initializeNavBar();
});
