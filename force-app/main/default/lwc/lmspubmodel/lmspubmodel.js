import { LightningElement ,wire} from 'lwc';
import { MessageContext ,publish } from 'lightning/messageService';
import lmsPubSub from '@salesforce/messageChannel/lmsPubSub__c'
export default class Lmspubmodel extends LightningElement {
    
name='';
@wire (MessageContext) messageContext
    handleChange(event){
        this.name =event.target.value;
    }
    handleClick(event){
        let payload = {name: this.name};
        publish(this.messageContext ,lmsPubSub, payload);
    }
}