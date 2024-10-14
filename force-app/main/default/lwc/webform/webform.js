import { LightningElement ,track , api} from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";

import pageUrl from '@salesforce/resourceUrl/recaptchanew';
import webformrecaptchaSchoolrecord from '@salesforce/apex/webformrecaptcha.webformrecaptchaSchoolrecord';
export default class Webform extends LightningElement {
    @track Enteredname='';
    @track Enteredemail ='';
    @track Enteredphone ='';
    InputHandler(event){
             const { name, value } = event.target
            // this[name] = value;
            if (name === 'userName') {
                this.Enteredname = value;
            } else if (name === 'userEmail') {
                this.Enteredemail = value;
            } else if (name === 'userNumber') {
                this.Enteredphone = value;
            }
    }
    @track navigateTo =pageUrl; // Update with the correct path to your static resource

    // connectedCallback() {
    //     window.addEventListener("message", this.listenForMessage.bind(this));
    // }

    // disconnectedCallback() {
    //     window.removeEventListener("message", this.listenForMessage.bind(this));
    // }

    captchaLoaded(event) {
        
        // console.log('the data is loading');
        // if (event.target.getAttribute('src') === this.navigateTo) {
        //     console.log('Google reCAPTCHA is loaded.');
        // } else {
        //     console.log('the page URL is not matched.');
        // }
    }

    // listenForMessage(message) {
    //     console.log('looking good');
    //     console.log('message data : ' + message.data);
    //     console.log('message origin : ' + message.origin);
    //     if (message.origin === window.location.origin) {
    //         if (message.data === "captcha success") {
    //             console.log('Captcha succeeded');
    //             // Handle captcha success
    //         } else if (message.data === "captcha failed") {
    //             console.log('Captcha failed');
    //             // Handle captcha failure
    //         }
    //     }
    // }
    signUpHandler(){
        console.log('the name is '+this.Enteredname ,' the phone is ', this.Enteredphone)
        webformrecaptchaSchoolrecord({ schoolName: this.Enteredname, Email:this.Enteredemail, Phone:this.Enteredphone})
        .then(result => {
            const event = new ShowToastEvent({
                variant: 'success',
                message: 'Record saved  Successfully', 
            });
            this.dispatchEvent(event);
            // Handle successful save
            console.log('Hey the record get saved', JSON.stringify(result));
            this.Enteredname ='';
            this.Enteredemail='';
            this.Enteredphone='';
          })
        .catch(error => {
            // Handle error
            // console.log('See actual record', JSON.stringify(result));
            console.log('Hey the record not get saved' +error);
            const event = new ShowToastEvent({
                title: 'Error',
                variant: 'error',
                message: error.body.message,
            });
            this.dispatchEvent(event);
        });

    }
}
    
        