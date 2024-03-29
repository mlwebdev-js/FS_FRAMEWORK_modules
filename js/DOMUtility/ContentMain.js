// js/DOMUtility/MainContent.js
import Utility from './Utility.js';
import PageManager from './PageManager.js';
import Controller from './Controller.js';
// import Validation from './Validation.js';



export default class MainContent {
    constructor() {
        this.utility = new Utility();
        this.controller = new Controller(this.utility);
        this.pageManager = new PageManager(this.controller);
    }

    initializeApp() {
        this.setupDynamicContent();
        // Any other initialization logic...
    }

    setupDynamicContent() {
    // Define the elements to create
    // Example of dynamically creating layout
    const elementData = [
        {
            tagName: 'div',
            content: `Dynamic Element 1 with id: ${'dynamic1'}`, // Updated content`,
            attributes: { 
                id: 'dynamic1', 
                class: 'dynamic-class'
            }
        },
        {
            tagName: 'div',
            content: 'Dynamic Element 2',
            attributes: { 
                id: 'dynamic2', 
                class: 'dynamic-class'   
            }
        }
    ];

    // Use PageManager to create and append the elements
    this.pageManager.createDynamicLayout(elementData);
    }
}

// Usage of MainContent
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = new MainContent();
    mainContent.initializeApp();
});