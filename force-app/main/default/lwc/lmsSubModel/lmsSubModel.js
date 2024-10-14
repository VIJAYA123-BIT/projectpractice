import { LightningElement, wire } from 'lwc';
import { MessageContext,subscribe,unsubscribe } from 'lightning/messageService';
import lmsPubSub from '@salesforce/messageChannel/lmsPubSub__c';

export default class LmsSubModel extends LightningElement {
    name='Kane';
    subscription=null;
    @wire(MessageContext) messageContext;
    connectedCallback(){
        this.handleSubscribe();
    }
    disconnectedCallback(){
        this.handleUnSubscribe();
    }
    handleSubscribe(){
        if(!this.subscription){
            this.subscription= subscribe(this.messageContext , lmsPubSub,(parameter) =>{
                this.name += ' '+ parameter.name;
            } );
        }
    }
    handleUnSubscribe(){
        unsubscribe(this.subscription);
        this.subscription=null;
    }

}