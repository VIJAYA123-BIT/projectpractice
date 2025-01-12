import { LightningElement , wire } from 'lwc';
import { MessageContext, subscribe } from 'lightning/messageService';
import lmsPubSubSecond from '@salesforce/messageChannel/lmsPubSubSecond__c';

export default class Createlmspubsubdummy extends LightningElement {
     userName=''
        subscription = null 
        @wire(MessageContext) messageContext;
        
    connectedCallback(){
            console.log('the pub sub starts');
            this.subscription = subscribe(this.messageContext,lmsPubSubSecond,(message) => this.userNameHandler(message));
        }
        userNameHandler(message){
            this.userName = message.userName;
            console.log('the username is '+ this.userName);
        }
}