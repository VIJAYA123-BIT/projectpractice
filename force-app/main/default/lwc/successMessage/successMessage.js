import { LightningElement , wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { MessageContext, subscribe } from 'lightning/messageService';
//import lmsPubSub from '@salesforce/messageChannel/lmsPubSub__c';
export default class SuccessMessage extends LightningElement {
    username=''
    subscription = null 
    @wire(MessageContext) messageContext;
    // connectedCallback(){
    //     console.log('the pub sub starts');
    // }
    // userNameHandler(message){
    //     this.username = message.userName;
    //     console.log('the username123444 is '+ this.username)

    // }
    showToastHandler(){
        console.log('success starts....');
        const event = new ShowToastEvent({
            title:'Toast Notification Success',
            variant:'success',
            message:'Data utilized',
            mode:'dismissable'
        });
        console.log('success starts....');
        console.log('success ends...'+event.variant);

        this.dispatchEvent(event);
       // this.subscription = subscribe(this.messageContext,lmsPubSub,(message) => this.userNameHandler(message));

    }
}