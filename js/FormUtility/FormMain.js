import { FormModel } from './FormModel.js';

document.addEventListener('DOMContentLoaded', () => {
    
    const formModel = new FormModel('form-container');

    formModel.addField('text', { 
        placeholder: 'Enter First name', 
        name: 'textField', 
        id: 'firstname', 
        class: 'size-up strong-text' 
    });

    formModel.addField('text', { 
        placeholder: 'Enter Last name', 
        name: 'textField', 
        id: 'fName',
        class: 'size-up' 
    });
    
    formModel.addField('email', 
        { 
            placeholder: 'Enter Email', 
            name: 'emailField', 
            id: 'emailId',
            class: 'size-up' 
        });
    
    formModel.addField('submit', { 
        value: 'Submit', 
        type: 'submit',
        class: 'form-submit-button'
    });
    formModel.renderForm();
});


